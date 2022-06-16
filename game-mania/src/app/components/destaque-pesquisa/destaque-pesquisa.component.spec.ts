import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaquePesquisaComponent } from './destaque-pesquisa.component';

describe('DestaquePesquisaComponent', () => {
  let component: DestaquePesquisaComponent;
  let fixture: ComponentFixture<DestaquePesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaquePesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaquePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
