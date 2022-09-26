import { CdkDragDrop, CdkDragEnter} from '@angular/cdk/drag-drop';
import { Component, OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'container-in-container',
  templateUrl: './container-in-container.component.html',
  styleUrls: ['./container-in-container.component.scss']
})
export class ContainerInContainerComponent implements OnInit {

  @ViewChild('blueEditor') editor!: ElementRef;
  isGoodContainer : boolean = false;






  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
   
    
  }


  addImage(){
    const image : HTMLImageElement = this.renderer.createElement('img');
    image.src = 'https://64.media.tumblr.com/763756ea907e30b639da239618bbe2d3/tumblr_mlotjw0e2C1r4xjo2o1_250.gifv';
    this.renderer.appendChild(this.editor.nativeElement,image);
    this.isGoodContainer =  false; 
  }

  onDragEntered(event:CdkDragEnter){
   // console.log(event.container.element.nativeElement.id);
   // console.log(this.editor.nativeElement.id);
    if(this.editor.nativeElement.id == event.container.element.nativeElement.id){
      this.isGoodContainer = true;
      
    }   
  }

  addContainer_2_blocs(event: CdkDragDrop<string[]>){
    const div : HTMLDivElement = this.renderer.createElement('div');
    const div1 : HTMLDivElement = this.renderer.createElement('div');
    const div2 : HTMLDivElement = this.renderer.createElement('div');
    this.renderer.appendChild(div,div1);
    this.renderer.appendChild(div,div2);
    this.renderer.addClass(div,'temp');





    this.renderer.appendChild(this.editor.nativeElement,div);
  }




}
