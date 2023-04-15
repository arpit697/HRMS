import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {
  transform(array: any[], chunkSize: number): any[] {
    if (!Array.isArray(array)) return array;
    return array.reduce((chunks, item, index) => {
      if (index % chunkSize === 0) chunks.push([]);
      chunks[chunks.length - 1].push(item);
      return chunks;
    }, []);
  }
}
