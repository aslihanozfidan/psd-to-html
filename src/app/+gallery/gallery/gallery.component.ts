import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Component({
    selector: 'c-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    providers:[]
})

export class GalleryComponent implements OnInit,OnDestroy  {
 
    constructor(
        ) {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}