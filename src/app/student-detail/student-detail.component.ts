import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FormBase }              from '../dynamic-form/form-base';
import { FormControlService }    from '../dynamic-form/form-control.service';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  providers: [ FormControlService ]
})
export class studentDetailComponent implements OnInit {

  @Input() studentDetails: FormBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.studentDetails);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
