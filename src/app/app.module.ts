import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientsComponent } from './clients/clients.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewClientComponent } from './new-client/new-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    NewClientComponent,
    UpdateClientComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
