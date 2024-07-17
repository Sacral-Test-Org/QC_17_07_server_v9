import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DispatchService } from '../../services/dispatch.service';

@Component({
  selector: 'app-dispatch-details',
  templateUrl: './dispatch-details.component.html',
  styleUrls: ['./dispatch-details.component.scss']
})
export class DispatchDetailsComponent implements OnInit {
  dispatchDetails: any = {
    shipmentNumber: '',
    airwayBillNumber: '',
    deliveryType: '',
    vendor: '',
    destinationType: '',
    pickRequestNumber: '',
    referenceNumber: '',
    consigneeName: '',
    conAdd1: '',
    conAdd2: '',
    conAdd3: '',
    conCity: '',
    conState: '',
    desPin: '',
    weight: '',
    weightUnit: '',
    gm: 'Grm'
  };

  deliveryTypes: string[] = ['Type1', 'Type2', 'Type3'];
  destinationTypes: string[] = ['TypeA', 'TypeB', 'TypeC'];
  weightUnits: string[] = ['Kg', 'Lb'];

  constructor(private dispatchService: DispatchService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onCheckboxChange(event: any): void {
    if (event.target.checked) {
      this.populateDispatchDetails();
    } else {
      this.clearDispatchDetails();
    }
  }

  populateDispatchDetails(): void {
    const contractId = this.getContractId();

    this.dispatchService.getAddressDetails(contractId).subscribe(address => {
      this.dispatchDetails.conAdd1 = address.address_line1;
      this.dispatchDetails.conAdd2 = address.address_line2;
      this.dispatchDetails.conAdd3 = address.address_line3;
      this.dispatchDetails.desPin = address.postcode;
      this.dispatchDetails.conCity = address.address_line4;
      this.dispatchDetails.conState = address.address_line5;
    });

    this.dispatchService.getConsigneeName(contractId).subscribe(consigneeName => {
      this.dispatchDetails.consigneeName = consigneeName;
    });

    this.dispatchDetails.shipmentNumber = 'PREDEFINED_SHIPMENT_NUMBER';
    this.dispatchDetails.referenceNumber = 'PREDEFINED_REFERENCE';
    this.dispatchDetails.weight = 'PREDEFINED_WEIGHT';
    this.dispatchDetails.deliveryType = 'PREDEFINED_DELIVERY_TYPE';
    this.dispatchDetails.destinationType = 'PREDEFINED_DESTINATION_TYPE';

    // Navigate to the shipment number field
    document.getElementById('shipmentNumber')?.focus();
  }

  clearDispatchDetails(): void {
    this.dispatchDetails = {
      shipmentNumber: '',
      airwayBillNumber: '',
      deliveryType: '',
      vendor: '',
      destinationType: '',
      pickRequestNumber: '',
      referenceNumber: '',
      consigneeName: '',
      conAdd1: '',
      conAdd2: '',
      conAdd3: '',
      conCity: '',
      conState: '',
      desPin: '',
      weight: '',
      weightUnit: '',
      gm: ''
    };
  }

  onSubmit(): void {
    if (this.dispatchDetailsForm.valid) {
      this.dispatchService.saveDispatchDetails(this.dispatchDetails).subscribe(response => {
        // Handle the response after saving the details
      });
    }
  }

  private getContractId(): string {
    // Logic to retrieve the contract ID
    return 'CONTRACT_ID';
  }
}
