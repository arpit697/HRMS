import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UtilityService } from 'src/app/services/utility.service';
import { MAT_DIALOG_RESPONSE } from 'src/app/constant/enums';

@Component({
  selector: 'app-tooltip-popup',
  templateUrl: './tooltip-popup.component.html',
  styleUrls: ['./tooltip-popup.component.scss']
})
export class TooltipPopupComponent implements OnInit {



  contentDetail;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef:MatDialogRef<TooltipPopupComponent>,
    public utilityService: UtilityService
  ) { 

  }

  ngOnInit(): void {
    this.contentDetail = this.data
  }

  close(){
    this.dialogRef.close(MAT_DIALOG_RESPONSE.CLOSE)
  }

}
