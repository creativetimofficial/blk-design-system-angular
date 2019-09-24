import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html',
})
export class IndexComponent implements OnInit, OnDestroy{

  constructor(){};

  ngOnInit(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
