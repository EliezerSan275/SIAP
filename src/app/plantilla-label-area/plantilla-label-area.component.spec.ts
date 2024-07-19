import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaLabelAreaComponent } from './plantilla-label-area.component';

describe('PlantillaLabelAreaComponent', () => {
  let component: PlantillaLabelAreaComponent;
  let fixture: ComponentFixture<PlantillaLabelAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaLabelAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaLabelAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
