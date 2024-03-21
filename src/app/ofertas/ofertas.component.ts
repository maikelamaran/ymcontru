import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

  enviarSolicitud(){
    alert("enseñame esto");
  }

}
