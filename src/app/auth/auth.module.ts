import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {SharedModule} from "../shared/shared.module";
import {PrimegnModule} from "../primegn/primegn.module";
import {FormsModule} from "@angular/forms";
import {ScrollRevealDirective} from "../directives/scroll-reveal.directive";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class AuthModule { }
