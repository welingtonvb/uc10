import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProdutoComponent } from './banner-produto.component';

describe('BannerProdutoComponent', () => {
  let component: BannerProdutoComponent;
  let fixture: ComponentFixture<BannerProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
