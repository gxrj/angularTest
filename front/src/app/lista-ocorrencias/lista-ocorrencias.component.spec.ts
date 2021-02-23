import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOcorrenciasComponent } from './lista-ocorrencias.component';

describe('ListaOcorrenciasComponent', () => {
  let component: ListaOcorrenciasComponent;
  let fixture: ComponentFixture<ListaOcorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOcorrenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOcorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
