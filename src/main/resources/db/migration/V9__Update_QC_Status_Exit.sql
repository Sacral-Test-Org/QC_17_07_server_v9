-- src/main/resources/db/migration/V9__Update_QC_Status_Exit.sql

-- Purpose: Update the `AZBJ_QC_KCLICK_DATA`, `azbj_kclick_qc_details`, and `azbj_merging_tat_detail` tables based on the current policy reference when the "Exit" button is pressed.
-- Also includes logic for policy reference validation and processing.

-- Update `AZBJ_QC_KCLICK_DATA` table
UPDATE AZBJ_QC_KCLICK_DATA
SET flg = 'N'
WHERE POLICY_REF = :CONTROL.POL_REF;

-- Update `azbj_kclick_qc_details` table
UPDATE azbj_kclick_qc_details
SET qc_status = 'N'
WHERE policy_ref = :CONTROL.POL_REF AND qc_status = 'P';

-- Update `azbj_merging_tat_detail` table
UPDATE azbj_merging_tat_detail
SET qc_status = 'N'
WHERE policy_ref = :CONTROL.POL_REF AND qc_status = 'P';

-- Commit the changes
COMMIT;

-- Policy Reference Validation and Processing
DECLARE
    v_length NUMBER;
    QC_status VARCHAR2(1);
    v_appln_no VARCHAR2(20);
BEGIN
    -- Validate the length of the policy reference number
    SELECT length(:POL_REF) INTO v_length FROM dual;

    -- If the policy reference number starts with '101' and is longer than 10 characters, truncate it to the last 10 characters
    IF substr(:POL_REF, 1, 3) = '101' AND v_length > 10 THEN
        :POL_REF := substr(:POL_REF, -10);
    END IF;

    -- Check if the policy reference is already locked
    SELECT NVL(FLG, 'N') INTO QC_status FROM AZBJ_QC_KCLICK_DATA WHERE POLICY_REF = :POL_REF;

    IF QC_status = 'Y' THEN
        -- If locked, raise an alert and halt the process
        RAISE_APPLICATION_ERROR(-20001, 'Policy reference is already locked.');
    ELSE
        -- If not locked, update its status to 'locked' and commit the changes
        UPDATE AZBJ_QC_KCLICK_DATA 
        SET flg = 'Y', time_stamp = sysdate 
        WHERE POLICY_REF = :POL_REF;
        COMMIT;
    END IF;

    -- Retrieve and display the beneficiary's date of birth, name, and relationship from the primary beneficiary table
    BEGIN
        SELECT APP_DOB, APP_NAME, APP_RELATION 
        INTO :BEN_APP_DOB, :BEN_NAME, :BEN_APP_RELATION 
        FROM azbj_beneficiary_rep 
        WHERE CONTRACT_ID = azbj_pk0_acc.get_contract_id(:POL_REF) 
        AND TOP_INDICATOR = 'Y' 
        AND ROWNUM = 1;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            -- If not found, check the secondary table
            SELECT APP_DOB, APP_NAME, APP_RELATION 
            INTO :BEN_APP_DOB, :BEN_NAME, :BEN_APP_RELATION 
            FROM wip_azbj_beneficiary_rep 
            WHERE CONTRACT_ID = azbj_pk0_acc.get_contract_id(:POL_REF) 
            AND TOP_INDICATOR = 'Y' 
            AND ROWNUM = 1;
    END;

    -- Retrieve and display the appointee's gender based on the application number associated with the policy reference
    SELECT b.application_no 
    INTO v_appln_no 
    FROM azbj_phub_scrutiny_prop a, azbj_phub_tracker b 
    WHERE a.application_no = b.application_no 
    AND b.proposal_no = :POL_REF;

    SELECT appointee_gender 
    INTO :appointee_gender 
    FROM azbj_annuity_prod_det 
    WHERE appln_no = v_appln_no 
    AND TOP_INDICATOR = 'Y';
END;
/