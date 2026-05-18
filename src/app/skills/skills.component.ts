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
  skills: any = {
    technologies: [
      {
        name: "Angular 14,16,18",
        percent: 85,
        remark: 'excellent'
      },
      {
        name: "Micro frontend architecture - Single-spa",
        percent: 85,
        remark: 'excellent'
      },
      {
        name: "JavaScript, TypeScript",
        percent: 80,
        remark: 'very-good'
      },
      {
        name: "HTML5, CSS3, SASS/SCSS",
        percent: 95,
        remark: 'excellent'
      },
      {
        name: "Node.js, Express.js, MongoDB",
        percent: 85,
        remark: 'good'
      }],
    tools: [
      { name: "Git, Bitbucket", percent: 90, remark: 'excellent' },
      { name: "Vs Code", percent: 90, remark: 'excellent' },
      { name: "Linux, Windows", percent: 80, remark: 'very-good' },
      { name: "NoSql", percent: 80, remark: 'good' },
      { name: "NPM", percent: 85, remark: 'very-good' },
    ],
    // methodologies: [
    //   { name: "Scrum", percent: 70, remark: 'very-good' },
    //   { name: "Uml", percent: 90, remark: 'excellent' },
    //   { name: "Disign Thinking", percent: 70, remark: 'good' },
    //   { name: "TDD", percent: 90, remark: 'excellent' },
    //   { name: "DevOps", percent: 50, remark: 'average' }
    // ]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




