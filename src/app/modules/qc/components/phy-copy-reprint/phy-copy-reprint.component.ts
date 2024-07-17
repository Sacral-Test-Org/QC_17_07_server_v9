import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhyCopyReprintService } from '../../services/phy-copy-reprint.service';
import { moveToPrintingBucket, confirmMoveToPrintingBucket } from '../../store/qc.actions';
import { AppState } from '../../store/qc.reducer';

@Component({
  selector: 'app-phy-copy-reprint',
  templateUrl: './phy-copy-reprint.component.html',
  styleUrls: ['./phy-copy-reprint.component.css']
})
export class PhyCopyReprintComponent implements OnInit {
  selectedOption: string = 'X';

  constructor(
    private store: Store<AppState>,
    private phyCopyReprintService: PhyCopyReprintService
  ) {}

  ngOnInit(): void {
    this.selectedOption = 'X';
  }

  onSelectionChange(event: any): void {
    this.selectedOption = event.target.value;
    this.storeSelection(this.selectedOption);
  }

  storeSelection(selection: string): void {
    this.phyCopyReprintService.storeSelection(selection).subscribe(
      response => {
        console.log('Selection stored successfully', response);
      },
      error => {
        console.error('Error storing selection', error);
      }
    );
  }

  onMoveToPrintingBucket(): void {
    this.store.dispatch(moveToPrintingBucket());
  }

  onConfirm(): void {
    this.store.dispatch(confirmMoveToPrintingBucket());
    this.phyCopyReprintService.confirmMoveToPrintingBucket().subscribe(
      response => {
        console.log('Move to printing bucket confirmed', response);
      },
      error => {
        console.error('Error confirming move to printing bucket', error);
      }
    );
  }

  onOkButtonClick(): void {
    if (this.selectedOption === 'Y' || this.selectedOption === 'N') {
      this.phyCopyReprintService.updatePhysicalCopyStatus(this.selectedOption).subscribe(
        response => {
          if (response.success) {
            this.clearForm();
            this.setFocusToPolicyRef();
          } else {
            alert('Data Not Updated.');
          }
        },
        error => {
          console.error('Error updating physical copy status', error);
        }
      );
    } else {
      alert('Choose any one of the above options.');
    }
  }

  clearForm(): void {
    // Logic to clear the form
  }

  setFocusToPolicyRef(): void {
    // Logic to set focus to the policy reference field
  }
}
