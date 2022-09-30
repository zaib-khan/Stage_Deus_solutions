import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_references_types_test';








drop(event:CdkDragDrop<string[]>){
  console.log(event.container.id);
  

  
}









}
