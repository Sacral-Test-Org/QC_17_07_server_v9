package com.azbj.qc.repository;

import com.azbj.qc.model.QCData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QCRepository extends JpaRepository<QCData, Long> {

    // Method to fetch social status by contract ID
    @Query("SELECT socialStatus FROM QCData WHERE contractId = :contractId")
    String findSocialStatusByContractId(@Param("contractId") String contractId);

    // Method to update physical copy status
    @Query("UPDATE QCData SET physicalCopyStatus = :status WHERE policyNumber = :policyNumber")
    int updatePhysicalCopyStatus(@Param("policyNumber") String policyNumber, @Param("status") String status);

    // Method to save fund details
    @Query("INSERT INTO FundDetails (fundId, fundDescription, premiumApportionment) VALUES (:fundId, :fundDescription, :premiumApportionment)")
    void saveFundDetails(@Param("fundId") String fundId, @Param("fundDescription") String fundDescription, @Param("premiumApportionment") String premiumApportionment);

    // Method to update fund details
    @Query("UPDATE FundDetails SET fundDescription = :fundDescription, premiumApportionment = :premiumApportionment WHERE fundId = :fundId")
    void updateFundDetails(@Param("fundId") String fundId, @Param("fundDescription") String fundDescription, @Param("premiumApportionment") String premiumApportionment);

    // Method to fetch all records from QC section
    @Query("SELECT q FROM QCData q")
    List<QCData> findAllRecords();

    // Method to update a record's "ci" value
    @Query("UPDATE QCData SET ci = :ci WHERE id = :id")
    int updateRecord(@Param("id") Long id, @Param("ci") String ci);

    // Method to update QC status
    @Query("UPDATE QCData SET qcStatus = 'N' WHERE policyRef = :policyRef AND qcStatus = 'P'")
    int updateQCStatus(@Param("policyRef") String policyRef);

    // Method to find application number by proposal number
    @Query("SELECT applicationNo FROM ApplicationData WHERE proposalNo = :proposalNo")
    String findApplicationNumberByProposalNumber(@Param("proposalNo") String proposalNo);

    // Method to count enrichment details
    @Query("SELECT COUNT(e) FROM EnrichmentDetails e WHERE e.applicationNo = :applicationNo")
    int countEnrichmentDetails(@Param("applicationNo") String applicationNo);

    // Method to find customer name in primary table
    @Query("SELECT customerName FROM PrimaryTable WHERE contractId = :contractId AND ipNo = 1")
    String findCustomerNameInPrimaryTable(@Param("contractId") String contractId);

    // Method to find customer name in secondary table
    @Query("SELECT customerName FROM SecondaryTable WHERE contractId = :contractId AND ipNo = 1")
    String findCustomerNameInSecondaryTable(@Param("contractId") String contractId);

    // Method to fetch underwriting comments by policy number
    @Query("SELECT u FROM UnderwritingComments u WHERE u.policyNo = :policyNo")
    List<UnderwritingComments> findUnderwritingCommentsByPolicyNo(@Param("policyNo") String policyNo);

    // Method to find user by credentials
    @Query("SELECT u FROM User u WHERE u.supervisorId = :supervisorId AND u.password = :password")
    User findUserByCredentials(@Param("supervisorId") String supervisorId, @Param("password") String password);

    // Method to update QC status in repository
    @Query("UPDATE QCData SET flg = 'N' WHERE policyRef = :policyRef")
    int updateQCStatusInRepository(@Param("policyRef") String policyRef);

    // Method to find solution ID
    @Query("SELECT solutionId FROM SolutionData WHERE applicationNo = :applicationNo OR policyRef = :policyRef")
    String findSolutionId(@Param("applicationNo") String applicationNo, @Param("policyRef") String policyRef);

    // Method to find parent contract ID
    @Query("SELECT parentContractId FROM ContractData WHERE solutionId = :solutionId")
    String findParentContractId(@Param("solutionId") String solutionId);

    // Method to update CI field
    @Query("UPDATE QCData SET ci = 'N' WHERE ci = 'Y' AND flg = 10")
    int updateCIField();

    // Method to find old nominee details
    @Query("SELECT n FROM NomineeDetails n WHERE n.contractId = :contractId")
    NomineeDetails findOldNomineeDetails(@Param("contractId") String contractId);

    // Method to update nominee name
    @Query("UPDATE NomineeDetails SET nomineeName = :nomineeName WHERE contractId = :contractId")
    int updateNomineeName(@Param("nomineeName") String nomineeName, @Param("contractId") String contractId);

    // Method to log policy activity
    @Query("INSERT INTO PolicyActivityLog (contractId, nomineeName, oldNomineeName) VALUES (:contractId, :nomineeName, :oldNomineeName)")
    int logPolicyActivity(@Param("contractId") String contractId, @Param("nomineeName") String nomineeName, @Param("oldNomineeName") String oldNomineeName);

    // Method to update QC record status
    @Query("UPDATE QCData SET status = :status WHERE id = :id")
    int updateQCRecordStatus(@Param("id") Long id, @Param("status") String status);

    // Method to get policy reference length
    @Query("SELECT LENGTH(:policyRef) FROM DUAL")
    int getPolicyReferenceLength(@Param("policyRef") String policyRef);

    // Method to get policy lock status
    @Query("SELECT NVL(flg, 'N') FROM QCData WHERE policyRef = :policyRef")
    String getPolicyLockStatus(@Param("policyRef") String policyRef);

    // Method to update policy lock status
    @Query("UPDATE QCData SET flg = 'Y', timeStamp = SYSDATE WHERE policyRef = :policyRef")
    int updatePolicyLockStatus(@Param("policyRef") String policyRef);

    // Method to get beneficiary info
    @Query("SELECT b FROM BeneficiaryInfo b WHERE b.policyRef = :policyRef")
    BeneficiaryInfo getBeneficiaryInfo(@Param("policyRef") String policyRef);

    // Method to get appointee info
    @Query("SELECT a FROM AppointeeInfo a WHERE a.policyRef = :policyRef")
    AppointeeInfo getAppointeeInfo(@Param("policyRef") String policyRef);

    // Method to update CI value based on checkbox CH7 functionality
    @Query("UPDATE QCData SET ci = 'N' WHERE ci = 'Y' AND flg = 11")
    int updateCiValue();

    // Method to update field
    @Query("UPDATE QCData SET field = :field WHERE id = :id")
    int updateField(@Param("id") Long id, @Param("field") String field);

    // Method to update CI field in DB
    @Query("UPDATE QCData SET ci = 'N' WHERE ci = 'Y' AND flg = 10")
    int updateCIFieldInDB();

    // Method to update CI field based on checkbox CH28 functionality
    @Query("UPDATE QCData SET ci = 'N' WHERE ci = 'Y' AND flg = 11")
    int updateCIField();

    // Method to find dispatch details
    @Query("SELECT d FROM DispatchDetails d WHERE d.policyRef = :policyRef")
    DispatchDetails findDispatchDetails(@Param("policyRef") String policyRef);

    // Method to save dispatch details
    @Query("INSERT INTO DispatchDetails (policyRef, details) VALUES (:policyRef, :details)")
    int saveDispatchDetails(@Param("policyRef") String policyRef, @Param("details") String details);

    // Method to find vendors
    @Query("SELECT v FROM Vendor v WHERE v.branchCode = :branchCode")
    List<Vendor> findVendors(@Param("branchCode") String branchCode);

    // Method to check if shipment exists
    @Query("SELECT COUNT(s) FROM ShipmentDetails s WHERE s.shipmentNo = :shipmentNo")
    int checkShipmentExists(@Param("shipmentNo") String shipmentNo);

    // Method to insert shipment details
    @Query("INSERT INTO ShipmentDetails (shipmentNo, details) VALUES (:shipmentNo, :details)")
    int insertShipmentDetails(@Param("shipmentNo") String shipmentNo, @Param("details") String details);

    // Method to update shipment details
    @Query("UPDATE ShipmentDetails SET details = :details WHERE shipmentNo = :shipmentNo")
    int updateShipmentDetails(@Param("shipmentNo") String shipmentNo, @Param("details") String details);

    // Method to update QC status
    @Query("UPDATE QCData SET qcStatus = 'N' WHERE policyRef = :policyRef")
    int updateQCStatus(@Param("policyRef") String policyRef);

    // Method to fetch nominee information
    @Query("SELECT n FROM NomineeInfo n WHERE n.contractId = :contractId AND n.versionNo = :versionNo")
    List<NomineeInfo> fetchNomineeInfo(@Param("contractId") String contractId, @Param("versionNo") String versionNo);

    // Method to update CI field based on checkbox CH8 functionality
    @Query("UPDATE QCData SET ci = 'N' WHERE ci = 'Y' AND flg = 11")
    int updateCIFieldCH8();

    // Method to fetch underwriter comments by policy number
    @Query("SELECT u FROM UnderwriterComments u WHERE u.policyNo = :policyNo")
    List<UnderwriterComments> findUnderwriterCommentsByPolicyNumber(@Param("policyNo") String policyNo);

    // Method to save rider details
    @Query("INSERT INTO RiderDetails (policyRef, details) VALUES (:policyRef, :details)")
    int saveRiderDetails(@Param("policyRef") String policyRef, @Param("details") String details);

    // Method to fetch rider details
    @Query("SELECT r FROM RiderDetails r WHERE r.policyRef = :policyRef")
    List<RiderDetails> fetchRiderDetails(@Param("policyRef") String policyRef);

    // Method to update CI field for CH10
    @Query("UPDATE QCData SET ci = 'N' WHERE ci = 'Y' AND flg = 11")
    int updateCIFieldForCH10();

    // Method to get document path
    @Query("SELECT filePath FROM QCData WHERE policyRef = :policyRef AND qcStatus = 'P' AND filePath IS NOT NULL")
    String getDocumentPath(@Param("policyRef") String policyRef);

    // Method to update application status
    @Query("UPDATE ApplicationStatus SET status = :status WHERE policyRef = :policyRef")
    int updateApplicationStatus(@Param("policyRef") String policyRef, @Param("status") String status);

    // Method to save skip reason
    @Query("INSERT INTO SkipReason (policyRef, reason, comments) VALUES (:policyRef, :reason, :comments)")
    int saveSkipReason(@Param("policyRef") String policyRef, @Param("reason") String reason, @Param("comments") String comments);

    // Method to find QC records by policy number
    @Query("SELECT q FROM QCData q WHERE q.policyNo = :policyNo")
    List<QCData> findQCRecordsByPolicyNumber(@Param("policyNo") String policyNo);

    // Method to update QC status
    @Query("UPDATE QCData SET qcStatus = :status WHERE policyNo = :policyNo")
    int updateQCStatus(@Param("policyNo") String policyNo, @Param("status") String status);
}
