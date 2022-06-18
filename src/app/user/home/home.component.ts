import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [
    {
      imageSrc: '../assets/Slider/1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: '../assets/Slider/2.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc: '../assets/Slider/3.png',
      imageAlt: 'person1',
    },
    {
      imageSrc: '../assets/Slider/4.png',
      imageAlt: 'person2',
    },
    {
      imageSrc: '../assets/Slider/5.png',
      imageAlt: 'person2',
    },
    {
      imageSrc: '../assets/Slider/6.PNG',
      imageAlt: 'person2',
    },
    {
      imageSrc: '../assets/Slider/7.png',
      imageAlt: 'person2',
    },
    {
      imageSrc: '../assets/Slider/8.png',
      imageAlt: 'person2',
    },
    {
      imageSrc: '../assets/Slider/9.png',
      imageAlt: 'person2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
