import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFrequence',
})
export class JobFrequencePipe implements PipeTransform {
  transform(value: number): unknown {
    if (value < 50) {
      return '/hourly';
    } else if (value < 500) {
      return '/weekly';
    } else {
      return '/mountly';
    }
  }
}
