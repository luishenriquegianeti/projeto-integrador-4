import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cadastrar } from './Livros/cadastrar/cadastrar';
import { MatToolbar } from "@angular/material/toolbar";

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    App,
    Cadastrar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
