import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { HeaderModule } from './header.module';

@Component({    
  selector: 'c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        // this.getUsers();
    }
}