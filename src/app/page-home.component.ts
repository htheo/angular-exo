import {Component, Output, EventEmitter} from '@angular/core';
import {Item} from "./item";
import {HttpService} from "./http.service";

@Component({
  selector: 'rt-page-home',
  templateUrl: './page-home.component.html',
  styles: [],
    providers:[HttpService]

})
export class PageHomeComponent {

  item1 = new Item('Isabella', 'Description', 'assets/chevre1.jpg', 1);
  item2 = new Item('Francesca', 'Description', 'assets/chevre2.jpg', 2);

    items:any[];

    title = 'http works!';
    constructor(private httpservice:HttpService){

    }

    ngOnInit(){
        this.httpservice.getData()
            .subscribe(
                (data:any) => console.log(data)
            );
    }

    onSubmit(username:string,email:string, img:string){
        this.httpservice.sendData({username:username,email:email, img:img})
            .subscribe(
                (data:any) => console.log(data)
            );
    }

    onGetdata(){
        this.httpservice.getMydata()
            .subscribe(

                data => {
                    const array = [];
                    for(let key in data){
                        array.push(data[key]);
                    }
                    this.items=array;
                }
            );
    }

}
