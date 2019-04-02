import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs/observable';

import { IAppState } from '../../store/state/app.state';
import { selectChartTypes } from '../../store/selectors/config.selector';
import { ISeries } from '../../models/series.interface';
import { AddChart } from '../../store/actions/dashboard.actions';
import { IChart } from '../../models/chart.interface';

@Component({
  selector: 'app-new-chart',
  templateUrl: './new-chart.component.html',
  styleUrls: ['./new-chart.component.scss']
})
export class NewChartComponent implements OnInit {
  dashboardId: number;
  chartTypes$ = this.store.select(selectChartTypes);
  chartForm = this.fb.group({
    name: ['', Validators.required],
    type: ['line'],
    series: this.fb.array([
      this.fb.group({
        name: ['', Validators.required],
        data: ['', Validators.required]
      })
    ])
  });

  get series() {
    return this.chartForm.get('series') as FormArray;
  }

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dashboardId = Number(this.route.snapshot.paramMap.get('dashboardId'));
  }

  addSeries() {
    this.series.push(
      this.fb.group({
        name: [''],
        data: ['']
      }));
  }

  createChart() {
    const newChart: IChart = {
      name: this.chartForm.value.name,
      series: this.chartForm.value.series.map(this.mapSeries),
      options: {
        chart: {
          type: this.chartForm.value.type
        }
      }
    };

    this.store.dispatch(new AddChart({
      chart: newChart,
      dashboardId: this.dashboardId
    }));

    this.router.navigate([`dashboards/${this.dashboardId}`]);
  }

  private mapSeries(series: ISeries): ISeries {
    return {
      name: series.name,
      data: JSON.parse(`[${series.data}]`)
    };
  }

}
