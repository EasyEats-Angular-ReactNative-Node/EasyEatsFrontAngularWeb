import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardapioAdicionarComponent } from './modal-cardapio-adicionar.component';

describe('ModalCardapioAdicionarComponent', () => {
  let component: ModalCardapioAdicionarComponent;
  let fixture: ComponentFixture<ModalCardapioAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCardapioAdicionarComponent]
    });
    fixture = TestBed.createComponent(ModalCardapioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
