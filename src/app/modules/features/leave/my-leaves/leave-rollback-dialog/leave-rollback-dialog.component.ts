import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from '../../../profile/qualification/delete/delete.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leave-rollback-dialog',
  templateUrl: './leave-rollback-dialog.component.html',
  styleUrls: ['./leave-rollback-dialog.component.scss'],
})
export class LeaveRollbackDialogComponent implements OnInit{
  reasonForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LeaveRollbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , 
    private _formBuilder : FormBuilder
  ) {}
  ngOnInit(): void {
    this.reasonForm = this._formBuilder.group({})
  }

  confirmationHandler() {
    this.data = { ...this.data, status: 'Rolled Backed' };
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }
}
