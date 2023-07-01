import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsquestionsComponent } from './tsquestions.component';

describe('TsquestionsComponent', () => {
  let component: TsquestionsComponent;
  let fixture: ComponentFixture<TsquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
