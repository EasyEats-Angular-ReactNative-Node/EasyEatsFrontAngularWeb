import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMesaComponent } from './excluir-mesa.component';

describe('ExcluirMesaComponent', () => {
  let component: ExcluirMesaComponent;
  let fixture: ComponentFixture<ExcluirMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirMesaComponent]
    });
    fixture = TestBed.createComponent(ExcluirMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
