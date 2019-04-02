import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectDashboardList } from '../../store/selectors/dashboard.selectors';
import { IAppState } from '../../store/state/app.state';
import { IDashboard } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardId: number;
  dashboard: IDashboard;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.dashboardId = Number(this.route.snapshot.paramMap.get('dashboardId'));
    this.store.select(selectDashboardList)
      .subscribe((dashboards) => {
        this.dashboard = dashboards.find((item) => item.id === this.dashboardId);
      });
  }

  addChart() {
    this.router.navigate([`dashboards/${this.dashboardId}/new-chart`]);
  }

}
