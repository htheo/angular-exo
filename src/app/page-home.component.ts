import {Component, Output, EventEmitter} from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'rt-page-home',
  templateUrl: './page-home.component.html',
  styles: []
})
export class PageHomeComponent {

  item1 = new Item('Isabella', 'Description', 'assets/chevre1.jpg', 1);
  item2 = new Item('Francesca', 'Description', 'assets/chevre2.jpg', 2);


}
