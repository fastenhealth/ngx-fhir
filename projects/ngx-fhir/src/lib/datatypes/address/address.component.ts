import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import * as fhirpath from 'fhirpath';

@Component({
  selector: 'storybook-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {

  @Input()
  fhirData:any = {};

  city = "static city"
  line = ["static line"]
  state = "static state"
  country = "static country"
  postalCode = "static postalCode"

  ngOnInit(): void {
    // this.fhirData = {"helo": "My Address Button"}
    this.city = fhirpath.evaluate(this.fhirData, "city").join("")
    this.line = fhirpath.evaluate(this.fhirData, "line")
    this.state = fhirpath.evaluate(this.fhirData, "state").join("")
    this.country = fhirpath.evaluate(this.fhirData, "country").join("")
    this.postalCode = fhirpath.evaluate(this.fhirData, "postalCode").join("")
  }
}
