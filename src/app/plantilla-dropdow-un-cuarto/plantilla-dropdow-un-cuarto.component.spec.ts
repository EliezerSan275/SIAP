import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaDropdowUnCuartoComponent } from './plantilla-dropdow-un-cuarto.component';

describe('PlantillaDropdowUnCuartoComponent', () => {
  let component: PlantillaDropdowUnCuartoComponent;
  let fixture: ComponentFixture<PlantillaDropdowUnCuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaDropdowUnCuartoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaDropdowUnCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
