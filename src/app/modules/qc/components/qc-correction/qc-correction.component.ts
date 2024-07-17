import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QCService } from '../../services/qc.service';
import { AppState } from '../../store/qc.reducer';
import { getQCData, navigateToNextRecord, navigateToFirstRecord } from '../../store/qc.actions';
import { selectCurrentRecord, selectIsLastRecord } from '../../store/qc.selectors';
import { QCData } from '../../models/qc-data.model';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-qc-correction',
  templateUrl: './qc-correction.component.html',
  styleUrls: ['./qc-correction.component.scss']
})
export class QCCorrectionComponent implements OnInit {
  qcForm: FormGroup;
  qcData$: Observable<QCData[]>;
  currentRecord$: Observable<QCData>;
  isLastRecord$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private qcService: QCService,
    private store: Store<AppState>,
    private logger: LoggerService
  ) {
    this.qcForm = this.fb.group({
      CONTRACT_ID: ['', Validators.required],
      VERSION_NO: ['', Validators.required],
      OBJECT_ID: ['', Validators.required],
      ACTION_CODE: ['', Validators.required],
      TOP_INDICATOR: ['', Validators.required],
      PARTITION_NO: ['', Validators.required],
      COVER_CODE: ['', Validators.required],
      COVER_NO: ['', Validators.required],
      PREVIOUS_VERSION: ['', Validators.required],
      REVERSING_VERSION: ['', Validators.required],
      SUM_INSURED_WHOLE_COVER: ['', Validators.required],
      SUM_INSURED_WHOLE_COVER_SWF: ['', Validators.required],
      SUM_INSURED_COMPANY_SHARE: ['', Validators.required],
      SUM_INSURED_COMPANY_SHARE_SWF: ['', Validators.required],
      FTPREMIUM_OR_WHOLE_COVER: ['', Validators.required],
      FTPREMIUM_OR_WHOLE_COVER_SWF: ['', Validators.required],
      FTPREMIUM_SYS_COMPANY_SHARE: ['', Validators.required],
      FTPREMIUM_SYS_COMP_SHARE_SWF: ['', Validators.required],
      AGENT_COMMISSION_WHOLE_COVER: ['', Validators.required],
      AGENT_COMMISSION_WHOLE_COV_SWF: ['', Validators.required],
      AGENT_COMMISSION_COMPANY_SHARE: ['', Validators.required],
      AGENT_COMMISSION_COM_SHARE_SWF: ['', Validators.required],
      SHARE_PORTION: ['', Validators.required],
      CVC_CODE: ['', Validators.required],
      SURCHARGE_DISCOUNT: ['', Validators.required],
      FTPREMIUM_OR_COMPANY_SHARE: ['', Validators.required],
      FTPREMIUM_OR_COMPANY_SHARE_SWF: ['', Validators.required],
      FTPREMIUM_SYS_WHOLE_COVER: ['', Validators.required],
      FTPREMIUM_SYS_WHOLE_COVER_SWF: ['', Validators.required],
      REINSURABLE_RISK_AMOUNT: ['', Validators.required],
      REINSURABLE_RISK_AMOUNT_SWF: ['', Validators.required],
      PCOV_CONTRACT_ID: ['', Validators.required],
      PCOV_PARTITION_NO: ['', Validators.required],
      PCOV_COVER_CODE: ['', Validators.required],
      PCOV_COVER_NO: ['', Validators.required],
      OPUSVAL: ['', Validators.required],
      RADIO_BUTTON: ['', Validators.required],
      ERROR_CATEGORY: ['', Validators.required]
    });

    this.qcData$ = this.store.select(selectCurrentRecord);
    this.currentRecord$ = this.store.select(selectCurrentRecord);
    this.isLastRecord$ = this.store.select(selectIsLastRecord);
  }

  ngOnInit(): void {
    this.store.dispatch(getQCData());
    this.logger.log(NgxLoggerLevel.INFO, 'QC Correction Component Initialized');
  }

  onSave(): void {
    if (this.qcForm.valid) {
      this.qcService.saveQCData(this.qcForm.value).subscribe(
        () => {
          this.logger.log(NgxLoggerLevel.INFO, 'QC Data saved successfully');
          alert('QC Data saved successfully');
        },
        (error) => {
          this.logger.log(NgxLoggerLevel.ERROR, 'Error saving QC Data', error);
          alert('Error saving QC Data');
        }
      );
    } else {
      this.logger.log(NgxLoggerLevel.WARN, 'QC Form is invalid');
      alert('Please fill all required fields');
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      this.isLastRecord$.subscribe(isLast => {
        if (isLast) {
          this.store.dispatch(navigateToFirstRecord());
        } else {
          this.store.dispatch(navigateToNextRecord());
        }
      });
    }
  }

  handleRadioButtonChange(radioButtonValue: string, errorCategory: number): void {
    if (radioButtonValue === 'N') {
      if (errorCategory === 10 || errorCategory === 11) {
        alert('Please select the error category first');
        this.qcForm.patchValue({ CONTROL_ITEM: 'Y' });
      } else if (errorCategory === 3) {
        this.qcService.fetchSocialStatus(this.qcForm.value.CONTRACT_ID).subscribe(
          (socialStatus) => {
            if (socialStatus === 'rural') {
              alert('Social status is rural');
            }
          },
          (error) => {
            this.logger.log(NgxLoggerLevel.ERROR, 'Error fetching social status', error);
          }
        );
      }
    } else if (radioButtonValue === 'Y') {
      if (errorCategory === 10 || errorCategory === 11) {
        this.qcForm.patchValue({ CONTROL_ITEM: 'N' });
      }
    }
  }
}
