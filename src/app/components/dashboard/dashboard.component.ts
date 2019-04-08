import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Chart } from 'angular-highcharts';
import { Subscription } from 'rxjs';

import { selectDashboardList } from '../../store/selectors/dashboard.selectors';
import { IAppState } from '../../store/state/app.state';
import { IDashboard } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboard: IDashboard;
  selectDashboardListSubscription: Subscription;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const dashboardId = Number(this.route.snapshot.paramMap.get('dashboardId'));
    this.selectDashboardListSubscription = this.store.select(selectDashboardList)
      .subscribe((dashboards) => {
        this.dashboard = dashboards.find((item) => item.id === dashboardId);
      });
  }

  ngOnDestroy() {
    this.selectDashboardListSubscription.unsubscribe();
  }

  addChart() {
    this.router.navigate(['new-chart'], { relativeTo: this.route });
  }

  goToDashboardList() {
    this.router.navigate(['dashboards']);
  }

}
