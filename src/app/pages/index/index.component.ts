import { Component, OnInit, OnDestroy } from '@angular/core';
import noUiSlider from "nouislider";

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html',
})
export class IndexComponent implements OnInit, OnDestroy{

  constructor(){};

  ngOnInit(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
