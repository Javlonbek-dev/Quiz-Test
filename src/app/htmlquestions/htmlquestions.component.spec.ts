import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlquestionsComponent } from './htmlquestions.component';

describe('HtmlquestionsComponent', () => {
  let component: HtmlquestionsComponent;
  let fixture: ComponentFixture<HtmlquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
