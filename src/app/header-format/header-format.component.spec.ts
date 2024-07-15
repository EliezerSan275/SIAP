import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFormatComponent } from './header-format.component';

describe('HeaderFormatComponent', () => {
  let component: HeaderFormatComponent;
  let fixture: ComponentFixture<HeaderFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
