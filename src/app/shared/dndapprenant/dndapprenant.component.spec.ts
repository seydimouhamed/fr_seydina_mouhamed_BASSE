import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndapprenantComponent } from './dndapprenant.component';

describe('DndapprenantComponent', () => {
  let component: DndapprenantComponent;
  let fixture: ComponentFixture<DndapprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndapprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
