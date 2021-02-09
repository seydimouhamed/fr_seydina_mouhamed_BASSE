import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpCompenceComponent } from './grp-compence.component';

describe('GrpCompenceComponent', () => {
  let component: GrpCompenceComponent;
  let fixture: ComponentFixture<GrpCompenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpCompenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpCompenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
