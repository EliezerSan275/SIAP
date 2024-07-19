import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTempladeComponent } from './boton-templade.component';

describe('BotonTempladeComponent', () => {
  let component: BotonTempladeComponent;
  let fixture: ComponentFixture<BotonTempladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonTempladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTempladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
