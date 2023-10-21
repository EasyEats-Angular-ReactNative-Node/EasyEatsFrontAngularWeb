import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarRestaurantesComponent } from './modal-adicionar-restaurantes.component';

describe('ModalAdicionarRestaurantesComponent', () => {
  let component: ModalAdicionarRestaurantesComponent;
  let fixture: ComponentFixture<ModalAdicionarRestaurantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarRestaurantesComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
