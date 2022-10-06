import { Component, Input, OnInit } from '@angular/core';
import { ContainerHoverEventService } from 'src/app/services/container-hover-event.service';


@Component({
  selector: 'draggable-icons',
  templateUrl: './draggable-icons.component.html',
  styleUrls: ['./draggable-icons.component.scss']
})
export class DraggableIconsComponent implements OnInit {

  @Input('element') element:string | undefined;

  src:string = ''

  constructor(private containerHoverEvent:ContainerHoverEventService) {
   
    
   }

  ngOnInit(): void {
    if(this.element == 'image'){
      this.src = '../../../assets/images/1160358.png';
    }else{
      if(this.element == 'container'){
         this.src = '../../../assets/images/38628.png';
      }
    }
  }

  onDragStart(){
    if(this.element == 'container') this.containerHoverEvent.isHoverStartOrEnd(true);
  }

  onDragEnd(){
    this.containerHoverEvent.isHoverStartOrEnd(false);
    
  }













}
