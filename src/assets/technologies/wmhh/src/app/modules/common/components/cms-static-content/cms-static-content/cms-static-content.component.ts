import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STATIC_CONTENT_CMS } from 'src/app/constant/enums';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cms-static-content',
  templateUrl: './cms-static-content.component.html',
  styleUrls: ['./cms-static-content.component.scss']
})
export class CmsStaticContentComponent implements OnInit {


  cmsData;
  pageType = STATIC_CONTENT_CMS

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<CmsStaticContentComponent>,
    private cookiesService: CookieService
  ) { }

  ngOnInit(): void {
    this.cmsData = this.data.content;
  }

  close(){
    this.dialogRef.close();
  }


  optOutCookies(){
    this.cookiesService.deleteAll('/');
    this.close();
    // window.location.reload()
  }

}
