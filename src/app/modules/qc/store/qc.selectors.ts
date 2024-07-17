import { createSelector, createFeatureSelector } from '@ngrx/store';
import { QCState } from './qc.reducer';

// Feature Selector
export const selectQCState = createFeatureSelector<QCState>('qc');

// Data Selectors
export const selectQCData = createSelector(
  selectQCState,
  (state: QCState) => state.data
);

export const selectQCLoading = createSelector(
  selectQCState,
  (state: QCState) => state.loading
);

export const selectQCError = createSelector(
  selectQCState,
  (state: QCState) => state.error
);

// Current Record Selectors
export const selectCurrentRecord = createSelector(
  selectQCState,
  (state: QCState) => state.currentRecord
);

export const selectIsLastRecord = createSelector(
  selectQCState,
  (state: QCState) => state.isLastRecord
);

// Error Category and Alerts Selectors
export const selectErrorCategory = createSelector(
  selectQCState,
  (state: QCState) => state.errorCategory
);

// Reprinting Process Selectors
export const selectReprintingProcessState = createSelector(
  selectQCState,
  (state: QCState) => state.reprintingProcess
);

// Physical Copy Status Update Selectors
export const selectPhysicalCopyStatus = createSelector(
  selectQCState,
  (state: QCState) => state.physicalCopyStatus
);

// Fund Details Selectors
export const selectFundDetails = createSelector(
  selectQCState,
  (state: QCState) => state.fundDetails
);

// Control Block Functionalities Selectors
export const selectControlBlockState = createSelector(
  selectQCState,
  (state: QCState) => state.controlBlock
);

// Checkbox CH2 Functionality Selectors
export const selectCH2State = createSelector(
  selectQCState,
  (state: QCState) => state.ch2
);

// QC Status Update Selectors
export const selectQCStatus = createSelector(
  selectQCState,
  (state: QCState) => state.qcStatus
);

// Checkbox CH1 Functionality Selectors
export const selectCH1State = createSelector(
  selectQCState,
  (state: QCState) => state.ch1
);

// Reset Functionality Selectors
export const selectResetQCStatus = createSelector(
  selectQCState,
  (state: QCState) => state.resetQCStatus
);

// Reason Of Skip Selectors
export const selectReasonOfSkip = createSelector(
  selectQCState,
  (state: QCState) => state.reasonOfSkip
);

// ENRICH Button Functionality Selectors
export const selectEnrichButtonState = createSelector(
  selectQCState,
  (state: QCState) => state.enrichButtonClicked
);

// Pre-Print Quality Control Data Selectors
export const selectPrePrintQcData = createSelector(
  selectQCState,
  (state: QCState) => state.prePrintQcData
);

// Authentication State Selectors
export const selectAuthenticationState = createSelector(
  selectQCState,
  (state: QCState) => state.authentication
);

// Multiline Text Area State Selectors
export const selectComment = createSelector(
  selectQCState,
  (state: QCState) => state.comment
);

// Exit Button Functionality Selectors
export const selectExitButtonState = createSelector(
  selectQCState,
  (state: QCState) => state.exitButton
);

// View Images Button Functionality Selectors
export const selectViewImagesState = createSelector(
  selectQCState,
  (state: QCState) => state.viewImages
);

// Checkbox CH3 Functionality Selectors
export const selectCH3IterationState = createSelector(
  selectQCState,
  (state: QCState) => state.ch3Iteration
);

// Checkbox CH5 Functionality Selectors
export const selectCH5State = createSelector(
  selectQCState,
  (state: QCState) => state.ch5
);

// Checkbox Functionality Selectors
export const selectCheckboxState = createSelector(
  selectQCState,
  (state: QCState) => state.checkbox
);

// Checkbox and Record Iteration Selectors
export const selectIterationStatus = createSelector(
  selectQCState,
  (state: QCState) => state.iterationStatus
);

// Checkbox CH7 Functionality Selectors
export const selectCH7State = createSelector(
  selectQCState,
  (state: QCState) => state.ch7
);

// Checkbox CH27 Functionality Selectors
export const selectCH27State = createSelector(
  selectQCState,
  (state: QCState) => state.ch27
);

// Checkbox CH28 Functionality Selectors
export const selectCH28State = createSelector(
  selectQCState,
  (state: QCState) => state.ch28
);

// Dispatch Block State Selectors
export const selectDispatchDetails = createSelector(
  selectQCState,
  (state: QCState) => state.dispatchDetails
);

// Vendor Data Selectors
export const selectVendors = createSelector(
  selectQCState,
  (state: QCState) => state.vendors
);

export const selectVendorsLoading = createSelector(
  selectQCState,
  (state: QCState) => state.vendorsLoading
);

export const selectVendorsError = createSelector(
  selectQCState,
  (state: QCState) => state.vendorsError
);

// Delivery Type Selection Selectors
export const selectDeliveryType = createSelector(
  selectQCState,
  (state: QCState) => state.deliveryType
);

// Nominee Information Selectors
export const selectNomineeInformation = createSelector(
  selectQCState,
  (state: QCState) => state.nomineeInformation
);

// Checkbox CH8 Functionality Selectors
export const selectCH8State = createSelector(
  selectQCState,
  (state: QCState) => state.ch8
);

// Underwriter Comments Selectors
export const selectUnderwriterComments = createSelector(
  selectQCState,
  (state: QCState) => state.underwriterComments
);

export const selectUnderwriterCommentsLoading = createSelector(
  selectQCState,
  (state: QCState) => state.underwriterCommentsLoading
);

export const selectUnderwriterCommentsError = createSelector(
  selectQCState,
  (state: QCState) => state.underwriterCommentsError
);

// Rider Details Selectors
export const selectRiderDetails = createSelector(
  selectQCState,
  (state: QCState) => state.riderDetails
);

// Checkbox CH10 Functionality Selectors
export const selectCH10State = createSelector(
  selectQCState,
  (state: QCState) => state.ch10
);

// View Document Button Functionality Selectors
export const selectDocumentPath = createSelector(
  selectQCState,
  (state: QCState) => state.documentPath
);

// Skip Button Functionality Selectors
export const selectSkipButtonState = createSelector(
  selectQCState,
  (state: QCState) => state.skipButton
);
