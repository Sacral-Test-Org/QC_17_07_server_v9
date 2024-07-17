import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhyCopyReprintService {

  private baseUrl = 'http://localhost:8080/api/qc'; // Base URL for the backend API

  constructor(private httpClient: HttpClient) { }

  /**
   * Move the physical copy to the printing bucket.
   * @returns {Observable<any>} - Observable containing the response from the API call.
   */
  moveToPrintingBucket(): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/moveToPrintingBucket`, {});
  }

  /**
   * Store the selected value in the backend.
   * @param {string} selection - The selected value, either "X" or "Y".
   * @returns {Observable<any>} - Observable containing the response from the API call.
   */
  storeSelection(selection: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/storeSelection`, { selection });
  }

  /**
   * Update the physical copy status in the database.
   * @param {string} policyNumber - The policy number.
   * @param {string} status - The status to be updated.
   * @returns {Observable<any>} - Observable containing the response from the API call.
   */
  updatePhysicalCopyStatus(policyNumber: string, status: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/updatePhysicalCopyStatus`, { policyNumber, status });
  }
}
