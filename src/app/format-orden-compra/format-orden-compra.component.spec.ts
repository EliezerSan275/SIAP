import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatOrdenCompraComponent } from './format-orden-compra.component';

describe('FormatOrdenCompraComponent', () => {
  let component: FormatOrdenCompraComponent;
  let fixture: ComponentFixture<FormatOrdenCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatOrdenCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatOrdenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
