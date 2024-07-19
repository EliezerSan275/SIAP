import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaLabelInputComponent } from './plantilla-label-input.component';

describe('PlantillaLabelInputComponent', () => {
  let component: PlantillaLabelInputComponent;
  let fixture: ComponentFixture<PlantillaLabelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaLabelInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaLabelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
