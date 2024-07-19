import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaContenedorFirmasComponent } from './plantilla-contenedor-firmas.component';

describe('PlantillaContenedorFirmasComponent', () => {
  let component: PlantillaContenedorFirmasComponent;
  let fixture: ComponentFixture<PlantillaContenedorFirmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaContenedorFirmasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaContenedorFirmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
