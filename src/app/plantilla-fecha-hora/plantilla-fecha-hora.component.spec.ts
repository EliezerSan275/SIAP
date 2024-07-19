import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFechaHoraComponent } from './plantilla-fecha-hora.component';

describe('PlantillaFechaHoraComponent', () => {
  let component: PlantillaFechaHoraComponent;
  let fixture: ComponentFixture<PlantillaFechaHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFechaHoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaFechaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
