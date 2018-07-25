import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

const mockedData = [
    {foo: 'bar'},
    {foo: 'lorem'},
    {foo: 'test'}
];

@Injectable()
export class ExampleService {
    getList() {
        return of(mockedData)
    }
}