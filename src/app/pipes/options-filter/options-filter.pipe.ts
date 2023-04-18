import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionsFilter',
  pure: false,
})
export class OptionsFilterPipe implements PipeTransform {
  transform(items: any, searchText: any): any[] {
    if (!Array.isArray(items)) return [];
    if (!searchText || typeof searchText.value !== 'string') return items;

    const searchValue = searchText.value.trim().toLowerCase();

    return [...items].filter((item: any) => {
      return Object.keys(item).some((key) => {
        const itemValue = String(item[key]).toLowerCase();
        return itemValue.includes(searchValue);
      });
    });
  }
}
