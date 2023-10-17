import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPratoComponent } from './criar-prato.component';

describe('CriarPratoComponent', () => {
  let component: CriarPratoComponent;
  let fixture: ComponentFixture<CriarPratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPratoComponent]
    });
    fixture = TestBed.createComponent(CriarPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
