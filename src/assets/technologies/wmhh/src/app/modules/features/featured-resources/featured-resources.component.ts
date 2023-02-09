import { Component, OnInit } from '@angular/core';
import { PAGE_OPTIONS } from 'src/app/constant/app-constant';
import { HttpService } from 'src/app/services/http.service';
import { GET_FEATURED_BY_SECTOR } from 'src/app/constant/urls';
import { ActivatedRoute } from '@angular/router';
import { PAGE_DATA_TYPE } from 'src/app/constant/enums';

@Component({
  selector: 'app-featured-resources',
  templateUrl: './featured-resources.component.html',
  styleUrls: ['./featured-resources.component.scss']
})
export class FeaturedResourcesComponent implements OnInit {

  resourceList: Array<any> = [];
  nextPageExists: boolean = false;
  pageOptions: any = { ...PAGE_OPTIONS };
  total;

  sectorId:string;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute

  ) {

    this.sectorId = this.route.snapshot.paramMap.get('sectorId')
    this.getFeaturedResourceList();

  }

  ngOnInit(): void {}

  /**
   * Gets featured resource list
   */
  async getFeaturedResourceList() {

    const request = {
      pagedatatype:PAGE_DATA_TYPE.FETUREDPOST,
      sectors: this.sectorId,
      ...this.pageOptions
    }

    const response = await this.httpService.get(GET_FEATURED_BY_SECTOR, {...request}).toPromise()
    if(response.data){
      this.total = response.data.total
      this.resourceList.push(...response.data.data)
      this.nextPageExists = response.data.next;
    }
  }

  /**
   * Will handle infinite scroll
   */
  onScroll() {
    if (this.nextPageExists) {
      this.pageOptions.page = this.pageOptions.page + 1;
      this.getFeaturedResourceList();
    }
  }

}
