import { Component, ElementRef, OnInit, ViewChild,ViewContainerRef,ComponentRef,AfterViewInit } from '@angular/core';
import { ContainerHoverEventService } from '../services/container-hover-event.service';
import { Add2BlocContainerService } from '../services/add2-bloc-container.service';
import { Container2blocComponent } from '../components/container2bloc/container2bloc.component';
import { TransferEditorRefService } from '../services/transfer-editor-ref.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit,AfterViewInit {

  @ViewChild('insertPoint', { read: ViewContainerRef })
  editorContainer:ViewContainerRef | undefined;
  @ViewChild('editorContainer', { static: true })
  editor!: ElementRef;
  isElementHovering : boolean = false;


  constructor(
    private containerHoverEvent:ContainerHoverEventService,
    private add2BlocContainer:Add2BlocContainerService,
    private transferEditorRef:TransferEditorRefService
    // private componentFactoryResolver: ComponentFactoryResolver,
    // private injector: Injector
    ) { }
  ngAfterViewInit(): void {
    this.transferEditorRef.sendEditorref(this.editor);
  }

  ngOnInit(): void {
    this.containerHoverEvent.hoverEvent$.subscribe(data =>{
      this.isElementHovering = data;
    });
    this.add2BlocContainer.add2BlocContainer$.subscribe(data=>{
      this.appendContainer();
    });
    //console.log(this.editor);
    
  }


  appendContainer():void{
    /* --------------------- TEST AVEC LA VERSION 13 ANGULAR -------------------- */
    const cmpRef = this.editorContainer?.createComponent(Container2blocComponent);
  }






}
