-- src/main/resources/db/migration/V10__Update_CI_Field_CH27.sql

-- Purpose: Create a new SQL migration file to update the "ci" field in the specified tables based on the checkbox "CH27" functionality.

-- Update the "ci" field in the QC section where "ci" is 'Y' and "flg" is 10
UPDATE QC
SET ci = 'N'
WHERE ci = 'Y' AND flg = 10;