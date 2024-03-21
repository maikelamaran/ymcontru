import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ObrasComponent } from './obras/obras.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { VisionComponent } from './vision/vision.component';
import { ObjetosocialComponent } from './objetosocial/objetosocial.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

export const routes: Routes = [
    {
      path: '',
      title: 'Index',
      component: ContactenosComponent,
      pathMatch: 'full',
    },
  
    {
      path: 'ofertas',
      title: 'Ofertas',
      component: OfertasComponent,
    },
    {
      path: 'obras',
      title: 'Obras',
      component: ObrasComponent,
    },
    {
      path: 'about',
      title: 'Nosotros',
      component: AboutComponent,
    },
    {
      path: 'vision',
      title: 'vision',
      component: VisionComponent,
    },
    {
      path: 'objeto',
      title: 'Objeto Social',
      component: ObjetosocialComponent,
    },
    {
      path: 'solicitud',
      title: 'Solicitud',
      component: SolicitudComponent,
    },
    {
      path: '**',
      redirectTo: '',
    },
  ];
  
