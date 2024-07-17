-- src/main/resources/db/migration/V2__Add_Social_Status_Column.sql

-- Objective: Add the necessary column for storing social status if it doesn't exist.

-- Check if the column SOCIAL_STATUS exists in the table AZBJ_POLICY_BASES_EXT
DECLARE
    column_exists INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO column_exists
    FROM all_tab_columns
    WHERE table_name = 'AZBJ_POLICY_BASES_EXT'
    AND column_name = 'SOCIAL_STATUS';

    -- If the column does not exist, add it
    IF column_exists = 0 THEN
        EXECUTE IMMEDIATE 'ALTER TABLE AZBJ_POLICY_BASES_EXT ADD (SOCIAL_STATUS VARCHAR2(50))';
    END IF;
END;
/