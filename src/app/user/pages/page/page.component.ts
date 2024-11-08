import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {

  public isLoading: boolean = true;

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1300);
  }
}
