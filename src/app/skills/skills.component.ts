import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [
    {
      titleKey: 'skills.languages',
      icon: 'bx-code',
      items: ['JavaScript', 'TypeScript', 'Python']
    },
    {
      titleKey: 'skills.frontend',
      icon: 'bx-window-alt',
      items: ['Angular (14,16,18)', 'Single-SPA', 'HTML5', 'CSS3', 'SCSS/SASS']
    },
    {
      titleKey: 'skills.backend',
      icon: 'bx-server',
      items: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
      titleKey: 'skills.databases',
      icon: 'bx-data',
      items: ['MongoDB']
    },
    {
      titleKey: 'skills.devopsTools',
      icon: 'bx-terminal',
      items: ['Git', 'Bitbucket', 'NPM', 'Docker (basic)', 'Kubernetes (basic)', 'CI/CD (basic)', 'Postman']
    },
    {
      titleKey: 'skills.other',
      icon: 'bx-brain',
      items: ['Micro-frontend architecture', 'Web performance optimization', 'Security practices', 'Agile methodology']
    }
  ];

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}
