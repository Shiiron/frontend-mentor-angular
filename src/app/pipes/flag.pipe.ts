import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flag',
  standalone: true,
})
export class FlagPipe implements PipeTransform {
  transform(flags: { png: string; svg: string } | undefined): string | null {
    if (flags) {
      return flags.svg ? flags.svg : flags.png;
    } else {
      return null;
    }
  }
}
