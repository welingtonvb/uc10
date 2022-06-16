import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueProdutosComponent } from './destaque-produtos.component';

describe('DestaqueProdutosComponent', () => {
  let component: DestaqueProdutosComponent;
  let fixture: ComponentFixture<DestaqueProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaqueProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaqueProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
