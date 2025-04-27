import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';
import { FeedBack } from '../feedback';
import {ActivatedRoute, Router } from '@angular/router';
import { FeedbackServiceService } from '../feedback-service.service';

@Component({
  selector: 'app-feedback-user',
  templateUrl: './feedback-user.component.html',
  styleUrls: ['./feedback-user.component.css']
})
export class FeedbackUserComponent {

  feedback: any = {
    ratings: 0,
    overAllRating: 0,
    message: ''
  };

  constructor(
    private route: ActivatedRoute,
    private feedbackService: FeedbackServiceService // Inject the service
  ) { }

  ngOnInit(): void {
  }

  addFeedback(): void {
    const restaurantId = this.route.snapshot.params['restaurantId'];
    const userID = this.route.snapshot.params['userID'];
    
    
    this.feedbackService.addFeedback(restaurantId, userID, this.feedback)
      .subscribe(response => {
        if (response.status === 'success') {
          console.log('Feedback added successfully.');
          // You can redirect to a success page or update the UI as needed.
        } else {
          console.error('Failed to add feedback.');
        }
      });
  }
}
