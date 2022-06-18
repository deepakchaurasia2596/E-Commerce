import { Component, Input, OnInit } from '@angular/core';
import { CarouselImages } from 'src/app/model/carousel-images';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() images: CarouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //default 3 sec
  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  //change slide in every 3 sec
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  //set index of  image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
