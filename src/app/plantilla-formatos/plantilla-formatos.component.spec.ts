import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFormatosComponent } from './plantilla-formatos.component';

describe('PlantillaFormatosComponent', () => {
  let component: PlantillaFormatosComponent;
  let fixture: ComponentFixture<PlantillaFormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFormatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
