import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPolicyNumber } from '../../store/qc.selectors';
import { QCService } from '../../services/qc.service';
import { Router } from '@angular/router';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-underwriting-comments',
  templateUrl: './underwriting-comments.component.html',
  styleUrls: ['./underwriting-comments.component.css']
})
export class UnderwritingCommentsComponent implements OnInit {
  policyNumber$: Observable<string>;
  comments: Comment[] = [];

  constructor(
    private store: Store,
    private qcService: QCService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.policyNumber$ = this.store.select(selectPolicyNumber);
    this.policyNumber$.subscribe(policyNo => {
      if (policyNo) {
        this.fetchComments(policyNo);
      } else {
        alert('Please enter a policy number.');
      }
    });
  }

  fetchComments(policyNumber: string): void {
    this.qcService.getUnderwritingComments(policyNumber).subscribe(
      (comments: Comment[]) => {
        if (comments.length > 0) {
          this.comments = this.filterComments(comments);
        } else {
          alert('No underwriting comments found for the policy number.');
          this.navigateBack();
        }
      },
      error => {
        console.error('Error fetching comments:', error);
        alert('An error occurred while fetching comments.');
      }
    );
  }

  formatComments(comments: string): string {
    return comments.replace(/[\r\n]+/g, ', ');
  }

  filterComments(comments: Comment[]): Comment[] {
    // Assuming userProfile and userId are available in the component
    const userProfile = 'SUPERVISOR'; // This should be dynamically fetched
    const userId = 'P00123'; // This should be dynamically fetched

    if (userId.startsWith('P00') || (userId.startsWith('UU') && userProfile === 'SUPERVISOR')) {
      return comments;
    } else if (userId.startsWith('UU')) {
      return comments.filter(comment => {
        // Add specific conditions for non-supervisor UU users
        return true; // Placeholder for actual conditions
      });
    }
    return [];
  }

  navigateBack(): void {
    this.router.navigate(['/qc']);
  }
}
