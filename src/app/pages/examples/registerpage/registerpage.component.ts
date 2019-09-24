import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: 'registerpage.component.html',
})
export class RegisterpageComponent implements OnInit, OnDestroy{
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  constructor(){};

  ngOnInit(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
  }

}
