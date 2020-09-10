/**
 * Title: Assignment 9.3
 * Author: Verlee Washington
 * Date: 09/9/2020
 * Description: home components
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, FormArray, CheckboxRequiredValidator, Validators } from '@angular/forms';
import { IRepairService } from '../repair-service.interface';
//import { OrderSummaryDialogComponent } from '../order-summary-dialog/order-summary-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repairServices: Array<IRepairService>;  // variable to hold an array of service objects
  selectedServices: Array<IRepairService>; // variable to hold the selected service objects
  serviceForm: FormGroup; // variable to build the Angular form

  constructor(private fb: FormBuilder) {
    // creates a new array of service objects
    this.repairServices = [
      {
        id: 11,
        title: 'Password Reset',
        price: 39.99,
      },
      {
        id: 12,
        title: 'Spyware Removal',
        price: 99.99
      },
      {
        id: 13,
        title: 'RAM Upgrade',
        price: 129.99
      },
      {
        id: 14,
        title: 'Software Installation',
        price: 49.99
      },
      {
        id: 15,
        title: 'Tune-up',
        price: 89.99
      },
      {
        id: 16,
        title: 'Keyboard Cleaning',
        price: 45.00
      },
      {
        id: 17,
        title: 'Disk Clean-up',
        price: 149.99
      }
    ]
  }

  // returns the FormArray; this is needed to access the serviceOptions field
  get serviceFormArray(): FormArray {
    return this.serviceForm.controls.serviceOptions as FormArray;
  }

  /* dynamically adds form controls to the FormArray. Setting the control to false,
      sets the checked boxes to unselected
  */
 private addRepairServiceCheckboxes(): void {
   this.repairServices.forEach(() => this.serviceFormArray.push(new FormControl(false)));
 }
  ngOnInit(): void {
    // creates a new Angular Reactive Form
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([])
    })

    // adds the checkboxes to the service form
    this.addRepairServiceCheckboxes();
  }

  onSubmit() {
    /*loops through the form and builds a new array only of
    the selected service objects, looking for the checked status
    and using the filter() function to remove the non-selected service objects */

    this.selectedServices = this.serviceForm.value.serviceOptions
    .map((checked, index) => checked ? this.repairServices[index] : null)
    .filter(v => v !== null);


    //this.dialog.open(OrderSummaryDialogComponent)
    // writes the selected objects to the browsers console window
    console.log(this.selectedServices);
  }
}

