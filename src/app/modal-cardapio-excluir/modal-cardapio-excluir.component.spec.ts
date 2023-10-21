import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardapioExcluirComponent } from './modal-cardapio-excluir.component';

describe('ModalCardapioExcluirComponent', () => {
  let component: ModalCardapioExcluirComponent;
  let fixture: ComponentFixture<ModalCardapioExcluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCardapioExcluirComponent]
    });
    fixture = TestBed.createComponent(ModalCardapioExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
