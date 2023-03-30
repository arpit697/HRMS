import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../constants/routes';

@Pipe({
  name: 'routing',
})
export class RoutingPipe implements PipeTransform {
  transform(route: any, params?: any) {
    if (route) {
      if (params) {
        //@ts-ignore
        return `${routes[route].fullUrl}/${params}`;
      }
      //@ts-ignore
      return routes[route].fullUrl;
    }
  }
}
