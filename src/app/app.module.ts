import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import { CustomComponentComponent } from './custom-component/custom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
