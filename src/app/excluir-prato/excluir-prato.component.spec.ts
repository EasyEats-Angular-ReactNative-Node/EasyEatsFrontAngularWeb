import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPratoComponent } from './excluir-prato.component';

describe('ExcluirPratoComponent', () => {
  let component: ExcluirPratoComponent;
  let fixture: ComponentFixture<ExcluirPratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirPratoComponent]
    });
    fixture = TestBed.createComponent(ExcluirPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
