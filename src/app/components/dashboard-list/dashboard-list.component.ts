import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectDashboardList } from '../../store/selectors/dashboard.selectors';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  dashboards$ = this.store.select(selectDashboardList);

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDashboard(id: number) {
    this.router.navigate([`dashboards/${id}`]);
  }

}
