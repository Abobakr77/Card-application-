import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { pipes } from './shared/shared';
import { starRatingComponent } from './shared/star.component';

import { staffsComponent } from './students/staff-list.component';



@NgModule({
  declarations: [
    AppComponent,
    staffsComponent,
    pipes,
    starRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
