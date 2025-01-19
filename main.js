"use strict";
(self["webpackChunkmy_portfolio"] = self["webpackChunkmy_portfolio"] || []).push([["main"],{

/***/ 2912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);







class AboutComponent {
  constructor(_translationLoaderService) {
    this._translationLoaderService = _translationLoaderService;
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
  }
  ngOnInit() {
    this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMapMarker;
    this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCity;
    this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMailBulk;
    this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMobile;
    this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBirthdayCake;
    this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGraduationCap;
    this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLaptopHouse;
  }
  static {
    this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__.TranslationLoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 60,
      vars: 36,
      consts: [["id", "about"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-right", 1, "col-lg-4", "col-md-12"], ["src", "assets/images/profile.jpg", "alt", "photo de profil", 1, "img-fluid"], [1, "d-flex", "justify-content-center"], ["href", "https://www.linkedin.com/in/midhun-nair-t-s-b213b7216/", "rel", "tooltip", "target", "_blank", 1, "btn-social-media", 3, "title"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://github.com/midhunnairts", "rel", "tooltip", "target", "_blank", 1, "btn-social-media", "btn-default", "btn-round", "btn-lg", "btn-icon", 3, "title"], [1, "fa", "fa-github", "fa-lg"], ["data-aos", "fade-left", 1, "col-lg-8", "col-md-12", "pt-4", "pt-lg-0"], [1, "font-italic"], [1, "col-lg-6", "col-md-6"], [3, "icon"], ["href", "mailto:midhunnair217.midhunnair217@gmail.com"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "picture");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11)(19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Back-End");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Front-End");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 3)(36, "div", 13)(37, "ul")(38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "fa-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "fa-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "strong")(46, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " midhunnair217@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 13)(49, "ul")(50, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "fa-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "fa-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 16, "about.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 18, "about.followMeOn"), " Linkedin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 20, "about.followMeOn"), " GitHub");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 22, "about.jobTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 24, "about.introductionOfMe"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 26, "about.passionateAboutDevelopment"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 28, "about.and"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.mapMarker);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 30, "about.mobility"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.birthday);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" 23 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 32, "about.years"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.badge);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 34, "about.graduation"), "");
        }
      },
      dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nfa-icon[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: #149ddd;\n    width: 30px;\n    height: 30px;\n    background: #dff3fc;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n    margin-right: 10px;\n}\n\nh3[_ngcontent-%COMP%]{\n  font-weight: 700;\n    font-size: 26px;\n    color: #173b6c;\n}\n\n.btn-social-media[_ngcontent-%COMP%]{\n  border-radius: 50px;\n  width: 40px;\n  height: 40px;\n  color: #ffffff;\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  background: #149ddd;\n  margin-right:10px;\n  margin-left:10px;\n  margin-top:10px;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmZhLWljb257XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMTQ5ZGRkO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZmM2ZjO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmgze1xuICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogIzE3M2I2Yztcbn1cblxuLmJ0bi1zb2NpYWwtbWVkaWF7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxNDlkZGQ7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xuICBtYXJnaW4tbGVmdDoxMHB4O1xuICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3011:
/*!**************************************!*\
  !*** ./src/app/api/experiencesEn.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   experiencesEn: () => (/* binding */ experiencesEn)
/* harmony export */ });
const experiencesEn = [{
  title: "Software Engineer",
  company: 'Signdesk Pvt Ltd',
  period: "2022 - Present",
  technologies: 'Angular(14, 16, 18), Single Spa, Node.Js, Express.Js, HTML, CSS, JavaScript, TypeScript',
  missions: ["Created a micro frontend architecture, converting a monolithic project into a more optimized and scalable micro frontend application using the Single-SPA framework, improving modularity and deployment flexibility.", "Developed an SDK for reusable, customizable components such as tooltips, loaders, image editors, custom pipes, and directives for Bootstrap dropdowns. This SDK was hosted and managed in Bitbucket, improving development speed across multiple projects.", "Led parallel development on multiple projects, ensuring timely delivery and effective management of cross-project priorities.", "Suggested and implemented CSS code optimization strategies, significantly improving code maintainability and performance.", "Utilized packages such as Wavesurfer.js, Konva.js, and Gridster.js to implement rich, interactive features, enhancing the user experience across different projects.", "Developed APIs for PDF file conversion and conducted in-depth research on Google Sheets APIs for potential integration, adding data handling and export functionalities.", "Acquired in-depth knowledge of SVG and Canvas, leveraging them for advanced graphical manipulations and rendering in various projects.", "Implemented frontend and backend security for web applications using Angular and Node.js, ensuring robust protection against common security threats."],
  detailIsDisplayed: false
}];

/***/ }),

/***/ 6264:
/*!**************************************!*\
  !*** ./src/app/api/experiencesFr.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   experiencesFr: () => (/* binding */ experiencesFr)
/* harmony export */ });
const experiencesFr = [{
  title: "Dévloppeur en freelance",
  company: 'Scotfy, Lyon, Fr',
  period: "2020 - 2021 (2 mois)",
  technologies: 'C#, .NET, Angular 11, Angular Materials, pgSql, Qlik Sense',
  missions: ["Mise en place d'un gestionnaire de thèmes (couleurs, logo).", "Mise en place d'un gestionnaire de dossiers virtuels qui peuvent contenir des apps Qlik Sense.", "Développement d'une interface de sauvegarde des ressources.", "Création de pages web personnalisables : Qlik Sense Mashups (En cours)."],
  detailIsDisplayed: false
}, {
  title: "Dévloppeur en freelance",
  company: 'AGC Glass Europe, Maubeuge, Fr',
  period: "2020 - 2021 (5 mois)",
  technologies: 'JAVA 8, Spring, Angular 8, Angular Materials, MySql',
  missions: ["Développement d'une application de notation de fournisseurs par les acheteurs.", "Maintenance évolutive et corrective d'applications."],
  detailIsDisplayed: false
}, {
  title: "Dévloppeur en alternance",
  company: 'AGC Glass Europe, Maubeuge, Fr',
  period: "2019 - 2020 (1 an)",
  technologies: 'JAVA 8, Spring, Angular 8, Angular Materials, MySql',
  missions: ["Application de gestion des camions entrant sur le site", "Amélioration d'une application de création de plans de préventions.", "Application de mise en forme des commandes du verre, dans l’intérêt d'une meilleure lisibilité des priorités pour les équipes de production.", "Création de pages web personnalisables : Qlik Sense Mashups (En cours)."],
  detailIsDisplayed: false
}, {
  title: "Stagiaire Dévloppeur logiciel",
  company: 'Scotfy, Lyon, Fr',
  period: "2018 (3 mois)",
  technologies: 'C#, .NET, Chiffrement AES-256',
  missions: ["Multilingue: Mise en place d’un système de gestion de la langue afin de permettre à l’utilisateur de choisir la langue des interfaces, des messages et des logs.", "Clé de licence: Validation du logiciel à l’aide d’une clé de licence basée sur le nom d’utilisateur Windows."],
  detailIsDisplayed: false
}];

/***/ }),

/***/ 9536:
/*!***********************************!*\
  !*** ./src/app/api/projectsEn.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsEn: () => (/* binding */ projectsEn)
/* harmony export */ });
const projectsEn = [{
  id: "angularAlerts",
  name: "Angular Alerts Library",
  technologies: 'Angular 18, TypeScript, HTML, CSS',
  images: [{
    title: 'Trip',
    src: "assets/images/alert-library-1.png"
  }
  // {
  //     title:'Trip',
  //     src:"assets/images/voyage.webp",
  // },
  // {
  //     title:'Housing',
  //     src: "assets/images/logements.webp",
  // },
  ],
  url: "https://play.google.com/store/apps/details?id=team.traveler.teamtraveler",
  detail: "A customizable alert library for Angular. This library enables you to create clean, responsive, and customizable alert popups for different alert types, including success, error, warning, and information.",
  codeSourceUrl: 'https://github.com/Midhunnairts/angular-alerts',
  detailIsDisplayed: false
}, {
  id: "beamBuilder",
  name: "Beam Builder",
  technologies: 'Angular 18, Konva.js, HTML, CSS, TS',
  images: [{
    title: 'beam builder',
    src: "assets/images/beam-builder-1.png"
  }
  // {
  //     title:'Campaign detail',
  //     src :"assets/images/compagne-detail.jpg",
  // },
  // {
  //     title:"Email performance",
  //     src: "assets/images/email-detail.jpg",
  // },
  // {
  //     title:"Performance of an asset",
  //     src: "assets/images/asset-detail.jpg" 
  // },
  ],
  url: '#portfolio',
  detail: "An angular project tailored for civil engineers, providing a clear and detailed visualization of shear force and bending moment diagrams in a beam.",
  codeSourceUrl: 'https://github.com/Midhunnairts/beam-builder',
  detailIsDisplayed: false
}];

/***/ }),

/***/ 747:
/*!***********************************!*\
  !*** ./src/app/api/projectsFr.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsFr: () => (/* binding */ projectsFr)
/* harmony export */ });
const projectsFr = [{
  id: "teamTraveler",
  name: "Team Traveler",
  technologies: 'Android Studio, Java, FireBase, MVP, NoSql',
  images: [{
    title: '',
    src: "assets/images/voyages.webp"
  }, {
    title: '',
    src: "assets/images/voyage.webp"
  }, {
    title: '',
    src: "assets/images/logements.webp"
  }],
  url: "https://play.google.com/store/apps/details?id=team.traveler.teamtraveler",
  detail: "L'application vous permettra d'organiser des voyage en groupe facilement et rapidement. Votez pour les dates, les transports, hébergement ou même les activités. Grâce à cette <a title='Télécharger sur Google Play' href='https://play.google.com/store/apps/details?id=team.traveler.teamtraveler'>application</a> plus de problème de choix ou désaccords.",
  codeSourceUrl: 'https://github.com/zinedineBenkhider/team_traveler',
  detailIsDisplayed: false
}, {
  id: "mautic",
  name: "Mautic Monitoring",
  technologies: 'Android Studio, Java, Rx_Java, Retrofit, MVP, Rest',
  images: [{
    title: 'Compagnes de marketing',
    src: "assets/images/compagnes.jpg"
  }, {
    title: 'Détail de la compagne',
    src: "assets/images/compagne-detail.jpg"
  }, {
    title: "Performance d'un émail",
    src: "assets/images/email-detail.jpg"
  }, {
    title: "Performance d'un Asset",
    src: "assets/images/asset-detail.jpg"
  }],
  url: '#portfolio',
  detail: "<p>Mautic est un outil open source de marketing automatique</p> <p>L'application permet d'avoir des rapports dynamiques et détaillés, d’analyser les tendances individuels des campagnes.<br> Un tableau de bord visuellement convivial vous donne un point de vue rapide unique sur la performance de: vos campagnes numériques, assets, et formulaires. </p> <p>L'application est disponible en Français et en Anglais.</p>",
  codeSourceUrl: 'https://github.com/zinedineBenkhider/mautic_monitoring',
  detailIsDisplayed: false
}, {
  id: "pokedex",
  name: "Pokedex",
  technologies: 'Java, J2EE, SpringBoot, TDD, MySQL, BootStrap, Services, Deploiment',
  images: [{
    title: 'Pokedex',
    src: "assets/images/pokedex.png"
  }, {
    title: 'Trainers',
    src: "assets/images/trainers.png"
  }, {
    title: "Profile",
    src: "assets/images/profile-trainer.png"
  }],
  url: '#portfolio',
  detail: "<p>Affichage du détail des pokémons et de leurs drésseurs.</p> <p>L'application contient deux micro-service: pokemon management et trainer management, qui exposent un canal de communication REST/JSON.<br>Le 3éme micro-service WEB-UI se connecte aux deux micro-service.</p>",
  codeSourceUrl: 'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
  detailIsDisplayed: false
}, {
  id: "portfolio",
  name: "Portfolio",
  technologies: 'Angular11, Html5, CSS, TypeScript, BootStrap',
  images: [{
    title: 'Portfolio',
    src: "assets/images/portfolio.png"
  }],
  url: 'https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640',
  detail: "<p>CV sous forme de site WEB responsive que j'ai mis en open-source sur GitHub accompagné d'une publication d'un <a title='Voir l'article' href='https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640' target='_blank'>article</a> sur medium. </p>",
  codeSourceUrl: 'https://github.com/zinedineBenkhider/portfolio',
  detailIsDisplayed: false
}, {
  id: "riddle",
  name: "Transfer Riddle",
  technologies: 'Java, J2EE(Web Services), JavaScript, Html5, CSS, BootStrap',
  images: [{
    title: 'riddle',
    src: "assets/images/riddle.png"
  }],
  url: 'https://transfer-riddle-solver.herokuapp.com/index.html',
  detail: "Affichage des étapes de la résolution d'énigme de transvasement. Étant donné deux réservoirs vides de contenance X et Y, comment obtenir précisément T litres dans l’un des deux réservoirs (T étant un entier). On peut remplir ou vider un réservoir, et transvaser le contenu de l’un dans l’autre, jusqu’à ce que la source soit vide ou la destination pleine.",
  codeSourceUrl: 'https://github.com/zinedineBenkhider/transfer_riddle_client',
  detailIsDisplayed: false
}];

/***/ }),

/***/ 5336:
/*!*************************************!*\
  !*** ./src/app/api/referencesEn.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   referencesEn: () => (/* binding */ referencesEn)
/* harmony export */ });
const referencesEn = [{
  personImg: "assets/images/unknown.jpg",
  personFullname: 'Velghe Walter',
  personPosition: "IT Plant Manager",
  personCompany: 'Agc glass europe',
  message: "Zinedine is very effective in application development and in their maintenance, innovative and rational. Coding like lifestyle, his work features high quality products, following the standards and best practices. He has completed three projects on our site and I am so impressed with his techniques. He always has a thought criticism. He is always ready to take on challenges."
}, {
  personImg: "assets/images/lotfi-benkhider.jpg",
  personFullname: 'Benkhider Lotfi',
  personPosition: "CEO & Founder",
  personCompany: 'Scotfy',
  message: "Zinedine completed her internship in my company. He is independent and has a great learning ability. He meets delivery deadlines. He has team spirit. Zinedine does not hesitate to propose new relevant ideas. He respects the instructions, its code is clean."
}, {
  personImg: "assets/images/mohamed-yahiatene.jpg",
  personFullname: 'Yahiatene Mohamed',
  personPosition: "DevOps Engineer",
  personCompany: 'AG2R La Mondiale',
  message: "I worked for two years with Zinedine at the University of Lille. Zinedine is a very good working partner with high knowledge in backend and frontend development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his colleagues whenever he can. He manages to solve problems quickly and efficiently with typical optimism."
}];

/***/ }),

/***/ 5107:
/*!*************************************!*\
  !*** ./src/app/api/referencesFr.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   referencesFr: () => (/* binding */ referencesFr)
/* harmony export */ });
const referencesFr = [{
  personImg: "assets/images/unknown.jpg",
  personFullname: 'Velghe Walter',
  personPosition: "IT Plant Manager",
  personCompany: 'Agc glass europe',
  message: "Zinedine est très efficace dans le développement d'applications et dans leur maintenance, innovante et rationnelle. Coder comme style de vie, son travail propose des produits de haute qualité, suivant les normes et les meilleures pratiques. Il a réalisé trois projets sur notre site et je suis tellement impressionné par ses techniques. Il a toujours une pensée critique. Il est toujours prêt à relever des défis."
}, {
  personImg: "assets/images/lotfi-benkhider.jpg",
  personFullname: 'Benkhider Lotfi',
  personPosition: "CEO & Founder",
  personCompany: 'Scotfy',
  message: "Zinedine a effectué son stage dans mon entreprise. Il est indépendant et a une grande capacité d'apprentissage. Il respecte les délais de livraison. Il a l'esprit d'équipe. Zinedine n'hésite pas à proposer de nouvelles idées pertinentes. Il respecte les consignes, son code est propre."
}, {
  personImg: "assets/images/mohamed-yahiatene.jpg",
  personFullname: 'Yahiatene Mohamed',
  personPosition: "DevOps Engineer",
  personCompany: 'AG2R La Mondiale',
  message: "J'ai travaillé pendant deux ans avec Zinedine à l'Université de Lille. Zinedine est un très bon partenaire de travail avec une grande connaissance du développement backend et frontend, il est toujours désireux d'aller de l'avant sans jamais avoir peur d'utiliser de nouvelles technologies. Il n'hésite pas à aider ses collègues chaque fois qu'il le peut. Il parvient à résoudre les problèmes rapidement et efficacement avec un optimisme typique."
}];

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 1858);
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ 4400);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 3074);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);










const routes = [{
  path: '',
  component: _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent
}, {
  path: 'skills',
  component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent
}, {
  path: 'projects',
  component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent
}, {
  path: 'cv',
  component: _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_3__.CurriculumVitaeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ 4400);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 3074);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ 1858);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 3062);









class AppComponent {
  constructor(_translateService) {
    this._translateService = _translateService;
    this._translateService.addLangs(['en']);
    this._translateService.setDefaultLang('en');
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", 'en');
    }
    let lang = localStorage.getItem("lang");
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      consts: [[1, "page-content"], [1, "footer"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-header")(2, "app-home")(3, "app-about")(4, "app-skills")(5, "app-curriculum-vitae")(6, "app-projects")(7, "app-contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "footer", 1)(9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u00A9 2025 Midhun Nair T S. All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_1__.CurriculumVitaeComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent],
      styles: [".footer[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #01557a;\n    color: rgb(255, 255, 255);\n    text-align: center;\n    vertical-align: middle;\n  }\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n      margin: 10px 0px ;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0VBQ0E7TUFDSSxpQkFBaUI7RUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTU3YTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5mb290ZXIgcHtcbiAgICAgIG1hcmdpbjogMTBweCAwcHggO1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ 4400);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 3074);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ 1858);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./references/references.component */ 7486);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ 3062);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);






















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot()]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_3__.CurriculumVitaeComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _references_references_component__WEBPACK_IMPORTED_MODULE_8__.ReferencesComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule]
  });
})();

/***/ }),

/***/ 8712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8503);





class ContactComponent {
  constructor(_translationLoaderService) {
    this._translationLoaderService = _translationLoaderService;
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__.TranslationLoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 48,
      vars: 30,
      consts: [["id", "contact"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "row"], [1, "col-md-3", "col-lg-3"], [1, "contact-info"], ["src", "assets/images/contact-image.png", "alt", "image"], [1, "col-md-9"], [1, "contact-form"], [1, "form-group"], ["for", "identite", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["type", "text", "id", "identite", "name", "fname", 1, "form-control", 3, "placeholder"], ["for", "email", 1, "control-label", "col-sm-2"], ["type", "email", "id", "email", "name", "email", 1, "form-control", 3, "placeholder"], ["for", "object", 1, "control-label", "col-sm-2"], ["type", "text", "id", "object", "name", "object", 1, "form-control", 3, "placeholder"], ["for", "comment", 1, "control-label", "col-sm-2"], ["rows", "5", "id", "comment", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-default"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9)(24, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 9)(31, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9)(38, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "textarea", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 9)(44, "div", 19)(45, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, "contact.contactMe"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 12, "contact.notHesitateToContactMe"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 14, "contact.identify"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 16, "contact.enterIdentify"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 18, "contact.email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 20, "contact.enterEmail"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 22, "contact.object"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 24, "contact.enterObject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 26, "contact.message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 28, "contact.send"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n\n.contact[_ngcontent-%COMP%]{\n    padding: 4%;\n    height: 400px;\n}\n\n.col-md-3[_ngcontent-%COMP%]{\n    background: #1478a7;\n    padding: 4%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n}\n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background:#149ddd;\n    color: #fff;\n    font-weight: 600;\n    width: 25%;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\n\nsection[_ngcontent-%COMP%]{\n    padding-top: 100px; \n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjc0ZDtcbn1cblxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogNCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmNvbC1tZC0ze1xuICAgIGJhY2tncm91bmQ6ICMxNDc4YTc7XG4gICAgcGFkZGluZzogNCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jb2wtbWQtOXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IzE0OWRkZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9uOmZvY3Vze1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cblxuc2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxufVxuXG5oMyxoNHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4400:
/*!****************************************************************!*\
  !*** ./src/app/curriculum-vitae/curriculum-vitae.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurriculumVitaeComponent: () => (/* binding */ CurriculumVitaeComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _api_experiencesFr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/experiencesFr */ 6264);
/* harmony import */ var _api_experiencesEn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/experiencesEn */ 3011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);










function CurriculumVitaeComponent_li_40_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CurriculumVitaeComponent_li_40_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CurriculumVitaeComponent_li_40_p_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mission_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "education.mission"), " ", index_r5 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", mission_r4, " ");
  }
}
function CurriculumVitaeComponent_li_40_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CurriculumVitaeComponent_li_40_p_13_span_1_Template, 6, 5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", experience_r2.missions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, "education.technologies"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", experience_r2.technologies, " ");
  }
}
function CurriculumVitaeComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17)(6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurriculumVitaeComponent_li_40_Template_button_click_8_listener() {
      const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.detailOnClick(experience_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CurriculumVitaeComponent_li_40_span_9_Template, 2, 0, "span", 19)(10, CurriculumVitaeComponent_li_40_span_10_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CurriculumVitaeComponent_li_40_p_13_Template, 6, 5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](experience_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](experience_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](experience_r2.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !experience_r2.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", experience_r2.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, "education.detail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", experience_r2.detailIsDisplayed);
  }
}
class CurriculumVitaeComponent {
  constructor(_translationLoaderService, _translateService) {
    this._translationLoaderService = _translationLoaderService;
    this._translateService = _translateService;
    this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_3__.experiencesEn;
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
    this._translateService.onLangChange.subscribe(() => {
      if (this._translateService.currentLang == "en") {
        this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_3__.experiencesEn;
      } else {
        this.experiences = _api_experiencesFr__WEBPACK_IMPORTED_MODULE_2__.experiencesFr;
      }
    });
  }
  ngOnInit() {
    this.planeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPlane;
    this.gameIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGamepad;
    this.volleyBallIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faVolleyballBall;
  }
  detailOnClick(experience) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }
  static {
    this.ɵfac = function CurriculumVitaeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CurriculumVitaeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__.TranslationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CurriculumVitaeComponent,
      selectors: [["app-curriculum-vitae"]],
      decls: 93,
      vars: 45,
      consts: [["id", "cv"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], [1, "timeline"], [1, "font-italic"], [1, "year", "p-2", "d-flex", "justify-content-center"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-12", "aos-init", "aos-animate"], [1, "container", "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "aos-init", "aos-animate"], [1, "noProgress", "langue"], [1, ""], [1, "val"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "mt-3", "aos-init", "aos-animate"], [3, "icon"], [1, "d-flex", "flex-row"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"]],
      template: function CurriculumVitaeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "h4")(10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ul", 5)(14, "li")(15, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "em", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Yenepoya Institute of Technology");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "2018 - 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li")(26, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Plus Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "em", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Biology Science ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " GHSS Balanthode");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "2016 - 2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 4)(35, "h4")(36, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CurriculumVitaeComponent_li_40_Template, 14, 9, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 9)(42, "div", 10)(43, "div", 11)(44, "h4")(45, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 12)(49, "span", 13)(50, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 12)(57, "span", 13)(58, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " Malayalam");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 12)(64, "span", 13)(65, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " Hindi");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 10)(71, "div", 15)(72, "h4")(73, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](75, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 12)(77, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "fa-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](81, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " Football, Cricket, Badminton");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 12)(85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "fa-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](92, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 17, "education.title"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 19, "education.eductionTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 21, "education.bachlorDegree"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 23, "education.bachlorDegreeDesc"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 25, "education.experiencesTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.experiences);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 27, "education.languages"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 29, "education.english"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 31, "education.fluent"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](62, 33, "education.fluent"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 35, "education.goodLevel"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](75, 37, "education.centerOfInterest"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.volleyBallIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](81, 39, "education.sport"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.planeIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 41, "education.trips"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](92, 43, "education.tripsCountries"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["ul.timeline[_ngcontent-%COMP%] {\n    list-style-type: none;\n    position: relative;\n}\n\nul.timeline[_ngcontent-%COMP%]:before {\n    content: ' ';\n    background: #105572;\n    display: inline-block;\n    position: absolute;\n    left: 29px;\n    width: 2px;\n    height: 100%;\n    z-index: 400;\n}\n\n.skills[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n    font-weight: 700;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    color: #050d18;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-family: \"Raleway\", sans-serif;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    padding-left: 20px;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n    content: ' ';\n    background: white;\n    display: inline-block;\n    position: absolute;\n    border-radius: 50%;\n    border: 3px solid #105572;\n    left: 20px;\n    width: 20px;\n    height: 20px;\n    z-index: 400;\n}\n\n.year[_ngcontent-%COMP%]{\n    background-color: #e4edf9; \n    width: 190px; \n    padding-left: 5px;\n    margin-right: 5px;\n    height: 40px;\n}\nbutton[_ngcontent-%COMP%]{\n    height: 40px;\n}\n\n.langue[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\n\nfa-icon[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: #149ddd;\n    width: 30px;\n    height: 30px;\n    background: #dff3fc;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3VycmljdWx1bS12aXRhZS9jdXJyaWN1bHVtLXZpdGFlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7RUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJ1bC50aW1lbGluZSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwudGltZWxpbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgYmFja2dyb3VuZDogIzEwNTU3MjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI5cHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogNDAwO1xufVxuXG4uc2tpbGxzIC5yZXN1bWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzA1MGQxODtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxudWwudGltZWxpbmUgPiBsaSB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG51bC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMDU1NzI7XG4gICAgbGVmdDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogNDAwO1xufVxuXG4ueWVhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlZGY5OyBcbiAgICB3aWR0aDogMTkwcHg7IFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbmJ1dHRvbntcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5sYW5ndWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmZhLWljb257XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMTQ5ZGRkO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZmM2ZjO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 3224);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);






class HeaderComponent {
  constructor(_translationLoaderService, _translateService) {
    this._translationLoaderService = _translationLoaderService;
    this._translateService = _translateService;
    this.language = "";
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_2__.locale);
    if (localStorage.getItem("lang")) {
      this.language = localStorage.getItem("lang");
    } else {
      this.language = 'fr';
    }
  }
  languageChange($event) {
    let lang = $event.value;
    localStorage.setItem("lang", lang);
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
  }
  ngOnInit() {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-scroll-trigger').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.navbar-collapse').toggle();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.nav').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0__('.navbar-collapse').toggle();
    });
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__.TranslationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 37,
      vars: 12,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "home", "p-1", "rounded"], [1, "navbar-nav"], [1, "nav-item", "p-1", "rounded"], ["href", "#", 1, "nav-link", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-home"], [1, "navbar-toggler", "nav", "mb-1"], [1, "navbar-toggler-icon"], [1, "container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "width", "100%", "float", "right"], [1, "navbar-nav", 2, "float", "right"], ["href", "#about", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-user"], ["href", "#skills", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-briefcase-alt"], ["href", "#cv", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-file-blank"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-book-content"], ["href", "#contact", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-envelope"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "ul", 2)(4, "li", 3)(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "ul", 10)(14, "li", 3)(15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 3)(20, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 3)(25, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "CV");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 3)(29, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Portfolio");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li", 3)(33, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 4, "header.home"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 6, "header.about"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 8, "header.skills"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 10, "header.contactMe"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["li[_ngcontent-%COMP%]:hover, .home[_ngcontent-%COMP%]:hover {\n    background-color: rgb(51, 59, 61);\n}\n\ni[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\n    background-color: rgb(45, 51, 53);\n}\nnav[_ngcontent-%COMP%]{\n    background-color: #212529;\n}\n\ni[_ngcontent-%COMP%]{\n  font-size: 24px;\n  padding-right: 6px;\n  color: #6f7180;\n}\n\n.nav-home[_ngcontent-%COMP%]:hover{\n  background-color: rgb(51, 59, 61);\n}\nmat-radio-button[_ngcontent-%COMP%]{\n  color:white;\n}\na[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  padding: 3px 4px;\n  margin-bottom: 2px;\n  transition: 0.3s;\n  font-size: 15px;\n}\n\nli[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsibGk6aG92ZXIsLmhvbWU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTksIDYxKTtcbn1cblxuaTpob3ZlcixhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDUxLCA1Myk7XG59XG5uYXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbn1cblxuaXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIGNvbG9yOiAjNmY3MTgwO1xufVxuXG4ubmF2LWhvbWU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTksIDYxKTtcbn1cbm1hdC1yYWRpby1idXR0b257XG4gIGNvbG9yOndoaXRlO1xufVxuYXtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmxpe1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3062:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ 3148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = () => ({
  backgroundImage: "url(assets/images/home-background.jpg)"
});
class HomeComponent {
  constructor(_translationLoaderService) {
    this._translationLoaderService = _translationLoaderService;
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
  }
  ngOnInit() {
    var options = {
      strings: ['', 'Full-Stack', 'Front-end', 'Angular'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true
    };
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2__["default"]('.typed', options);
    typed.reset(true);
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__.TranslationLoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 2,
      consts: [["id", "home", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center", 3, "ngStyle"], ["data-aos", "fade-in", 1, "hero-container", "aos-init", "aos-animate"], [1, "mt-3"], [1, "typed"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Midhun Nair T S");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "I am a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle],
      styles: ["#home[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    background: top center;\n    background-size: cover;\n}\n\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #fff;\n    margin-bottom: 50px;\n    font-size: 26px;\n    font-family: \"Poppins\", sans-serif;\n    display: block;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #fff; \n}\n\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #fff;\n    padding-bottom: 4px;\n    letter-spacing: 1px;\n    border-bottom: 3px solid #149ddd;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2hvbWUgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxe1xuICAgIGNvbG9yOiAjZmZmOyBcbn1cblxuI2hvbWUgcCBzcGFuIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxNDlkZGQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3074:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _api_projectsEn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/projectsEn */ 9536);
/* harmony import */ var _api_projectsFr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/projectsFr */ 747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);








const _c0 = a0 => ({
  "backgroundImage": a0
});
function ProjectsComponent_div_8_a_5_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 21);
  }
}
function ProjectsComponent_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProjectsComponent_div_8_a_5_i_1_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", image_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", image_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", index_r3 == 0);
  }
}
function ProjectsComponent_div_8_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_div_8_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_div_8_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 22);
  }
  if (rf & 2) {
    const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", project_r4.detail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function ProjectsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProjectsComponent_div_8_a_5_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 11)(7, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h5", 12)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 14)(15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_div_8_Template_button_click_18_listener() {
      const project_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.detailOnClick(project_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ProjectsComponent_div_8_span_19_Template, 2, 0, "span", 17)(20, ProjectsComponent_div_8_span_20_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ProjectsComponent_div_8_div_23_Template, 1, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "", project_r4.id, "-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, "url(" + project_r4.images[0].src + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "", project_r4.id, "-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", project_r4.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r4.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", project_r4.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 14, "projects.sourceCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !project_r4.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", project_r4.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 16, "projects.projectDetail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", project_r4.detailIsDisplayed);
  }
}
class ProjectsComponent {
  constructor(_translationLoaderService, _translateService) {
    this._translationLoaderService = _translationLoaderService;
    this._translateService = _translateService;
    this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_2__.projectsEn;
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
    this._translateService.onLangChange.subscribe(() => {
      if (this._translateService.currentLang == "en") {
        this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_2__.projectsEn;
      } else {
        this.projects = _api_projectsFr__WEBPACK_IMPORTED_MODULE_3__.projectsFr;
      }
    });
  }
  ngOnInit() {}
  ngAfterViewInit() {
    console.log("after view init");
    this.onMouse("portfolio-link", "portfolio-img");
    this.onMouse("teamTraveler-link", "teamTraveler-img");
    this.onMouse("mautic-link", "mautic-img");
    this.onMouse("pokedex-link", "pokedex-img");
    this.onMouse("riddle-link", "riddle-img");
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }
  detailOnClick(project) {
    this.projects.filter(item => item.detailIsDisplayed && item.id != project.id).map(elem => elem.detailIsDisplayed = false);
    project.detailIsDisplayed = !project.detailIsDisplayed;
  }
  onMouse(idLink, idImage) {
    $('#' + idLink).on("mouseenter", function () {
      console.log('on mouseenter');
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    });
    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    });
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__.TranslationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 9,
      vars: 4,
      consts: [["id", "portfolio"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["class", "col-lg-4 col-sm-12 ", "data-aos", "flip-up", 4, "ngFor", "ngForOf"], ["data-aos", "flip-up", 1, "col-lg-4", "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "card-header", "d-flex", "flex-column", 2, "height", "300px", "width", "100%"], [1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "id", "ngStyle"], [1, "links", "mt-auto", "d-flex", "justify-content-center", 3, "id"], ["data-gall", "project.id", "class", "venobox vbox-item", 3, "href", "title", 4, "ngFor", "ngForOf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "flex-row", "justify-content-center"], ["target", "_blank", "target", "_blank", "type", "button", 1, "btn", "btn-primary", "mr-3", 3, "href"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "mt-3", 3, "innerHTML", 4, "ngIf"], ["data-gall", "project.id", 1, "venobox", "vbox-item", 3, "href", "title"], ["class", "bx bx-zoom-in bx-md", 4, "ngIf"], [1, "bx", "bx-zoom-in", "bx-md"], [1, "mt-3", 3, "innerHTML"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 24, 20, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "projects.title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["h2[_ngcontent-%COMP%]{\n  color: rgb(22, 59, 90);\n}\n\nli.not-active[_ngcontent-%COMP%]{\n  background-color: rgb(95, 146, 161);\n}\n\nli.active[_ngcontent-%COMP%]{\n  background-color: rgb(6, 46, 58);\n}\n\n.img-wrap[_ngcontent-%COMP%] {\n  vertical-align: top;\n  transition: opacity 3s;\n  -webkit-transition: opacity 0.8s;\n  opacity: 1;\n  background: top center;\n  background-size: cover;\n  position: relative;\n}\n\n.links[_ngcontent-%COMP%]{\n  opacity: 0;\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaDJ7XG4gIGNvbG9yOiByZ2IoMjIsIDU5LCA5MCk7XG59XG5cbmxpLm5vdC1hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTQ2LCAxNjEpO1xufVxuXG5saS5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xufVxuXG4uaW1nLXdyYXAge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGlua3N7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7486:
/*!****************************************************!*\
  !*** ./src/app/references/references.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferencesComponent: () => (/* binding */ ReferencesComponent)
/* harmony export */ });
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _api_referencesEn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/referencesEn */ 5336);
/* harmony import */ var _api_referencesFr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/referencesFr */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);








const _c0 = a0 => ({
  active: a0
});
function ReferencesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 13)(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 17)(9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 13)(12, "div", 18)(13, "h5")(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "div", 18)(18, "span", 19)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 20)(22, "div", 13)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const reference_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, index_r2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", reference_r1.personImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](reference_r1.personFullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](reference_r1.personPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](reference_r1.personCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", reference_r1.message, " ");
  }
}
class ReferencesComponent {
  constructor(_translationLoaderService, _translateService) {
    this._translationLoaderService = _translationLoaderService;
    this._translateService = _translateService;
    this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_2__.referencesEn;
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
    this._translateService.onLangChange.subscribe(() => {
      if (this._translateService.currentLang == "en") {
        this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_2__.referencesEn;
      } else {
        this.references = _api_referencesFr__WEBPACK_IMPORTED_MODULE_3__.referencesFr;
      }
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ReferencesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__.TranslationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ReferencesComponent,
      selectors: [["app-references"]],
      decls: 15,
      vars: 4,
      consts: [["id", "references"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "card", "shadow-lg", "rounded", "pb-3"], ["id", "carouselIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselIndicators", "data-slide-to", "0", 1, "not-active", "active"], ["data-target", "#carouselIndicators", "data-slide-to", "1", 1, "not-active"], ["data-target", "#carouselIndicators", "data-slide-to", "2", 1, "not-active"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], [1, "d-block", "w-100"], [1, "row"], [1, "col-lg-2", "ml-4", "mr-4", "col-sm-12"], [1, "mt-4"], ["alt", "slide", 1, "d-block", "w-100", "rounder", 3, "src"], [1, "mt-3"], [1, "mt-2"], [1, "text-uppercase"], [1, "card-body", "ml-4", "mr-3", "mt-4", "col-lg-9", "col-sm-12"]],
      template: function ReferencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "ol", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "li", 6)(11, "li", 7)(12, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ReferencesComponent_div_14_Template, 25, 8, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "references.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.references);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["li.not-active[_ngcontent-%COMP%]{\n    background-color: rgb(95, 146, 161);\n}\n\nli.active[_ngcontent-%COMP%]{\n    background-color: rgb(6, 46, 58);\n}\n\nsection[_ngcontent-%COMP%]{\n    padding-top: 100px;\n}\n\nh2[_ngcontent-%COMP%]{\n    color: rgb(22, 59, 90);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVmZXJlbmNlcy9yZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5ub3QtYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTQ2LCAxNjEpO1xufVxuXG5saS5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDQ2LCA1OCk7XG59XG5cbnNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG5oMntcbiAgICBjb2xvcjogcmdiKDIyLCA1OSwgOTApO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7132:
/*!*******************************************************!*\
  !*** ./src/app/service/translation-loader.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationLoaderService: () => (/* binding */ TranslationLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8503);


class TranslationLoaderService {
  /**
   * Constructor
   *
   * @param {TranslateService} _translateService
   */
  constructor(_translateService) {
    this._translateService = _translateService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Load translations
   *
   * @param {Locale} args
   */
  loadTranslations(...args) {
    const locales = [...args];
    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this._translateService.setTranslation(locale.lang, locale.data, true);
    });
  }
  static {
    this.ɵfac = function TranslationLoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TranslationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TranslationLoaderService,
      factory: TranslationLoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2772:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/en.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'en',
  data: {
    'about': {
      'title': 'About',
      'jobTitle': 'Software Engineer',
      'introductionOfMe': 'Dedicated and skilled Front-End Angular Web Developer with over two years of experience crafting responsive and user-friendly web applications. Proficient in Angular and expert in modern web development technologies, consistently delivering high-quality solutions tailored to each product\'s unique requirements.',
      'passionateAboutDevelopment': 'Passionate about development',
      'mobility': 'Bangalore',
      'years': 'Years',
      'graduation': "Bachelore's Degree in Information Science and Engineering",
      'myResearch': 'CDI contract search',
      'researchDescription': 'I am looking for an innovative and user-centric company to best meet the needs customer, from his idea to the final delivery of his project, or participate in the improvement of a project existing.',
      'and': 'and',
      'followMeOn': 'Follow me on'
    },
    'contact': {
      'contactMe': 'Contact Me',
      'notHesitateToContactMe': 'Do not hesitate to contact me',
      'identify': 'Identify',
      'enterIdentify': 'Enter your identify',
      'email': 'Email',
      'enterEmail': 'Enter your email',
      'object': 'Object',
      'enterObject': 'Enter object',
      'message': 'Message',
      'send': 'Send'
    },
    'education': {
      'title': 'Curriculum Vitae',
      'eductionTitle': 'Education',
      'experiencesTitle': 'Experiences',
      'centerOfInterest': 'Center of interest',
      'sport': 'Sport',
      'trips': 'Trips',
      'boardGames': 'Board games',
      'languages': 'Languages',
      'fluent': 'Fluent',
      'goodLevel': 'Good level',
      'french': 'French',
      'english': 'English',
      'masterDegreeTwo': "Master's degree 2 IT",
      'masterDegreeTwoDesc': "Master of degital services",
      'masterDegreeOne': "Master's degree 1 IT",
      'masterDegreeOneDesc': "General Master Computer Science",
      'bachlorDegree': "Bachelor's degree",
      'bachlorDegreeDesc': "Information Science and Engineering",
      'university': 'University of Lille, FR',
      'mission': 'Mission',
      'technologies': 'Technologies',
      'detail': 'Detail',
      'tripsCountries': 'Ooty, Goa, Munnar, Dandeli',
      'boardGamesPlayed': 'Checkers and dominoes game, Among US, Ludo, ..etc',
      'years': 'years'
    },
    'header': {
      'home': 'Home',
      'about': 'About',
      'skills': 'Skills',
      'references': 'References',
      'contactMe': 'Contact me'
    },
    'home': {
      'iAmDeveloper': 'I am developer'
    },
    'projects': {
      'title': 'Portfolio',
      'projectDetail': 'Project detail',
      'sourceCode': 'Source code'
    },
    'references': {
      'title': 'References'
    },
    'skills': {
      'title': 'Skills',
      'technologies': 'Technologies',
      'tools': 'Tools',
      'methodologies': 'Methodologies'
    }
  }
};

/***/ }),

/***/ 7367:
/*!***********************************!*\
  !*** ./src/app/shared/i18n/fr.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locale: () => (/* binding */ locale)
/* harmony export */ });
const locale = {
  lang: 'fr',
  data: {
    'about': {
      'title': 'A propos',
      'jobTitle': "Développeur d'applications web et mobiles",
      'introductionOfMe': "Intéressé par les nouvelles technologies et méthodes de travail. J'aime proposer des idées qui permettent d'améliorer les processus d'affaires.",
      'passionateAboutDevelopment': ' Passionné par le développement',
      'mobility': 'Mobile dans toute la France',
      'years': 'ans',
      'graduation': "Master 2 Informatique",
      'myResearch': 'Recherche de contrat CDI',
      'researchDescription': "Je recherche une entreprise innovante et centrée sur l'utilisateur pour répondre au mieux aux besoins du client, de son idée à la livraison finale de son projet, ou participer à l'amélioration d'un projet existant.",
      'and': 'et',
      'followMeOn': 'Suivez-moi sur'
    },
    'contact': {
      'contactMe': 'Contactez moi',
      'notHesitateToContactMe': "N'hésitez pas à me contacter",
      'identify': 'Identifiant',
      'enterIdentify': 'Entrez votre identifiant',
      'email': 'Email',
      'enterEmail': 'Entrez votre Email',
      'object': 'Objet',
      'enterObject': "Saisissez l'objet",
      'message': 'Message',
      'send': 'Envoyer'
    },
    'education': {
      'title': 'Curriculum Vitae',
      'eductionTitle': 'Éducation',
      'experiencesTitle': 'Expériences',
      'centerOfInterest': "Centre d'intérêts",
      'sport': 'Sport',
      'trips': 'Voyages',
      'boardGames': 'Jeux de société',
      'languages': 'Langues',
      'fluent': 'Courant',
      'goodLevel': 'Bon niveau',
      'french': 'Français',
      'english': 'Anglais',
      'masterDegreeTwo': "Master 2 Informatique E-services",
      'masterDegreeTwoDesc': "Master en services numériques",
      'masterDegreeOne': "Master 1 Informatique",
      'masterDegreeOneDesc': "Master Général Informatique",
      'bachlorDegree': "Licence 3 Informatique",
      'bachlorDegreeDesc': "Licence en informatiques",
      'university': 'Université de Lille, FR',
      'mission': 'Mission',
      'technologies': 'Téchnologies',
      'detail': 'Détail',
      'tripsCountries': 'Belgique, Espagne, Pays-Bas, Suisse',
      'boardGamesPlayed': 'Jeu de dames et de dominos, Among US, Ludo, ..etc',
      'years': 'ans'
    },
    'header': {
      'home': 'Accueil',
      'about': 'A propos',
      'skills': 'Compétences',
      'references': 'Recommandations',
      'contactMe': 'Me Contacter'
    },
    'home': {
      'iAmDeveloper': 'Je suis développeur'
    },
    'projects': {
      'title': 'Projets',
      'projectDetail': 'Détail projet',
      'sourceCode': 'Code source'
    },
    'references': {
      'title': 'Recommandations'
    },
    'skills': {
      'title': 'Compétences',
      'technologies': 'Téchnologies',
      'tools': 'Outils',
      'methodologies': 'Méthodologies'
    }
  }
};

/***/ }),

/***/ 1858:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/i18n/en */ 2772);
/* harmony import */ var _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/fr */ 7367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/translation-loader.service */ 7132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);






function SkillsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technologie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](technologie_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", technologie_r1.remark);
  }
}
function SkillsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tool_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tool_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", tool_r2.remark);
  }
}
class SkillsComponent {
  constructor(_translationLoaderService) {
    this._translationLoaderService = _translationLoaderService;
    this.skills = {
      technologies: [{
        name: "Angular 14,16,18",
        percent: 85,
        remark: 'excellent'
      }, {
        name: "Micro frontend architecture - Single-spa",
        percent: 85,
        remark: 'excellent'
      }, {
        name: "JavaScript, TypeScript",
        percent: 80,
        remark: 'very-good'
      }, {
        name: "HTML5, CSS3, SASS/SCSS",
        percent: 95,
        remark: 'excellent'
      }, {
        name: "Node.js, Express.js, MongoDB",
        percent: 70,
        remark: 'good'
      }],
      tools: [{
        name: "Git, Bitbucket",
        percent: 90,
        remark: 'excellent'
      }, {
        name: "Vs Code",
        percent: 90,
        remark: 'excellent'
      }, {
        name: "Linux, Windows",
        percent: 80,
        remark: 'very-good'
      }, {
        name: "NoSql",
        percent: 80,
        remark: 'good'
      }, {
        name: "NPM",
        percent: 85,
        remark: 'very-good'
      }]
      // methodologies: [
      //   { name: "Scrum", percent: 70, remark: 'very-good' },
      //   { name: "Uml", percent: 90, remark: 'excellent' },
      //   { name: "Disign Thinking", percent: 70, remark: 'good' },
      //   { name: "TDD", percent: 90, remark: 'excellent' },
      //   { name: "DevOps", percent: 50, remark: 'average' }
      // ]
    };
    this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_0__.locale, _shared_i18n_fr__WEBPACK_IMPORTED_MODULE_1__.locale);
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SkillsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__.TranslationLoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 22,
      vars: 11,
      consts: [["id", "skills"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row", "mt-2"], ["data-aos", "fade-up ", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-6"], [1, "h5"], ["id", "skillgraph"], ["class", "row skill-row", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-6"], ["id", "skillgraph", 1, "panel", "panel-default"], [1, "row", "skill-row"], [1, "label", "d-flex", "flex-row"], [1, "skillLabel"], [1, "skillData-Wrapper"], [1, "skillData", "bg-rust", 3, "ngClass"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "h5", 5)(10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SkillsComponent_div_14_Template, 6, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "h5", 5)(17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SkillsComponent_div_21_Template, 6, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "skills.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, "skills.technologies"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.skills.technologies);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 9, "skills.tools"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.skills.tools);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".bg-lightgray[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\n    background-color: #ddd;\n}\n.skillData-Wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n#skillgraph[_ngcontent-%COMP%] {\n  padding: 1em; \n}\n\n.skill-percent[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.skillLabel[_ngcontent-%COMP%]{\n  width: 100%;\n  margin-top: 10px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #050d18d7;\n\n}\n\n.competence-Wrapper[_ngcontent-%COMP%]{\n  line-height: 0.1 0.7em;\n  height: 12px;\n  width: .1em;\n  float: left;\n  color: white;\n  text-align: center;\n}\n\n.skillData-Wrapper[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\n  width: 100%; \n}\n\n.skillData[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\n  line-height: 0.1 0.7em;\n  height: 12px;\n  float: left;\n  color: white;\n  text-align: center; \n}\n\n.excellent[_ngcontent-%COMP%]{\n  width: 90%;\n}\n\n.very-good[_ngcontent-%COMP%]{\n  width: 80%;\n}\n\n.good[_ngcontent-%COMP%]{\n  width: 70%;\n}\n\n.average[_ngcontent-%COMP%]{\n  width: 50%;\n}\n\n.bg-rust[_ngcontent-%COMP%] {\n    background-color: #149ddd;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWxpZ2h0Z3JheSwgLnNraWxsRGF0YS1XcmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnNraWxsRGF0YS1XcmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3NraWxsZ3JhcGgge1xuICBwYWRkaW5nOiAxZW07IFxufVxuXG4uc2tpbGwtcGVyY2VudHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2tpbGxMYWJlbHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwNTBkMThkNztcblxufVxuXG4uY29tcGV0ZW5jZS1XcmFwcGVye1xuICBsaW5lLWhlaWdodDogMC4xIDAuN2VtO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAuMWVtO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5za2lsbERhdGEtV3JhcHBlciwgLmxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7IFxufVxuXG4uc2tpbGxEYXRhLCAuc2tpbGxEYXRhLVdyYXBwZXIge1xuICBsaW5lLWhlaWdodDogMC4xIDAuN2VtO1xuICBoZWlnaHQ6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5leGNlbGxlbnR7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi52ZXJ5LWdvb2R7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5nb29ke1xuICB3aWR0aDogNzAlO1xufVxuXG4uYXZlcmFnZXtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJnLXJ1c3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDlkZGQ7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
aos__WEBPACK_IMPORTED_MODULE_2__.init();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map