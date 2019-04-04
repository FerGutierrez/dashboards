import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Chart } from 'angular-highcharts';

import { selectDashboardList } from '../../store/selectors/dashboard.selectors';
import { IAppState } from '../../store/state/app.state';
import { IDashboard } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboard: IDashboard;
  
  chart = new Chart((<any>{
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  }));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const dashboardId = Number(this.route.snapshot.paramMap.get('dashboardId'));
    this.store.select(selectDashboardList)
      .subscribe((dashboards) => {
        this.dashboard = dashboards.find((item) => item.id === dashboardId);
      });
  }

  addChart() {
    this.router.navigate(['new-chart'], { relativeTo: this.route });
  }

  goToDashboardList() {
    this.router.navigate(['dashboards']);
  }

}
