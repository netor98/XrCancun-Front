import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images =
    [
      'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
      'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
      'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg'
    ];
}
