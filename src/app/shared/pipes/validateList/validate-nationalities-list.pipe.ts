import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateNationalitiesList'
})
export class ValidateNationalitiesListPipe implements PipeTransform {

  transform(items: unknown, args: unknown[]): unknown {
    console.log(args)
    return args.filter((item: any) => item.demonym !== '');
  }

}
