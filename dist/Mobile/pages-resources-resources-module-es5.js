(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resources-resources-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resources/resources.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resources/resources.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesResourcesResourcesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title slot=\"start\">Resources</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (ionScroll)=\"scrollTracking($event)\" [scrollEvents]=\"true\">\n  <div class=\"progress-container\">\n    <div class=\"progress-bar\" id=\"scrollBarResources\"></div>\n  </div>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"9\" size-lg=\"8\">\n        <p class=\"page-info\">Here are some other organizations that can help you on your way to higher education and employment.</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"8\">\n        <h1>Resources</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"8\">\n        <ion-row class=\"resource\" *ngFor=\"let resource of resources\">\n          <ion-col class=\"ion-align-self-center\" size=\"11\">\n            <img src=\"{{resource.logo}}\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"11\">\n            <p class=\"name\">{{resource.name}}</p>\n            <p class=\"description\">{{resource.description}}</p>\n\n            <ion-button class=\"blue-button link\" href=\"{{resource.url}}\" target=\"_blank\">\n              LINK\n            </ion-button>\n            <hr style=\"border-bottom: #eee solid 3px\">\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button class=\"orange-button\" (click)=\"back()\">\n              Back\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/resources/resources-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/resources/resources-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ResourcesPageRoutingModule */

  /***/
  function srcAppPagesResourcesResourcesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesPageRoutingModule", function () {
      return ResourcesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _resources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resources.page */
    "./src/app/pages/resources/resources.page.ts");

    const routes = [{
      path: '',
      component: _resources_page__WEBPACK_IMPORTED_MODULE_3__["ResourcesPage"]
    }];
    let ResourcesPageRoutingModule = class ResourcesPageRoutingModule {};
    ResourcesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResourcesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/resources/resources.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/resources/resources.module.ts ***!
    \*****************************************************/

  /*! exports provided: ResourcesPageModule */

  /***/
  function srcAppPagesResourcesResourcesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function () {
      return ResourcesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resources-routing.module */
    "./src/app/pages/resources/resources-routing.module.ts");
    /* harmony import */


    var _resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resources.page */
    "./src/app/pages/resources/resources.page.ts");

    let ResourcesPageModule = class ResourcesPageModule {};
    ResourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resources_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourcesPageRoutingModule"]],
      declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]]
    })], ResourcesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/resources/resources.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/resources/resources.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesResourcesResourcesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  margin: 30px 0;\n}\n\n.page-info {\n  color: #666;\n  background: #eee;\n  height: 100px;\n  position: relative;\n  top: -15px;\n  padding: 34px 20px 10px 20px;\n  font-size: 1.15em;\n}\n\nimg {\n  height: 200px;\n  width: 200px;\n  border-radius: 50px;\n}\n\n.name {\n  font-size: 1.4em;\n  color: #005191;\n  font-weight: 500;\n}\n\n.description {\n  font-size: 1em;\n  line-height: 1.7em;\n}\n\n.resource {\n  margin-bottom: 50px;\n}\n\n.link {\n  width: 60px;\n  margin-bottom: 30px;\n}\n\n.orange-button {\n  margin-bottom: 100px;\n}\n\n.progress-container {\n  width: 100%;\n  height: 8px;\n  background: #ccc;\n  overflow: hidden;\n  position: fixed;\n  z-index: 9999;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);\n}\n\n.progress-bar {\n  background: #afd2ee;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #afd2ee) 0, 81, 145p 100%, #005191);\n  background: -webkit-gradient(linear, left top, right top, from(#afd2ee), to(#005191));\n  background: linear-gradient(to right, #afd2ee 0%, #005191 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#edffb8\", endColorstr=\"#61c900\", GradientType=1 );\n  width: 0%;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  -webkit-transition: width 0.15s;\n  transition: width 0.15s;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc291cmNlcy9yZXNvdXJjZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsbUJBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUVBLG9HQUFBO0VBSUEscUZBQUE7RUFBQSwrREFBQTtFQUNBLG9IQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSwrQkFBQTtFQUFBLHVCQUFBO0VBQ0EsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4ucGFnZS1pbmZvIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgcGFkZGluZzogMzRweCAyMHB4IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjAwcHg7IHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbn1cblxuLnJlc291cmNle1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubGluayB7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTc1LCAyMTAsIDIzOCwxKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiKDE3NSwgMjEwLCAyMzgpIDAlLCByZ2JhKDAsODEsMTQ1KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDE3NSwgMjEwLCAyMzgsMSkpMCwgODEsIDE0NXAoMTAwJSwgcmdiYSgwLDgxLDE0NSkpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNzUsIDIxMCwgMjM4LDEpIDAlLCByZ2JhKDAsODEsMTQ1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNzUsIDIxMCwgMjM4LDEpIDAlLCByZ2JhKDAsODEsMTQ1KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE3NSwgMjEwLCAyMzgsMSkgMCUsIHJnYmEoMCw4MSwxNDUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTc1LCAyMTAsIDIzOCwxKSAwJSwgcmdiYSgwLDgxLDE0NSkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZWRmZmI4JywgZW5kQ29sb3JzdHI9JyM2MWM5MDAnLCBHcmFkaWVudFR5cGU9MSApO1xuICB3aWR0aDogMCU7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogd2lkdGggLjE1cztcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iLCJoMSB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4ucGFnZS1pbmZvIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgcGFkZGluZzogMzRweCAyMHB4IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbn1cblxuLnJlc291cmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxpbmsge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiAjYWZkMmVlO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYWZkMmVlIDAlLCAjMDA1MTkxIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNhZmQyZWUpIDAsIDgxLCAxNDVwIDEwMCUsICMwMDUxOTEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYWZkMmVlIDAlLCAjMDA1MTkxIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2FmZDJlZSAwJSwgIzAwNTE5MSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYWZkMmVlIDAlLCAjMDA1MTkxIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhZmQyZWUgMCUsICMwMDUxOTEgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2VkZmZiOFwiLCBlbmRDb2xvcnN0cj1cIiM2MWM5MDBcIiwgR3JhZGllbnRUeXBlPTEgKTtcbiAgd2lkdGg6IDAlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMTVzO1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/resources/resources.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/resources/resources.page.ts ***!
    \***************************************************/

  /*! exports provided: ResourcesPage */

  /***/
  function srcAppPagesResourcesResourcesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesPage", function () {
      return ResourcesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ResourcesPage = class ResourcesPage {
      constructor(router) {
        this.router = router;
        this.resources = [{
          url: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/publicaccess/membershipDirectory.do?md=1',
          logo: '../../assets/logos/YDRC-logo.png',
          name: 'Detroit DRC',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
        }, {
          url: 'https://discoveryourspark.org/program-finder/#',
          logo: '../../assets/logos/DYS-logo.png',
          name: 'Discover Your Spark',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
        }, {
          url: 'https://gdyt.org/',
          logo: '../../assets/logos/GDYT-logo.png',
          name: "Grow Detroit's Youth Talent (GDYT)",
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
        }, {
          url: 'https://detroitsummerguide.org/',
          logo: '../../assets/logos/DSG-logo.png',
          name: 'Detroit Summer Guide',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
        }];
      }

      ngOnInit() {}

      scrollTracking(event) {
        console.log(event);
        const winScroll = event.detail.scrollTop; // const documentHeight = event.detail.scrollTop;
        // const windowHeight = event.detail.scrollTop;

        const height = event.detail.event.path[0].clientHeight;
        const scrollHeight = event.detail.event.path[0].scrollHeight;
        const scrolled = winScroll / (scrollHeight - height) * 100;
        console.log('ScrollTop: ', winScroll);
        console.log('Height: ', height); // console.log('Scroll %', scrolled);

        document.getElementById('scrollBarResources').style.width = scrolled + '%';
      }

      back() {
        this.router.navigate(['']);
      }

    };

    ResourcesPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ResourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resources',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resources.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resources/resources.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resources.page.scss */
      "./src/app/pages/resources/resources.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ResourcesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-resources-resources-module-es5.js.map