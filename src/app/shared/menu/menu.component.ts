import { Component, OnInit } from '@angular/core';
// import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styles: `
 p-menubar { margin: 5px;}
   
`,
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-desktop',
        routerLink: '/',
      },
      {
        label: 'Ofertas',
        icon: 'pi pi-align-left',
        routerLink: 'ofertas',
      },
      {
        label: 'Obras',
        icon: 'pi pi-wrench',
        routerLink: 'obras',
      },

      {
        label: 'Sobre nosotros',
        icon: 'pi pi-phone',
        routerLink: 'about',
      },
      {
        label: 'Vision',
        icon: 'pi pi-eye',
        routerLink: 'vision',
      },
      {
        label: 'Objeto Social',
        icon: 'pi pi-heart',
        routerLink: 'objeto',
      },
    ];
  }
}
