import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { appReducers } from '../../store/reducers/app.reducers';
import { HighchartPipe } from '../../pipes/highchart.pipe';
import { ChartModule } from 'angular-highcharts';
import { Observable } from 'rxjs';
import { IDashboard } from '../../models/dashboard.interface';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<IAppState>;

  const mockDashboard = (<IDashboard>{
    id: 0,
    name: 'Mock dashboard',
    charts: [{
      id: 0,
      colspan: 4,
      name: 'Mock chart',
      series: [{
        name: 'Mock series',
        data: [1, 2, 3]
      }]
    }]
  });

  beforeEach(async(() => {
    setTimeout(() => {
      TestBed.configureTestingModule({
        declarations: [
          DashboardComponent,
          HighchartPipe,
        ],
        imports: [
          RouterTestingModule,
          StoreModule.forRoot(appReducers),
          ChartModule,
        ],
        providers: [{
          provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: { 
                get: (param) => 0
              }
            }
          }
        }]
      }).compileComponents();
    
      store = TestBed.get(Store);
      spyOn(store, 'select').and.returnValue(Observable.of([mockDashboard]));
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }, 0);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
