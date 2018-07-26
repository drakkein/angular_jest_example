import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { marbles } from 'rxjs-marbles/jest';

import { ExampleEffects } from './example.effects';
import { exampleAction, exampleSuccessAction } from '../actions/example.actions';

describe('ExampleEffects', () => {
  let actions;
  let effects: ExampleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExampleEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ExampleEffects);
  });

  it('should return ExampleSuccessAction', marbles(m => {
    actions = m.hot('-a-|', {a: exampleAction});
    m.expect(effects.exampleEfffect$).toBeObservable('-a-|', {a: exampleSuccessAction});
  }));
});
