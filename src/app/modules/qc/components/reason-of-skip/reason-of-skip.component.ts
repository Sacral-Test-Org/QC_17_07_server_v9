import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.state';
import { selectReasonOfSkipOptions } from '../../../store/selectors/qc.selectors';
import { saveReasonOfSkip } from '../../../store/actions/qc.actions';

@Component({
  selector: 'app-reason-of-skip',
  templateUrl: './reason-of-skip.component.html',
  styleUrls: ['./reason-of-skip.component.css']
})
export class ReasonOfSkipComponent {
  reasonOptions$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.reasonOptions$ = this.store.select(selectReasonOfSkipOptions);
  }

  onReasonSelect(selectedReason: string): void {
    this.store.dispatch(saveReasonOfSkip({ reason: selectedReason }));
  }
}
