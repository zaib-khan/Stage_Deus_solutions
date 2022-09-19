import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragListComponent } from './drag-list/drag-list.component';
import { MultiDragListComponent } from './multi-drag-list/multi-drag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    DragListComponent,
    MultiDragListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
