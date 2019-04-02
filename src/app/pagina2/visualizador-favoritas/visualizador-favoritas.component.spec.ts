import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorFavoritasComponent } from './visualizador-favoritas.component';

describe('VisualizadorFavoritasComponent', () => {
  let component: VisualizadorFavoritasComponent;
  let fixture: ComponentFixture<VisualizadorFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizadorFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
