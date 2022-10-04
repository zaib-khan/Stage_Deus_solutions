import { Component, OnInit,ViewChild,ViewContainerRef,ElementRef,Renderer2,AfterViewInit,ComponentFactoryResolver,Injector,ComponentRef,TemplateRef,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, CdkDragEnter} from '@angular/cdk/drag-drop';

import { ContainerTwoBlocComponent } from '../container-two-bloc/container-two-bloc.component';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestsComponent implements OnInit,AfterViewInit {

 @ViewChild('insertPoint',{read:ViewContainerRef}) editor!: ViewContainerRef;
 @ViewChild('containerTwoBlocTemplate',{read : TemplateRef}) contentRef!:TemplateRef<any>;
  isGoodContainer : boolean = false;


  constructor(private f: ComponentFactoryResolver,private injector: Injector, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
   // console.log(this.editor);
  
    
  }

  addImage(){
    // const image : HTMLImageElement = this.renderer.createElement('img');
    // image.src = 'https://64.media.tumblr.com/763756ea907e30b639da239618bbe2d3/tumblr_mlotjw0e2C1r4xjo2o1_250.gifv';
    // this.renderer.appendChild(this.editor.nativeElement,image);
    this.isGoodContainer =  false; 
  }

  onDragEntered(event:CdkDragEnter){
   // console.log(event.container.element.nativeElement.id);
   // console.log(this.editor.nativeElement.id);
    // if(this.editor.nativeElement.id == event.container.element.nativeElement.id){
    //   this.isGoodContainer = true;
      
    // }   
  }

  addContainer_2_blocs(event: CdkDragDrop<string[]>){

/* --------------------------------- TEST 1 --------------------------------- */
    // const div : HTMLDivElement = this.renderer.createElement('div');
    // const div1 : HTMLDivElement = this.renderer.createElement('div');
    // const div2 : HTMLDivElement = this.renderer.createElement('div');
    // this.renderer.appendChild(div,div1);
    // this.renderer.appendChild(div,div2);
    // this.renderer.addClass(div,'temp');
    // this.renderer.appendChild(this.editor.nativeElement,div);
/* --------------------------------- TEST 2 --------------------------------- */
    // const cf = this.f.resolveComponentFactory(ContainerTwoBlocComponent);
    // const cRef1: ComponentRef<ContainerTwoBlocComponent> = cf.create(this.injector);
    // this.editor.insert(cRef1.hostView)
/* --------------------------------- TEST 3 --------------------------------- */

  this.editor.createEmbeddedView(this.contentRef);
  this.cd.markForCheck();
  }



}
