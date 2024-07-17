package com.azbj.qc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.azbj.qc.service.QCService;
import com.azbj.qc.model.QCData;
import java.util.List;

@RestController
@RequestMapping("/api")
public class QCController {

    @Autowired
    private QCService qcService;

    @GetMapping("/qc-data")
    public List<QCData> getQCData() {
        return qcService.getQCData();
    }

    @PostMapping("/qc-data")
    public ResponseEntity<String> saveQCData(@RequestBody QCData qcData) {
        boolean isSaved = qcService.saveQCData(qcData);
        if (isSaved) {
            return ResponseEntity.ok("QC Data saved successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to save QC Data.");
        }
    }

    @GetMapping("/social-status/{contractId}")
    public ResponseEntity<String> getSocialStatus(@PathVariable String contractId) {
        String socialStatus = qcService.fetchSocialStatus(contractId);
        return ResponseEntity.ok(socialStatus);
    }

    @PostMapping("/physical-copy-status")
    public ResponseEntity<String> updatePhysicalCopyStatus(@RequestParam String policyNumber, @RequestParam String status) {
        boolean isUpdated = qcService.updatePhysicalCopyStatus(policyNumber, status);
        if (isUpdated) {
            return ResponseEntity.ok("Physical copy status updated successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to update physical copy status.");
        }
    }

    @PostMapping("/fund-detail")
    public ResponseEntity<String> addFundDetail(@RequestBody QCData fundDetail) {
        boolean isAdded = qcService.addFundDetail(fundDetail);
        if (isAdded) {
            return ResponseEntity.ok("Fund detail added successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to add fund detail.");
        }
    }

    @PutMapping("/fund-detail")
    public ResponseEntity<String> updateFundDetail(@RequestBody QCData fundDetail) {
        boolean isUpdated = qcService.updateFundDetail(fundDetail);
        if (isUpdated) {
            return ResponseEntity.ok("Fund detail updated successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to update fund detail.");
        }
    }

    @PostMapping("/control-block/cancel")
    public ResponseEntity<String> cancelAction() {
        boolean isCancelled = qcService.cancelAction();
        if (isCancelled) {
            return ResponseEntity.ok("Action cancelled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to cancel action.");
        }
    }

    @PostMapping("/control-block/search")
    public ResponseEntity<String> searchPolicy(@RequestParam String policyRef) {
        boolean isSearched = qcService.searchPolicy(policyRef);
        if (isSearched) {
            return ResponseEntity.ok("Policy searched successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to search policy.");
        }
    }

    @PostMapping("/control-block/reset")
    public ResponseEntity<String> resetForm(@RequestParam String policyRef) {
        boolean isReset = qcService.resetForm(policyRef);
        if (isReset) {
            return ResponseEntity.ok("Form reset successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to reset form.");
        }
    }

    @PostMapping("/control-block/submit")
    public ResponseEntity<String> submitForm(@RequestBody QCData qcData) {
        boolean isSubmitted = qcService.submitForm(qcData);
        if (isSubmitted) {
            return ResponseEntity.ok("Form submitted successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to submit form.");
        }
    }

    @PostMapping("/control-block/update-nominee")
    public ResponseEntity<String> updateNominee(@RequestParam String nomineeName, @RequestParam String contractId) {
        boolean isUpdated = qcService.updateNomineeName(nomineeName, contractId);
        if (isUpdated) {
            return ResponseEntity.ok("Nominee name updated successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to update nominee name.");
        }
    }

    @PostMapping("/control-block/view-images")
    public ResponseEntity<String> viewImages(@RequestParam String applicationNo, @RequestParam String policyReference) {
        String url = qcService.generateSecureUrl(applicationNo, policyReference);
        if (url != null) {
            return ResponseEntity.ok(url);
        } else {
            return ResponseEntity.status(500).body("Failed to generate URL.");
        }
    }

    @PostMapping("/control-block/enrich")
    public ResponseEntity<String> enrichButtonHandler(@RequestParam String proposalNumber) {
        String result = qcService.enrichButtonHandler(proposalNumber);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/underwriting-comments/{policyNo}")
    public ResponseEntity<List<String>> getUnderwritingComments(@PathVariable String policyNo) {
        List<String> comments = qcService.getUnderwritingComments(policyNo);
        return ResponseEntity.ok(comments);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateUser(@RequestParam String supervisorId, @RequestParam String password) {
        boolean isAuthenticated = qcService.authenticate(supervisorId, password);
        if (isAuthenticated) {
            return ResponseEntity.ok("User authenticated successfully.");
        } else {
            return ResponseEntity.status(401).body("Authentication failed.");
        }
    }

    @PostMapping("/exit")
    public ResponseEntity<String> handleExitButtonPress(@RequestParam String policyRef) {
        boolean isExited = qcService.updateQCStatus(policyRef);
        if (isExited) {
            return ResponseEntity.ok("Exit successful.");
        } else {
            return ResponseEntity.status(500).body("Failed to exit.");
        }
    }

    @PostMapping("/checkbox/ch2")
    public ResponseEntity<String> handleCH2Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH2 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH2 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch1")
    public ResponseEntity<String> handleCH1Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH1 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH1 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch3")
    public ResponseEntity<String> handleCH3Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH3 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH3 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch5")
    public ResponseEntity<String> handleCH5Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH5 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH5 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch7")
    public ResponseEntity<String> handleCH7Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH7 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH7 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch8")
    public ResponseEntity<String> handleCH8Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH8 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH8 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch10")
    public ResponseEntity<String> handleCH10Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH10 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH10 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch27")
    public ResponseEntity<String> handleCH27Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH27 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH27 checkbox.");
        }
    }

    @PostMapping("/checkbox/ch28")
    public ResponseEntity<String> handleCH28Checkbox() {
        boolean isHandled = qcService.iterateAndUpdateRecords();
        if (isHandled) {
            return ResponseEntity.ok("CH28 checkbox handled successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to handle CH28 checkbox.");
        }
    }

    @PostMapping("/dispatch-details")
    public ResponseEntity<String> saveDispatchDetails(@RequestBody QCData dispatchDetails) {
        boolean isSaved = qcService.saveDispatchDetails(dispatchDetails);
        if (isSaved) {
            return ResponseEntity.ok("Dispatch details saved successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to save dispatch details.");
        }
    }

    @GetMapping("/vendors/{branchCode}")
    public ResponseEntity<List<String>> getVendors(@PathVariable String branchCode) {
        List<String> vendors = qcService.getVendors(branchCode);
        return ResponseEntity.ok(vendors);
    }

    @PostMapping("/shipment-details")
    public ResponseEntity<String> saveShipmentDetails(@RequestBody QCData shipmentDetails) {
        boolean isSaved = qcService.saveShipmentDetails(shipmentDetails);
        if (isSaved) {
            return ResponseEntity.ok("Shipment details saved successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to save shipment details.");
        }
    }

    @GetMapping("/nominee-info/{contractId}/{versionNo}")
    public ResponseEntity<QCData> getNomineeInfo(@PathVariable String contractId, @PathVariable String versionNo) {
        QCData nomineeInfo = qcService.getNomineeInfo(contractId, versionNo);
        return ResponseEntity.ok(nomineeInfo);
    }

    @PutMapping("/nominee-info")
    public ResponseEntity<String> updateNomineeInfo(@RequestBody QCData nomineeInfo) {
        boolean isUpdated = qcService.updateNomineeInfo(nomineeInfo);
        if (isUpdated) {
            return ResponseEntity.ok("Nominee info updated successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to update nominee info.");
        }
    }

    @PostMapping("/rider-details")
    public ResponseEntity<String> saveRiderDetails(@RequestBody QCData riderDetails) {
        boolean isSaved = qcService.saveRiderDetails(riderDetails);
        if (isSaved) {
            return ResponseEntity.ok("Rider details saved successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to save rider details.");
        }
    }

    @GetMapping("/rider-details/{contractId}/{versionNo}")
    public ResponseEntity<QCData> getRiderDetails(@PathVariable String contractId, @PathVariable String versionNo) {
        QCData riderDetails = qcService.getRiderDetails(contractId, versionNo);
        return ResponseEntity.ok(riderDetails);
    }

    @PostMapping("/view-document")
    public ResponseEntity<String> viewDocument(@RequestParam String policyRef) {
        String filePath = qcService.getDocumentPath(policyRef);
        if (filePath != null) {
            return ResponseEntity.ok(filePath);
        } else {
            return ResponseEntity.status(500).body("Failed to retrieve document path.");
        }
    }

    @PostMapping("/skip-application")
    public ResponseEntity<String> skipApplication(@RequestParam String policyRef, @RequestParam String reason, @RequestParam String comments) {
        boolean isSkipped = qcService.skipApplication(policyRef, reason, comments);
        if (isSkipped) {
            return ResponseEntity.ok("Application skipped successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to skip application.");
        }
    }

    @PostMapping("/submit-policy")
    public ResponseEntity<String> submitPolicyForQC(@RequestParam String policyNumber) {
        boolean isSubmitted = qcService.submitPolicyForQC(policyNumber);
        if (isSubmitted) {
            return ResponseEntity.ok("Policy submitted for QC successfully.");
        } else {
            return ResponseEntity.status(500).body("Failed to submit policy for QC.");
        }
    }
}
