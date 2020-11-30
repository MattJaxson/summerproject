(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fairs-selection-selection-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/selection/selection.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/selection/selection.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFairsSelectionSelectionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <p class=\"toolbar-title\">Back</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Fairs intro text -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1>Fairs</h1>\n        <p class=\"desciption\">Text about this page goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid officiis dicta at iste rerum illo nulla non. Accusamus praesentium nisi provident numquam, quaerat atque veritatis, vitae exercitationem soluta culpa amet.</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- Select a fair -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <ion-list class=\"line-input\">\n          <ion-label>\n            <h2>Select a fair</h2>\n          </ion-label>\n          <ion-item>\n            <ion-select (ionChange)=\"setFair($event)\" placeholder=\"Select fair\">\n              <ion-select-option *ngFor=\"let fair of allFairs\" value=\"{{fair.title}}\">{{fair.title}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <!-- What will you be coming as? -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <div [className]=\"!selectedFair ? 'off' : 'on'\">\n          <ion-list class=\"line-input\">\n            <ion-label>\n              <h2>What will you be coming as?</h2>\n              <ul>\n                <li>Student</li>\n                <li>Chaperone</li>\n                <li>Volunteer</li>\n                <li>Partner</li>\n              </ul>\n            </ion-label>\n            <ion-item>\n              <ion-select (ionChange)=\"setUsertype($event)\"  placeholder=\"Select user type\">\n                <ion-select-option value=\"student\">Student</ion-select-option>\n                <ion-select-option value=\"volunteer\">Volunteer</ion-select-option>\n                <ion-select-option value=\"chaperone\">Chaperone</ion-select-option>\n                <ion-select-option value=\"partner\">Partner</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Next button -->\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <div [className]=\"!selectedUsertype ? 'off' : 'on'\">\n          <ion-button (click)=\"fairPage(this.fair, this.usertype)\" class=\"orange-button\"\n          [disabled]=\"!fair && !usertype\">\n            Next\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/selection-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/fairs/selection/selection-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SelectionPageRoutingModule */

  /***/
  function srcAppPagesFairsSelectionSelectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionPageRoutingModule", function () {
      return SelectionPageRoutingModule;
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


    var _selection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selection.page */
    "./src/app/pages/fairs/selection/selection.page.ts");

    const routes = [{
      path: '',
      component: _selection_page__WEBPACK_IMPORTED_MODULE_3__["SelectionPage"]
    }, {
      path: 'fair-page/',
      loadChildren: () => Promise.all(
      /*! import() | fair-page-fair-page-module */
      [__webpack_require__.e("default~chat-page-chat-page-module~fair-page-fair-page-module~modals-replies-page-replies-page-modul~cd85bf8f"), __webpack_require__.e("default~change-profile-picture-change-profile-picture-change-profile-picture-module~fair-page-fair-p~ca92f864"), __webpack_require__.e("default~fair-page-fair-page-module~modals-fair-chaperone-register-fair-chaperone-register-module~pag~111c3137"), __webpack_require__.e("default~fair-page-fair-page-module~modals-fair-student-register-fair-student-register-module~pages-f~b8c2ad4d"), __webpack_require__.e("default~fair-page-fair-page-module~modals-fair-partner-register-fair-partner-register-module~pages-f~4a4bc971"), __webpack_require__.e("default~fair-page-fair-page-module~modals-fair-volunteer-register-fair-volunteer-register-module~pag~3448d0f3"), __webpack_require__.e("default~fair-page-fair-page-module~pages-fairs-selection-fair-page-fair-page-module")]).then(__webpack_require__.bind(null,
      /*! ./fair-page/fair-page.module */
      "./src/app/pages/fairs/selection/fair-page/fair-page.module.ts")).then(m => m.FairPagePageModule)
    }];
    let SelectionPageRoutingModule = class SelectionPageRoutingModule {};
    SelectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/selection.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/fairs/selection/selection.module.ts ***!
    \***********************************************************/

  /*! exports provided: SelectionPageModule */

  /***/
  function srcAppPagesFairsSelectionSelectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionPageModule", function () {
      return SelectionPageModule;
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


    var _selection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./selection-routing.module */
    "./src/app/pages/fairs/selection/selection-routing.module.ts");
    /* harmony import */


    var _selection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./selection.page */
    "./src/app/pages/fairs/selection/selection.page.ts");

    let SelectionPageModule = class SelectionPageModule {};
    SelectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selection_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectionPageRoutingModule"]],
      declarations: [_selection_page__WEBPACK_IMPORTED_MODULE_6__["SelectionPage"]]
    })], SelectionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/selection.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/fairs/selection/selection.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFairsSelectionSelectionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-row {\n  margin-bottom: 20px;\n}\n\nh1 {\n  color: #005191;\n  font-size: 3em;\n  z-index: 999;\n  margin-top: 40px;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 1.85em;\n  line-height: 1.85em;\n  background: #423f39;\n  width: 300px;\n  color: white;\n  padding: 5px 0px 5px 20px;\n  border-radius: 5px;\n}\n\n.desciption {\n  font-size: 1.2em;\n  line-height: 1.6em;\n  padding-bottom: 30px;\n  border-bottom: 2px solid #f0f0f0;\n}\n\n.off {\n  opacity: 0;\n}\n\n.on {\n  opacity: 0;\n  -webkit-animation: slide-up 0.2s ease 0.5s forwards;\n          animation: slide-up 0.2s ease 0.5s forwards;\n}\n\nul {\n  background: rgba(0, 0, 0, 0.03);\n  padding: 35px;\n}\n\nli {\n  font-size: 1.7em;\n  margin: 10px 0px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvZmFpcnMvc2VsZWN0aW9uL3NlbGVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhaXJzL3NlbGVjdGlvbi9zZWxlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0VERUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0FGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNDRjtFREVBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFpcnMvc2VsZWN0aW9uL3NlbGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaDF7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDNlbTtcbiAgei1pbmRleDogOTk5O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS44NWVtO1xuICBsaW5lLWhlaWdodDogMS44NWVtO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjYsIDYzLCA1Nyk7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kZXNjaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMGYwZjA7XG59XG5cbi5vZmZ7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5vbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC4ycyBlYXNlIC41cyBmb3J3YXJkcztcbn1cblxudWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDMpO1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG5saSB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufSIsImlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDNlbTtcbiAgei1pbmRleDogOTk5O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS44NWVtO1xuICBsaW5lLWhlaWdodDogMS44NWVtO1xuICBiYWNrZ3JvdW5kOiAjNDIzZjM5O1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZGVzY2lwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjBmMGYwO1xufVxuXG4ub2ZmIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm9uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjJzIGVhc2UgMC41cyBmb3J3YXJkcztcbn1cblxudWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG5saSB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/fairs/selection/selection.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/fairs/selection/selection.page.ts ***!
    \*********************************************************/

  /*! exports provided: SelectionPage */

  /***/
  function srcAppPagesFairsSelectionSelectionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionPage", function () {
      return SelectionPage;
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


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");

    let SelectionPage = class SelectionPage {
      constructor(router, fairs) {
        this.router = router;
        this.fairs = fairs;
        this.selectedFair = false;
        this.selectedUsertype = false;
      }

      ngOnDestroy() {
        this.fairsInfoSubscription.unsubscribe();
      }

      ngOnInit() {
        this.fairsInfoSubscription = this.fairs.getFairs().subscribe(fairs => {
          this.allFairs = Object.values(fairs);
          console.log(typeof fairs);
          console.log(this.allFairs);
        });
      }

      setFair(fair) {
        this.fair = fair.detail.value;
        this.selectedFair = true;
        console.log("setting the fair to ".concat(this.fair));
      }

      setUsertype(usertype) {
        console.log(usertype);
        this.usertype = usertype.detail.value;
        this.selectedUsertype = true;
        console.log("setting the usertype to ".concat(this.usertype));
        this.allFairs.find(fair => {
          this.id = fair._id;
          this.date = fair.date;
          this.fair = fair.title;
          this.summary = fair.summary;
          this.address = fair.address;
          this.city = fair.city;
          this.state = fair.state;
          this.zip = fair.zip;

          switch (this.usertype) {
            case 'student':
              this.agenda = JSON.stringify(fair.studentAgenda);
              this.faq = JSON.stringify(fair.studentFAQ);
              this.partners = JSON.stringify(fair.partners);
              console.log('Student');
              break;

            case 'chaperone':
              this.agenda = JSON.stringify(fair.chaperoneAgenda);
              this.faq = JSON.stringify(fair.chaperoneFAQ);
              this.partners = JSON.stringify(fair.partners);
              console.log('Chaperone');
              break;

            case 'volunteer':
              this.agenda = JSON.stringify(fair.volunteerAgenda);
              this.faq = JSON.stringify(fair.volunteerFAQ);
              this.partners = JSON.stringify(fair.partners);
              console.log('Volunteers');
              break;

            case 'partner':
              this.agenda = JSON.stringify(fair.partnerAgenda);
              this.faq = JSON.stringify(fair.partnerFAQ);
              this.partners = JSON.stringify(fair.partners);
              console.log('Partner');
              break;

            default:
              break;
          }

          return;
        });
      }

      fairPage() {
        console.log('going to the fair page'); // tslint:disable-next-line: max-line-length

        this.router.navigate(['/fair-page', this.id, this.fair, this.date, this.address, this.city, this.state, this.zip, this.usertype, this.summary, this.agenda, this.faq, this.partners]);
      }

    };

    SelectionPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_3__["FairsService"]
    }];

    SelectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selection.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fairs/selection/selection.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selection.page.scss */
      "./src/app/pages/fairs/selection/selection.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_3__["FairsService"]])], SelectionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-fairs-selection-selection-module-es5.js.map