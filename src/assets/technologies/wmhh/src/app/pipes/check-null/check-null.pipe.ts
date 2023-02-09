import { Pipe, PipeTransform } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Pipe({
  name: 'checkNull'
})

export class CheckNullPipe implements PipeTransform {
  loderStatus:boolean=false;
  constructor(private _loaderService:LoaderService) {
    this._loaderService.loader.subscribe(flag=>{
      this.loderStatus=flag;
    })
  }

  transform(value: any, args?: any): any {
    if(!this.loderStatus){
      return (value !== undefined && value !== null) ? value : 'N/A'
    }else{
      return;
    }
  }

}