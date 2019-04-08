import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './store/effects/config.effects';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';

import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewChartComponent } from './components/new-chart/new-chart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { HighchartPipe } from './pipes/highchart.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardListComponent,
    DashboardComponent,
    NewChartComponent,
    NotFoundComponent,
    ErrorComponent,
    HighchartPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ConfigEffects]),
    ChartModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
