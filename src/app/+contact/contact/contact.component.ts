import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Component({
    selector: 'c-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers:[]
})

export class ContactComponent implements OnInit,OnDestroy  {
 
    constructor(
        ) {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}