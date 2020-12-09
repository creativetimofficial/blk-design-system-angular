import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profilepage',
  templateUrl: 'profilepage.component.html'
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
  }
}
