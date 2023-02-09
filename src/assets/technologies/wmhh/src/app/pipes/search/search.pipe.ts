import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], text: string, key?: string): any[] {
    const search = text && text.trim();

    return search && list
      ? list.filter((item) => {
          return (
            (key
              ? item[key].toLocaleLowerCase()
              : item.toLocaleLowerCase()
            ).indexOf(search.toLocaleLowerCase()) >= 0
          );
        })
      : list;
  }
}
