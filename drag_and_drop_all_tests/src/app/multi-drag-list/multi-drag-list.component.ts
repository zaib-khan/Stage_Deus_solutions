
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, CdkDragMove, CdkDragStart, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'multi-drag-list',
  templateUrl: './multi-drag-list.component.html',
  styleUrls: ['./multi-drag-list.component.scss']
})
export class MultiDragListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];  



  drop(event:CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  draging(event:CdkDragStart){
    console.log(event.source.dropContainer.connectedTo);
    
  }






}
