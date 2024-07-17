import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QCData, FundDetails, PrePrintQCData, Vendor, RiderDetails } from '../models/qc.models';

@Injectable({
  providedIn: 'root'
})
export class QCService {
  constructor(private http: HttpClient) {}

  // Method to fetch QC data
  getQCData(): Observable<QCData[]> {
    return this.http.get<QCData[]>('/api/qc-data');
  }

  // Method to save QC data
  saveQCData(qcData: QCData): Observable<any> {
    return this.http.post('/api/qc-data', qcData);
  }

  // Method to fetch fund details
  fetchFundDetails(fundId: string): Observable<FundDetails> {
    return this.http.get<FundDetails>(`/api/fund-details/${fundId}`);
  }

  // Method to fetch pre-print QC data
  getPrePrintQcData(): Observable<PrePrintQCData[]> {
    return this.http.get<PrePrintQCData[]>('/api/pre-print-qc-data');
  }

  // Method to authenticate user
  authenticateUser(credentials: { comments: string; supervisorId: string; password: string; }): Observable<any> {
    return this.http.post('/api/authenticate', credentials);
  }

  // Method to fetch vendor data
  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>('/api/vendors');
  }

  // Method to fetch rider details
  getRiderDetails(): Observable<RiderDetails[]> {
    return this.http.get<RiderDetails[]>('/api/rider-details');
  }
}
