import { Component } from '@angular/core';
import { StudentDetailsService } from './student-detail/student-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 })
export class AppComponent {
  studentDetails: any[];
  
    constructor(studentdetailsdervice: StudentDetailsService) {
      this.studentDetails = studentdetailsdervice.getQuestions();
    }
}