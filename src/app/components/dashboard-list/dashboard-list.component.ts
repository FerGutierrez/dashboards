import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectDashboardList, selectCreatingDashboard } from '../../store/selectors/dashboard.selectors';
import { IAppState } from '../../store/state/app.state';
import { CreateDashboard, EditNewDashboard } from '../../store/actions/dashboard.actions';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  dashboards$ = this.store.select(selectDashboardList);
  creatingDashboard$ = this.store.select(selectCreatingDashboard);

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  editNewDashboard() {
    this.store.dispatch(new EditNewDashboard());
  }

  goToDashboard(id: number) {
    this.router.navigate([`dashboards/${id}`]);
  }

  createDashboard(name: string) {
    this.store.dispatch(new CreateDashboard(name));
  }

}
