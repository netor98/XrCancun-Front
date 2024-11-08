import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  isLoading = true; // Inicialmente las imágenes están cargando
  items = [
    { image: '../assets/image_4.webp', title: 'Slide 1' },
    { image: '../assets/image_2.webp', title: 'Slide 1' },
    { image: '../assets/image_18.webp', title: 'Slide 1' },
  ];

  onImageLoad() {
    console.log("asd")
    this.isLoading = false;
  }
}
