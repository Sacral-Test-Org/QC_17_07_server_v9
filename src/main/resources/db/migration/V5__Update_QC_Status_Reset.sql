-- Purpose: Create a new SQL migration file to update the QC status in the specified tables
-- Reason: Ensure the database schema is updated to support the reset functionality

-- Update QC status in AZBJ_QC_KCLICK_DATA table
UPDATE AZBJ_QC_KCLICK_DATA
SET flg = 'N'
WHERE POLICY_REF = :CONTROL.POL_REF;

-- Update QC status in azbj_kclick_qc_details table if current status is 'P'
UPDATE azbj_kclick_qc_details
SET qc_status = 'N'
WHERE policy_ref = :CONTROL.POL_REF AND qc_status = 'P';

-- Update QC status in azbj_merging_tat_detail table if current status is 'P'
UPDATE azbj_merging_tat_detail
SET qc_status = 'N'
WHERE policy_ref = :CONTROL.POL_REF AND qc_status = 'P';

-- Commit the transaction
COMMIT;