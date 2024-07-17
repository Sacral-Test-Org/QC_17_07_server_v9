import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Nominee } from '../../models/nominee.model';
import { AppState } from '../../store/qc.reducer';
import { loadNomineeInformation, updateNomineeSelection } from '../../store/qc.actions';
import { selectNomineeInformation } from '../../store/qc.selectors';

@Component({
  selector: 'app-nominee-information',
  templateUrl: './nominee-information.component.html',
  styleUrls: ['./nominee-information.component.css']
})
export class NomineeInformationComponent implements OnInit {
  nomineeInformation$: Observable<Nominee[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadNomineeInformation());
    this.nomineeInformation$ = this.store.select(selectNomineeInformation);
  }

  onRadioButtonChange(nominee: Nominee, selectedValue: string): void {
    const updatedNominee = { ...nominee, selected: selectedValue };
    this.store.dispatch(updateNomineeSelection({ nominee: updatedNominee }));
  }
}
