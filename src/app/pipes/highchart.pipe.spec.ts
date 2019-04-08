/*
import { TestBed, inject } from '@angular/core/testing';
import { HighchartPipe } from './highchart.pipe';
import { Store, StateObservable } from '@ngrx/store';
import { getInitialState, IAppState } from '../store/state/app.state';
import { Observable } from 'rxjs';

beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [Store]
    });
});

describe('HighchartPipe', () => {
  it('create an instance', inject([Store], (store: Store<IAppState>) => {
    spyOn(store, 'select').and.returnValue(Observable.of({}));
    const pipe = new HighchartPipe(store);
    expect(pipe).toBeTruthy();
  }));
});
*/