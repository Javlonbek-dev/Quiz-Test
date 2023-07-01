import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsquestionsComponent } from './jsquestions.component';

describe('JsquestionsComponent', () => {
  let component: JsquestionsComponent;
  let fixture: ComponentFixture<JsquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
