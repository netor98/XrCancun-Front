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
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CalendarModule
  ],
  exports: [
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    MenubarModule,
    SelectButtonModule,
    MenubarModule,
    ImageModule,
    SplitterModule,
    CarouselModule,
    DialogModule,
    FieldsetModule
  ]
})
export class PrimegnModule { }
