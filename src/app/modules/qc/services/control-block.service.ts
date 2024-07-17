import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlBlockService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Method to cancel actions
  cancelAction(actionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/cancel`, { actionId });
  }

  // Method to search for policies
  searchPolicies(policyRef: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/control/search`, { params: { policyRef } });
  }

  // Method to reset the form
  resetForm(): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/reset`, {});
  }

  // Method to submit the form
  submitForm(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/submit`, formData);
  }

  // Method to update nominee information
  updateNominee(nomineeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/update-nominee`, nomineeData);
  }

  // Method to view images
  viewImages(policyRef: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/control/view-images`, { params: { policyRef } });
  }

  // Method to enrich data
  enrichData(enrichData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/enrich`, enrichData);
  }

  // Method to handle checkboxes
  handleCheckbox(checkboxData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/handle-checkbox`, checkboxData);
  }

  // Method to manage display items related to policy information
  manageDisplayItems(displayData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/manage-display-items`, displayData);
  }

  // Method to handle user comments and policy status updates
  handleUserCommentsAndStatusUpdates(commentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/handle-comments-status`, commentData);
  }
}
