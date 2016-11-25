import {Component, OnInit, EventEmitter, OnDestroy} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";
import {HttpService} from "./http.service";

@Component({
  selector: 'rt-page-contact',
  templateUrl: './page-contact.component.html',
  styles: [],
  providers:[HttpService]
})
export class PageContactComponent implements OnDestroy {

  @Output() private myevent = new EventEmitter<string>();

  vardetectevent: string = "";
  users:any[];

  constructor(private httpservice:HttpService) {

  }

  onDetectEvent(nom, prenom) {
    this.vardetectevent = nom + " " + prenom;
    this.httpservice.sendUsers({username:prenom,name:nom})
        .subscribe(
            (data:any) => console.log(data)
        );

  }
  onGetusers(){
    this.httpservice.getMyusers()
        .subscribe(

            data => {
              const array = [];
              for(let key in data){
                array.push(data[key]);
              }
              this.users=array;
            }
        );
  }


  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

}
