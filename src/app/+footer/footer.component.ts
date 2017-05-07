import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { FooterModule } from './footer.module';

@Component({    
  selector: 'c-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        // this.getUsers();
    }
}