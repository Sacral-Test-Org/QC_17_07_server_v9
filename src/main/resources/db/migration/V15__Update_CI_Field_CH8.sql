-- src/main/resources/db/migration/V15__Update_CI_Field_CH8.sql

-- Purpose: Create a new SQL migration file to update the "ci" field in the specified tables based on the checkbox "CH8" functionality.

-- Update the "ci" field in the QC section where "flg" is 11 and "ci" is 'Y'
UPDATE QC
SET ci = 'N'
WHERE flg = 11 AND ci = 'Y';

-- Ensure the changes are committed
COMMIT;