import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Add2BlocContainerService {

  private _add2BlocContainerSource = new Subject<void>();
  add2BlocContainer$ = this._add2BlocContainerSource.asObservable();



  constructor() { }


  sendContainer():void{
    this._add2BlocContainerSource.next();
  }







}
