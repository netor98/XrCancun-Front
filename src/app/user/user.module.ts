import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {PrimegnModule} from "../primegn/primegn.module";
import {FormsModule} from "@angular/forms";
import { PageComponent } from './pages/page/page.component';
import {SharedModule} from "../shared/shared.module";
import {BookingComponent} from "./components/booking/booking.component";
import {LandingPageModule} from "../landing-page/landing-page.module";
import { CarouselComponent } from './components/carousel/carousel.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    BookingComponent,
    PageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimegnModule,
    FormsModule,
    SharedModule,
    LandingPageModule,
    TranslateModule
  ]
})
export class UserModule { }
