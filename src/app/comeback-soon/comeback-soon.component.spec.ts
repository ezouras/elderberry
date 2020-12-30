import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComebackSoonComponent } from './comeback-soon.component';

describe('ComebackSoonComponent', () => {
  let component: ComebackSoonComponent;
  let fixture: ComponentFixture<ComebackSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComebackSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComebackSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
