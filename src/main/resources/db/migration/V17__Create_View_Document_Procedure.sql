CREATE OR REPLACE PROCEDURE get_document_path (
    p_policy_ref IN VARCHAR2,
    p_file_path OUT VARCHAR2
) AS
BEGIN
    SELECT file_path
    INTO p_file_path
    FROM azbj_kclick_qc_details
    WHERE policy_ref = p_policy_ref
    AND QC_STATUS = 'P'
    AND file_path IS NOT NULL;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_file_path := NULL;
    WHEN OTHERS THEN
        p_file_path := NULL;
END get_document_path;
/