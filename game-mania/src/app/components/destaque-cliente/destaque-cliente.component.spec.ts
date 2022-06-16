import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueClienteComponent } from './destaque-cliente.component';

describe('DestaqueClienteComponent', () => {
  let component: DestaqueClienteComponent;
  let fixture: ComponentFixture<DestaqueClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaqueClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaqueClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
