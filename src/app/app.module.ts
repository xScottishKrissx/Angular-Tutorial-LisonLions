import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LionsComponent } from './lions/lions.component';
import { LionDetailComponent } from './lion-detail/lion-detail.component';
import { LionService } from './lion.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { LionSearchComponent } from './lion-search/lion-search.component';


@NgModule({
  declarations: [
    AppComponent,
    LionsComponent,
    LionDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LionSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )

  ],
  providers: [
    LionService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
