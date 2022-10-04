import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input('data') myDate:any;


  constructor() { }

  ngOnInit(): void {
  }

}
