import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardListComponent } from './dashboard-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { appReducers } from '../../store/reducers/app.reducers';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;
  let store: Store<IAppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(appReducers),
      ],
    }).compileComponents();
  
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should allow to edit new dashboard', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeFalsy();
    component.editNewDashboard();
  });
  
  it('should create a new dashboard', () => {
    component.createDashboard('New dashboard');
  });
});
