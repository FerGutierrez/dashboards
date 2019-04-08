import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChartComponent } from './new-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { appReducers } from '../../store/reducers/app.reducers';
import { Observable } from 'rxjs';

describe('NewChartComponent', () => {
  let component: NewChartComponent;
  let fixture: ComponentFixture<NewChartComponent>;
  let store: Store<IAppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChartComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot(appReducers),
      ],
    }).compileComponents();
  
    store = TestBed.get(Store);

    spyOn(store, 'select').and.returnValue(Observable.of([
      "line",
      "area",
      "bar",
      "column",
      "pie",
      "scatter"
    ]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create chart', () => {
    component.chartForm.controls['name'].setValue('mock chart');
    component.chartForm.controls['type'].setValue('area');
    component.chartForm.controls['series'].setValue([{name: 'mock series', data: [3, 2, 1]}]);
    component.createChart();
  });
});
