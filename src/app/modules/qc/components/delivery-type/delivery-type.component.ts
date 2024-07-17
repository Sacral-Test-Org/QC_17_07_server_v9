import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/qc.state';
import { selectDeliveryTypes, selectSelectedDeliveryType } from '../../store/qc.selectors';
import { loadDeliveryTypes, selectDeliveryType } from '../../store/qc.actions';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent implements OnInit {
  deliveryTypes$: Observable<string[]>;
  selectedDeliveryType$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.deliveryTypes$ = this.store.select(selectDeliveryTypes);
    this.selectedDeliveryType$ = this.store.select(selectSelectedDeliveryType);
    this.store.dispatch(loadDeliveryTypes());
  }

  onDeliveryTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.store.dispatch(selectDeliveryType({ deliveryType: selectedValue }));
  }
}