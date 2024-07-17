package com.azbj.qc.service;

import com.azbj.qc.model.QCData;
import com.azbj.qc.repository.QCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QCService {

    @Autowired
    private QCRepository qcRepository;

    public List<QCData> getQCData() {
        return qcRepository.findAll();
    }

    public QCData saveQCData(QCData qcData) {
        return qcRepository.save(qcData);
    }

    public String fetchSocialStatus(String contractId) {
        return qcRepository.findSocialStatusByContractId(contractId);
    }

    public boolean updatePhysicalCopyStatus(String policyNumber, String status) {
        return qcRepository.updatePhysicalCopyStatus(policyNumber, status);
    }

    public void addFundDetail(QCData fundDetail) {
        qcRepository.save(fundDetail);
    }

    public void updateFundDetail(QCData fundDetail) {
        qcRepository.save(fundDetail);
    }

    public void iterateAndUpdateRecords() {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 10 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
    }

    public boolean updateQCStatus(String policyRef) {
        if ("P".equals(qcRepository.getQCStatus(policyRef))) {
            qcRepository.updateQCStatus(policyRef, "N");
            return true;
        }
        return false;
    }

    public boolean resetQCStatus(String policyRef) {
        qcRepository.updateQCStatusInKClickData(policyRef, "N");
        qcRepository.updateQCStatusInKClickQCDetails(policyRef, "N");
        qcRepository.updateQCStatusInMergingTatDetail(policyRef, "N");
        return true;
    }

    public String getApplicationNumberByProposalNumber(String proposalNumber) {
        return qcRepository.findApplicationNumberByProposalNumber(proposalNumber);
    }

    public boolean checkEnrichmentDetails(String applicationNumber) {
        return qcRepository.countEnrichmentDetails(applicationNumber) > 0;
    }

    public String getCustomerName(String contractId) {
        String customerName = qcRepository.findCustomerNameInPrimaryTable(contractId);
        if (customerName == null) {
            customerName = qcRepository.findCustomerNameInSecondaryTable(contractId);
        }
        return customerName;
    }

    public List<QCData> getUnderwritingComments(String policyNo) {
        return qcRepository.findUnderwritingCommentsByPolicyNo(policyNo);
    }

    public boolean authenticate(String supervisorId, String password) {
        return qcRepository.findUserByCredentials(supervisorId, password) != null;
    }

    public boolean updateQCStatusOnExit(String policyRef) {
        qcRepository.updateQCStatusInKClickData(policyRef, "N");
        qcRepository.updateQCStatusInKClickQCDetails(policyRef, "N");
        qcRepository.updateQCStatusInMergingTatDetail(policyRef, "N");
        return true;
    }

    public String getSolutionIdAndParentContractId(String applicationNo, String policyReference) {
        String solutionId = qcRepository.findSolutionId(applicationNo, policyReference);
        String parentContractId = qcRepository.findParentContractId(solutionId);
        return parentContractId;
    }

    public String generateSecureUrl(String policyNumber, String policyReference) {
        // Logic to generate secure URL
        return "https://secure.url/" + policyNumber + "/" + policyReference;
    }

    public boolean updateCIField() {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 10 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
        return true;
    }

    public boolean updateRecords(boolean checkboxState) {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 11 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
        return true;
    }

    public boolean updateNomineeName(String nomineeName, String contractId) {
        if (qcRepository.findOldNomineeDetails(contractId) == null) {
            throw new RuntimeException("Nominee Detail Not Found");
        }
        qcRepository.updateNomineeName(nomineeName, contractId);
        qcRepository.logPolicyActivity(contractId, "Nominee Name updated successfully");
        return true;
    }

    public boolean iterateAndUpdateQCRecords() {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 11 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
        return true;
    }

    public boolean validatePolicyReference(String policyReference) {
        int length = qcRepository.getPolicyReferenceLength(policyReference);
        if (length > 10 && policyReference.startsWith("101")) {
            policyReference = policyReference.substring(length - 10);
        }
        if ("locked".equals(qcRepository.getPolicyLockStatus(policyReference))) {
            return false;
        }
        qcRepository.updatePolicyLockStatus(policyReference, "locked");
        return true;
    }

    public boolean processCheckboxCH7() {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 11 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
        return true;
    }

    public boolean updateCIFieldCH8() {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 11 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
        return true;
    }

    public boolean updateCIFieldForCH10() {
        List<QCData> records = qcRepository.findAllRecords();
        for (QCData record : records) {
            if ("Y".equals(record.getCi()) && 11 == record.getFlg()) {
                record.setCi("N");
                qcRepository.updateRecord(record);
            }
        }
        return true;
    }

    public String getDocumentPath(String policyRef) {
        return qcRepository.findDocumentPath(policyRef);
    }

    public boolean copyDocumentToClient(String documentPath, String tempLocation) {
        // Logic to copy document
        return true;
    }

    public boolean verifyDocumentIntegrity(String tempLocation) {
        // Logic to verify document integrity
        return true;
    }

    public boolean skipApplication(String policyRef, String reason, String comments) {
        if (reason == null || reason.isEmpty()) {
            throw new RuntimeException("Please Select Reason For Skipping Application.");
        }
        if ("OTHERS".equals(reason) && (comments == null || comments.isEmpty())) {
            throw new RuntimeException("Please Enter comments.");
        }
        qcRepository.updateApplicationStatus(policyRef, "skipped");
        qcRepository.saveSkipReason(policyRef, reason, comments);
        return true;
    }

    public boolean validatePolicyNumber(String policyNumber) {
        if (policyNumber == null || policyNumber.isEmpty()) {
            throw new RuntimeException("Please enter policy number");
        }
        return true;
    }

    public boolean checkExistingQCRecords(String policyNumber) {
        return qcRepository.countQCRecords(policyNumber) > 0;
    }

    public void updateQCStatus(String policyNumber, String status) {
        qcRepository.updateQCStatus(policyNumber, status);
    }
}
