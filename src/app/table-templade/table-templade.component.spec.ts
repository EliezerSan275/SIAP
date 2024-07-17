import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTempladeComponent } from './table-templade.component';

describe('TableTempladeComponent', () => {
  let component: TableTempladeComponent;
  let fixture: ComponentFixture<TableTempladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTempladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTempladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
