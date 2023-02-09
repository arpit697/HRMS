import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({
  name: "strapi",
})
export class StrapiPipe implements PipeTransform {
  transform(value: string, type: any) {
    if (value) {
      let temp = value.substring(1);
      if (value.indexOf("http://") == 0 || value.indexOf("https://") == 0) {
        // console.log(value);

        return `${value}`;
      }

      return `${environment.STRAPI_BASE_PATH}${temp}`;
    }
  }
}
