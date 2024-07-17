// src/app/modules/qc/qc.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxLoggerModule } from 'ngx-logger';

import { QCViewComponent } from './components/qc-view/qc-view.component';
import { PhyCopyReprintComponent } from './components/phy-copy-reprint/phy-copy-reprint.component';
import { FundDetailsComponent } from './components/fund-details/fund-details.component';
import { FundManagementComponent } from './components/fund-management/fund-management.component';
import { ControlBlockComponent } from './components/control-block/control-block.component';
import { ReasonOfSkipComponent } from './components/reason-of-skip/reason-of-skip.component';
import { PrePrintQcComponent } from './components/pre-print-qc/pre-print-qc.component';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';
import { SupervisorIdComponent } from './components/supervisor-id/supervisor-id.component';
import { ExitButtonComponent } from './components/exit-button/exit-button.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';
import { DispatchDetailsComponent } from './components/dispatch-details/dispatch-details.component';
import { GMFieldComponent } from './components/gm-field/gm-field.component';
import { VendorSelectionComponent } from './components/vendor-selection/vendor-selection.component';
import { DeliveryTypeComponent } from './components/delivery-type/delivery-type.component';
import { NomineeInfoComponent } from './components/nominee-info/nominee-info.component';
import { UnderwritingCommentsComponent } from './components/underwriting-comments/underwriting-comments.component';
import { RiderDetailsComponent } from './components/rider-details/rider-details.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { SkipApplicationComponent } from './components/skip-application/skip-application.component';

import { qcReducer } from './store/qc.reducer';
import { QCEffects } from './store/qc.effects';

@NgModule({
  declarations: [
    QCViewComponent,
    PhyCopyReprintComponent,
    FundDetailsComponent,
    FundManagementComponent,
    ControlBlockComponent,
    ReasonOfSkipComponent,
    PrePrintQcComponent,
    UserAuthenticationComponent,
    SupervisorIdComponent,
    ExitButtonComponent,
    ViewImagesComponent,
    DispatchDetailsComponent,
    GMFieldComponent,
    VendorSelectionComponent,
    DeliveryTypeComponent,
    NomineeInfoComponent,
    UnderwritingCommentsComponent,
    RiderDetailsComponent,
    ViewDocumentComponent,
    SkipApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('qc', qcReducer),
    EffectsModule.forFeature([QCEffects]),
    NgxLoggerModule.forRoot({ level: NgxLoggerModule.LOG_LEVEL.DEBUG })
  ],
  providers: []
})
export class QCModule {}