import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerHoverEventService {

  private _containerHoverEventSource = new Subject<boolean>();
  hoverEvent$ = this._containerHoverEventSource.asObservable();

  constructor() { }


  isHoverStartOrEnd(hover:boolean){
    this._containerHoverEventSource.next(hover);
  }







}
