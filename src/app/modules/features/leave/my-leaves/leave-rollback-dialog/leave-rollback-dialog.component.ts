import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from '../../../profile/qualification/delete/delete.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidationService } from 'src/app/services/forms/form.validation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-leave-rollback-dialog',
  templateUrl: './leave-rollback-dialog.component.html',
  styleUrls: ['./leave-rollback-dialog.component.scss'],
})
export class LeaveRollbackDialogComponent implements OnInit {
  reasonForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LeaveRollbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formValidation: FormValidationService,
    private _utility: UtilityService
  ) {}
  ngOnInit(): void {
    this.reasonForm = this._formBuilder.group({
      reason: [null, [...this._formValidation.VALIDATION.required]],
    });
  }

  confirmationHandler() {
    if (this.reasonForm.valid) {
      this.data = { ...this.data, status: 'Rolled Backed' };
      this._utility.bar('Leave Rolled Back Successfully', '', 'green-snackbar');
      this.dialogRef.close(this.data);
    } else {
      this._utility.bar(
        this._utility.formCheck(this.reasonForm),
        '',
        'red-snackbar'
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
