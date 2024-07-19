import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, format: 'date' | 'time' | 'datetime'): string {
    switch (format) {
      case 'date':
        return this.formatDate(value);
      case 'time':
        return this.formatTime(value);
      case 'datetime':
        return this.formatDate(value) + ' ' + this.formatTime(value);
      default:
        return value.toString();
    }
  }

  private formatDate(value: Date): string {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private formatTime(value: Date): string {
    const hours = String(value.getHours()).padStart(2, '0');
    const minutes = String(value.getMinutes()).padStart(2, '0');
    const seconds = String(value.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

}
