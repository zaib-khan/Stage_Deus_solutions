import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferEditorRefService {

  
  private _transferEditorRefSource = new Subject<ElementRef>();
  transfer$ = this._transferEditorRefSource.asObservable();




  constructor() { }


  sendEditorref(editorRef:ElementRef){
    this._transferEditorRefSource.next(editorRef);
  }













}
