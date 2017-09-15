import { Injectable }       from '@angular/core';

import { DropdownControl } from '../dynamic-form/dropdown-control';
import { FormBase }     from '../dynamic-form/form-base';
import { TextboxControl }  from '../dynamic-form/textbox-control';

@Injectable()
export class StudentDetailsService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let studentDetails: FormBase<any>[] = [

      new DropdownControl({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxControl({
        key: 'firstName',
        label: 'First name',
        value: 'kalai',
        required: true,
        order: 1
      }),

      new TextboxControl({
        key: 'lastname',
        label: 'Last name',
        value: 'kalai',
        required: true,
        order: 2
      }),

      new TextboxControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxControl({
        key: 'conditional',
        label: 'Conditional Field',
        type: 'text',
        condition: 'brave', //brave.value == solid. How to define a expression based on the value of others fields?
        order: 5,
        minLength:3
      })
    ];

    return studentDetails.sort((a, b) => a.order - b.order);
  }
}
