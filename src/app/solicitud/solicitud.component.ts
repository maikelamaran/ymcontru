import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule ],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css',
})
export class SolicitudComponent {
  constructor(private router: Router) {}

  nombrecompleto = signal('');
  direccion = signal('');
  telefono = signal('');
  codigopais: String = '+53';
  informacioncompleta: String = '';
  whatsappnumero: String = '59682237';

  url: string =
    'https://wa.me/' + this.codigopais + this.whatsappnumero + '?text=';
  urlfinal: String = '';

  enviarSolicitud() {
    if (this.formulario.valid) {
      this.informacioncompleta =
        'Mi nombre: ' +
        this.nombrecompleto() +
        '-mi dirección: ' +
        this.direccion() +
        '-mi teléfono: ' +
        this.telefono();

      window.open(this.url + this.informacioncompleta, '_blank');
    }
  }

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
}
