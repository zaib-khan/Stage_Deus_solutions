import { Component, ElementRef, OnInit, ViewChild,ViewContainerRef,ComponentFactoryResolver,Injector,ComponentRef } from '@angular/core';
import { ContainerHoverEventService } from '../services/container-hover-event.service';
import { Add2BlocContainerService } from '../services/add2-bloc-container.service';

import { Container2blocComponent } from '../components/container2bloc/container2bloc.component';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild('insertPoint', { read: ViewContainerRef })
  editorContainer:ViewContainerRef | undefined;
  isElementHovering : boolean = false;


  constructor(
    private containerHoverEvent:ContainerHoverEventService,
    private add2BlocContainer:Add2BlocContainerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
    ) { }

  ngOnInit(): void {
    this.containerHoverEvent.hoverEvent$.subscribe(data =>{
      this.isElementHovering = data;
    });
    this.add2BlocContainer.add2BlocContainer$.subscribe(data=>{
      this.appendContainer();
    });
  }


  appendContainer():void{

    /* ---------------------- TEST AVEC LE FACTORY RESOLVER --------------------- */

    //console.log(this.editorContainer);
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Container2blocComponent);
    // const cRef1: ComponentRef<Container2blocComponent> = componentFactory.create(this.injector);
    // const test = this.editorContainer.insert(cRef1.hostView);
    // console.log(test);


    /* --------------------- TEST AVEC LA VERSION 13 ANGULAR -------------------- */

    const cmpRef = this.editorContainer?.createComponent(Container2blocComponent);
    console.log(cmpRef);
    
    


    
  }






}
