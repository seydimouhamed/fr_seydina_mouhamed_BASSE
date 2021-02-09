import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPsUserComponent } from './list-ps-user.component';

describe('ListPsUserComponent', () => {
  let component: ListPsUserComponent;
  let fixture: ComponentFixture<ListPsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
