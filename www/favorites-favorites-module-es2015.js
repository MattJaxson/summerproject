(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/jobs/favorites/favorites.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/jobs/favorites/favorites.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Favorite Jobs</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 5% 0%;\">\n      <ion-col offset=\"2.9\" size=\"2.5\">\n        <h1>Favorite Jobs</h1>\n      </ion-col>\n      <ion-col push=\"2.3\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"10.7\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n\n        <ion-row class=\"job-section\" *ngFor=\"let job of favoriteJobsObj\">\n          <!-- First Row w/ Job Tile, Date posted, and Logo -->\n          <ion-col push=\"0.5\" size=\"10\" style=\"padding-top: 30px\">\n            <ion-row>\n              <ion-col size=\"1\">\n                <div class=\"company-logo\" style=\"height: 40px; width: 40px;\"></div>\n              </ion-col>\n              <ion-col push-xs=\"0.5\" size=\"8.7\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\" >Posted: {{job.dateCreated}}</h5>\n              </ion-col>\n              <ion-col push=\"1\" size=\"1\">\n                <!-- Heart Icon Component holds the state for Favorites -->\n              <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n  \n          <ion-col size=\"12\">\n            <ion-row>\n              <!-- Second Row w/ Job Summary -->\n              <ion-col push=\"0.5\" size=\"10.5\">\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n  \n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col push=\"0.5\" size=\"10.5\">\n                <ion-button id=\"job-details\" class=\"back-button ion-float-right\" (click)=\"jobPage(job)\">\n                  Details\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          \n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/jobs/favorites/favorites-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/jobs/favorites/favorites.page.ts");




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jobs/favorites/favorites.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.module.ts ***!
  \**********************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "./src/app/pages/jobs/favorites/favorites-routing.module.ts");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/jobs/favorites/favorites.page.ts");








let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__["CustomComponentsModule"]
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_7__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "./src/app/pages/jobs/favorites/favorites.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  margin: 0;\n}\n\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.job-section {\n  background: white;\n  height: auto;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n  margin-bottom: 50px;\n  padding-bottom: 10px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n#job-details {\n  color: #005191;\n  --background: white;\n  --background-hover: linear-gradient(#0672c4, #00467c);\n  --color-hover: white;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n#favorites-button {\n  opacity: 1;\n  --background: rgba(255,255,255,0.1);\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 70px;\n  height: 40px;\n  font-size: 0.8em;\n  font-weight: 600;\n}\n\nion-icon {\n  color: red;\n  font-size: 25px;\n  position: relative;\n  right: 5px;\n}\n\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n  top: -60px;\n}\n\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -31px;\n}\n\n#job-title {\n  font-size: 0.9em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9icy9mYXZvcml0ZXMvZmF2b3JpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbiNqb2ItZGV0YWlscyB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA0NjdjKTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4jZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taGVpZ2h0OiA2MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDVweDtcblxuXG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzY2NjtcbiAgb3BhY2l0eTogMC43O1xuICB0b3A6IC02MHB4O1xufVxuXG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMxcHhcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweFxufVxuXG4jam9iLXBvc3RlZC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNDNweFxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn0iLCJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvam91cm5pLWxvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbiNqb2ItZGV0YWlscyB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA0NjdjKTtcbiAgLS1jb2xvci1ob3Zlcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4jZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taGVpZ2h0OiA2MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjNjY2O1xuICBvcGFjaXR5OiAwLjc7XG4gIHRvcDogLTYwcHg7XG59XG5cbiNjb21wYW55LW5hbWUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzFweDtcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgI2pvYi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/jobs/favorites/favorites.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.ts ***!
  \********************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ "./src/app/emitters/favorites-event-emitter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let FavoritesPage = class FavoritesPage {
    constructor(router, favorites, profile, eventEmitterService, location) {
        this.router = router;
        this.favorites = favorites;
        this.profile = profile;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
            // this.favorites.getFavorites(this.userEmail);
        });
        // this.favorites.favoriteJobs$.subscribe(favorites => {
        //   this.favoriteJobs = Object.values(favorites);
        // });
        this.getFavoriteJobs();
    }
    back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/jobs']);
    }
    getFavoriteJobs() {
        // getting all the favorite jobs that the user has on their profile
        this.profile.getUserDetails().subscribe(data => {
            this.userEmail = data['email'];
            // this.favoriteJobs = data['favoriteJobs']
            // console.log('Favorite Jobs:');
            // console.log(this.favoriteJobs);
            // this.favorites.favoriteJobs$.next(this.favoriteJobs);
            this.favorites.favoriteJobs$.subscribe(favs => {
                console.log(`Favorite Jobs in Service: ${favs}`);
                this.favorites.getFavorites(this.userEmail).subscribe(favDetails => {
                    this.favoriteJobsObj = favDetails;
                    console.log('Favorite jobs:');
                    console.log(favDetails);
                    for (const job of this.favoriteJobsObj) {
                        job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["formatDistanceToNow"])(new Date(job.dateCreated), { addSuffix: true });
                    }
                });
            });
        });
    }
    jobPage(job) {
        console.log(job);
        console.log('Going to specific Job Page');
        // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
        console.log(job.name);
    }
    favoriteJobPage() {
        console.log('Going to favorite bad');
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesEventEmitterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"] }
];
FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: __webpack_require__(/*! raw-loader!./favorites.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/jobs/favorites/favorites.page.html"),
        styles: [__webpack_require__(/*! ./favorites.page.scss */ "./src/app/pages/jobs/favorites/favorites.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesEventEmitterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]])
], FavoritesPage);



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module-es2015.js.map