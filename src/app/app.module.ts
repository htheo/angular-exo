import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { PageHomeComponent } from './page-home.component';
import { PageContactComponent } from './page-contact.component';
import { PageMentionComponent } from './page-mention.component';
import { HeaderComponent } from './header.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageContactComponent,
    PageMentionComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
