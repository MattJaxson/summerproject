(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-page-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n  <ion-grid no-padding>\n\n        <ion-row style=\"margin: 0px 0px 60px 0px; padding: 20px 0 20px 0;  background: rgba(245, 245, 245, 0.8)\">\n            <ion-col size=\"3\" offset=\"0.5\">\n                  <img style=\"border-radius: 100px\" src=\"../../assets/goku-pro-pic.png\">\n            </ion-col>\n            <ion-col size=\"6\">\n                <h6>{{creatorName}}</h6>\n            </ion-col>\n            <ion-col size=\"2\" offset=\"0.5\">\n                <h6 class=\"date\">{{date}}</h6>\n            </ion-col>\n\n          <!-- Post Content -->\n          <ion-col style=\"margin-top: 20px; height: 100px;\" size=\"11\" offset=\"0.5\">\n\n              <p style=\"font-size: 1em; line-height: 25px;\">{{post}}</p>\n          </ion-col>\n\n          <!-- Post Actions -->\n          <ion-col style=\"margin-top: 10px; height: 50px;\" size=\"11\" offset=\"0.5\">\n              <ion-toolbar style=\"--background: none;\">\n                  <ion-buttons slot=\"end\">\n                    <ion-button style=\"font-size: 0.8em; color: #555;\">\n                      Follow\n                    </ion-button>\n                    </ion-buttons>\n              </ion-toolbar>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-bottom: 50px;\">\n          <ion-col size=\"11\" offset=\"0.5\">\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../../assets/goku-pro-pic.png\">\n              </ion-avatar>\n              <form (ngSubmit)=\"comment(this.commentForm.value)\" [formGroup]=\"commentForm\">\n                  <ion-input type=\"text\" placeholder=\"Comment\" formControlName=\"comment\">\n                  </ion-input>\n                  <!-- <ion-button type=\"submit\">\n                    comment\n                  </ion-button> -->\n              </form>\n              <ion-icon\n              *ngIf=\"commentForm\n                .get('comment')\n                .untouched\"\n              slot=\"end\"\n              name=\"send\"></ion-icon>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngFor=\"let comment of comments\">\n          <ion-col size=\"11\" offset=\"0.5\">\n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img src=\"../../assets/goku-pro-pic.png\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h6 style=\"opacity: 0.5\">{{ comment.userFullName}} - {{ comment.date }} </h6>\n                    <p class=\"comment\">{{ comment.comment}}.</p>\n                    </ion-label>\n               </ion-item>\n          </ion-col>\n         <!-- <ion-col size=\"3\" offset=\"0.5\">\n            <div style=\"height: 50px; width: 50px; background-image: url('../../assets/pro-pic-1.jpeg'); background-position: center; border-radius: 50px;\"></div>\n          </ion-col>\n          <ion-col size=\"5\">\n            <h6>{{comment.userFullName}}</h6>\n          </ion-col>\n          <ion-col size=\"3\">\n              <h6 class=\"date\">{{comment.date}}</h6>\n            </ion-col>\n          <ion-col size=\"11\" offset=\"0.5\">\n            <p>{{comment.comment}}</p>\n          </ion-col> -->\n         </ion-row>\n\n      </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PostPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePageRoutingModule", function() { return PostPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-page.page */ "./src/app/pages/posts/post-page/post-page.page.ts");




const routes = [
    {
        path: '',
        component: _post_page_page__WEBPACK_IMPORTED_MODULE_3__["PostPagePage"]
    }
];
let PostPagePageRoutingModule = class PostPagePageRoutingModule {
};
PostPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.module.ts ***!
  \***********************************************************/
/*! exports provided: PostPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePageModule", function() { return PostPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-page-routing.module */ "./src/app/pages/posts/post-page/post-page-routing.module.ts");
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-page.page */ "./src/app/pages/posts/post-page/post-page.page.ts");







let PostPagePageModule = class PostPagePageModule {
};
PostPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _post_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPagePageRoutingModule"]
        ],
        declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_6__["PostPagePage"]]
    })
], PostPagePageModule);



/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  height: auto;\n  padding: 20px 0 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL0FwcHMgJiBXZWJzaXRlcy9Vbml0ZWQtV2F5L01vYmlsZS9zcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0LXBhZ2UvcG9zdC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC1wYWdlL3Bvc3QtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn0iLCJpb24taXRlbSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/posts/post-page/post-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.ts ***!
  \*********************************************************/
/*! exports provided: PostPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPagePage", function() { return PostPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");








let PostPagePage = class PostPagePage {
    constructor(activatedRoute, router, posts, profile, formBuilder, toast) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.toast = toast;
    }
    ngOnInit() {
        // Get the user's information to insert into the comment metadata
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userFullName = details['fullName'];
        });
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        this.commentForm.controls.comment.valueChanges.subscribe(data => {
            if (data === '') {
                console.log('Value is empty');
            }
        });
        // Get Post ID from navigation params on the main posts tab
        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.postID = id;
        // Get information about selected post.
        // Format its date on the front end
        // initiate this components post metadata from data in Posts Service
        this.posts.getPostInfo(this.postID).subscribe(post => {
            console.log(post);
            // tslint:disable-next-line: no-string-literal
            this.creatorName = post['creatorName'];
            this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(post['date']), {
                includeSeconds: true,
                addSuffix: true
            });
            console.log('Date: ' + this.date);
            this.followers = post['followers'];
            console.log(post['comments']);
            for (const comment of post['comments']) {
                comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(comment.date), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
            this.posts.commentsSubject$.next(post['comments']);
            this.post = post['post'];
        });
        // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
        this.posts.commentsSubject$.subscribe(commentsFromSub => {
            this.comments = commentsFromSub;
        });
    }
    comment(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const date = yield Date.now();
            console.log('Posting comment');
            yield this.posts.comment(this.postID, date, this.userFullName, this.userEmail, comment);
            yield this.posts.getPostInfo(this.postID).subscribe(post => {
                this.posts.commentsSubject$.next(post['comments']);
            });
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
        });
    }
    report(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Attemtping to Report Comment');
        });
    }
    doRefresh(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.posts.getPostInfo(this.postID).subscribe(post => {
                this.posts.commentsSubject$.next(post['comments']);
                this.post = post['post'];
            });
            yield setTimeout(() => {
                const toast = this.toast.create({
                    message: 'Page has been refreshed',
                    duration: 3000
                });
                event.target.complete();
                toast.then(toast => toast.present());
            }, 2000);
        });
    }
};
PostPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
PostPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-page.page.scss */ "./src/app/pages/posts/post-page/post-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], PostPagePage);



/***/ })

}]);
//# sourceMappingURL=post-page-post-page-module.js.map