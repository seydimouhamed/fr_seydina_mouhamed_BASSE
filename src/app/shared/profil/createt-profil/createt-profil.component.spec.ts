import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetProfilComponent } from './createt-profil.component';

describe('CreatetProfilComponent', () => {
  let component: CreatetProfilComponent;
  let fixture: ComponentFixture<CreatetProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
