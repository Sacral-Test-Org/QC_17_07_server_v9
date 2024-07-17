import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QcService } from '../../services/qc.service';

@Component({
  selector: 'app-skip-application',
  templateUrl: './skip-application.component.html',
  styleUrls: ['./skip-application.component.css']
})
export class SkipApplicationComponent {
  skipForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private qcService: QcService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.skipForm = this.fb.group({
      reason: ['', Validators.required],
      comments: ['']
    });
  }

  onSkipButtonClick(): void {
    if (this.skipForm.invalid) {
      this.snackBar.open('Please Select Reason For Skipping Application.', 'Close', {
        duration: 3000
      });
      return;
    }

    const reason = this.skipForm.get('reason')?.value;
    const comments = this.skipForm.get('comments')?.value;

    if (reason === 'OTHERS' && !comments) {
      this.snackBar.open('Please Enter comments.', 'Close', {
        duration: 3000
      });
      return;
    }

    this.qcService.skipApplication(reason, comments).subscribe(
      response => {
        this.snackBar.open('Application skipped successfully.', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/']);
      },
      error => {
        this.snackBar.open('Error skipping application. Please try again.', 'Close', {
          duration: 3000
        });
      }
    );
  }
}
