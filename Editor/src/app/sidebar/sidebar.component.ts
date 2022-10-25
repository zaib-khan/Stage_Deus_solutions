import { Component, OnInit,ComponentRef, ElementRef } from '@angular/core';
import { TransferEditorRefService } from '../services/transfer-editor-ref.service';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private transferEditorRef:TransferEditorRefService) {}


  editor:any;



  ngOnInit(): void {
    this.transferEditorRef.transfer$.subscribe(data=>{
      this.editor = data;
    });
  }

}
