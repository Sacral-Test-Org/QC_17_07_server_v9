import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QCService } from '../../services/qc.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/qc.reducer';
import { authenticateUser } from '../../store/qc.actions';
import { selectAuthenticationStatus } from '../../store/qc.selectors';
import { LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {
  authForm: FormGroup;
  authStatus$ = this.store.select(selectAuthenticationStatus);

  constructor(
    private fb: FormBuilder,
    private qcService: QCService,
    private store: Store<AppState>,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      comments: ['', [Validators.maxLength(500)]],
      supervisorId: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10)]]
    });

    this.authForm.get('supervisorId').valueChanges.subscribe(value => {
      this.onSupervisorIdChange(value);
    });
  }

  onSupervisorIdChange(value: string): void {
    const upperCaseValue = value.toUpperCase();
    this.authForm.get('supervisorId').setValue(upperCaseValue, { emitEvent: false });
  }

  onPasswordFieldExit(): void {
    // Apply visual attribute "VA_TEXT_ITEM" to the password field upon exit
    // This is a placeholder for the actual implementation of visual attribute application
  }

  onCommentChange(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    if (input.value.length > 500) {
      input.value = input.value.substring(0, 500);
    }
    this.authForm.get('comments').setValue(input.value);
  }

  validateForm(): boolean {
    if (!this.authForm.get('supervisorId').value) {
      this.logger.error('Supervisor ID is required');
      return false;
    }
    if (!this.authForm.get('password').value) {
      this.logger.error('Password is required');
      return false;
    }
    return true;
  }

  onSubmit(): void {
    if (this.validateForm()) {
      const { supervisorId, password, comments } = this.authForm.value;
      this.store.dispatch(authenticateUser({ supervisorId, password, comments }));
    }
  }
}
