import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthguardService }  from './service/authguard.service';
import { LoginComponent } from './login/login.component';
import {CreatechartComponent} from './createchart/createchart.component';

const appRoutes: Routes = [
  { path: 'createchart', component: CreatechartComponent },  
  { path: '', redirectTo: '/creatchart', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

