import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: 'registerpage.component.html'
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  constructor() {}
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    const squares1 = document.getElementById('square1');
    const squares2 = document.getElementById('square2');
    const squares3 = document.getElementById('square3');
    const squares4 = document.getElementById('square4');
    const squares5 = document.getElementById('square5');
    const squares6 = document.getElementById('square6');
    const squares7 = document.getElementById('square7');
    const squares8 = document.getElementById('square8');

    const posX = e.clientX - window.innerWidth / 2;
    const posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares2.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares3.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares4.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares5.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares6.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares7.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.02 +
      'deg) rotateX(' +
      posY * -0.02 +
      'deg)';
    squares8.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.02 +
      'deg) rotateX(' +
      posY * -0.02 +
      'deg)';
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');

    this.onMouseMove(event);
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
  }
}
