import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssquestionsComponent } from './cssquestions.component';

describe('CssquestionsComponent', () => {
  let component: CssquestionsComponent;
  let fixture: ComponentFixture<CssquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
