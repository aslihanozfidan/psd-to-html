import { Component, OnInit, ViewChild,OnDestroy,HostListener,ViewEncapsulation  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

declare var PouchDB: any;

@Component({
  selector: 'app-root',  
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// App component initilization with OnInit and OnDestroy life cycle callbacks
export class AppComponent implements OnInit,OnDestroy {
  title = 'app works!';
  localUser:any;
  db:any;
  private url;
  private user;
  private sList;
  @ViewChild('start') start;


  constructor(private route: ActivatedRoute,
        private router: Router){
  }
  
  isMobile;

  ngOnInit() {} 
  ngOnDestroy(){}
}






