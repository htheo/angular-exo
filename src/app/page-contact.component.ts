import {Component, OnInit, EventEmitter, OnDestroy} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rt-page-contact',
  templateUrl: './page-contact.component.html',
  styles: []
})
export class PageContactComponent implements OnDestroy {

  @Output() private myevent = new EventEmitter<string>();

  vardetectevent: string = "";

  private subscription:Subscription;
  param:string;

  constructor(private activaterouter:ActivatedRoute) {
    this.activaterouter.queryParams.subscribe(
        queryParam => this.param=queryParam['monparam']
    )
  }

  onDetectEvent(nom, prenom) {
    this.vardetectevent = nom + " " + prenom;

  }


  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

}
