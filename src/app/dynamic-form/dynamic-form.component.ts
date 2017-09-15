import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormBase }     from './form-base';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {
  @Input() studentDetailsControls: FormBase<any>;
  @Input() form: FormGroup;
  get isValid() { 
    return this.form.controls[this.studentDetailsControls.key].valid; 
  }
}
