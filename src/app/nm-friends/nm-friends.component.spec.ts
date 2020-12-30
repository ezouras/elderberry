import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmFriendsComponent } from './nm-friends.component';

describe('NmFriendsComponent', () => {
  let component: NmFriendsComponent;
  let fixture: ComponentFixture<NmFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
