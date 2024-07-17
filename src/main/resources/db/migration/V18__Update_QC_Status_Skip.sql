-- src/main/resources/db/migration/V18__Update_QC_Status_Skip.sql

-- Objective:
-- Create a new SQL migration file to update the QC status in the specified tables based on the 'Skip' button functionality.

-- Changes Required:
-- 1. Add SQL queries to update the `AZBJ_PRINT_QC_DISCARD` table to set `BLOCK_FLAG` to 'N' where `POLICY_REF` matches and `BLOCK_FLAG` is 'Y'.
-- 2. Add SQL queries to insert a new record into the `AZBJ_PRINT_QC_DISCARD` table with the `POLICY_REF`, `BLOCK_FLAG`, `BLOCK_REASON`, `DELINK_DATE`, `DELINK_USER`, and `BLOCK_COMMENTS`.
-- 3. Ensure that the SQL queries are executed within a transaction and committed upon successful completion.

-- Dependencies:
-- None

-- Start of the transaction
BEGIN;

-- Update the AZBJ_PRINT_QC_DISCARD table to set BLOCK_FLAG to 'N' where POLICY_REF matches and BLOCK_FLAG is 'Y'
UPDATE AZBJ_PRINT_QC_DISCARD
SET BLOCK_FLAG = 'N'
WHERE POLICY_REF = :CONTROL.POL_REF
AND BLOCK_FLAG = 'Y';

-- Insert a new record into the AZBJ_PRINT_QC_DISCARD table
INSERT INTO AZBJ_PRINT_QC_DISCARD
(POLICY_REF, BLOCK_FLAG, BLOCK_REASON, DELINK_DATE, DELINK_USER, BLOCK_COMMENTS)
VALUES (:CONTROL.POL_REF, 'Y', :CONTROL.QC_SKIP_REASON, SYSDATE, USER, :CONTROL.DELINK_COMMENTS);

-- Commit the transaction
COMMIT;