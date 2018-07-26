import {Injectable} from '@angular/core';
import {exampleAction, exampleSuccessAction} from '../actions/example.actions';
import {delay, switchMap} from 'rxjs/internal/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';

@Injectable()
export class ExampleEffects {
  @Effect()
  exampleEfffect$ = this.actions
    .pipe(ofType(exampleAction.type),
      switchMap(() => of(exampleSuccessAction))
    );

  constructor(private actions: Actions) {
  }
}
