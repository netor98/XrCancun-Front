import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public menuOpen: boolean = false;
  public isScrolled: boolean = false;

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

}
