import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Chart } from 'angular-highcharts';
import { IChart } from '../models/chart.interface';
import { selectDefaultChart } from '../store/selectors/config.selector';
import { IAppState } from '../store/state/app.state';

@Pipe({
  name: 'highchart'
})
export class HighchartPipe implements PipeTransform {

  constructor(private store: Store<IAppState>) {}

  transform(chart: IChart): Observable<Chart> {
    return this.store.select(selectDefaultChart)
      .map((defaultChart: any) => {
        const options = Object.assign({}, defaultChart, chart.options, {series: chart.series});   
        return new Chart((<any>options));
      });
  }

}
