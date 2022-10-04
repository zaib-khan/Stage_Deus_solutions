import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changeDetectionTest';

  data = {
    counter : 0
  };



  increment(){
    this.data = {counter : this.data.counter++}
  }














}
