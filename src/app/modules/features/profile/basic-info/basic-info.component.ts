import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  constructor(public formBuilder: FormBuilder) {}

  basicInfoForm!: FormGroup;

  ngOnInit(): void {}

  createForm() {
    this.basicInfoForm = this.formBuilder.group({
      first_name: [],
      last_name: [],
      date_of_birth: [],
      gender: [],
      marital_status: [],
      contact_number: [],
      total_experience: [],
      relevant_experience: [],
      address: [],
    });
  }

 
}
