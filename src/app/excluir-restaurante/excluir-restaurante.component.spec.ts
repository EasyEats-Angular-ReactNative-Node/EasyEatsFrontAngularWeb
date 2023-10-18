import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirRestauranteComponent } from './excluir-restaurante.component';

describe('ExcluirRestauranteComponent', () => {
  let component: ExcluirRestauranteComponent;
  let fixture: ComponentFixture<ExcluirRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirRestauranteComponent]
    });
    fixture = TestBed.createComponent(ExcluirRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
