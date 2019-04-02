import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewChartComponent } from './components/new-chart/new-chart.component';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'dashboards/:dashboardId/new-chart',
        component: NewChartComponent
    },
    {
        path: 'dashboards/:dashboardId',
        // canActivate: [ DashboardExistsGuard ],
        component: DashboardComponent
    },
    {
        path: 'dashboards',
        component: DashboardListComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '',
        redirectTo: 'dashboards',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }