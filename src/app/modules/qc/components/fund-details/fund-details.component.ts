import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/qc.state';
import { loadFundDetails } from '../../store/qc.actions';
import { selectFundDetails } from '../../store/qc.selectors';
import { FundDetails } from '../../models/fund-details.model';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.css']
})
export class FundDetailsComponent implements OnInit {
  fundDetails$: Observable<FundDetails>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadFundDetails());
    this.getFundDetails();
  }

  getFundDetails(): void {
    this.fundDetails$ = this.store.select(selectFundDetails);
  }
}