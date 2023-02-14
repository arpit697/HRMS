import { Component, OnInit } from '@angular/core';
import { JOBS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  openings!:any
  ngOnInit(): void {
    this.openings = JOBS
  }

  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
}
