import { Component, OnInit } from '@angular/core';
import {Params} from "@angular/router";
import {Item} from "../item";

@Component({
  selector: 'rt-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item1=console.log(Item);
 /* getItem(id: number): Promise<Item> {
    return this.getItems()
        .then(items => item.find(hero => item.id === id));
  }*/

}
