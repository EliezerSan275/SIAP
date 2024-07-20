import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatUsuariosComponent } from './format-usuarios.component';

describe('FormatUsuariosComponent', () => {
  let component: FormatUsuariosComponent;
  let fixture: ComponentFixture<FormatUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
