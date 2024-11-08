import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {PrimegnModule} from "../primegn/primegn.module";
import {FormsModule} from "@angular/forms";
import {ScrollRevealDirective} from "../directives/scroll-reveal.directive";
import { GalleryComponent } from './components/gallery/gallery.component';
import {SharedModule} from "../shared/shared.module";
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import {TranslateModule} from "@ngx-translate/core";
import Swiper from "swiper";


@NgModule({
    declarations: [
        HomeComponent,
        GalleryComponent,
        FooterComponent,
        FaqComponent
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        PrimegnModule,
        FormsModule,
        SharedModule,
        ScrollRevealDirective,
        TranslateModule,
        NgOptimizedImage,
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule { }
