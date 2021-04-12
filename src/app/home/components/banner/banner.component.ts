import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  images: string[] = [
    'assets/image/banner-0.webp',
    'assets/image/banner-1.webp',
    'assets/image/banner-2.webp'
  ];

  
  config: SwiperOptions = {}; 

  constructor(
  
    @Inject(PLATFORM_ID) private platformid: Object,
  ) { 

    if (isPlatformBrowser(this.platformid)) {
      this.config = {
        pagination: { 
          el: '.swiper-pagination', 
          clickable: true 
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }; 
    }

  }

  ngOnInit(): void {
  }

  

}
