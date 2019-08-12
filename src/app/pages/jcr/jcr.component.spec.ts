import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcrComponent } from './jcr.component';

describe('JcrComponent', () => {
  let component: JcrComponent;
  let fixture: ComponentFixture<JcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
