import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BezierCurveComponent } from './bezier-curve/bezier-curve.component';
import { LineComponent } from './line/line.component';
import { PointComponent } from './point/point.component';
import { Vector2TableComponent } from './vector2-table/vector2-table.component';
import { NumberFormatComponent } from './number-format/number-format.component';

@NgModule({
  declarations: [
    AppComponent,
    BezierCurveComponent,
    LineComponent,
    PointComponent,
    Vector2TableComponent,
    NumberFormatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
