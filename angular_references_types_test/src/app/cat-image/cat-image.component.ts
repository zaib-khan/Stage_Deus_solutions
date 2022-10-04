import { Component, OnInit,AfterContentInit,ChangeDetectorRef, AfterViewInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cat-image',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CatImageComponent implements OnInit,AfterViewInit {

  catImageSrc : string = 'https://64.media.tumblr.com/763756ea907e30b639da239618bbe2d3/tumblr_mlotjw0e2C1r4xjo2o1_250.gifv';


  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cd.markForCheck()
  }
}
