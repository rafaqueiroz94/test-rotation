import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import { CardModule, } from 'primeng/card';
import { ExitComponent } from './components/exit/exit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputMaskModule,
    CardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
