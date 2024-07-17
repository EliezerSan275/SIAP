import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWhitIconTemplateComponent } from './btn-whit-icon-template.component';

describe('BtnWhitIconTemplateComponent', () => {
  let component: BtnWhitIconTemplateComponent;
  let fixture: ComponentFixture<BtnWhitIconTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnWhitIconTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnWhitIconTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
