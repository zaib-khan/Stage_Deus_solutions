import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'draggables-single-image',
  templateUrl: './draggables-single-image.component.html',
  styleUrls: ['./draggables-single-image.component.scss']
})
export class DraggablesSingleImageComponent implements OnInit {

  imageSrc:string = 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  componentIcone: string = '../../../assets/images/1160358.png';



  constructor() { }

  ngOnInit(): void {
  }

}
