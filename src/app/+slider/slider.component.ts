import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { SliderModule } from './slider.module';

@Component({    
  selector: 'c-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        // this.getUsers();
    }
}