import { TestBed } from '@angular/core/testing';

import { PreferenciasUsuarioService } from './preferencias-usuario.service';

describe('PreferenciasUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreferenciasUsuarioService = TestBed.get(PreferenciasUsuarioService);
    expect(service).toBeTruthy();
  });
});
