import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Trabajador } from '../interfaces/trabajador.interface';
import { TrabajadorService } from '../services/trabajador.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DataViewModule, TagModule, ButtonModule,CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  trabajadores!: Trabajador[];

  constructor(private trabajadorService: TrabajadorService) {}

  ngOnInit() {
   
      this.trabajadores = this.trabajadorService.getTrabajadores();
  
  }
}
