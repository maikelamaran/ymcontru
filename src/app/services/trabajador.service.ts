import { Injectable } from '@angular/core';
import { Trabajador } from '../interfaces/trabajador.interface';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  private _trabajadores: Trabajador[] = [
    {      
      nombre: 'Yordanis',
      apellido: 'Magañas Massó',
      edad: 37,
      telefono: 53484545,
      cargo: 'Director'
    },
    {       
      nombre: 'Darwin',
      apellido: 'Echemendia Stanford',
      edad: 34,
      telefono: 55057878,
      cargo: 'Fiscalizador'
    },

  ];

  constructor() {}

  
  public getTrabajadores() : Trabajador[] {
    return [...this._trabajadores];
  }

  agregarTrabajadores(trabajador: Trabajador): void{
    this._trabajadores.push(trabajador);
  }
  
}
