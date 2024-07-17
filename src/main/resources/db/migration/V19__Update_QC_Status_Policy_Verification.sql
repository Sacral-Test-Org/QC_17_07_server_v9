-- src/main/resources/db/migration/V19__Update_QC_Status_Policy_Verification.sql

-- Purpose: Create a new SQL migration file to update the QC status in the specified tables based on the policy verification process.

-- Check if the policy number exists in the QC status detail records.
DECLARE
    cnt NUMBER;
    de1 VARCHAR2(50);
    de2 VARCHAR2(50);
    bbu VARCHAR2(50);
    app_no VARCHAR2(50);
    rcpt_no VARCHAR2(50);
    err VARCHAR2(50);
    con_id VARCHAR2(50);
    flg6 VARCHAR2(50);
    flg7 VARCHAR2(50);
    flg8 VARCHAR2(50);
    flg9 VARCHAR2(50);
    flg10 VARCHAR2(50);
    flg11 VARCHAR2(50);
BEGIN
    SELECT COUNT(*)
    INTO cnt
    FROM azbj_phub_qc_status_detail
    WHERE policy_no = :control.pol_ref;

    IF cnt = 0 THEN
        -- Retrieve user and application details associated with the policy.
        SELECT verification_user,
               data_entry_user,
               proposal_modif_user,
               application_no,
               perm_receipt_no
        INTO de1,
             de2,
             bbu,
             app_no,
             rcpt_no
        FROM azbj_phub_tracker
        WHERE proposal_no = :control.pol_ref;

        -- Insert a new QC detail record for each nominee associated with the policy.
        FOR nominee IN (SELECT * FROM azbj_nominee WHERE policy_no = :control.pol_ref) LOOP
            INSERT INTO azbj_phub_qc_detail (policy_no,
                                             contract_id,
                                             desc_type,
                                             opus_value,
                                             correct_flg,
                                             ins_user,
                                             ins_date,
                                             flg,
                                             err_status,
                                             flg1,
                                             flg2,
                                             flg3,
                                             flg4,
                                             flg5,
                                             flg6)
            VALUES (:control.pol_ref,
                    con_id,
                    nominee.desc_type,
                    nominee.opus_value,
                    nominee.correct_flg,
                    USER,
                    SYSDATE,
                    nominee.flg,
                    err,
                    flg6,
                    flg7,
                    flg8,
                    flg9,
                    flg10,
                    flg11);
        END LOOP;

        -- Insert a new QC detail record for each QC item associated with the policy.
        FOR qc_item IN (SELECT * FROM azbj_qc_item WHERE policy_no = :control.pol_ref) LOOP
            INSERT INTO azbj_phub_qc_detail (policy_no,
                                             contract_id,
                                             desc_type,
                                             opus_value,
                                             correct_flg,
                                             ins_user,
                                             ins_date,
                                             flg,
                                             err_status,
                                             flg1,
                                             flg2,
                                             flg3,
                                             flg4,
                                             flg5,
                                             flg6)
            VALUES (:control.pol_ref,
                    con_id,
                    qc_item.desc_type,
                    qc_item.opus_value,
                    qc_item.correct_flg,
                    USER,
                    SYSDATE,
                    qc_item.flg,
                    err,
                    flg6,
                    flg7,
                    flg8,
                    flg9,
                    flg10,
                    flg11);
        END LOOP;
    END IF;

    -- Loop through all QC items and check for errors.
    FOR qc_item IN (SELECT * FROM azbj_phub_qc_detail WHERE policy_no = :control.pol_ref) LOOP
        -- Assuming a function check_qc_errors exists that returns an error status
        err := check_qc_errors(qc_item.policy_no, qc_item.contract_id);

        -- Update the QC status based on the verification results.
        UPDATE azbj_phub_qc_detail
        SET err_status = err
        WHERE policy_no = qc_item.policy_no
          AND contract_id = qc_item.contract_id;

        IF err IS NOT NULL THEN
            -- If any errors are found, mark the policy as "QC FAIL".
            UPDATE azbj_phub_qc_status_detail
            SET qc_status = 'QC FAIL'
            WHERE policy_no = :control.pol_ref;
            COMMIT;
            RETURN;
        END IF;
    END LOOP;

    -- If no errors are found, mark the policy as "QC PASS".
    UPDATE azbj_phub_qc_status_detail
    SET qc_status = 'QC PASS'
    WHERE policy_no = :control.pol_ref;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        -- Handle exceptions and display appropriate error messages.
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20001, 'An error occurred during QC verification: ' || SQLERRM);
END;
/