import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { studentDetailComponent } from './student-detail/student-detail.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { StudentDetailsService } from './student-detail/student-details.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, studentDetailComponent, DynamicFormComponent],
  bootstrap: [AppComponent],
  providers: [StudentDetailsService]
})
export class AppModule {
  constructor() {
  }
}

