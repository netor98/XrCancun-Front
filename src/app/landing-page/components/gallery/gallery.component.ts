import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public images = [
    { src: 'assets/image_5.webp', alt: 'Imagen 1' },
    { src: 'assets/image_2.webp', alt: 'Imagen 2' },
    { src: 'assets/image_3.webp', alt: 'Imagen 3' },
    { src: 'assets/image_6.webp', alt: 'Imagen 4' },
    { src: 'assets/image_7.webp', alt: 'Imagen 5' },
    { src: 'assets/image_16.webp', alt: 'Imagen 6' },
    { src: 'assets/image_22.webp', alt: 'Imagen 7' },
    { src: 'assets/image_23.webp', alt: 'Imagen 8' },
  ];

  selectedImage: string | null = null;

  openModal(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}

