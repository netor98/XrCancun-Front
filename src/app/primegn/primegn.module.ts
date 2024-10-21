import { NgModule } from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {MenubarModule} from "primeng/menubar";
import {SelectButtonModule} from "primeng/selectbutton";
import {ImageModule} from "primeng/image";
import {SplitterModule} from "primeng/splitter";


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
    SplitterModule
  ]
})
export class PrimegnModule { }
