package com.azbj.qc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "QC_DATA_TABLE")
public class QCData {

    @Id
    @Column(name = "CONTRACT_ID")
    private String contractId;

    @Column(name = "VERSION_NO")
    private String versionNo;

    @Column(name = "OBJECT_ID")
    private String objectId;

    @Column(name = "ACTION_CODE")
    private String actionCode;

    @Column(name = "TOP_INDICATOR")
    private String topIndicator;

    @Column(name = "PARTITION_NO")
    private String partitionNo;

    @Column(name = "COVER_CODE")
    private String coverCode;

    @Column(name = "COVER_NO")
    private String coverNo;

    @Column(name = "PREVIOUS_VERSION")
    private String previousVersion;

    @Column(name = "REVERSING_VERSION")
    private String reversingVersion;

    @Column(name = "SUM_INSURED_WHOLE_COVER")
    private String sumInsuredWholeCover;

    @Column(name = "SUM_INSURED_WHOLE_COVER_SWF")
    private String sumInsuredWholeCoverSwf;

    @Column(name = "SUM_INSURED_COMPANY_SHARE")
    private String sumInsuredCompanyShare;

    @Column(name = "SUM_INSURED_COMPANY_SHARE_SWF")
    private String sumInsuredCompanyShareSwf;

    @Column(name = "FTPREMIUM_OR_WHOLE_COVER")
    private String ftpremiumOrWholeCover;

    @Column(name = "FTPREMIUM_OR_WHOLE_COVER_SWF")
    private String ftpremiumOrWholeCoverSwf;

    @Column(name = "FTPREMIUM_SYS_COMPANY_SHARE")
    private String ftpremiumSysCompanyShare;

    @Column(name = "FTPREMIUM_SYS_COMP_SHARE_SWF")
    private String ftpremiumSysCompShareSwf;

    @Column(name = "AGENT_COMMISSION_WHOLE_COVER")
    private String agentCommissionWholeCover;

    @Column(name = "AGENT_COMMISSION_WHOLE_COV_SWF")
    private String agentCommissionWholeCovSwf;

    @Column(name = "AGENT_COMMISSION_COMPANY_SHARE")
    private String agentCommissionCompanyShare;

    @Column(name = "AGENT_COMMISSION_COM_SHARE_SWF")
    private String agentCommissionComShareSwf;

    @Column(name = "SHARE_PORTION")
    private String sharePortion;

    @Column(name = "CVC_CODE")
    private String cvcCode;

    @Column(name = "SURCHARGE_DISCOUNT")
    private String surchargeDiscount;

    @Column(name = "FTPREMIUM_OR_COMPANY_SHARE")
    private String ftpremiumOrCompanyShare;

    @Column(name = "FTPREMIUM_OR_COMPANY_SHARE_SWF")
    private String ftpremiumOrCompanyShareSwf;

    @Column(name = "FTPREMIUM_SYS_WHOLE_COVER")
    private String ftpremiumSysWholeCover;

    @Column(name = "FTPREMIUM_SYS_WHOLE_COVER_SWF")
    private String ftpremiumSysWholeCoverSwf;

    @Column(name = "REINSURABLE_RISK_AMOUNT")
    private String reinsurableRiskAmount;

    @Column(name = "REINSURABLE_RISK_AMOUNT_SWF")
    private String reinsurableRiskAmountSwf;

    @Column(name = "PCOV_CONTRACT_ID")
    private String pcovContractId;

    @Column(name = "PCOV_PARTITION_NO")
    private String pcovPartitionNo;

    @Column(name = "PCOV_COVER_CODE")
    private String pcovCoverCode;

    @Column(name = "PCOV_COVER_NO")
    private String pcovCoverNo;

    // Getters and Setters
    public String getContractId() {
        return contractId;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public String getVersionNo() {
        return versionNo;
    }

    public void setVersionNo(String versionNo) {
        this.versionNo = versionNo;
    }

    public String getObjectId() {
        return objectId;
    }

    public void setObjectId(String objectId) {
        this.objectId = objectId;
    }

    public String getActionCode() {
        return actionCode;
    }

    public void setActionCode(String actionCode) {
        this.actionCode = actionCode;
    }

    public String getTopIndicator() {
        return topIndicator;
    }

    public void setTopIndicator(String topIndicator) {
        this.topIndicator = topIndicator;
    }

    public String getPartitionNo() {
        return partitionNo;
    }

    public void setPartitionNo(String partitionNo) {
        this.partitionNo = partitionNo;
    }

    public String getCoverCode() {
        return coverCode;
    }

    public void setCoverCode(String coverCode) {
        this.coverCode = coverCode;
    }

    public String getCoverNo() {
        return coverNo;
    }

    public void setCoverNo(String coverNo) {
        this.coverNo = coverNo;
    }

    public String getPreviousVersion() {
        return previousVersion;
    }

    public void setPreviousVersion(String previousVersion) {
        this.previousVersion = previousVersion;
    }

    public String getReversingVersion() {
        return reversingVersion;
    }

    public void setReversingVersion(String reversingVersion) {
        this.reversingVersion = reversingVersion;
    }

    public String getSumInsuredWholeCover() {
        return sumInsuredWholeCover;
    }

    public void setSumInsuredWholeCover(String sumInsuredWholeCover) {
        this.sumInsuredWholeCover = sumInsuredWholeCover;
    }

    public String getSumInsuredWholeCoverSwf() {
        return sumInsuredWholeCoverSwf;
    }

    public void setSumInsuredWholeCoverSwf(String sumInsuredWholeCoverSwf) {
        this.sumInsuredWholeCoverSwf = sumInsuredWholeCoverSwf;
    }

    public String getSumInsuredCompanyShare() {
        return sumInsuredCompanyShare;
    }

    public void setSumInsuredCompanyShare(String sumInsuredCompanyShare) {
        this.sumInsuredCompanyShare = sumInsuredCompanyShare;
    }

    public String getSumInsuredCompanyShareSwf() {
        return sumInsuredCompanyShareSwf;
    }

    public void setSumInsuredCompanyShareSwf(String sumInsuredCompanyShareSwf) {
        this.sumInsuredCompanyShareSwf = sumInsuredCompanyShareSwf;
    }

    public String getFtpremiumOrWholeCover() {
        return ftpremiumOrWholeCover;
    }

    public void setFtpremiumOrWholeCover(String ftpremiumOrWholeCover) {
        this.ftpremiumOrWholeCover = ftpremiumOrWholeCover;
    }

    public String getFtpremiumOrWholeCoverSwf() {
        return ftpremiumOrWholeCoverSwf;
    }

    public void setFtpremiumOrWholeCoverSwf(String ftpremiumOrWholeCoverSwf) {
        this.ftpremiumOrWholeCoverSwf = ftpremiumOrWholeCoverSwf;
    }

    public String getFtpremiumSysCompanyShare() {
        return ftpremiumSysCompanyShare;
    }

    public void setFtpremiumSysCompanyShare(String ftpremiumSysCompanyShare) {
        this.ftpremiumSysCompanyShare = ftpremiumSysCompanyShare;
    }

    public String getFtpremiumSysCompShareSwf() {
        return ftpremiumSysCompShareSwf;
    }

    public void setFtpremiumSysCompShareSwf(String ftpremiumSysCompShareSwf) {
        this.ftpremiumSysCompShareSwf = ftpremiumSysCompShareSwf;
    }

    public String getAgentCommissionWholeCover() {
        return agentCommissionWholeCover;
    }

    public void setAgentCommissionWholeCover(String agentCommissionWholeCover) {
        this.agentCommissionWholeCover = agentCommissionWholeCover;
    }

    public String getAgentCommissionWholeCovSwf() {
        return agentCommissionWholeCovSwf;
    }

    public void setAgentCommissionWholeCovSwf(String agentCommissionWholeCovSwf) {
        this.agentCommissionWholeCovSwf = agentCommissionWholeCovSwf;
    }

    public String getAgentCommissionCompanyShare() {
        return agentCommissionCompanyShare;
    }

    public void setAgentCommissionCompanyShare(String agentCommissionCompanyShare) {
        this.agentCommissionCompanyShare = agentCommissionCompanyShare;
    }

    public String getAgentCommissionComShareSwf() {
        return agentCommissionComShareSwf;
    }

    public void setAgentCommissionComShareSwf(String agentCommissionComShareSwf) {
        this.agentCommissionComShareSwf = agentCommissionComShareSwf;
    }

    public String getSharePortion() {
        return sharePortion;
    }

    public void setSharePortion(String sharePortion) {
        this.sharePortion = sharePortion;
    }

    public String getCvcCode() {
        return cvcCode;
    }

    public void setCvcCode(String cvcCode) {
        this.cvcCode = cvcCode;
    }

    public String getSurchargeDiscount() {
        return surchargeDiscount;
    }

    public void setSurchargeDiscount(String surchargeDiscount) {
        this.surchargeDiscount = surchargeDiscount;
    }

    public String getFtpremiumOrCompanyShare() {
        return ftpremiumOrCompanyShare;
    }

    public void setFtpremiumOrCompanyShare(String ftpremiumOrCompanyShare) {
        this.ftpremiumOrCompanyShare = ftpremiumOrCompanyShare;
    }

    public String getFtpremiumOrCompanyShareSwf() {
        return ftpremiumOrCompanyShareSwf;
    }

    public void setFtpremiumOrCompanyShareSwf(String ftpremiumOrCompanyShareSwf) {
        this.ftpremiumOrCompanyShareSwf = ftpremiumOrCompanyShareSwf;
    }

    public String getFtpremiumSysWholeCover() {
        return ftpremiumSysWholeCover;
    }

    public void setFtpremiumSysWholeCover(String ftpremiumSysWholeCover) {
        this.ftpremiumSysWholeCover = ftpremiumSysWholeCover;
    }

    public String getFtpremiumSysWholeCoverSwf() {
        return ftpremiumSysWholeCoverSwf;
    }

    public void setFtpremiumSysWholeCoverSwf(String ftpremiumSysWholeCoverSwf) {
        this.ftpremiumSysWholeCoverSwf = ftpremiumSysWholeCoverSwf;
    }

    public String getReinsurableRiskAmount() {
        return reinsurableRiskAmount;
    }

    public void setReinsurableRiskAmount(String reinsurableRiskAmount) {
        this.reinsurableRiskAmount = reinsurableRiskAmount;
    }

    public String getReinsurableRiskAmountSwf() {
        return reinsurableRiskAmountSwf;
    }

    public void setReinsurableRiskAmountSwf(String reinsurableRiskAmountSwf) {
        this.reinsurableRiskAmountSwf = reinsurableRiskAmountSwf;
    }

    public String getPcovContractId() {
        return pcovContractId;
    }

    public void setPcovContractId(String pcovContractId) {
        this.pcovContractId = pcovContractId;
    }

    public String getPcovPartitionNo() {
        return pcovPartitionNo;
    }

    public void setPcovPartitionNo(String pcovPartitionNo) {
        this.pcovPartitionNo = pcovPartitionNo;
    }

    public String getPcovCoverCode() {
        return pcovCoverCode;
    }

    public void setPcovCoverCode(String pcovCoverCode) {
        this.pcovCoverCode = pcovCoverCode;
    }

    public String getPcovCoverNo() {
        return pcovCoverNo;
    }

    public void setPcovCoverNo(String pcovCoverNo) {
        this.pcovCoverNo = pcovCoverNo;
    }
}
