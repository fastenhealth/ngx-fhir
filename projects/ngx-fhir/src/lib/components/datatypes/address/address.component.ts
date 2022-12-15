import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AddressModel} from '../../../models/datatypes/address-model';

@Component({
  selector: 'storybook-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {

  @Input()
  fhirData:any = {};

  addressModel: AddressModel = new AddressModel({})

  ngOnInit(): void {
    this.addressModel = new AddressModel(this.fhirData)
  }
}
