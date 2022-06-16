import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNovidadeComponent } from './banner-novidade.component';

describe('BannerNovidadeComponent', () => {
  let component: BannerNovidadeComponent;
  let fixture: ComponentFixture<BannerNovidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNovidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNovidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
