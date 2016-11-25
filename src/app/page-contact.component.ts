import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rt-page-contact',
  templateUrl: './page-contact.component.html',
  styles: []
})
export class PageContactComponent {

  @Output() private myevent = new EventEmitter<string>();

  vardetectevent: string = "";

  constructor() {
  }

  onDetectEvent(nom, prenom) {
    this.vardetectevent = nom + " " + prenom;

  }

}
