import { Pipe, PipeTransform } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { IChart } from '../models/chart.interface';

@Pipe({
  name: 'highchart'
})
export class HighchartPipe implements PipeTransform {

  transform(chart: IChart): Chart {
    chart.options = chart.options || {};

    return new Chart((<any>{    
      chart: {
        type: chart.options.type
      },
      credits: {
        enabled: false
      },
      series: chart.series
    }));
  }

}
