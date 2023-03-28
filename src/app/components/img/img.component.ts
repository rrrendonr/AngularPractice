import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
  }

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

}
