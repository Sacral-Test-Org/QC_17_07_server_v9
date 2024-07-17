import { Component, OnInit } from '@angular/core';
import { QcService } from '../../services/qc.service';
import { RiderDetails } from '../../models/rider-details.model';

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})
export class RiderDetailsComponent implements OnInit {
  riderDetails: RiderDetails;

  constructor(private qcService: QcService) {}

  ngOnInit(): void {
    this.qcService.getRiderDetails().subscribe((details: RiderDetails) => {
      this.riderDetails = details;
    });
  }
}
