import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicioPrincipalComponent } from './menu-inicio-principal.component';

describe('MenuInicioPrincipalComponent', () => {
  let component: MenuInicioPrincipalComponent;
  let fixture: ComponentFixture<MenuInicioPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInicioPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInicioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
