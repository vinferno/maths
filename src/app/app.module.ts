import {BrowserModule, SafeHtml} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { GroupsComponent } from './groups/groups.component';
import { CardComponent } from './card/card.component';
import { ItemsComponent } from './items/items.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state/reducers-index';
import { PreviewComponent } from './preview/preview.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavComponent,
    GroupsComponent,
    CardComponent,
    ItemsComponent,
    PreviewComponent,
    SafeHtmlPipe,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
