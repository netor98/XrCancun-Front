import { NgModule } from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {MenubarModule} from "primeng/menubar";
import {SelectButtonModule} from "primeng/selectbutton";
import {ImageModule} from "primeng/image";
import {SplitterModule} from "primeng/splitter";
import {CarouselModule} from "primeng/carousel";
import {GalleriaModule} from "primeng/galleria";
import {DialogModule} from "primeng/dialog";
import {FieldsetModule} from "primeng/fieldset";
import {AccordionModule} from "primeng/accordion";
import {OverlayModule} from "primeng/overlay";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CalendarModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    MenubarModule,
    SelectButtonModule,
    MenubarModule,
    ImageModule,
    SplitterModule,
    CarouselModule,
    DialogModule,
    FieldsetModule,
    AccordionModule,
    OverlayPanelModule,
    InputTextModule,
    FloatLabelModule,
    InputTextareaModule
  ]
})
export class PrimegnModule { }
