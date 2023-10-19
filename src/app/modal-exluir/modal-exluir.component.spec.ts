import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExluirComponent } from './modal-exluir.component';

describe('ModalExluirComponent', () => {
  let component: ModalExluirComponent;
  let fixture: ComponentFixture<ModalExluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExluirComponent]
    });
    fixture = TestBed.createComponent(ModalExluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
