import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'container-in-container',
  templateUrl: './container-in-container.component.html',
  styleUrls: ['./container-in-container.component.scss']
})
export class ContainerInContainerComponent implements OnInit {

  @ViewChild('test') editor!: ElementRef;







  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
   
    
  }


  addImage(){
    const image : HTMLImageElement = this.renderer.createElement('img');
    image.src = 'https://64.media.tumblr.com/763756ea907e30b639da239618bbe2d3/tumblr_mlotjw0e2C1r4xjo2o1_250.gifv';
    this.renderer.appendChild(this.editor.nativeElement,image);
    
  }






}
