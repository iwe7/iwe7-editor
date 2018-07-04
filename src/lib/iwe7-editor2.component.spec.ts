import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iwe7Editor2Component } from './iwe7-editor2.component';

describe('Iwe7Editor2Component', () => {
  let component: Iwe7Editor2Component;
  let fixture: ComponentFixture<Iwe7Editor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iwe7Editor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iwe7Editor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
