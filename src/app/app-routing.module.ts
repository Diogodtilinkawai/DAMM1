import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PiperComponent } from './piper/piper.component';
import { RicoComponent } from './rico/rico.component';
import { SandyComponent } from './sandy/sandy.component';
import { ShellyComponent } from './shelly/shelly.component';
import { SpikeComponent } from './spike/spike.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'piper',
    component: PiperComponent,
  }, {
    path: 'rico',
    component: RicoComponent,
  },
  {
    path: 'sandy',
    component: SandyComponent,
  },
  {
    path: 'shelly',
    component: ShellyComponent,
  },
  {
    path: 'spike',
    component: SpikeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
