function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentVoteBarCommentVoteBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFollowCommentButtonsFollowCommentButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"end\">\n    <ion-button *ngIf=\"!following && !isUser\" class=\"follow-button\" (click)=\"follow(postID)\">Follow ({{followingLength}})\n    </ion-button>\n    <ion-button *ngIf=\"following && !isUser\" class=\"unfollow-button\" (click)=\"unFollow(postID)\">Unfollow ({{followingLength}})\n    </ion-button>\n    <!-- <ion-button\n    class=\"comment-button\"\n    (click)=\"postPage()\">Comments ({{comments.length}})\n    </ion-button> -->\n    <ion-icon\n    (click)=\"postPage()\" slot=\"start\" src=\"../../assets/icons/comments-icon.svg\"></ion-icon>\n\n  </ion-buttons>\n</ion-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFollowIconFollowIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGoingIconGoingIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid style=\"margin-bottom: 20px;\">\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n            <div class=\"ion-text-right\">\n                <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n                    Details\n                </ion-button>\n                <ion-button class=\"going\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                    Go\n                </ion-button>\n                <ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                    Cancel\n                </ion-button>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeartIconHeartIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"favoriteState\" style=\"font-size: 3em\" [name]=\"iconName\"></ion-icon>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotGoingIconNotGoingIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\n            <p>No longer going to this Event?</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleNotGoingState(event)\" tappable [@notGoing]=\"notGoingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReadMoreReadMoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  [class.collapsed]=\"isCollapsed\"\n  [ngClass]=\"{'isCollapsed': !isCollapsed}\"\n  class=\"pull-left read-more\">\n  <ng-content></ng-content>\n</div>\n\n<a (click)=\"isCollapsed = !isCollapsed\" [hidden]=\"dataLength\" class=\"pull-right\">\n  <p class=\"collapsed-text\" *ngIf=\"isCollapsed\">Read More</p>\n  <p class=\"not-collapsed-text\" *ngIf=\"!isCollapsed\">Show Less</p>\n</a>\n\n<div class=\"cb\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpDownVoteButtonsUpDownVoteButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-login-login-module */
        "pages-auth-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/login/login.module */
        "./src/app/pages/auth/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, // Change to sign up path name later
    {
      path: 'personal-info',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-sign-up-personal-info-personal-info-module */
        "pages-auth-sign-up-personal-info-personal-info-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/sign-up/personal-info/personal-info.module */
        "./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts")).then(function (m) {
          return m.PersonalInfoPageModule;
        });
      }
    }, //  change to forgot password path name later
    {
      path: 'enter-email',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-forgot-password-enter-email-enter-email-module */
        "pages-auth-forgot-password-enter-email-enter-email-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/forgot-password/enter-email/enter-email.module */
        "./src/app/pages/auth/forgot-password/enter-email/enter-email.module.ts")).then(function (m) {
          return m.EnterEmailPageModule;
        });
      }
    }, {
      path: 'enter-code',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-forgot-password-enter-code-enter-code-module */
        "forgot-password-enter-code-enter-code-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/forgot-password/enter-code/enter-code.module */
        "./src/app/pages/auth/forgot-password/enter-code/enter-code.module.ts")).then(function (m) {
          return m.EnterCodePageModule;
        });
      }
    }, {
      path: 'events',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-events-events-module */
        [__webpack_require__.e("default~chat-page-chat-page-module~modals-replies-page-replies-page-module~modals-third-person-profi~b8cd77e3"), __webpack_require__.e("pages-events-events-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/events/events.module */
        "./src/app/pages/events/events.module.ts")).then(function (m) {
          return m.EventsPageModule;
        });
      }
    }, {
      path: 'mentors',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-mentors-mentors-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-mentors-mentors-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/mentors/mentors.module */
        "./src/app/pages/mentors/mentors.module.ts")).then(function (m) {
          return m.MentorsPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auth-login-login-module */
        "pages-auth-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/auth/login/login.module */
        "./src/app/pages/auth/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'replies-page',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modals-replies-page-replies-page-module */
        [__webpack_require__.e("default~chat-page-chat-page-module~modals-replies-page-replies-page-module~modals-third-person-profi~b8cd77e3"), __webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
        /*! ./modals/replies-page/replies-page.module */
        "./src/app/modals/replies-page/replies-page.module.ts")).then(function (m) {
          return m.RepliesPagePageModule;
        });
      }
    }, {
      path: 'edit-post',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-edit-post-edit-post-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./modals/edit-post/edit-post.module */
        "./src/app/modals/edit-post/edit-post.module.ts")).then(function (m) {
          return m.EditPostPageModule;
        });
      }
    }, {
      path: 'image-cropper',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-image-cropper-image-cropper-module */
        "default~change-profile-picture-change-profile-picture-change-profile-picture-module~modals-image-cro~90e77f83").then(__webpack_require__.bind(null,
        /*! ./modals/image-cropper/image-cropper.module */
        "./src/app/modals/image-cropper/image-cropper.module.ts")).then(function (m) {
          return m.ImageCropperPageModule;
        });
      }
    }, {
      path: 'third-person-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modals-third-person-profile-third-person-profile-module */
        [__webpack_require__.e("default~chat-page-chat-page-module~modals-replies-page-replies-page-module~modals-third-person-profi~b8cd77e3"), __webpack_require__.e("default~modals-third-person-profile-third-person-profile-module~pages-posts-posts-module")]).then(__webpack_require__.bind(null,
        /*! ./modals/third-person-profile/third-person-profile.module */
        "./src/app/modals/third-person-profile/third-person-profile.module.ts")).then(function (m) {
          return m.ThirdPersonProfilePageModule;
        });
      }
    }, {
      path: 'report-convo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-report-convo-report-convo-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./modals/report-convo/report-convo.module */
        "./src/app/modals/report-convo/report-convo.module.ts")).then(function (m) {
          return m.ReportConvoPageModule;
        });
      }
    }, {
      path: 'new-message-student',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-new-message-student-new-message-student-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./modals/new-message-student/new-message-student.module */
        "./src/app/modals/new-message-student/new-message-student.module.ts")).then(function (m) {
          return m.NewMessageStudentPageModule;
        });
      }
    }, {
      path: 'new-message-mentor',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-new-message-mentor-new-message-mentor-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./modals/new-message-mentor/new-message-mentor.module */
        "./src/app/modals/new-message-mentor/new-message-mentor.module.ts")).then(function (m) {
          return m.NewMessageMentorPageModule;
        });
      }
    }, {
      path: 'report-convo-mentor',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-report-convo-mentor-report-convo-mentor-module */
        "modals-report-convo-mentor-report-convo-mentor-module").then(__webpack_require__.bind(null,
        /*! ./modals/report-convo-mentor/report-convo-mentor.module */
        "./src/app/modals/report-convo-mentor/report-convo-mentor.module.ts")).then(function (m) {
          return m.ReportConvoMentorPageModule;
        });
      }
    }, {
      path: 'upload-resume-modal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modals-upload-resume-modal-upload-resume-modal-module */
        "default~apply-apply-module~modals-upload-resume-modal-upload-resume-modal-module").then(__webpack_require__.bind(null,
        /*! ./modals/upload-resume-modal/upload-resume-modal.module */
        "./src/app/modals/upload-resume-modal/upload-resume-modal.module.ts")).then(function (m) {
          return m.UploadResumeModalPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, auth, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.auth = auth;
        this.router = router;
        this.tabsPlacement = 'bottom';
        this.tabsLayout = 'icon-top';
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.auth.authenticationState.unsubscribe();
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.auth.checkToken();
          this.platform.ready().then(function () {}); // State for the User. If Authentication State == False, the app reverts back to the landing page

          this.auth.authenticationState.subscribe(function (state) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (state) {
                        this.router.navigate(['home']);
                      } else {
                        this.router.navigate(['']);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "createOnline$",
        value: function createOnline$() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: jwtOptionsFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
      return jwtOptionsFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ion-bottom-drawer */
    "./node_modules/ion-bottom-drawer/fesm2015/ion-bottom-drawer.js");
    /* harmony import */


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");
    /* harmony import */


    var _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./emitters/favorites-event-emitter.service */
    "./src/app/emitters/favorites-event-emitter.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js"); // Angular Modules


    var config = {
      url: 'http://10.0.1.5:3000',
      options: {}
    }; // Third Party
    // Custom Modules
    // Custom Emitters
    //  Ionic Modules
    // For JWT

    function jwtOptionsFactory(storage) {
      return {
        tokenGetter: function tokenGetter() {
          return storage.get('access_token');
        },
        whitelistedDomains: ['localhost:3000']
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_11__["IonBottomDrawerModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_12__["CustomComponentsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config), _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
        jwtOptionsProvider: {
          provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JWT_OPTIONS"],
          useFactory: jwtOptionsFactory,
          deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_16__["Storage"]]
        }
      }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: true
      })],
      providers: [_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_13__["PostPageEmitterService"], _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__["FavoritesEventEmitterService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_19__["FilePath"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_20__["WebView"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/comment-vote-bar/comment-vote-bar.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommentVoteBarCommentVoteBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #005191;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LXZvdGUtYmFyL2NvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC12b3RlLWJhci9jb21tZW50LXZvdGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NOO0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURFSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0FOO0FESUU7RUFDRSxxQkFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FERUU7RUFDRSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LXZvdGUtYmFyL2NvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXB2b3Rle1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLS1jb2xvcjogIzAwNTE5MTtcbiAgXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICMwMDUxOTE7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuZG93bnZvdGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAgIC0tZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnVwdm90ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgfVxuICAuZG93bnZvdGVkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG4gIH1cbiAgXG4gIC5mb2xsb3dlZC10b2FzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xuICB9XG4gIC51bmZvbGxvd2VkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG4gIH0iLCIudXB2b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuLnVwdm90ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xufVxuLmRvd252b3RlIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tZm9udC1zaXplOiA0MHB4O1xufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cblxuLmRvd252b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbn1cblxuLmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xufVxuXG4udW5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/comment-vote-bar/comment-vote-bar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CommentVoteBarComponent */

  /***/
  function srcAppComponentsCommentVoteBarCommentVoteBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentVoteBarComponent", function () {
      return CommentVoteBarComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");

    var CommentVoteBarComponent = /*#__PURE__*/function () {
      function CommentVoteBarComponent(posts, profile, toast, postEmitterService) {
        _classCallCheck(this, CommentVoteBarComponent);

        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.postEmitterService = postEmitterService;
        this.upVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.downVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.currentUserUpvoted = false;
        this.currentUserDownvoted = false;
      }

      _createClass(CommentVoteBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // Get information about comment
                    this.posts.getPostInfo(this.postID).subscribe(function (postInfo) {
                      var allComments = postInfo['comments'];
                      allComments.find(function (comment) {
                        if (comment._id === _this2.commentID) {
                          _this2.upVoters = comment['upvoters'];
                          _this2.downVoters = comment['downvoters'];
                          _this2.upVotes = comment['upvotes'];
                          _this2.downVotes = comment['downvotes'];

                          _this2.upVoteCount$.next(_this2.upVotes);

                          _this2.downVoteCount$.next(_this2.downVotes);

                          _this2.upVoteLength = _this2.upVoteCount$.getValue();
                          _this2.downVoteLength = _this2.downVoteCount$.getValue();
                          return;
                        }
                      }); // Get User Email

                      _this2.profile.getUserDetails().subscribe(function (userDetails) {
                        var userEmail = userDetails['email'];
                        var upVoted = false;
                        var downVoted = false;

                        _this2.upVoters.find(findUpVoter);

                        _this2.downVoters.find(findDownVoter);

                        function findUpVoter(upVoter) {
                          if (!upVoter) {}

                          if (upVoter === userEmail) {
                            return upVoted = true;
                          }

                          console.log(upVoter);
                        }

                        function findDownVoter(downVoter) {
                          if (!downVoter) {}

                          if (downVoter === userEmail) {
                            return downVoted = true;
                          }
                        }

                        console.log('Current user: ', userEmail);
                        _this2.userEmail = userEmail;
                        _this2.currentUserUpvoted = upVoted;
                        _this2.currentUserDownvoted = downVoted;
                      });
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "refreshAfterComment",
        value: function refreshAfterComment() {
          this.postEmitterService.postPageRefresh();
        }
      }, {
        key: "upVoteComment",
        value: function upVoteComment() {
          var _this3 = this;

          this.posts.upVoteComment(this.postID, this.commentID, this.userEmail).subscribe(function (data) {
            var upvotes = data['upvotes'];
            var downvotes = data['downvotes'];
            console.log(data);

            _this3.upVoteCount$.next(upvotes);

            _this3.downVoteCount$.next(downvotes);

            _this3.currentUserUpvoted = true;
            _this3.upVoteLength = _this3.upVoteCount$.getValue();
            _this3.downVoteLength = _this3.downVoteCount$.getValue();

            if (_this3.currentUserUpvoted === true) {
              return _this3.currentUserDownvoted = false;
            }
          });
          this.upVoteCommentToast();
          this.refreshAfterComment();
        }
      }, {
        key: "upVoteCommentToast",
        value: function upVoteCommentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var upVotePostToast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toast.create({
                      cssClass: 'upvoted-toast',
                      message: 'You have UPVOTED this comment.',
                      duration: 2000
                    });

                  case 2:
                    upVotePostToast = _context3.sent;
                    upVotePostToast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "downVoteComment",
        value: function downVoteComment() {
          var _this4 = this;

          this.posts.downVoteComment(this.postID, this.commentID, this.userEmail).subscribe(function (data) {
            var upvotes = data['upvotes'];
            var downvotes = data['downvotes'];
            console.log(data);

            _this4.upVoteCount$.next(upvotes);

            _this4.downVoteCount$.next(downvotes);

            _this4.currentUserDownvoted = true;
            _this4.upVoteLength = _this4.upVoteCount$.getValue();
            _this4.downVoteLength = _this4.downVoteCount$.getValue();

            if (_this4.currentUserDownvoted === true) {
              return _this4.currentUserUpvoted = false;
            }
          });
          this.downVoteCommentToast();
          this.refreshAfterComment();
        }
      }, {
        key: "downVoteCommentToast",
        value: function downVoteCommentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var downVoteToast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toast.create({
                      cssClass: 'downvoted-toast',
                      message: 'You have DOWNVOTED this comment.',
                      duration: 2000
                    });

                  case 2:
                    downVoteToast = _context4.sent;
                    downVoteToast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CommentVoteBarComponent;
    }();

    CommentVoteBarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__["PostPageEmitterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CommentVoteBarComponent.prototype, "postID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CommentVoteBarComponent.prototype, "commentID", void 0);
    CommentVoteBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment-vote-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment-vote-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment-vote-bar.component.scss */
      "./src/app/components/comment-vote-bar/comment-vote-bar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__["PostPageEmitterService"]])], CommentVoteBarComponent);
    /***/
  },

  /***/
  "./src/app/components/custom-component.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/custom-component.module.ts ***!
    \*******************************************************/

  /*! exports provided: CustomComponentsModule */

  /***/
  function srcAppComponentsCustomComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function () {
      return CustomComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./heart-icon/heart-icon.component */
    "./src/app/components/heart-icon/heart-icon.component.ts");
    /* harmony import */


    var _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./going-icon/going-icon.component */
    "./src/app/components/going-icon/going-icon.component.ts");
    /* harmony import */


    var _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./not-going-icon/not-going-icon.component */
    "./src/app/components/not-going-icon/not-going-icon.component.ts");
    /* harmony import */


    var _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./follow-icon/follow-icon.component */
    "./src/app/components/follow-icon/follow-icon.component.ts");
    /* harmony import */


    var _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./up-down-vote-buttons/up-down-vote-buttons.component */
    "./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts");
    /* harmony import */


    var _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./comment-vote-bar/comment-vote-bar.component */
    "./src/app/components/comment-vote-bar/comment-vote-bar.component.ts");
    /* harmony import */


    var _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./follow-comment-buttons/follow-comment-buttons.component */
    "./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts");
    /* harmony import */


    var _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./read-more/read-more.component */
    "./src/app/components/read-more/read-more.component.ts");

    var CustomComponentsModule = function CustomComponentsModule() {
      _classCallCheck(this, CustomComponentsModule);
    };

    CustomComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
      declarations: [_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__["HeartIconComponent"], _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__["GoingIconComponent"], _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__["NotGoingIconComponent"], _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__["FollowIconComponent"], _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__["UpDownVoteButtonsComponent"], _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommentVoteBarComponent"], _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FollowCommentButtonsComponent"], _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_11__["ReadMoreComponent"]],
      exports: [_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_4__["HeartIconComponent"], _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_5__["GoingIconComponent"], _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_6__["NotGoingIconComponent"], _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_7__["FollowIconComponent"], _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_8__["UpDownVoteButtonsComponent"], _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_9__["CommentVoteBarComponent"], _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FollowCommentButtonsComponent"], _read_more_read_more_component__WEBPACK_IMPORTED_MODULE_11__["ReadMoreComponent"]]
    })], CustomComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFollowCommentButtonsFollowCommentButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comment-button {\n  width: 130px;\n  --background: #005191;\n  --background-hover: #005191;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\n.comment-button:focus {\n  --color: orange;\n}\n\n.follow-button {\n  --color: white;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n  width: 130px;\n}\n\n.unfollow-button {\n  font-weight: 800;\n  line-height: 1em;\n  border: 1px solid #faa71b;\n  width: 300px;\n  color: #faa71b;\n  font-size: 1.5em;\n  padding: 2px 0px 2px 0px;\n  position: relative;\n  right: 20px;\n  border-radius: 50px;\n}\n\n.follow-button:hover, .unfollow-button:hover, .comment-button:hover {\n  --color: white;\n}\n\nion-icon {\n  font-size: 3em;\n  height: 100px;\n  width: 100px;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button, .follow-button, .unfollow-button {\n    font-size: 0.5em;\n    width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctY29tbWVudC1idXR0b25zL2ZvbGxvdy1jb21tZW50LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93LWNvbW1lbnQtYnV0dG9ucy9mb2xsb3ctY29tbWVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtFQ0RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvbGxvdy1jb21tZW50LWJ1dHRvbnMvZm9sbG93LWNvbW1lbnQtYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWJ1dHRvbntcbiAgd2lkdGg6IDEzMHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwNTE5MTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtc2l6ZTogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb21tZW50LWJ1dHRvbjpmb2N1cyB7XG4gIC0tY29sb3I6IG9yYW5nZTtcbn1cblxuLmZvbGxvdy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyNGQ4YTg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtc2l6ZTogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLy8gQ2hhbmdlIGNvbG9yXG4udW5mb2xsb3ctYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgLy8gYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhYTcxYjtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMnB4IDBweCAycHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uZm9sbG93LWJ1dHRvbjpob3ZlciwgLnVuZm9sbG93LWJ1dHRvbjpob3ZlciwgLmNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbW1lbnQtYnV0dG9uLCAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG4iLCIuY29tbWVudC1idXR0b24ge1xuICB3aWR0aDogMTMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA1MTkxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbW1lbnQtYnV0dG9uOmZvY3VzIHtcbiAgLS1jb2xvcjogb3JhbmdlO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4udW5mb2xsb3ctYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhYTcxYjtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMnB4IDBweCAycHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uZm9sbG93LWJ1dHRvbjpob3ZlciwgLnVuZm9sbG93LWJ1dHRvbjpob3ZlciwgLmNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbW1lbnQtYnV0dG9uLCAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: FollowCommentButtonsComponent */

  /***/
  function srcAppComponentsFollowCommentButtonsFollowCommentButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowCommentButtonsComponent", function () {
      return FollowCommentButtonsComponent;
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


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FollowCommentButtonsComponent = /*#__PURE__*/function () {
      function FollowCommentButtonsComponent(router, posts, profile, toast) {
        _classCallCheck(this, FollowCommentButtonsComponent);

        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.comments = [];
        this.followers = [];
        this.following = false;
        this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.followingLength = null;
      }

      _createClass(FollowCommentButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          // Get information about post
          this.posts.getPostInfo(this.postID).subscribe(function (postDetails) {
            var comments = postDetails['comments'];
            var followers = postDetails['followers'];
            var following = false;

            _this5.profile.getUserDetails().subscribe(function (userDetails) {
              var userEmail = userDetails['email'];
              followers.find(findFollower);

              function findFollower(follower) {
                if (!follower) {// User is not following post
                }

                if (follower === userEmail) {
                  following = true;
                }
              }

              if (userEmail === _this5.postEmail) {
                return _this5.isUser === true;
              }

              _this5.followers = followers;
              _this5.comments = comments;
              _this5.userEmail = userEmail;
              _this5.following = following;

              _this5.followingLength$.next(followers.length);

              _this5.followingLength$.subscribe(function (data) {
                _this5.followingLength = data;
              });
            });
          });
        }
      }, {
        key: "follow",
        value: function follow(postID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return console.log('Following Post');

                  case 2:
                    _context5.next = 4;
                    return console.log(postID);

                  case 4:
                    _context5.next = 6;
                    return this.posts.followPost(postID, this.userEmail);

                  case 6:
                    this.following = true;
                    this.followingLength$.next(this.followingLength + 1);
                    _context5.next = 10;
                    return this.followToast();

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "followToast",
        value: function followToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var followToast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toast.create({
                      cssClass: 'followed-toast',
                      message: 'You are FOLLOWING this post',
                      duration: 2000
                    });

                  case 2:
                    followToast = _context6.sent;
                    followToast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "unFollow",
        value: function unFollow(postID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return console.log('Unfollowing Post');

                  case 2:
                    _context7.next = 4;
                    return console.log(postID);

                  case 4:
                    _context7.next = 6;
                    return this.posts.unFollowPost(postID, this.userEmail);

                  case 6:
                    this.following = false;
                    this.followingLength$.next(this.followingLength - 1);
                    _context7.next = 10;
                    return this.unFollowToast();

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "unFollowToast",
        value: function unFollowToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var unFollowToast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toast.create({
                      cssClass: 'unfollowed-toast',
                      message: 'You are UNFOLLOWING this post',
                      duration: 2000
                    });

                  case 2:
                    unFollowToast = _context8.sent;
                    unFollowToast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "postPage",
        value: function postPage() {
          // tslint:disable-next-line: max-line-length
          this.router.navigate(['/home/posts/post-page', this.postID]);
        }
      }]);

      return FollowCommentButtonsComponent;
    }();

    FollowCommentButtonsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FollowCommentButtonsComponent.prototype, "postID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FollowCommentButtonsComponent.prototype, "isUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FollowCommentButtonsComponent.prototype, "postEmail", void 0);
    FollowCommentButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-follow-comment-buttons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./follow-comment-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./follow-comment-buttons.component.scss */
      "./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], FollowCommentButtonsComponent);
    /***/
  },

  /***/
  "./src/app/components/follow-icon/follow-icon.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/follow-icon/follow-icon.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFollowIconFollowIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  --color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctaWNvbi9mb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3ctaWNvbi9mb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvbGxvdy1pY29uL2ZvbGxvdy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICAtLWNvbG9yOiBsaWdodGdyZXk7XG59IiwiaW9uLWljb24ge1xuICAtLWNvbG9yOiBsaWdodGdyZXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/follow-icon/follow-icon.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FollowIconComponent */

  /***/
  function srcAppComponentsFollowIconFollowIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowIconComponent", function () {
      return FollowIconComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/post.service */
    "./src/app/services/post.service.ts");

    var FollowIconComponent = /*#__PURE__*/function () {
      function FollowIconComponent(posts) {
        _classCallCheck(this, FollowIconComponent);

        this.posts = posts;
        this.followState = 'not-followed';
        this.iconName = 'checkbox-outline';
      }

      _createClass(FollowIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleLikeState",
        value: function toggleLikeState(post) {
          if (this.followState === 'not-followed') {
            this.followState = 'followed';
            this.iconName = 'checkbox';
            console.log('Followed: ' + post._id + '\n' + this.userEmail);
            this.posts.followPost(post._id, this.userEmail);
          } else {
            this.followState = 'not-followed';
            this.iconName = 'checkbox-outline';
            console.log('Un-Followed');
            this.posts.unFollowPost(post._id, this.userEmail);
          }
        }
      }]);

      return FollowIconComponent;
    }();

    FollowIconComponent.ctorParameters = function () {
      return [{
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FollowIconComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FollowIconComponent.prototype, "userEmail", void 0);
    FollowIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-follow-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./follow-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('follow', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#d1d8e0',
        opacity: '0.4',
        transform: 'scale(0.9)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#21ce99',
        opacity: '1',
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-followed <=> followed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./follow-icon.component.scss */
      "./src/app/components/follow-icon/follow-icon.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]])], FollowIconComponent);
    /***/
  },

  /***/
  "./src/app/components/going-icon/going-icon.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/going-icon/going-icon.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGoingIconGoingIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 40px;\n  width: 100px;\n  margin-left: 0px;\n  margin-right: 10px;\n}\n\n.not-going {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button {\n  margin-right: 10px;\n  --background: #edf3f8;\n  color: #005191;\n}\n\n.going {\n  --color: white;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.going:hover {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9nb2luZy1pY29uL2dvaW5nLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ29pbmctaWNvbi9nb2luZy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURNQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDSEY7O0FES0U7RUFDRSxjQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvaW5nLWljb24vZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8vIC50aHVtYm5haWwge1xuXG4vLyB9XG5cbi5ub3QtZ29pbmcge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZhYTcxYiwgI2U5OWIxNCk7XG59XG5cbi5ncmV5LWJ1dHRvbntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG4uZ29pbmcge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyNGQ4YTg7XG5cbiAgJjpob3ZlciB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuXG5cbiIsInAge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ub3QtZ29pbmcge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZhYTcxYiwgI2U5OWIxNCk7XG59XG5cbi5ncmV5LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLmdvaW5nIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjRkOGE4O1xufVxuLmdvaW5nOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/going-icon/going-icon.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/going-icon/going-icon.component.ts ***!
    \***************************************************************/

  /*! exports provided: GoingIconComponent */

  /***/
  function srcAppComponentsGoingIconGoingIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoingIconComponent", function () {
      return GoingIconComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");

    var GoingIconComponent = /*#__PURE__*/function () {
      function GoingIconComponent(events, favs, toast, router, profile) {
        _classCallCheck(this, GoingIconComponent);

        this.events = events;
        this.favs = favs;
        this.toast = toast;
        this.router = router;
        this.profile = profile;
        this.going = false;
        this.goingState = 'not-going';
        this.iconName = 'add-circle-outline';
      }

      _createClass(GoingIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // Get the User's details
          this.profile.getUserDetails().subscribe(function (details) {
            _this6.userEmail = details['email'];
            var eventsGoing = details['eventsGoing'];

            if (eventsGoing.includes(_this6.event._id)) {
              _this6.going = true;
              _this6.goingState = 'going';
            } else {
              _this6.going = false;
              _this6.goingState = 'not-going';
            }
          });
        }
      }, {
        key: "toggleGoingState",
        value: function toggleGoingState(event) {
          var _this7 = this;

          if (this.goingState === 'not-going') {
            // Going
            this.goingState = 'going';
            this.iconName = 'close-circle-outline';
            this.going = true;
            this.goingToast();
            console.log("Going to event, ".concat(event.title));
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe(function (events) {
              var updatedEvents = [].concat(_toConsumableArray(Object.values(events['eventsGoing'])), [_this7.event._id]);

              _this7.events.eventsGoing$.next(updatedEvents);

              console.log(_this7.events.eventsGoing$.getValue());
            });
          } else {
            // Not Going
            this.goingState = 'not-going';
            this.iconName = 'add-circle-outline';
            this.going = false;
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe(function (events) {
              var eventsGoing = _this7.events.eventsGoing$.getValue();

              for (var i = 0; i < eventsGoing.length; i++) {
                if (eventsGoing[i] === _this7.event._id) {
                  eventsGoing.splice(i, 1);
                }
              }

              console.log(eventsGoing);

              _this7.events.eventsGoing$.next(eventsGoing);
            });
          }
        }
      }, {
        key: "goingToast",
        value: function goingToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toast.create({
                      message: 'You are going to this event.',
                      duration: 2000
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "notGoingToast",
        value: function notGoingToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toast.create({
                      message: 'You are no longer going to this event.',
                      duration: 2000
                    });

                  case 2:
                    toast = _context10.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "eventPage",
        value: function eventPage(event) {
          // tslint:disable-next-line: max-line-length
          this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
        }
      }]);

      return GoingIconComponent;
    }();

    GoingIconComponent.ctorParameters = function () {
      return [{
        type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
      }, {
        type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GoingIconComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GoingIconComponent.prototype, "userEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GoingIconComponent.prototype, "id", void 0);
    GoingIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-going-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./going-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('going', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: 'blue',
        opacity: '0.4',
        transition: '0.5s',
        transform: 'scale(0.9)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#21ce99',
        opacity: '1',
        transition: '0.5s',
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-going <=> going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./going-icon.component.scss */
      "./src/app/components/going-icon/going-icon.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], GoingIconComponent);
    /***/
  },

  /***/
  "./src/app/components/heart-icon/heart-icon.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeartIconHeartIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  float: right;\n  z-index: 9999;\n  position: relative;\n  right: 10px;\n  color: #faa71b;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9oZWFydC1pY29uL2hlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhcnQtaWNvbi9oZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhcnQtaWNvbi9oZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59IiwiaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/heart-icon/heart-icon.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
    \***************************************************************/

  /*! exports provided: HeartIconComponent */

  /***/
  function srcAppComponentsHeartIconHeartIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeartIconComponent", function () {
      return HeartIconComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");

    var HeartIconComponent = /*#__PURE__*/function () {
      function HeartIconComponent(favorites, profile) {
        _classCallCheck(this, HeartIconComponent);

        this.favorites = favorites;
        this.profile = profile;
        this.favoriteState = 'unfavorited';
        this.iconName = 'heart-empty';
      }

      _createClass(HeartIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          setTimeout(function () {
            var _iterator = _createForOfIteratorHelper(_this8.favoriteJobs),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var job = _step.value;

                if (_this8.job._id == job._id) {
                  _this8.setFavoriteStateOn();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }, 300);
        }
      }, {
        key: "toggleLikeState",
        value: function toggleLikeState() {
          if (this.favoriteState === 'unfavorited') {
            this.setFavoriteStateOn();
            this.favorites.favoriteThisJob(this.job);
          } else {
            this.setFavoriteStateOff();
            this.favorites.unFavoriteThisJob(this.job);
          }
        }
      }, {
        key: "setFavoriteStateOn",
        value: function setFavoriteStateOn() {
          this.favoriteState = 'favorited';
          this.iconName = 'heart';
        }
      }, {
        key: "setFavoriteStateOff",
        value: function setFavoriteStateOff() {
          this.favoriteState = 'unfavorited';
          this.iconName = 'heart-empty';
        }
      }]);

      return HeartIconComponent;
    }();

    HeartIconComponent.ctorParameters = function () {
      return [{
        type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HeartIconComponent.prototype, "job", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HeartIconComponent.prototype, "favoriteJobs", void 0);
    HeartIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-heart-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./heart-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('heart', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('unfavorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#faa71b',
        opacity: '1',
        transform: 'scale(0.9)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#faa71b',
        opacity: '1',
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('unfavorited <=> favorited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./heart-icon.component.scss */
      "./src/app/components/heart-icon/heart-icon.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])], HeartIconComponent);
    /***/
  },

  /***/
  "./src/app/components/not-going-icon/not-going-icon.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotGoingIconNotGoingIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWdvaW5nLWljb24vbm90LWdvaW5nLWljb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/not-going-icon/not-going-icon.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
    \***********************************************************************/

  /*! exports provided: NotGoingIconComponent */

  /***/
  function srcAppComponentsNotGoingIconNotGoingIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotGoingIconComponent", function () {
      return NotGoingIconComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/events.service */
    "./src/app/services/events.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var NotGoingIconComponent = /*#__PURE__*/function () {
      function NotGoingIconComponent(events, toast) {
        _classCallCheck(this, NotGoingIconComponent);

        this.events = events;
        this.toast = toast;
        this.notGoingState = 'not-going';
        this.iconName = 'add-circle';
      }

      _createClass(NotGoingIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleNotGoingState",
        value: function toggleNotGoingState(event) {
          if (this.notGoingState === 'not-going') {
            this.notGoingState = 'going';
            this.iconName = 'close-circle-outline';
            this.goingToast();
            console.log("Going to event, ".concat(event.title));
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
          } else {
            this.notGoingState = 'not-not-going';
            this.iconName = 'add-circle-outline';
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
          }
        }
      }, {
        key: "goingToast",
        value: function goingToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var toast;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.toast.create({
                      message: 'You are going to this event.',
                      duration: 2000
                    });

                  case 2:
                    toast = _context11.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "notGoingToast",
        value: function notGoingToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var toast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toast.create({
                      message: 'You are no longer going to this event.',
                      duration: 2000
                    });

                  case 2:
                    toast = _context12.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return NotGoingIconComponent;
    }();

    NotGoingIconComponent.ctorParameters = function () {
      return [{
        type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotGoingIconComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotGoingIconComponent.prototype, "userEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NotGoingIconComponent.prototype, "id", void 0);
    NotGoingIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-going-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-going-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('notGoing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#e4405f',
        opacity: '0.4',
        transition: '0.5s',
        transform: 'scale(0.9)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('not-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: '#21ce99',
        opacity: '1',
        transition: '0.5s',
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('not-going <=> ot-not-going', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-going-icon.component.scss */
      "./src/app/components/not-going-icon/not-going-icon.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], NotGoingIconComponent);
    /***/
  },

  /***/
  "./src/app/components/read-more/read-more.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/read-more/read-more.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReadMoreReadMoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.collapsed {\n  transition: 0.5s;\n  display: -webkit-inline-box;\n  display: inline-block;\n  font-size: 1.3em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n.collapsed-text {\n  color: #005191;\n  font-size: 1.3em;\n  opacity: 0.5;\n}\n\n.not-collapsed-text {\n  color: #e4405f;\n  font-size: 1.3em;\n  background: #eee;\n}\n\n.read-more {\n  margin-top: -3px;\n  line-height: 1.4;\n  font-size: 1.3em;\n}\n\n.isCollapsed {\n  transition: 0.5s;\n  width: 100%;\n}\n\n.cb {\n  clear: both;\n  height: 0;\n}\n\n.pull-right {\n  float: right;\n}\n\n.pull-left {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFWVTtFQVdWLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLGNBZks7RUFnQkwsZ0JBbkJVO0VBb0JWLFlBQUE7QUNMRjs7QURPQTtFQUNFLGNBbkJJO0VBb0JKLGdCQXhCVTtFQTBCVixnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQWhDVTtBQzJCWjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNIRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVhZC1tb3JlL3JlYWQtbW9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LXNpemU6IDEuM2VtO1xuJGxpbmUtaGVpZ2h0OiAxLjU7XG4kbGluZXMtdG8tc2hvdzogMTtcbiRibHVlOiAjMDA1MTkxO1xuJHJlZDogI2U0NDA1ZjtcblxuZGl2LmNvbGxhcHNlZCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbGxhcHNlZC10ZXh0IHtcbiAgY29sb3I6ICRibHVlO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ub3QtY29sbGFwc2VkLXRleHQge1xuICBjb2xvcjogJHJlZDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuXG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5yZWFkLW1vcmV7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cbi5pc0NvbGxhcHNlZCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNiIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMDtcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cbiIsImRpdi5jb2xsYXBzZWQge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sbGFwc2VkLXRleHQge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90LWNvbGxhcHNlZC10ZXh0IHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5yZWFkLW1vcmUge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uaXNDb2xsYXBzZWQge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNiIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/read-more/read-more.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/read-more/read-more.component.ts ***!
    \*************************************************************/

  /*! exports provided: ReadMoreComponent */

  /***/
  function srcAppComponentsReadMoreReadMoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadMoreComponent", function () {
      return ReadMoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReadMoreComponent = /*#__PURE__*/function () {
      function ReadMoreComponent() {
        _classCallCheck(this, ReadMoreComponent);

        this.isCollapsed = true;
      }

      _createClass(ReadMoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReadMoreComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ReadMoreComponent.prototype, "dataLength", void 0);
    ReadMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-read-more',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./read-more.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./read-more.component.scss */
      "./src/app/components/read-more/read-more.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ReadMoreComponent);
    /***/
  },

  /***/
  "./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpDownVoteButtonsUpDownVoteButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-buttons {\n  position: relative;\n  left: 10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy91cC1kb3duLXZvdGUtYnV0dG9ucy91cC1kb3duLXZvdGUtYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91cC1kb3duLXZvdGUtYnV0dG9ucy91cC1kb3duLXZvdGUtYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FESUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURNQTtFQUNFLHFCQUFBO0FDSEY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURJQTtFQUNFLHFCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwLWRvd24tdm90ZS1idXR0b25zL3VwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cbi51bmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufSIsImlvbi1idXR0b25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMHB4O1xufVxuXG4udXB2b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tY29sb3I6ICMwMDUxOTE7XG59XG4udXB2b3RlIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmRvd252b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1jb2xvcjogIzAwNTE5MTtcbn1cbi5kb3dudm90ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnVwdm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG59XG5cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cblxuLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UpDownVoteButtonsComponent */

  /***/
  function srcAppComponentsUpDownVoteButtonsUpDownVoteButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpDownVoteButtonsComponent", function () {
      return UpDownVoteButtonsComponent;
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


    var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/emitters/post-page-emitter.service */
    "./src/app/emitters/post-page-emitter.service.ts");

    var UpDownVoteButtonsComponent = /*#__PURE__*/function () {
      function UpDownVoteButtonsComponent(posts, profile, toast, postsEmitterService) {
        _classCallCheck(this, UpDownVoteButtonsComponent);

        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.postsEmitterService = postsEmitterService;
        this.upVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.downVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.upVoters = [];
        this.downVoters = [];
        this.upVoted = false;
        this.downVoted = false;
      }

      _createClass(UpDownVoteButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.posts.getPostInfo(this.postID).subscribe(function (postInfo) {
                      _this9.upVotes = postInfo['upvotes'];
                      _this9.downVotes = postInfo['downvotes'];
                      _this9.upVoters = postInfo['upvoters'];
                      _this9.downVoters = postInfo['downvoters'];

                      _this9.upVotes$.next(_this9.upVotes);

                      _this9.downVotes$.next(_this9.downVotes);

                      _this9.upVoteLength = _this9.upVotes$.getValue();
                      _this9.downVoteLength = _this9.downVotes$.getValue(); // Get User Email

                      _this9.profile.getUserDetails().subscribe(function (userDetails) {
                        var userEmail = userDetails['email'];
                        var upVoted = false;
                        var downVoted = false;

                        _this9.upVoters.find(findUpVoter);

                        _this9.downVoters.find(findDownVoter);

                        function findUpVoter(upVoter) {
                          if (!upVoter) {}

                          if (upVoter === userEmail) {
                            return upVoted = true;
                          }

                          console.log("Upvoter: ".concat(upVoter));
                        }

                        function findDownVoter(downVoter) {
                          if (!downVoter) {}

                          if (downVoter === userEmail) {
                            return downVoted = true;
                          }
                        }

                        _this9.userEmail = userEmail;
                        _this9.upVoted = upVoted;
                        _this9.downVoted = downVoted;
                      });
                    });

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "upVotePost",
        value: function upVotePost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.posts.upVotePost(this.postID, this.userEmail).subscribe(function (data) {
                      var upvotes = data['upvotes'];
                      var downvotes = data['downvotes'];
                      console.log(data);

                      _this10.upVotes$.next(upvotes);

                      _this10.downVotes$.next(downvotes);

                      _this10.upVoted = true;
                      _this10.upVoteLength = _this10.upVotes$.getValue();
                      _this10.downVoteLength = _this10.downVotes$.getValue();

                      if (_this10.upVoted === true) {
                        return _this10.downVoted = false;
                      }
                    });

                  case 2:
                    this.postsEmitterService.postPageRefresh();
                    this.upVotePostToast();

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "upVotePostToast",
        value: function upVotePostToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var upVotePostToast;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.toast.create({
                      cssClass: 'upvoted-toast',
                      message: 'You have UPVOTED this post.',
                      duration: 2000
                    });

                  case 2:
                    upVotePostToast = _context15.sent;
                    upVotePostToast.present();

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "downVotePost",
        value: function downVotePost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.posts.downVotePost(this.postID, this.userEmail).subscribe(function (data) {
                      var upvotes = data['upvotes'];
                      var downvotes = data['downvotes'];
                      console.log(data);

                      _this11.upVotes$.next(upvotes);

                      _this11.downVotes$.next(downvotes);

                      _this11.downVoted = true;
                      _this11.upVoteLength = _this11.upVotes$.getValue();
                      _this11.downVoteLength = _this11.downVotes$.getValue();

                      if (_this11.downVoted === true) {
                        return _this11.upVoted = false;
                      }
                    });

                  case 2:
                    this.postsEmitterService.postPageRefresh();
                    this.downVoteToast();

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "downVoteToast",
        value: function downVoteToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var downVoteToast;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.toast.create({
                      cssClass: 'downvoted-toast',
                      message: 'You have DOWNVOTED this post.',
                      duration: 2000
                    });

                  case 2:
                    downVoteToast = _context17.sent;
                    downVoteToast.present();

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return UpDownVoteButtonsComponent;
    }();

    UpDownVoteButtonsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__["PostPageEmitterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UpDownVoteButtonsComponent.prototype, "postID", void 0);
    UpDownVoteButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-up-down-vote-buttons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./up-down-vote-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./up-down-vote-buttons.component.scss */
      "./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__["PostPageEmitterService"]])], UpDownVoteButtonsComponent);
    /***/
  },

  /***/
  "./src/app/emitters/favorites-event-emitter.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/emitters/favorites-event-emitter.service.ts ***!
    \*************************************************************/

  /*! exports provided: FavoritesEventEmitterService */

  /***/
  function srcAppEmittersFavoritesEventEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesEventEmitterService", function () {
      return FavoritesEventEmitterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FavoritesEventEmitterService = /*#__PURE__*/function () {
      function FavoritesEventEmitterService() {
        _classCallCheck(this, FavoritesEventEmitterService);

        this.invokeJobsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FavoritesEventEmitterService, [{
        key: "onBackAction",
        value: function onBackAction() {
          this.invokeJobsPageRefresh.emit();
        }
      }]);

      return FavoritesEventEmitterService;
    }();

    FavoritesEventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FavoritesEventEmitterService);
    /***/
  },

  /***/
  "./src/app/emitters/post-page-emitter.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/emitters/post-page-emitter.service.ts ***!
    \*******************************************************/

  /*! exports provided: PostPageEmitterService */

  /***/
  function srcAppEmittersPostPageEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPageEmitterService", function () {
      return PostPageEmitterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostPageEmitterService = /*#__PURE__*/function () {
      function PostPageEmitterService() {
        _classCallCheck(this, PostPageEmitterService);

        this.invokePostsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PostPageEmitterService, [{
        key: "onBackAction",
        value: function onBackAction() {
          this.invokePostsPageRefresh.emit();
        }
      }, {
        key: "postPageRefresh",
        value: function postPageRefresh() {
          this.invokePostsPageRefresh.emit();
        }
      }]);

      return PostPageEmitterService;
    }();

    PostPageEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PostPageEmitterService);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          return this.auth.isAuthenticated();
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, storage, alertController, helper, plt, toast) {
        var _this12 = this;

        _classCallCheck(this, AuthService);

        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.plt = plt;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.TOKEN_KEY = 'access_token';
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this.activeEmail = ''; //  Define type

        this.userInfo = {
          fullName: '',
          about: '',
          gender: '',
          dob: '',
          school: '',
          grade: '',
          profilePicture: '',
          resume: '',
          email: '',
          password: ''
        }; // Inside the constructor we always check for an existing token so we can automatically log in a user

        this.plt.ready().then(function () {
          _this12.checkToken();

          _this12.getEmailFromToken();
        });
        console.log('Authentication State');
        this.authenticationState.subscribe(console.log);
      } // tslint:disable-next-line: use-lifecycle-interface


      _createClass(AuthService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {} // Get UserInfo -- testing purposes. Delete eventually.

      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          console.log(this.userInfo);
        } //  Sign up Functions

      }, {
        key: "getPersonalInfo",
        value: function getPersonalInfo(data) {
          console.log('Sent Personal Infoto Auth Service: ');
          this.userInfo.fullName = data.fullName;
          this.userInfo.about = data.about;
          this.userInfo.gender = data.gender;
          this.userInfo.dob = data.dob;
          this.userInfo.school = data.school;
          this.userInfo.grade = data.grade;
        }
      }, {
        key: "getProfilePicture",
        value: function getProfilePicture(data) {
          console.log('Sending Profile Picture URL to Auth Service...');
          this.userInfo.profilePicture = data;
          console.log(this.userInfo);
        }
      }, {
        key: "getResume",
        value: function getResume(data) {
          console.log('data from auth service: ' + data);
          console.log('Sent Resume to Auth Service');
          this.userInfo.resume = data;
          console.log(this.userInfo);
        }
      }, {
        key: "getLoginCredentials",
        value: function getLoginCredentials(email, password) {
          console.log('Sent Login Credentials to Auth Service');
          this.userInfo.email = email;
          this.userInfo.password = password;
          console.log(this.userInfo);
        }
      }, {
        key: "doesUserExists",
        value: function doesUserExists(email, password) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/signup/does-user-exist"), {
            email: email,
            password: password
          });
        } // looks up our storage for a valid JWT and if found, changes our authenticationState

      }, {
        key: "checkToken",
        value: function checkToken() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    this.storage.get(this.TOKEN_KEY).then(function (token) {
                      if (token) {
                        var decoded = _this13.helper.decodeToken(token);

                        var isExpired = _this13.helper.isTokenExpired(token);

                        if (!isExpired) {
                          _this13.user = decoded;
                          console.log('Decoded Token: ' + JSON.stringify(decoded));

                          _this13.authenticationState.next(true);
                        } else {
                          console.log('Token Removed from Storage');

                          _this13.storage.remove(_this13.TOKEN_KEY);
                        }
                      }
                    });

                  case 1:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "checkIfUserExits",
        value: function checkIfUserExits(email) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/admin/students"), {
            email: email
          }).subscribe();
        }
      }, {
        key: "getEmailFromToken",
        value: function getEmailFromToken() {
          var _this14 = this;

          this.storage.get(this.TOKEN_KEY).then(function (token) {
            if (token) {
              var decoded = _this14.helper.decodeToken(token);

              console.log('Token Email: ' + decoded.email);
              _this14.activeEmail = decoded.email;
            }
          });
        } //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format

      }, {
        key: "sendEmailWithCode",
        value: function sendEmailWithCode(code, email) {
          console.log('almost there');
          return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials"), {
            code: code,
            email: email
          }).subscribe();
        }
      }, {
        key: "sendEmailWithCodeForgotPassword",
        value: function sendEmailWithCodeForgotPassword(code, email) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials/forgot-password-email-code"), {
            code: code,
            email: email
          }).subscribe();
        } // Register User

      }, {
        key: "register",
        value: function register() {
          this.http.post("".concat(this.BACKEND_URL, "/api/signup"), this.userInfo).subscribe();
        } // Login User

      }, {
        key: "login",
        value: function login(data) {
          var _this15 = this;

          console.log('Logging in');
          return this.loginSub = this.http.post("".concat(this.BACKEND_URL, "/api/"), {
            email: data.email,
            password: data.password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
            if (!res) {
              console.log('There was no response. There might be a bad password');
            }

            _this15.storage.set(_this15.TOKEN_KEY, res['token']);

            _this15.user = _this15.helper.decodeToken(res['token']);
            _this15.activeEmail = _this15.user.email;

            _this15.authenticationState.next(true);

            console.log('Active User: ' + _this15.user.email);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            console.error(e);

            if (e.error.msg === 'The email and password don\'t match.') {
              _this15.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
            } else if (e.error.msg === 'The user does not exist') {
              _this15.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
            } else if (e.message.startsWith('Http failure response')) {
              _this15.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
            } else {
              _this15.presentAlert('Email/Password Error', 'Please try again.');
            }

            throw new Error(e);
          })).subscribe();
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var toast;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.toast.create({
                      message: 'There was an error with your password or email. Please try again.',
                      duration: 5000,
                      cssClass: 'wrong-password-toast',
                      keyboardClose: true,
                      position: 'top'
                    });

                  case 2:
                    toast = _context19.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var alert;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.alertController.create({
                      cssClass: 'danger-alert',
                      header: header,
                      message: msg,
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 2:
                    alert = _context20.sent;
                    _context20.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email, newPassword) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials/forgot-password"), {
            email: email,
            newPassword: newPassword
          }).subscribe();
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this16 = this;

          this.storage.remove(this.TOKEN_KEY).then(function (token) {
            console.log('Logging out...');
            _this16.user = null;
            _this16.userInfo = {
              fullName: '',
              about: '',
              gender: '',
              dob: '',
              school: '',
              grade: '',
              profilePicture: '',
              resume: '',
              email: '',
              password: ''
            }, _this16.authenticationState.next(false);
            window.location.reload();
          });
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/events.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/events.service.ts ***!
    \********************************************/

  /*! exports provided: EventsService */

  /***/
  function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsService", function () {
      return EventsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");

    var EventsService = /*#__PURE__*/function () {
      function EventsService(http, profile) {
        _classCallCheck(this, EventsService);

        this.http = http;
        this.profile = profile;
        this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      _createClass(EventsService, [{
        key: "getEvents",
        value: function getEvents() {
          console.log('Getting Events');
          return this.http.get("".concat(this.BACKEND_URL, "/api/events"));
        }
      }, {
        key: "getEventsGoing",
        value: function getEventsGoing(id) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/events/events-going"), {
            _id: id
          });
        }
      }, {
        key: "goingToEvent",
        value: function goingToEvent(eventID, userEmail, id) {
          console.log(this.profile);
          return this.http.post("".concat(this.BACKEND_URL, "/api/events/go-to-event"), {
            eventID: eventID,
            userEmail: userEmail,
            id: id
          });
        }
      }, {
        key: "notGoingToEvent",
        value: function notGoingToEvent(eventID, userEmail, id) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/events/dont-go-to-event"), {
            userEmail: userEmail,
            eventID: eventID,
            id: id
          });
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventId) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/events/delete-event"), {
            _id: eventId
          });
        }
      }]);

      return EventsService;
    }();

    EventsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], EventsService);
    /***/
  },

  /***/
  "./src/app/services/favorites.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/favorites.service.ts ***!
    \***********************************************/

  /*! exports provided: FavoritesService */

  /***/
  function srcAppServicesFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
      return FavoritesService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var FavoritesService = /*#__PURE__*/function () {
      function FavoritesService(http, profile, toast) {
        _classCallCheck(this, FavoritesService);

        this.http = http;
        this.profile = profile;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      }

      _createClass(FavoritesService, [{
        key: "getFavorites",
        value: function getFavorites(email) {
          console.log('Getting Favorites');
          return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/get-favorites"), {
            email: email
          });
        }
      }, {
        key: "favoriteThisJob",
        value: function favoriteThisJob(job) {
          var _this17 = this;

          // get user's email for database query
          var email = this.profile.activeEmail; // put this job's id into this user's favoriteJobs property

          job.userEmail = email;
          var id = job._id; // this.favoriteJobs$.next([job]);

          return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/favorite"), {
            email: email,
            _id: id
          }).subscribe(function (data) {
            console.log('Posting Favorite Job to Database..');

            var updatedFavorites = _toConsumableArray(Object.values(data));

            _this17.favoriteJobs$.next(updatedFavorites);

            _this17.presentToastFavorited('You favorited this job!');
          });
        }
      }, {
        key: "unFavoriteThisJob",
        value: function unFavoriteThisJob(job) {
          var _this18 = this;

          // get user's email for database query
          var email = this.profile.activeEmail;
          job.userEmail = email;
          var id = job._id; // post to database

          this.http.post("".concat(this.BACKEND_URL, "/api/jobs/unfavorite"), {
            email: email,
            _id: id
          }).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var updatedFavorites;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      console.log("Unfavorite data value: ", data);
                      updatedFavorites = _toConsumableArray(Object.values(data)); // for (let i = 0; i < updatedFavorites.length; i++) {
                      //   if (updatedFavorites[i] === job) {
                      //     updatedFavorites.splice(i, 1);
                      //   }
                      // }

                      this.favoriteJobs$.next(updatedFavorites);
                      this.presentToastUnfavorited('You removed this job from Favorites.');

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }); // update favoriteJobsSubject

          console.log('Unfavoriting this Job');
        }
      }, {
        key: "presentToastFavorited",
        value: function presentToastFavorited(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var toast;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.toast.create({
                      message: msg,
                      duration: 3000,
                      cssClass: 'favorited-toast',
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context22.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "presentToastUnfavorited",
        value: function presentToastUnfavorited(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var toast;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.toast.create({
                      message: msg,
                      duration: 3000,
                      cssClass: 'unfavorited-toast',
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context23.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }]);

      return FavoritesService;
    }();

    FavoritesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }];
    };

    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], FavoritesService);
    /***/
  },

  /***/
  "./src/app/services/post.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/post.service.ts ***!
    \******************************************/

  /*! exports provided: PostsService */

  /***/
  function srcAppServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsService", function () {
      return PostsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");

    var PostsService = /*#__PURE__*/function () {
      function PostsService(http, profile) {
        _classCallCheck(this, PostsService);

        this.http = http;
        this.profile = profile;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.postsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.followingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
      }

      _createClass(PostsService, [{
        key: "getPosts",
        value: function getPosts() {
          // console.log('Getting Posts');
          return this.http.get("".concat(this.BACKEND_URL, "/api/posts/"));
        }
      }, {
        key: "getMyPosts",
        value: function getMyPosts(email) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/my-posts"), {
            email: email
          });
        }
      }, {
        key: "getPostInfo",
        value: function getPostInfo(id) {
          // console.log(`Getting information for post id ${id}`);
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/post-info"), {
            _id: id
          });
        }
      }, {
        key: "addPost",
        value: function addPost(creatorName, creatorEmail, creatorProfilePicture, post, title) {
          console.log('Adding post to post que...');
          console.log('Post: ', post);
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/add-text-post"), {
            creatorName: creatorName,
            creatorEmail: creatorEmail,
            creatorProfilePicture: creatorProfilePicture,
            post: post,
            title: title
          });
        }
      }, {
        key: "comment",
        value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/comment"), {
            postID: postID,
            userFullName: userFullName,
            userEmail: userEmail,
            userProfilePicture: userProfilePicture,
            comment: _comment
          });
        }
      }, {
        key: "editPost",
        value: function editPost(postID, newPost) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/edit-post"), {
            postID: postID,
            newPost: newPost
          });
        }
      }, {
        key: "editComment",
        value: function editComment(commentID, postID, newComment) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/edit-comment"), {
            postID: postID,
            commentID: commentID,
            newComment: newComment
          });
        } // Upvote Post

      }, {
        key: "upVotePost",
        value: function upVotePost(postID, userEmail) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/up-vote-post"), {
            postID: postID,
            userEmail: userEmail
          });
        } // Downvote Post

      }, {
        key: "downVotePost",
        value: function downVotePost(postID, userEmail) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/down-vote-post"), {
            postID: postID,
            userEmail: userEmail
          });
        } // Upvote

      }, {
        key: "upVoteComment",
        value: function upVoteComment(postID, commentID, userEmail) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/up-vote-comment"), {
            postID: postID,
            commentID: commentID,
            userEmail: userEmail
          });
        } // Downvote

      }, {
        key: "downVoteComment",
        value: function downVoteComment(postID, commentID, userEmail) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/down-vote-comment"), {
            postID: postID,
            commentID: commentID,
            userEmail: userEmail
          });
        }
      }, {
        key: "followPost",
        value: function followPost(postID, userEmail) {
          var _this19 = this;

          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/follow"), {
            _id: postID,
            email: userEmail
          }).subscribe(function (data) {
            var updatedFollowingPosts = _toConsumableArray(Object.values(data));

            _this19.followingSubject$.next(updatedFollowingPosts);
          });
        }
      }, {
        key: "unFollowPost",
        value: function unFollowPost(postID, userEmail) {
          var _this20 = this;

          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/unfollow"), {
            _id: postID,
            email: userEmail
          }).subscribe(function (data) {
            var updatedFollowingPosts = _toConsumableArray(Object.values(data));

            _this20.followingSubject$.next(updatedFollowingPosts);
          });
        }
      }, {
        key: "getFollowedPost",
        value: function getFollowedPost(userId) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/get-followed-posts"), {
            _id: userId
          });
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(postID, commentID) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-comment"), {
            _id: postID,
            _cid: commentID
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postID) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-post"), {
            _id: postID
          });
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "reportComment",
        value: function reportComment(commentID, commentContents, post, postID, reportedUserName, reportedUserEmail, commentDate, userEmail, userFullname, reportReason) {
          // tslint:disable-next-line: max-line-length
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/report"), {
            commentID: commentID,
            commentContents: commentContents,
            post: post,
            postID: postID,
            reportedUserName: reportedUserName,
            reportedUserEmail: reportedUserEmail,
            commentDate: commentDate,
            userEmail: userEmail,
            userFullname: userFullname,
            reportReason: reportReason
          });
        }
      }, {
        key: "replyComment",
        value: function replyComment(commentID, postID, reply, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
          // tslint:disable-next-line: max-line-length
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/reply-comment"), {
            postID: postID,
            commentID: commentID,
            reply: reply,
            userFullName: userFullName,
            userProfilePicture: userProfilePicture,
            userEmail: userEmail,
            commentUserEmail: commentUserEmail,
            commentUserFullName: commentUserFullName
          });
        }
      }, {
        key: "deleteReply",
        value: function deleteReply(replyID, commentID, postID) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-reply"), {
            _rid: replyID,
            _cid: commentID,
            _pid: postID
          });
        }
      }]);

      return PostsService;
    }();

    PostsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])], PostsService);
    /***/
  },

  /***/
  "./src/app/services/profile.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/profile.service.ts ***!
    \*********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http, storage, alertController, helper, auth, router, toastController) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.auth = auth;
        this.router = router;
        this.toastController = toastController;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
        this.activeEmail = ''; // user = {};

        this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.about = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.city = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](''); // Needs the User's email address from the JSON Web Token stored on device.

        this.activeEmail = this.auth.user.email;
      }

      _createClass(ProfileService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get("".concat(this.BACKEND_URL, "/api/home/user"));
        } //  Gets User Details from Server to populate the Profile tab with User information.

      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          return this.http.post("".concat(this.BACKEND_URL, "/api/home/user"), {
            email: this.activeEmail
          });
        }
      }, {
        key: "getTheirDetails",
        value: function getTheirDetails(email) {
          return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/their-details"), {
            email: email
          });
        }
      }, {
        key: "changeEmail",
        value: function changeEmail(activeEmail, newEmail, password) {
          var _this21 = this;

          // tslint:disable-next-line: max-line-length
          return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-email"), {
            oldEmail: this.activeEmail,
            email: newEmail,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) {
            _this21.presentFailToast(_this21.activeEmail);

            throw new Error(e);
          })).subscribe(function (data) {
            if (data === true) {
              _this21.email.next(newEmail);

              _this21.activeEmail = newEmail;

              _this21.router.navigate(['/home/profile']);

              _this21.presentSuccessToast();
            } else {
              _this21.presentFailToast(_this21.activeEmail);

              return console.log('Passwords dont match');
            }
          });
        } // Toast for Successful Change

      }, {
        key: "presentSuccessToast",
        value: function presentSuccessToast() {
          var successToast = this.toastController.create({
            message: 'Your Email address has been updated.',
            duration: 3000,
            cssClass: 'updated-toast',
            keyboardClose: true,
            position: 'bottom'
          });
          successToast.then(function (t) {
            return t.present();
          });
        }
      }, {
        key: "presentFailToast",
        value: function presentFailToast(email) {
          // Toast for Successful Change
          var failToast = this.toastController.create({
            // tslint:disable-next-line: max-line-length
            message: "Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ".concat(email),
            duration: 9000,
            cssClass: 'wrong-password-toast',
            keyboardClose: true,
            position: 'top'
          });
          failToast.then(function (t) {
            return t.present();
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-password"), {
                      oldPassword: oldPassword,
                      email: activeEmail,
                      newPassword: newPassword,
                      reTypeNewPassword: reTypeNewPassword
                    }).subscribe(function (data) {
                      // if the passwords match, navigate back to landing page
                      if (data === true) {
                        console.log('TRUE');

                        _this22.router.navigate(['']);

                        var toast = _this22.toastController.create({
                          message: 'Password updated. Please login with your new password.',
                          duration: 3000,
                          cssClass: 'updated-toast',
                          keyboardClose: true,
                          position: 'bottom'
                        });

                        toast.then(function (t) {
                          return t.present();
                        });
                      } else {
                        console.log('Passwords dont match!');
                      }
                    });

                  case 2:
                    return _context24.abrupt("return", _context24.sent);

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "changeAbout",
        value: function changeAbout(email, newAbout, passsword) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-about"), {
                      email: email,
                      newAbout: newAbout,
                      passsword: passsword
                    }).subscribe();

                  case 2:
                    return _context25.abrupt("return", _context25.sent);

                  case 3:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "changeSchool",
        value: function changeSchool(email, newSchool, newGrade, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-school"), {
                      email: email,
                      newSchool: newSchool,
                      newGrade: newGrade,
                      password: password
                    }).subscribe(function (data) {
                      if (data === true) {
                        _this23.school.next(newSchool);

                        _this23.grade.next(newGrade);

                        _this23.router.navigate(['/home/profile']);

                        var successToast = _this23.toastController.create({
                          // tslint:disable-next-line: max-line-length
                          message: 'Your school information has been updated.',
                          duration: 3000,
                          cssClass: 'updated-toast',
                          keyboardClose: true,
                          position: 'bottom'
                        });

                        successToast.then(function (t) {
                          return t.present();
                        });
                      } else {
                        var failToast = _this23.toastController.create({
                          // tslint:disable-next-line: max-line-length
                          message: 'Please make sure your password is correct',
                          duration: 3000,
                          cssClass: 'wrong-password-toast',
                          keyboardClose: true,
                          position: 'top'
                        });

                        failToast.then(function (t) {
                          return t.present();
                        });
                        return console.log('Passwords dont match');
                      }
                    });

                  case 2:
                    return _context26.abrupt("return", _context26.sent);

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "changeProfilePicture",
        value: function changeProfilePicture(imageForm, oldPhotoKey) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    return _context27.abrupt("return", this.http.post("".concat(this.BACKEND_URL, "/api/photo/change-profile-picture"), {
                      imageForm: imageForm,
                      oldPhotoKey: oldPhotoKey
                    }).subscribe());

                  case 1:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "changeResume",
        value: function changeResume(email, newResume, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-school"), {
                      email: email,
                      newResume: newResume,
                      password: password
                    }).subscribe(function (data) {
                      if (data === true) {
                        console.log('Changing Resume...');

                        _this24.resume.next(newResume);

                        _this24.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
                      } else {
                        return console.log('Passwords dont match');
                      }
                    });

                  case 2:
                    return _context28.abrupt("return", _context28.sent);

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        } // Delete User

      }, {
        key: "delete",
        value: function _delete() {
          console.log('Deleted User');
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], ProfileService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! zone.js/dist/zone-error */
    "./node_modules/zone.js/dist/zone-error.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    // const url is commented out depending on which you are testing with.
    // local host is for local machine and 10.0.1.8 is for android testing


    var ip = '10.229.210.221';
    var baseUrl = "https://".concat(ip, ":4040");
    var environment = {
      production: false,
      url: baseUrl
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function () {
      if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        navigator.serviceWorker.register('/ngsw-worker.js');
      }
    })["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/ferro/Desktop/United-Way/Mobile/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map