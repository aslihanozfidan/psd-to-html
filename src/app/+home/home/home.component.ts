import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers:[]
})

export class HomeComponent implements OnInit,OnDestroy  {
 
    constructor(
        ) {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}