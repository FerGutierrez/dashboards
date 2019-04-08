import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { appReducers } from './store/reducers/app.reducers';

describe('AppComponent', () => {
  let store: Store<IAppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(appReducers),
      ],
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it('should render Loading... in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.loading$ = Observable.of(true);
    expect(compiled.querySelector('h1').textContent).toContain('Loading...');
  }));
});
