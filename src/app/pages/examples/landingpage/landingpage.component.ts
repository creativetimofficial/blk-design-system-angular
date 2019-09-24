import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: 'landingpage.component.html',
})
export class LandingpageComponent implements OnInit, OnDestroy{

  constructor(){};

  ngOnInit(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }

}
