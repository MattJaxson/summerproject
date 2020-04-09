(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fairs-fairs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fairs.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fairs.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsFairsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\n  <!-- Mobile & Tablet Header -->\n  <ion-toolbar>\n    <ion-title>United Way Southast Michigan Fairs</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-header class=\"ion-hide-sm-down\">\n   <!-- Desktop Header -->\n  <ion-toolbar class=\"fair-page-toolbar-lg ion-padding-horizontal\">\n      <ion-title color=\"primary\">United Way Southast Michigan Fairs</ion-title>\n      <ion-button (click)=\"goBack()\" class=\"orange-button\" style=\"width: 100px; --background: #005191; --color: white;\" slot=\"end\">Go Back\n      </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Mobile & Tablet -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-hide-md-up\" size-xs=\"12\" size-sm=\"8\">\n          <ion-card *ngFor=\"let fair of allFairs\">\n\n              <ion-card-content class=\"fair-photo\"></ion-card-content>\n               <ion-card-header>\n                 <ion-card-title>{{fair.title}}</ion-card-title>\n                 <ion-card-subtitle>Date: {{fair.date}}</ion-card-subtitle>\n                 <ion-card-subtitle>Time: {{fair.time}}</ion-card-subtitle>\n               </ion-card-header>\n               <ion-toolbar class=\"card-toolbar ion-text-center\">\n                  <ion-button class=\"fair-button-sm orange-button\" (click)=\"fairPage(fair._id)\">\n                      View Fair\n                    </ion-button>\n               </ion-toolbar>\n             </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Desktop -->\n    <ion-row *ngFor=\"let fair of allFairs\" class=\"ion-justify-content-center fair-lg\">\n        <ion-col class=\"ion-hide-sm-down fair-info-lg\" size-md=\"4\">\n          <h1>{{fair.title}}</h1>\n          <p>Date: {{fair.date}}</p>\n          <p>Time: {{fair.time}}</p>\n          <ion-button class=\"fair-button orange-button\" (click)=\"fairPage(fair._id)\">\n            View Fair\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"ion-hide-sm-down fair-photo-lg\" size-md=\"4\">\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fairs-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/fairs/fairs-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FairsPageRoutingModule */

  /***/
  function srcAppPagesFairsFairsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairsPageRoutingModule", function () {
      return FairsPageRoutingModule;
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

    const routes = [{
      path: '',
      loadChildren: () => __webpack_require__.e(
      /*! import() | fair-page-fair-page-module */
      "fair-page-fair-page-module").then(__webpack_require__.bind(null,
      /*! ./fair-page/fair-page.module */
      "./src/app/pages/fairs/fair-page/fair-page.module.ts")).then(m => m.FairPagePageModule)
    }];
    let FairsPageRoutingModule = class FairsPageRoutingModule {};
    FairsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FairsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fairs.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/fairs/fairs.module.ts ***!
    \*********************************************/

  /*! exports provided: FairsPageModule */

  /***/
  function srcAppPagesFairsFairsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairsPageModule", function () {
      return FairsPageModule;
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


    var _fairs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fairs-routing.module */
    "./src/app/pages/fairs/fairs-routing.module.ts");
    /* harmony import */


    var _fairs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fairs.page */
    "./src/app/pages/fairs/fairs.page.ts");

    let FairsPageModule = class FairsPageModule {};
    FairsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fairs_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairsPageRoutingModule"]],
      declarations: [_fairs_page__WEBPACK_IMPORTED_MODULE_6__["FairsPage"]]
    })], FairsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/fairs.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/fairs/fairs.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsFairsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\nion-title {\n  font-size: 1.5em;\n}\n\n.fair-page-toolbar-lg {\n  --background: rgba(245,245,245,1);\n}\n\n.fair-page-toolbar-lg ion-item {\n  font-size: 1.4em;\n  font-weight: 900;\n}\n\n.fair-photo {\n  height: 300px;\n  background-image: url(\"/../../assets/Journi_flyer-500x357.png\");\n  background-size: cover;\n}\n\nh1, ion-card-title {\n  color: #005191;\n  font-weight: 900;\n}\n\np, ion-card-subtitle {\n  color: #999;\n  font-weight: 800;\n}\n\n.fair-lg {\n  margin-top: 50px;\n}\n\n.fair-info-lg {\n  border: 1px solid #fafafa;\n  background: #f9fafc;\n  height: 400px;\n  padding: 20px;\n  box-shadow: 1px 2px 4px #999;\n}\n\n.fair-photo-lg {\n  height: auto;\n  background-image: url(\"/../../assets/Journi_flyer-800x571.png\");\n  background-size: contain;\n  box-shadow: 1px 2px 4px #999;\n}\n\n.fair-button {\n  position: absolute;\n  bottom: 20px;\n  width: 100px;\n}\n\n.fair-button-sm {\n  width: 200px;\n  margin: 0 auto;\n}\n\n.card-toolbar {\n  --background: #f9fafc;\n  height: 80px;\n}\n\nion-card-header {\n  background: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvZmFpcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYWlycy9mYWlycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURDRTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDQUY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsK0RBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFpcnMvZmFpcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uZmFpci1wYWdlLXRvb2xiYXItbGcge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LDI0NSwyNDUsMSk7XG5cbiAgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICB9XG59XG5cbi5mYWlyLXBob3RvIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvLi4vLi4vYXNzZXRzL0pvdXJuaV9mbHllci01MDB4MzU3LnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5oMSwgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxucCwgaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmZhaXItbGd7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5mYWlyLWluZm8tbGd7XG4gIGJvcmRlcjogIDFweCBzb2xpZCAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAjOTk5O1xufVxuXG5cblxuLmZhaXItcGhvdG8tbGcge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLy4uLy4uL2Fzc2V0cy9Kb3VybmlfZmx5ZXItODAweDU3MS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAjOTk5O1xufVxuXG4uZmFpci1idXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5mYWlyLWJ1dHRvbi1zbSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmOWZhZmM7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDUsMjQ1LDI0NSwxKTtcbn1cbi5mYWlyLXBhZ2UtdG9vbGJhci1sZyBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5mYWlyLXBob3RvIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uL2Fzc2V0cy9Kb3VybmlfZmx5ZXItNTAweDM1Ny5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmgxLCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5wLCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmFpci1sZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5mYWlyLWluZm8tbGcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAjOTk5O1xufVxuXG4uZmFpci1waG90by1sZyB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uL2Fzc2V0cy9Kb3VybmlfZmx5ZXItODAweDU3MS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggIzk5OTtcbn1cblxuLmZhaXItYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmZhaXItYnV0dG9uLXNtIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQtdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZmFmYztcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/fairs.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/fairs/fairs.page.ts ***!
    \*******************************************/

  /*! exports provided: FairsPage */

  /***/
  function srcAppPagesFairsFairsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairsPage", function () {
      return FairsPage;
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


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let FairsPage = class FairsPage {
      constructor(router, fairs, navCtrl) {
        this.router = router;
        this.fairs = fairs;
        this.navCtrl = navCtrl;
      }

      ngOnInit() {
        this.fairs.getFairs().subscribe(data => {
          this.allFairs = Object.values(data);
          console.log(this.allFairs);

          for (const fair of this.allFairs) {
            fair.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(fair['date']), 'MMMM dd, yyyy');
            fair.time = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(fair['date']), 'hh:mm a');
            fair.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["formatDistanceToNow"])(new Date(fair.dateCreated), {
              includeSeconds: true,
              addSuffix: true
            });
          }
        });
      }

      goBack() {
        console.log('going back');
        this.router.navigate(['']);
      }

      fairPage(id) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/fairs/fair', id]);
        console.log('ID: ' + id);
      }

    };

    FairsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_2__["FairsService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
    }];

    FairsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fairs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fairs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/fairs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fairs.page.scss */
      "./src/app/pages/fairs/fairs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_2__["FairsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], FairsPage);
    /***/
  },

  /***/
  "./src/app/services/fairs.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/fairs.service.ts ***!
    \*******************************************/

  /*! exports provided: FairsService */

  /***/
  function srcAppServicesFairsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairsService", function () {
      return FairsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let FairsService = class FairsService {
      constructor(http, router, loading, alert) {
        this.http = http;
        this.router = router;
        this.loading = loading;
        this.alert = alert;
        this.allFairs = [];
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      getFairs() {
        console.log('Getting Fairs');
        return this.http.get("".concat(this.BACKEND_URL, "/api/fairs"));
      }

      getFair(id) {
        console.log(id);
        console.log('id from fairs service');
        return this.http.post("".concat(this.BACKEND_URL, "/api/fairs/fair"), {
          id
        });
      }

      registerStudent(student) {
        return this.http.post("".concat(this.BACKEND_URL, "/api/fairs/register-student"), student).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
          if (error.error === 'A Student already has that email address') {
            console.log('A Student already has that email address');
            this.emailAlreadyExistAlert();
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"];
          }
        })).subscribe(data => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield console.log('registering student to fair');
          yield console.log(data);
          yield this.presentLoadingWithOptions(student.name, student.email);
          yield this.router.navigate(['']);
          yield this.presentAlert();
          yield console.log('REGISTERED STUDENT TO FAIR!');
        }));
        ;
      }

      registerPartner(partner) {
        return this.http.post("".concat(this.BACKEND_URL, "/api/fairs/register-partner"), partner).subscribe(data => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield console.log('registering partner to fair...');
          yield console.log(data);
          yield this.presentLoadingWithOptions(partner.name, partner.email);
          yield this.router.navigate(['']);
          yield console.log('REGISTERED PARTNER TO FAIR!');
        }));
      }

      registerChaperone(chaperone) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return this.http.post("".concat(this.BACKEND_URL, "/api/fairs/register-chaperone"), chaperone).subscribe(data => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('registering chaperone to fair');
            yield console.log(data);
            yield this.presentLoadingWithOptions(chaperone.name, chaperone.email);
            yield this.router.navigate(['']);
            yield console.log('REGISTERED CHAPERONE TO FAIR!');
          }));
        });
      }

      registerVolunteer(volunteer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return this.http.post("".concat(this.BACKEND_URL, "/api/fairs/register-volunteer"), volunteer).subscribe(data => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield console.log('registering volunteer to fair');
            yield console.log(data);
            yield this.presentLoadingWithOptions(volunteer.name, volunteer.email);
            yield this.router.navigate(['']);
            yield console.log('REGISTERED VOLUNTEER TO FAIR!');
          }));
        });
      } // Errors


      handleError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (error.error === 'A Student already has that email address') {
            console.log('A Student already has that email address');
            return this.emailAlreadyExistAlert();
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        });
      }

      emailAlreadyExistAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            header: 'Email already in use.',
            message: 'This email already exists. Please enter another email address',
            buttons: ['Ok']
          });
          return yield alert.present();
        });
      } // Loading


      presentLoadingWithOptions(chaperoneName, chaperoneEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            duration: 3000,
            message: "Registering you as a Chaperone ".concat(chaperoneName, ". Sending an email to ").concat(chaperoneEmail),
            translucent: true,
            cssClass: 'loading',
            backdropDismiss: true
          });
          yield loading.present();
          const {
            role,
            data
          } = yield loading.onDidDismiss();
          console.log('Loading dismissed with role:', role);
        });
      } // Alerts


      presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            header: 'Alert',
            cssClass: 'registered',
            message: 'This is an alert message.',
            buttons: ['OK']
          });
          yield alert.present();
        });
      }

    };

    FairsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
    }];

    FairsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])], FairsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-fairs-fairs-module-es5.js.map