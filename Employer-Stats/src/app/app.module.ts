import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadExcelComponent } from './read-excel/read-excel.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { EmployeeStatsComponent } from './read-excel/employee-stats/employee-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadExcelComponent,
    EmployeeStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
