import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CatImageComponent } from './cat-image/cat-image.component';
import { ContainerTwoBlocComponent } from './container-two-bloc/container-two-bloc.component';
import { DraggableIconsComponent } from './components/draggable-icons/draggable-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    CatImageComponent,
    ContainerTwoBlocComponent,
    DraggableIconsComponent
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
