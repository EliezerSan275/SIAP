import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFirmaTemplateComponent } from './plantilla-firma-template.component';

describe('PlantillaFirmaTemplateComponent', () => {
  let component: PlantillaFirmaTemplateComponent;
  let fixture: ComponentFixture<PlantillaFirmaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFirmaTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaFirmaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
