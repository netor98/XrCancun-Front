import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public menuOpen: boolean = false;


  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public testScroll(){
    console.log("aita");
  }


}
