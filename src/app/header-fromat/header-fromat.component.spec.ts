import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFromatComponent } from './header-fromat.component';

describe('HeaderFromatComponent', () => {
  let component: HeaderFromatComponent;
  let fixture: ComponentFixture<HeaderFromatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFromatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFromatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
