import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../../app-routing.module';
import components from '../../shared/components';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    components,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomePageModule { }
