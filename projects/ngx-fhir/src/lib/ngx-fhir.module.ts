import { NgModule } from '@angular/core';
import { NgxFhirComponent } from './ngx-fhir.component';
import ButtonComponent from './components/button/button.component';
// import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    NgxFhirComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    NgxFhirComponent,
    ButtonComponent
  ]
})
export class NgxFhirModule { }
