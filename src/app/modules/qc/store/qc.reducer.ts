import { createReducer, on } from '@ngrx/store';
import * as QCActions from './qc.actions';
import { QCData } from '../models/qc-data.model';

export interface QCState {
  data: QCData[];
  loading: boolean;
  error: any;
  enrichButtonClicked: boolean;
  prePrintQcData: any;
  comment: string;
  dispatchDetails: any;
  vendors: any[];
  deliveryType: string;
  nomineeInfo: any;
  underwriterComments: any[];
  riderDetails: any;
  viewDocument: any;
  skipApplicationStatus: any;
}

export const initialState: QCState = {
  data: [],
  loading: false,
  error: null,
  enrichButtonClicked: false,
  prePrintQcData: null,
  comment: '',
  dispatchDetails: null,
  vendors: [],
  deliveryType: '',
  nomineeInfo: null,
  underwriterComments: [],
  riderDetails: null,
  viewDocument: null,
  skipApplicationStatus: null,
};

export const qcReducer = createReducer(
  initialState,
  on(QCActions.loadQCData, state => ({ ...state, loading: true })),
  on(QCActions.loadQCDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(QCActions.loadQCDataFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(QCActions.navigateToNextRecord, state => ({ ...state, /* logic to navigate to next record */ })),
  on(QCActions.navigateToFirstRecord, state => ({ ...state, /* logic to navigate to first record */ })),
  on(QCActions.setErrorCategory, (state, { errorCategory }) => ({ ...state, errorCategory })),
  on(QCActions.updatePhysicalCopyStatus, (state, { status }) => ({ ...state, physicalCopyStatus: status })),
  on(QCActions.addFundDetail, (state, { fundDetail }) => ({ ...state, fundDetails: [...state.fundDetails, fundDetail] })),
  on(QCActions.updateFundDetail, (state, { fundDetail }) => ({
    ...state,
    fundDetails: state.fundDetails.map(fd => fd.id === fundDetail.id ? fundDetail : fd)
  })),
  on(QCActions.controlBlockAction, (state, { controlBlockData }) => ({ ...state, controlBlockData })),
  on(QCActions.updateQCStatus, (state, { qcStatus }) => ({ ...state, qcStatus })),
  on(QCActions.clearForm, state => ({ ...state, form: null })),
  on(QCActions.reasonOfSkip, (state, { reason }) => ({ ...state, reasonOfSkip: reason })),
  on(QCActions.enrichButtonClick, state => ({ ...state, enrichButtonClicked: true })),
  on(QCActions.fetchPrePrintQcData, state => ({ ...state, prePrintQcData: null })),
  on(QCActions.fetchPrePrintQcDataSuccess, (state, { data }) => ({ ...state, prePrintQcData: data })),
  on(QCActions.fetchPrePrintQcDataFailure, state => ({ ...state, prePrintQcData: null })),
  on(QCActions.authenticateUser, (state, { user }) => ({ ...state, authenticatedUser: user })),
  on(QCActions.updateComment, (state, { comment }) => ({ ...state, comment })),
  on(QCActions.exitButtonPressed, state => ({ ...state, currentView: 'QC_BLOCK' })),
  on(QCActions.viewImages, (state, { images }) => ({ ...state, viewImages: images })),
  on(QCActions.checkCH3, state => ({ ...state, /* logic to handle CH3 checkbox */ })),
  on(QCActions.checkCH5, state => ({ ...state, /* logic to handle CH5 checkbox */ })),
  on(QCActions.checkboxTrigger, state => ({ ...state, /* logic to handle checkbox trigger */ })),
  on(QCActions.handleCH27Action, state => ({ ...state, /* logic to handle CH27 action */ })),
  on(QCActions.toggleCH28, state => ({ ...state, /* logic to handle CH28 action */ })),
  on(QCActions.loadDispatchDetails, state => ({ ...state, dispatchDetails: null })),
  on(QCActions.loadDispatchDetailsSuccess, (state, { details }) => ({ ...state, dispatchDetails: details })),
  on(QCActions.clearDispatchDetails, state => ({ ...state, dispatchDetails: null })),
  on(QCActions.loadVendors, state => ({ ...state, loading: true })),
  on(QCActions.loadVendorsSuccess, (state, { vendors }) => ({ ...state, loading: false, vendors })),
  on(QCActions.loadVendorsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(QCActions.selectDeliveryType, (state, { deliveryType }) => ({ ...state, deliveryType })),
  on(QCActions.insertNomineeInfo, (state, { nomineeInfo }) => ({ ...state, nomineeInfo })),
  on(QCActions.updateNomineeInfo, (state, { nomineeInfo }) => ({
    ...state,
    nomineeInfo: state.nomineeInfo.map(ni => ni.id === nomineeInfo.id ? nomineeInfo : ni)
  })),
  on(QCActions.checkCH8, state => ({ ...state, /* logic to handle CH8 checkbox */ })),
  on(QCActions.fetchUnderwriterComments, state => ({ ...state, loading: true })),
  on(QCActions.fetchUnderwriterCommentsSuccess, (state, { comments }) => ({ ...state, loading: false, underwriterComments: comments })),
  on(QCActions.fetchUnderwriterCommentsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(QCActions.saveRiderDetails, (state, { riderDetails }) => ({ ...state, riderDetails })),
  on(QCActions.fetchRiderDetails, (state, { riderDetails }) => ({ ...state, riderDetails })),
  on(QCActions.checkCH10, state => ({ ...state, /* logic to handle CH10 checkbox */ })),
  on(QCActions.viewDocument, (state, { document }) => ({ ...state, viewDocument: document })),
  on(QCActions.skipApplication, state => ({ ...state, skipApplicationStatus: 'loading' })),
  on(QCActions.skipApplicationSuccess, state => ({ ...state, skipApplicationStatus: 'success' })),
  on(QCActions.skipApplicationFailure, (state, { error }) => ({ ...state, skipApplicationStatus: 'failure', error }))
);