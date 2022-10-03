import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cat-image',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss']
})
export class CatImageComponent implements OnInit {

  catImageSrc : string = 'https://64.media.tumblr.com/763756ea907e30b639da239618bbe2d3/tumblr_mlotjw0e2C1r4xjo2o1_250.gifv';


  constructor() { }

  ngOnInit(): void {
  }

}
