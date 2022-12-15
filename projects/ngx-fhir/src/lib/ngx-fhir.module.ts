import { NgModule } from '@angular/core';
import { NgxFhirComponent } from './ngx-fhir.component';
import { ButtonComponent } from './components/resources/button/button.component';
import { AddressComponent } from './components/datatypes/address/address.component';
import {NgClass, NgStyle} from '@angular/common';
// import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    NgxFhirComponent,
    ButtonComponent,
    AddressComponent
  ],
  imports: [
    NgStyle,
    NgClass
  ],
  exports: [
    NgxFhirComponent,
    ButtonComponent,
    AddressComponent
  ]
})
export class NgxFhirModule { }
