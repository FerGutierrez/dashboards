import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectChartTypes } from '../../store/selectors/config.selector';

@Component({
  selector: 'app-new-chart',
  templateUrl: './new-chart.component.html',
  styleUrls: ['./new-chart.component.scss']
})
export class NewChartComponent implements OnInit {
  dashboardId: number;
  chartTypes$ = this.store.select(selectChartTypes);

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dashboardId = Number(this.route.snapshot.paramMap.get('dashboardId'));
  }

}
