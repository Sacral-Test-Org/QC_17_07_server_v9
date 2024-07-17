import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ControlBlockService } from '../../services/control-block.service';
import { QCService } from '../../services/qc.service';
import { AppState } from '../../store/qc.reducer';
import { updateQCStatus, resetQCStatus, enrichButtonHandler, exitButtonPressed } from '../../store/qc.actions';

@Component({
  selector: 'app-control-block',
  templateUrl: './control-block.component.html',
  styleUrls: ['./control-block.component.css']
})
export class ControlBlockComponent {
  constructor(
    private controlBlockService: ControlBlockService,
    private qcService: QCService,
    private store: Store<AppState>
  ) {}

  onCH2CheckboxChange(event: any): void {
    if (event.target.checked) {
      this.navigateToQCSection();
      this.store.dispatch({ type: '[QC] CH2 Checkbox Checked' });
    }
  }

  onSearchButtonClick(): void {
    this.qcService.updateQCStatus().subscribe(() => {
      this.store.dispatch({ type: '[QC] Clear Form Without Validation' });
    });
  }

  onCH1CheckboxChange(event: any): void {
    if (event.target.checked) {
      this.navigateToQCSection();
      this.store.dispatch({ type: '[QC] CH1 Checkbox Checked' });
    }
  }

  onResetButtonClick(): void {
    this.qcService.resetQCStatus().subscribe(() => {
      this.clearForm();
      this.enableSubItem();
    });
  }

  onEnrichButtonClick(): void {
    this.qcService.enrichButtonHandler().subscribe(response => {
      if (response.success) {
        // Handle success
      } else {
        // Handle error
      }
    });
  }

  onCH3CheckboxChange(event: any): void {
    if (event.target.checked) {
      this.navigateToQCSection();
      this.store.dispatch({ type: '[QC] CH3 Checkbox Checked' });
    }
  }

  onCH5CheckboxChange(event: any): void {
    if (event.target.checked) {
      this.navigateToQCSection();
      this.store.dispatch({ type: '[QC] CH5 Checkbox Checked' });
    }
  }

  onExitButtonClick(): void {
    this.store.dispatch(exitButtonPressed());
  }

  private navigateToQCSection(): void {
    // Logic to navigate to QC section
  }

  private clearForm(): void {
    // Logic to clear the form
  }

  private enableSubItem(): void {
    // Logic to enable the 'sub' item
  }
}
