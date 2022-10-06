import { Component, OnInit } from '@angular/core';
import { ContainerHoverEventService } from '../services/container-hover-event.service';


@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  isElementHovering : boolean = false;

  constructor(private containerHoverEvent:ContainerHoverEventService) { }

  ngOnInit(): void {
    this.containerHoverEvent.hoverEvent$.subscribe(data =>{
      this.isElementHovering = data;
    });
  }

}
