import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EditorComponent } from './editor/editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DraggableIconsComponent } from './components/draggable-icons/draggable-icons.component';
import { DraggablesSingleImageComponent } from './components/draggables-single-image/draggables-single-image.component';
import { Container2blocComponent } from './components/container2bloc/container2bloc.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    EditorComponent,
    SidebarComponent,
    DraggableIconsComponent,
    DraggablesSingleImageComponent,
    Container2blocComponent
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
