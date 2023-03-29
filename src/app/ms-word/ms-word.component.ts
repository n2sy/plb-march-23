import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  listFonts = ['', 'Garamond', 'Phosphate', 'Arial'];
  bg;
  cl;
  sz;
  police;

  changeSize(newSize) {
    console.log(newSize.value);
    this.sz = newSize.value + 'px';
  }
}
