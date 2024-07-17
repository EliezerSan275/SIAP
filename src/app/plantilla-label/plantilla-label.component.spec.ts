import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaLabelComponent } from './plantilla-label.component';

describe('PlantillaLabelComponent', () => {
  let component: PlantillaLabelComponent;
  let fixture: ComponentFixture<PlantillaLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
