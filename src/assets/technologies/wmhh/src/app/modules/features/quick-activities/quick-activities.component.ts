import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GET_FEATURED_BY_SECTOR } from 'src/app/constant/urls';
import { PAGE_OPTIONS_100 ,CONTENT_TYPE, MODULENAMES} from 'src/app/constant/app-constant';
import { PAGE_DATA_TYPE,   } from 'src/app/constant/enums';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-quick-activities',
  templateUrl: './quick-activities.component.html',
  styleUrls: ['./quick-activities.component.scss']
})
export class QuickActivitiesComponent implements OnInit {

  
  quickActivitiesList = [];
  total;
  scrollLeftCount: number = 0;
  showScrollRight: boolean = true;

  contentType = CONTENT_TYPE;
  
  constructor(
    private httpService: HttpService,
    private router: Router,
    public utilityService: UtilityService
  ) { 


    this.getQuickActivitiesListing()
  }

  ngOnInit(): void {
  }


  async getQuickActivitiesListing(){
    const reqquery = {
        ...PAGE_OPTIONS_100,
        pagedatatype:PAGE_DATA_TYPE.QUICKACTIVITY,
    }
    const response = await this.httpService.get(GET_FEATURED_BY_SECTOR,{...reqquery}).toPromise();
    if(response.data){

      this.quickActivitiesList = [...this.utilityService.checkLikedListContent(response.data.data)];
      this.total = response.data.total;
    }
  }


   scrollLeft() {
    document.getElementById("web-rec").scrollTo({
      top: 0,
      left: document.getElementById("web-rec").scrollLeft - 350,
      behavior: "smooth",
    });
    this.scrollLeftCount = this.scrollLeftCount - 350;
    this.showScrollRight = true;
  }

  scrollRight() {
    document.getElementById("web-rec").scrollTo({
      top: 0,
      left: document.getElementById("web-rec").scrollLeft + 350,
      behavior: "smooth",
    });


    this.scrollLeftCount = this.scrollLeftCount + 350;


    if (
      this.scrollLeftCount >=
      document.getElementById("web-rec").scrollWidth -
        document.getElementById("web-rec").clientWidth
    ) {
      this.showScrollRight = false;
    }
  }
}
