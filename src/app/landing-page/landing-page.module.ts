import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PrimegnModule} from "../primegn/primegn.module";
import {FormsModule} from "@angular/forms";
import {ScrollRevealDirective} from "../directives/scroll-reveal.directive";
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    HomeComponent,
    ScrollRevealDirective,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    PrimegnModule,
    FormsModule,
  ]
})
export class LandingPageModule { }
