import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicioSubMenuComponent } from './menu-inicio-sub-menu.component';

describe('MenuInicioSubMenuComponent', () => {
  let component: MenuInicioSubMenuComponent;
  let fixture: ComponentFixture<MenuInicioSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInicioSubMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInicioSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
