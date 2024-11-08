import {Component, OnInit} from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.css'
})
export class ChangeLanguageComponent implements OnInit {
  public selectedLanguage = 'en';
  public languages: string[] = [
    'en', 'es'
  ];
  public isLanguageMenuOpen: boolean = false

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }


  ngOnInit(): void {
    const language = localStorage.getItem('language');
    if (language) {
      this.selectedLanguage = language;
      this.translate.use(language);
    }
  }

  public toggleMenu(event: Event, menuPanel: OverlayPanel): void {
    menuPanel.toggle(event);
  }

  public selectLanguage(language: string): void {
    this.selectedLanguage = language;
    this.isLanguageMenuOpen = false;
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
