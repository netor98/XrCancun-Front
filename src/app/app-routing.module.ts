import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./landing-page/components/home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
/*
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
*/
  {
    path: 'booking',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  },
/*
  {
    path: 'photographer',
    loadChildren: () => import('./photographer/photographer.module')
      .then(m => m.PhotographerModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
*/
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
