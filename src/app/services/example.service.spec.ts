import { TestBed, async } from "@angular/core/testing";

import { ExampleService } from './example.service';

import { first } from 'rxjs/operators';

describe('ExampleService', () => {
    let service: ExampleService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ExampleService,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.get(ExampleService);
    });

    it('Should match snapshot', () => {
        const data = service.getList()
            .pipe(first())
            .subscribe(v => {
                expect(v).toMatchSnapshot();
            })
    });
});