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



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    EditorComponent,
    SidebarComponent,
    DraggableIconsComponent,
    DraggablesSingleImageComponent
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
