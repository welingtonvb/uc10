import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueBoletimComponent } from './destaque-boletim.component';

describe('DestaqueBoletimComponent', () => {
  let component: DestaqueBoletimComponent;
  let fixture: ComponentFixture<DestaqueBoletimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaqueBoletimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaqueBoletimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
