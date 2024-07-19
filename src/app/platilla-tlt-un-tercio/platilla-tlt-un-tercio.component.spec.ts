import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillaTltUnTercioComponent } from './platilla-tlt-un-tercio.component';

describe('PlatillaTltUnTercioComponent', () => {
  let component: PlatillaTltUnTercioComponent;
  let fixture: ComponentFixture<PlatillaTltUnTercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatillaTltUnTercioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatillaTltUnTercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
