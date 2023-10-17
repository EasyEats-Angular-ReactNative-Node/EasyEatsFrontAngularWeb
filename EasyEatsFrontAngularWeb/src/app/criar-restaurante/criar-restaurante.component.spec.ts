import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRestauranteComponent } from './criar-restaurante.component';

describe('CriarRestauranteComponent', () => {
  let component: CriarRestauranteComponent;
  let fixture: ComponentFixture<CriarRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarRestauranteComponent]
    });
    fixture = TestBed.createComponent(CriarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
