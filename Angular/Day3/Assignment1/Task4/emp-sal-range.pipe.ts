import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empSalRange',
  pure : true
})
export class EmpSalRangePipe implements PipeTransform {

  transform(inputData: any[], value1: number, value2: number): any[] {
    if(value1 !=0 && value2 !==0){
      return inputData.filter(item => item.empSal <= value2 && item.empSal >= value1);
      }else {
        return inputData;
      }
  
    }
  }
