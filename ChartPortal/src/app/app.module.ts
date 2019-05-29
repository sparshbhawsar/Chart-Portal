import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreatechartComponent } from './createchart/createchart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatechartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ],
  providers: [WeatherService,FormBuilder],
  bootstrap: [AppComponent,LoginComponent,CreatechartComponent]
})
export class AppModule { }
