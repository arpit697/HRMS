import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GET_PAGE_CONTENT } from 'src/app/constant/urls';
import { STATIC_CONTENT_CMS } from 'src/app/constant/enums';
import { MatDialog } from '@angular/material/dialog';
import { CmsStaticContentComponent } from '../../common/components/cms-static-content/cms-static-content/cms-static-content.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  async openprivacyPages(){
    const request = {
      pageSlug:STATIC_CONTENT_CMS.PRIVACY_POLICY
    }

    const res = await this.httpService.get(GET_PAGE_CONTENT, {...request}).toPromise();
    if(res){
      this.dialog.open(CmsStaticContentComponent,{
        width:'720px',
        height:'560px',
        data:{
          slug:STATIC_CONTENT_CMS.PRIVACY_POLICY,
          content:res
        }
      })
    }
  }

  async openTermsPages(){
    const request = {
      pageSlug:STATIC_CONTENT_CMS.TERMS
    }

    const res = await this.httpService.get(GET_PAGE_CONTENT, {...request}).toPromise()
    if(res){
        this.dialog.open(CmsStaticContentComponent,{
          width:'720px',
          height:'560px',
          data:{
            slug:STATIC_CONTENT_CMS.TERMS,
            content:res,
          }
        })
    }
  }

  async optOutCookies(){
    const request = {
      pageSlug:STATIC_CONTENT_CMS.COOKES
    }

    const res = await this.httpService.get(GET_PAGE_CONTENT, {...request}).toPromise()
    if(res){
        this.dialog.open(CmsStaticContentComponent,{
          width:'720px',
          height:'560px',
          data:{
            content:res,
            slug:STATIC_CONTENT_CMS.COOKES
          }
        })
    }
  }


}

