import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatREQComponent } from './format-req.component';

describe('FormatREQComponent', () => {
  let component: FormatREQComponent;
  let fixture: ComponentFixture<FormatREQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatREQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatREQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
