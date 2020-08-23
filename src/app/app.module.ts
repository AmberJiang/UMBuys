  /**
   * Date: 8/22/2020
   * Description: app module component class
   * Author: Auto Generated
  */
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './home/location/location.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { CategoryComponent } from './home/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    HomeComponent,
    LocationComponent,
    GalleryComponent,
    CategoryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
