import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { TransferEditorRefService } from 'src/app/services/transfer-editor-ref.service';
import { ContainerHoverEventService } from 'src/app/services/container-hover-event.service';
import { Add2BlocContainerService } from 'src/app/services/add2-bloc-container.service';

import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'draggable-icons',
  templateUrl: './draggable-icons.component.html',
  styleUrls: ['./draggable-icons.component.scss']
})
export class DraggableIconsComponent implements OnInit {

  @Input('element') elementType:string | undefined;

  src:string = ''
  editorRef:any;

  constructor(
    private containerHoverEvent:ContainerHoverEventService, 
    private add2BlocContainer:Add2BlocContainerService,
    private transferEditorRef:TransferEditorRefService
    ) {}
 

  ngOnInit(): void {
    if(this.elementType == 'image'){
      this.src = '../../../assets/images/1160358.png';
    }else{
      if(this.elementType == 'container'){
        this.src = '../../../assets/images/38628.png';
      }
    }
    this.transferEditorRef.transfer$.subscribe( data => {
      this.editorRef = data;
    });
    
    



  }





  onDragStart(){
    if(this.elementType == 'container'){
      this.containerHoverEvent.isHoverStartOrEnd(true);
    }
  }

  onDragDropped(event: CdkDragDrop<string[]>){
    this.containerHoverEvent.isHoverStartOrEnd(false);
    console.log(this.editorRef.id);
    console.log(event.container.id);
    
    console.log(event);
    
    
    if(this.elementType == 'container' && event.container.id == this.editorRef.id){
      this.add2BlocContainer.sendContainer();
    }
    
    
  }













}
