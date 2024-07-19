import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoBotonesComponent } from './grupo-botones.component';

describe('GrupoBotonesComponent', () => {
  let component: GrupoBotonesComponent;
  let fixture: ComponentFixture<GrupoBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoBotonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
