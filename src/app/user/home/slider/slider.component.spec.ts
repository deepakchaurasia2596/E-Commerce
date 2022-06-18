import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check ON NEXT CLICK', () => {
    component.onNextClick();
    expect(component.onNextClick).toBeTruthy();
  });
  it('should check on previous click', () => {
    component.onPrevClick();
    expect(component.onPrevClick).toBeTruthy();
  });
  it('should check select image', () => {
    let num = 1;
    component.selectImage(num);
    expect(component.selectImage).toBeTruthy();
  });
  it('should check auto slide',()=>{
    component.autoSlideImages();
    expect(component.autoSlideImages).toBeTruthy();
  })
});
