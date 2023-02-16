import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent {
  // Show Hidden Offers
  ShowHiddenOffers() {
    const hiddenOffers: NodeListOf<HTMLElement> =
      document.querySelectorAll('.hidden-offer');
    const offerBtn = document.querySelector('.offer-btn')!;

    hiddenOffers.forEach((item) => {
      item.style.display = item.style.display == 'block' ? 'none' : 'block';
    });
    offerBtn.innerHTML =
      offerBtn.innerHTML == 'Show Less!' ? 'Show More!' : 'Show Less!';
  }

  // Testimonials Slider
  // First Slide
  FirstSlide() {
    const container: HTMLElement = document.querySelector('.container')!;
    const sliderBtns = document.querySelectorAll('.slider-btn');
    container.classList.remove('animate-container');

    container.style.transform = 'translateX(0)';
    sliderBtns.forEach((item) => item.classList.remove('active'));
    sliderBtns[0].classList.add('active');

    setTimeout(() => container.classList.add('animate-container'), 3000);
  }

  // Second Slide
  SecondSlide() {
    const container: HTMLElement = document.querySelector('.container')!;
    const sliderBtns = document.querySelectorAll('.slider-btn');
    container.classList.remove('animate-container');

    container.style.transform = 'translateX(-100vw)';
    sliderBtns.forEach((item) => item.classList.remove('active'));
    sliderBtns[1].classList.add('active');

    setTimeout(() => container.classList.add('animate-container'), 3000);
  }

  // Third Slide
  ThirdSlide() {
    const container: HTMLElement = document.querySelector('.container')!;
    const sliderBtns = document.querySelectorAll('.slider-btn');
    container.classList.remove('animate-container');

    container.style.transform = 'translateX(-200vw)';
    sliderBtns.forEach((item) => item.classList.remove('active'));
    sliderBtns[2].classList.add('active');

    setTimeout(() => container.classList.add('animate-container'), 3000);
  }
}
