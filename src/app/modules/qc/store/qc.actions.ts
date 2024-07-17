import { createAction, props } from '@ngrx/store';
import { QCData } from '../models/qc-data.model';
import { FundDetail } from '../models/fund-detail.model';
import { NomineeInfo } from '../models/nominee-info.model';
import { UnderwriterComment } from '../models/underwriter-comment.model';
import { RiderDetail } from '../models/rider-detail.model';
import { DispatchDetail } from '../models/dispatch-detail.model';
import { Vendor } from '../models/vendor.model';

// Actions for loading QC data
export const loadQCData = createAction('[QC] Load QC Data');
export const loadQCDataSuccess = createAction('[QC] Load QC Data Success', props<{ data: QCData[] }>());
export const loadQCDataFailure = createAction('[QC] Load QC Data Failure', props<{ error: any }>());

// Actions for navigating records
export const navigateToNextRecord = createAction('[QC] Navigate To Next Record');
export const navigateToFirstRecord = createAction('[QC] Navigate To First Record');

// Actions for handling error category selection and alerts
export const setErrorCategory = createAction('[QC] Set Error Category', props<{ errorCategory: number }>());

// Actions for moving a physical copy to the printing bucket
export const moveToPrintingBucket = createAction('[QC] Move To Printing Bucket');
export const confirmMoveToPrintingBucket = createAction('[QC] Confirm Move To Printing Bucket');

// Actions for updating the physical copy status and handling form interactions
export const updatePhysicalCopyStatus = createAction('[QC] Update Physical Copy Status', props<{ status: string }>());
export const clearForm = createAction('[QC] Clear Form');

// Actions for fetching and storing fund details
export const loadFundDetails = createAction('[QC] Load Fund Details', props<{ fundId: string }>());
export const loadFundDetailsSuccess = createAction('[QC] Load Fund Details Success', props<{ fundDetails: FundDetail[] }>());
export const loadFundDetailsFailure = createAction('[QC] Load Fund Details Failure', props<{ error: any }>());

// Actions for managing fund details
export const addFundDetail = createAction('[QC] Add Fund Detail', props<{ fundDetail: FundDetail }>());
export const updateFundDetail = createAction('[QC] Update Fund Detail', props<{ fundDetail: FundDetail }>());

// Actions for Control Block functionalities
export const cancelAction = createAction('[QC] Cancel Action');
export const searchPolicy = createAction('[QC] Search Policy', props<{ policyRef: string }>());
export const resetForm = createAction('[QC] Reset Form');
export const submitForm = createAction('[QC] Submit Form');
export const updateNominee = createAction('[QC] Update Nominee', props<{ nomineeInfo: NomineeInfo }>());
export const viewImages = createAction('[QC] View Images', props<{ applicationNo: string, policyReference: string }>());
export const enrichData = createAction('[QC] Enrich Data');
export const updateCheckboxState = createAction('[QC] Update Checkbox State', props<{ checkboxState: boolean }>());
export const updateUserComments = createAction('[QC] Update User Comments', props<{ comments: string }>());
export const updatePolicyStatus = createAction('[QC] Update Policy Status', props<{ status: string }>());

// Actions for handling checkbox "CH2" functionality
export const navigateToQCSection = createAction('[QC] Navigate To QC Section');

// Actions for updating the QC status and clearing the form
export const updateQCStatus = createAction('[QC] Update QC Status', props<{ policyRef: string }>());

// Actions for handling checkbox "CH1" functionality
export const checkCH1 = createAction('[QC] Check CH1');

// Actions for resetting the QC status and clearing the form
export const resetQCStatus = createAction('[QC] Reset QC Status');

// Actions for handling the selection of the "Reason Of Skip"
export const createReasonOfSkipAction = createAction('[QC] Create Reason Of Skip Action', props<{ reason: string }>());

// Actions for the 'ENRICH' button functionality
export const enrichButtonClick = createAction('[QC] Enrich Button Click');

// Actions for fetching and storing pre-print quality control data
export const fetchPrePrintQcData = createAction('[QC] Fetch Pre-Print QC Data');
export const fetchPrePrintQcDataSuccess = createAction('[QC] Fetch Pre-Print QC Data Success', props<{ data: QCData[] }>());
export const fetchPrePrintQcDataFailure = createAction('[QC] Fetch Pre-Print QC Data Failure', props<{ error: any }>());

// Actions for user authentication
export const authenticateUser = createAction('[QC] Authenticate User', props<{ comments: string, supervisorId: string, password: string }>());

// Actions for handling the state of the multiline text area
export const updateComment = createAction('[QC] Update Comment', props<{ comment: string }>());

// Actions for the "Exit" button functionality
export const exitButtonPressed = createAction('[QC] Exit Button Pressed');

// Actions for handling the 'View Images' button functionality
export const viewImagesButtonClick = createAction('[QC] View Images Button Click', props<{ applicationNo: string, policyReference: string }>());

// Actions for handling the checkbox "CH3" functionality
export const startCH3Iteration = createAction('[QC] Start CH3 Iteration');

// Actions for handling the checkbox "CH5" functionality
export const checkCH5 = createAction('[QC] Check CH5');

// Actions for handling the checkbox functionality and iterating through QC block records
export const iterateQCBlockRecords = createAction('[QC] Iterate QC Block Records');

// Actions for handling the checkbox "CH7" functionality
export const checkCH7 = createAction('[QC] Check CH7');

// Actions for handling the checkbox functionality and iterating through records
export const checkboxTrigger = createAction('[QC] Checkbox Trigger');

// Actions for handling the checkbox "CH27" functionality
export const defineCH27Action = createAction('[QC] Define CH27 Action');

// Actions for handling the checkbox "CH28" functionality
export const toggleCH28 = createAction('[QC] Toggle CH28');

// Actions for handling the checkbox functionality and updating the dispatch details
export const loadDispatchDetails = createAction('[QC] Load Dispatch Details', props<{ dispatchId: string }>());
export const loadDispatchDetailsSuccess = createAction('[QC] Load Dispatch Details Success', props<{ dispatchDetails: DispatchDetail[] }>());
export const loadDispatchDetailsFailure = createAction('[QC] Load Dispatch Details Failure', props<{ error: any }>());

// Actions for handling dispatch details
export const saveDispatchDetails = createAction('[QC] Save Dispatch Details', props<{ dispatchDetail: DispatchDetail }>());

// Actions for handling the vendor selection process
export const loadVendors = createAction('[QC] Load Vendors');
export const loadVendorsSuccess = createAction('[QC] Load Vendors Success', props<{ vendors: Vendor[] }>());
export const loadVendorsFailure = createAction('[QC] Load Vendors Failure', props<{ error: any }>());

// Actions for handling the delivery type selection
export const loadDeliveryTypes = createAction('[QC] Load Delivery Types');
export const selectDeliveryType = createAction('[QC] Select Delivery Type', props<{ deliveryType: string }>());

// Actions for handling nominee information
export const fetchNomineeInfo = createAction('[QC] Fetch Nominee Info', props<{ contractId: string, versionNo: string }>());
export const fetchNomineeInfoSuccess = createAction('[QC] Fetch Nominee Info Success', props<{ nomineeInfo: NomineeInfo }>());
export const fetchNomineeInfoFailure = createAction('[QC] Fetch Nominee Info Failure', props<{ error: any }>());
export const updateNomineeInfo = createAction('[QC] Update Nominee Info', props<{ nomineeInfo: NomineeInfo }>());

// Actions for handling the checkbox "CH8" functionality
export const checkCH8 = createAction('[QC] Check CH8');

// Actions for fetching and displaying underwriter comments
export const fetchUnderwriterComments = createAction('[QC] Fetch Underwriter Comments', props<{ policyNumber: string }>());
export const fetchUnderwriterCommentsSuccess = createAction('[QC] Fetch Underwriter Comments Success', props<{ comments: UnderwriterComment[] }>());
export const fetchUnderwriterCommentsFailure = createAction('[QC] Fetch Underwriter Comments Failure', props<{ error: any }>());

// Actions for handling rider details
export const saveRiderDetails = createAction('[QC] Save Rider Details', props<{ riderDetail: RiderDetail }>());
export const fetchRiderDetails = createAction('[QC] Fetch Rider Details', props<{ contractId: string, versionNo: string }>());
export const fetchRiderDetailsSuccess = createAction('[QC] Fetch Rider Details Success', props<{ riderDetails: RiderDetail[] }>());
export const fetchRiderDetailsFailure = createAction('[QC] Fetch Rider Details Failure', props<{ error: any }>());

// Actions for handling the checkbox "CH10" functionality
export const checkCH10 = createAction('[QC] Check CH10');

// Actions for handling the 'View Document' button functionality
export const viewDocument = createAction('[QC] View Document', props<{ policyRef: string }>());

// Actions for handling the 'Exit' button functionality
export const exitButtonPressed = createAction('[QC] Exit Button Pressed');

// Actions for handling the 'Skip' button functionality
export const skipApplication = createAction('[QC] Skip Application', props<{ reason: string, comments: string }>());
export const skipApplicationSuccess = createAction('[QC] Skip Application Success');
export const skipApplicationFailure = createAction('[QC] Skip Application Failure', props<{ error: any }>());