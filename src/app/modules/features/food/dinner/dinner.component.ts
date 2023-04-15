import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DSR_PROJECT_DROP_DOWN } from 'src/app/constants/drop.down.data';
import { EDITOR_CONFIG } from 'src/app/constants/editor.config';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss'],
})
export class DinnerComponent implements OnInit {
  projects = DSR_PROJECT_DROP_DOWN;
  content: string = '';
  panelOpenState: boolean = false;
  editorConfig = { ...EDITOR_CONFIG };
  dinnerRequestForm!: FormGroup;

  constructor(private _formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.dinnerRequestForm = this._formbuilder.group({
      date: [],
      reason: [],
      project: [],
    });
  }
  submitHandler() {}

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
