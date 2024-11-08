import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import {LandingPageModule} from "../landing-page/landing-page.module";
import {ScrollRevealDirective} from "../directives/scroll-reveal.directive";
import {PrimegnModule} from "../primegn/primegn.module";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ChangeLanguageComponent,
    PricingPlansComponent,
    NavBarComponent,
  ],
  exports: [
    PricingPlansComponent,
    ChangeLanguageComponent,
    NavBarComponent,
  ],
    imports: [
        CommonModule,
        ScrollRevealDirective,
        PrimegnModule,
        TranslateModule,
        NgOptimizedImage
    ]
})
export class SharedModule {
}
