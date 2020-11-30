(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fair-page-fair-page-module~modals-fair-chaperone-register-fair-chaperone-register-module~pag~111c3137"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsFairChaperoneRegisterFairChaperoneRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header>\n</ion-header>\n\n\n<ion-content>\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Register New Chaperone</p>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1>Tech Fair</h1>\n        <h5>Date</h5>\n        <h5>Address</h5>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit a expedita sed nostrum reprehenderit assumenda sequi veritatis rerum magnam omnis minima ratione, odio quidem adipisci possimus qui molestiae! Quisquam!</p>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <form [formGroup]=\"resgisterForm\" (ngSubmit)=\"registerStudent()\">\n          <ion-list class=\"line-input\">\n\n            <!-- First & Last Name -->\n            <ion-item>\n              <ion-label position=\"floating\">First & Last Name <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"name\" type=\"text\"></ion-input>\n            </ion-item>\n\n            <!-- Email -->\n            <ion-item>\n              <ion-label position=\"floating\">E-Mail <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required formControlName=\"email\" type=\"email\"></ion-input>\n            </ion-item>\n\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"resgisterForm\n                      .get('email')\n                      .hasError(validation.type) && (resgisterForm.get('email')\n                      .dirty || resgisterForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n            <!-- Phone -->\n            <ion-item>\n              <ion-label position=\"floating\">Phone\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n              <ion-input required\n              maxlength=\"10\"\n              minlength=\"10\" formControlName=\"phone\" type=\"phone\"></ion-input>\n            </ion-item>\n            <!-- Phone Validation-->\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessasges.phone\">\n                <div class=\"error-message\"\n                *ngIf=\"resgisterForm\n                  .get('phone')\n                  .hasError(validation.type) && (resgisterForm.get('phone')\n                  .dirty || resgisterForm.get('phone').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n\n            <!-- School -->\n            <ion-item>\n              <ion-label position=\"floating\">School\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectSchool($event)\"\n                placeholder=\"Select School\">\n                  <ion-select-option *ngFor=\"let school of schools\" value=\"{{school}}\">{{school}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n             <!-- Gender -->\n             <ion-item>\n              <ion-label position=\"floating\">Gender\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectGender($event)\"\n                placeholder=\"Select School\">\n                  <ion-select-option value=\"Male\">Male</ion-select-option>\n                  <ion-select-option value=\"Female\">Female</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <!-- Lunch -->\n            <ion-item>\n              <ion-label position=\"floating\">Lunch\n                <ion-text color=\"danger\">*</ion-text>\n              </ion-label>\n                <ion-select (ionChange)=\"selectLunch($event)\"\n                placeholder=\"Select School\">\n                  <ion-select-option *ngFor=\"let lunch of lunches\" value=\"{{lunch}}\">{{lunch}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n          </ion-list>\n\n          <div style=\"text-align: center; margin: 100px auto\">\n            <ion-button type=\"submit\" class=\"orange-button\">\n              Register\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"registered\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center confirm-popout\">\n      <ion-col class=\"ion-text-center\" size=\"8\">\n        <ion-icon [className]=\"registered ? 'slide-up' : 'off'\" name=\"checkmark-circle-outline\" size=\"large\" color=\"success\" ></ion-icon>\n        <h3>Thank you for Registering as a Chaperone for Tech Fair.</h3>\n        <ion-button class=\"blue-button\" (click)=\"confirm()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/rxjs/internal/InnerSubscriber.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalInnerSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var InnerSubscriber = function (_super) {
      __extends(InnerSubscriber, _super);

      function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;

        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
      }

      InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
      };

      InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
      };

      InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
      };

      return InnerSubscriber;
    }(Subscriber_1.Subscriber);

    exports.InnerSubscriber = InnerSubscriber; //# sourceMappingURL=InnerSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ./symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/OuterSubscriber.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOuterSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var OuterSubscriber = function (_super) {
      __extends(OuterSubscriber, _super);

      function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
      };

      OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
      };

      OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
      };

      return OuterSubscriber;
    }(Subscriber_1.Subscriber);

    exports.OuterSubscriber = OuterSubscriber; //# sourceMappingURL=OuterSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return _extendStatics3(d, b);
      };

      return function (d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (_parentOrParents instanceof Subscription) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        if (!teardown) {
          return Subscription.EMPTY;
        }

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        var _parentOrParents = subscription._parentOrParents;

        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
          if (_parentOrParents === this) {
            return subscription;
          }

          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }

        var subscriptions = this._subscriptions;

        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/operators/catchError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/operators/catchError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOperatorsCatchErrorJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics4 = function extendStatics(d, b) {
        _extendStatics4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return _extendStatics4(d, b);
      };

      return function (d, b) {
        _extendStatics4(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var OuterSubscriber_1 = __webpack_require__(
    /*! ../OuterSubscriber */
    "./node_modules/rxjs/internal/OuterSubscriber.js");

    var InnerSubscriber_1 = __webpack_require__(
    /*! ../InnerSubscriber */
    "./node_modules/rxjs/internal/InnerSubscriber.js");

    var subscribeToResult_1 = __webpack_require__(
    /*! ../util/subscribeToResult */
    "./node_modules/rxjs/internal/util/subscribeToResult.js");

    function catchError(selector) {
      return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return operator.caught = caught;
      };
    }

    exports.catchError = catchError;

    var CatchOperator = function () {
      function CatchOperator(selector) {
        this.selector = selector;
      }

      CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
      };

      return CatchOperator;
    }();

    var CatchSubscriber = function (_super) {
      __extends(CatchSubscriber, _super);

      function CatchSubscriber(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;

        _this.selector = selector;
        _this.caught = caught;
        return _this;
      }

      CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var result = void 0;

          try {
            result = this.selector(err, this.caught);
          } catch (err2) {
            _super.prototype.error.call(this, err2);

            return;
          }

          this._unsubscribeAndRecycle();

          var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
          this.add(innerSubscriber);
          var innerSubscription = subscribeToResult_1.subscribeToResult(this, result, undefined, undefined, innerSubscriber);

          if (innerSubscription !== innerSubscriber) {
            this.add(innerSubscription);
          }
        }
      };

      return CatchSubscriber;
    }(OuterSubscriber_1.OuterSubscriber); //# sourceMappingURL=catchError.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/iterator.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
      }

      return Symbol.iterator;
    }

    exports.getSymbolIterator = getSymbolIterator;
    exports.iterator = getSymbolIterator();
    exports.$$iterator = exports.iterator; //# sourceMappingURL=iterator.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); //# sourceMappingURL=observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/identity.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/identity.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIdentityJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function identity(x) {
      return x;
    }

    exports.identity = identity; //# sourceMappingURL=identity.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isArrayLike.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayLikeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArrayLike = function (x) {
      return x && typeof x.length === 'number' && typeof x !== 'function';
    }; //# sourceMappingURL=isArrayLike.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isPromise.js":
  /*!******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsPromiseJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isPromise(value) {
      return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }

    exports.isPromise = isPromise; //# sourceMappingURL=isPromise.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var identity_1 = __webpack_require__(
    /*! ./identity */
    "./node_modules/rxjs/internal/util/identity.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeTo.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var subscribeToArray_1 = __webpack_require__(
    /*! ./subscribeToArray */
    "./node_modules/rxjs/internal/util/subscribeToArray.js");

    var subscribeToPromise_1 = __webpack_require__(
    /*! ./subscribeToPromise */
    "./node_modules/rxjs/internal/util/subscribeToPromise.js");

    var subscribeToIterable_1 = __webpack_require__(
    /*! ./subscribeToIterable */
    "./node_modules/rxjs/internal/util/subscribeToIterable.js");

    var subscribeToObservable_1 = __webpack_require__(
    /*! ./subscribeToObservable */
    "./node_modules/rxjs/internal/util/subscribeToObservable.js");

    var isArrayLike_1 = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/rxjs/internal/util/isArrayLike.js");

    var isPromise_1 = __webpack_require__(
    /*! ./isPromise */
    "./node_modules/rxjs/internal/util/isPromise.js");

    var isObject_1 = __webpack_require__(
    /*! ./isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var iterator_1 = __webpack_require__(
    /*! ../symbol/iterator */
    "./node_modules/rxjs/internal/symbol/iterator.js");

    var observable_1 = __webpack_require__(
    /*! ../symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    exports.subscribeTo = function (result) {
      if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
      } else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
      } else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
      } else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
      } else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
      }
    }; //# sourceMappingURL=subscribeTo.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToArray.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.subscribeToArray = function (array) {
      return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }

        subscriber.complete();
      };
    }; //# sourceMappingURL=subscribeToArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToIterable.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToIterableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var iterator_1 = __webpack_require__(
    /*! ../symbol/iterator */
    "./node_modules/rxjs/internal/symbol/iterator.js");

    exports.subscribeToIterable = function (iterable) {
      return function (subscriber) {
        var iterator = iterable[iterator_1.iterator]();

        do {
          var item = iterator.next();

          if (item.done) {
            subscriber.complete();
            break;
          }

          subscriber.next(item.value);

          if (subscriber.closed) {
            break;
          }
        } while (true);

        if (typeof iterator.return === 'function') {
          subscriber.add(function () {
            if (iterator.return) {
              iterator.return();
            }
          });
        }

        return subscriber;
      };
    }; //# sourceMappingURL=subscribeToIterable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToObservable.js":
  /*!******************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var observable_1 = __webpack_require__(
    /*! ../symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    exports.subscribeToObservable = function (obj) {
      return function (subscriber) {
        var obs = obj[observable_1.observable]();

        if (typeof obs.subscribe !== 'function') {
          throw new TypeError('Provided object does not correctly implement Symbol.observable');
        } else {
          return obs.subscribe(subscriber);
        }
      };
    }; //# sourceMappingURL=subscribeToObservable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToPromise.js":
  /*!***************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToPromiseJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var hostReportError_1 = __webpack_require__(
    /*! ./hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.subscribeToPromise = function (promise) {
      return function (subscriber) {
        promise.then(function (value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function (err) {
          return subscriber.error(err);
        }).then(null, hostReportError_1.hostReportError);
        return subscriber;
      };
    }; //# sourceMappingURL=subscribeToPromise.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToResult.js":
  /*!**************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToResultJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var InnerSubscriber_1 = __webpack_require__(
    /*! ../InnerSubscriber */
    "./node_modules/rxjs/internal/InnerSubscriber.js");

    var subscribeTo_1 = __webpack_require__(
    /*! ./subscribeTo */
    "./node_modules/rxjs/internal/util/subscribeTo.js");

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
      if (innerSubscriber === void 0) {
        innerSubscriber = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
      }

      if (innerSubscriber.closed) {
        return undefined;
      }

      if (result instanceof Observable_1.Observable) {
        return result.subscribe(innerSubscriber);
      }

      return subscribeTo_1.subscribeTo(result)(innerSubscriber);
    }

    exports.subscribeToResult = subscribeToResult; //# sourceMappingURL=subscribeToResult.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./src/app/modals/fair-chaperone-register/fair-chaperone-register-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/modals/fair-chaperone-register/fair-chaperone-register-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: FairChaperoneRegisterPageRoutingModule */

  /***/
  function srcAppModalsFairChaperoneRegisterFairChaperoneRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairChaperoneRegisterPageRoutingModule", function () {
      return FairChaperoneRegisterPageRoutingModule;
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


    var _fair_chaperone_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fair-chaperone-register.page */
    "./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.ts");

    const routes = [{
      path: '',
      component: _fair_chaperone_register_page__WEBPACK_IMPORTED_MODULE_3__["FairChaperoneRegisterPage"]
    }];
    let FairChaperoneRegisterPageRoutingModule = class FairChaperoneRegisterPageRoutingModule {};
    FairChaperoneRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FairChaperoneRegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/fair-chaperone-register/fair-chaperone-register.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modals/fair-chaperone-register/fair-chaperone-register.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: FairChaperoneRegisterPageModule */

  /***/
  function srcAppModalsFairChaperoneRegisterFairChaperoneRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairChaperoneRegisterPageModule", function () {
      return FairChaperoneRegisterPageModule;
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


    var _fair_chaperone_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fair-chaperone-register-routing.module */
    "./src/app/modals/fair-chaperone-register/fair-chaperone-register-routing.module.ts");
    /* harmony import */


    var _fair_chaperone_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fair-chaperone-register.page */
    "./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.ts");

    let FairChaperoneRegisterPageModule = class FairChaperoneRegisterPageModule {};
    FairChaperoneRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fair_chaperone_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["FairChaperoneRegisterPageRoutingModule"]],
      declarations: [_fair_chaperone_register_page__WEBPACK_IMPORTED_MODULE_6__["FairChaperoneRegisterPage"]]
    })], FairChaperoneRegisterPageModule);
    /***/
  },

  /***/
  "./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsFairChaperoneRegisterFairChaperoneRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  color: white;\n  font-size: 1.2em;\n  position: relative;\n  top: -5px;\n}\n\nion-header {\n  background: #21ce99;\n}\n\n.confirm-popout {\n  height: 100vh;\n  width: 100vw;\n  background-color: White;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  -webkit-animation: popout 1s ease forwards;\n          animation: popout 1s ease forwards;\n}\n\n.header-slide-up {\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n.slide-up {\n  opacity: 0;\n  -webkit-animation: slide-up 1s ease 1s forwards;\n          animation: slide-up 1s ease 1s forwards;\n}\n\n#sign-up {\n  background: lightblue;\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nion-list-header {\n  margin-top: 100px;\n}\n\n@-webkit-keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@keyframes popout {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@-webkit-keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n\n@keyframes off {\n  0% {\n    display: block;\n  }\n  100% {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL2ZhaXItY2hhcGVyb25lLXJlZ2lzdGVyL2ZhaXItY2hhcGVyb25lLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2ZhaXItY2hhcGVyb25lLXJlZ2lzdGVyL2ZhaXItY2hhcGVyb25lLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFRENBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0NGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFRENBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDQUY7RURFQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDQUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxjQUFBO0VDREY7RURHQTtJQUNFLGFBQUE7RUNERjtBQUNGOztBRExBO0VBQ0U7SUFDRSxjQUFBO0VDREY7RURHQTtJQUNFLGFBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2ZhaXItY2hhcGVyb25lLXJlZ2lzdGVyL2ZhaXItY2hhcGVyb25lLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMWNlOTk7XG59XG5cbi5jb25maXJtLXBvcG91dCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBhbmltYXRpb246IHBvcG91dCAxcyBlYXNlIGZvcndhcmRzO1xufVxuXG4uaGVhZGVyLXNsaWRlLXVwe1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbi5zbGlkZS11cCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuI3NpZ24tdXAge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb2ZmIHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCJpb24tdG9vbGJhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMjFjZTk5O1xufVxuXG4uY29uZmlybS1wb3BvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBwb3BvdXQgMXMgZWFzZSBmb3J3YXJkcztcbn1cblxuLmhlYWRlci1zbGlkZS11cCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZWFzZSAxcyBmb3J3YXJkcztcbn1cblxuLnNsaWRlLXVwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyBlYXNlIDFzIGZvcndhcmRzO1xufVxuXG4jc2lnbi11cCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcG91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBvZmYge1xuICAwJSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.ts ***!
    \********************************************************************************/

  /*! exports provided: FairChaperoneRegisterPage */

  /***/
  function srcAppModalsFairChaperoneRegisterFairChaperoneRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FairChaperoneRegisterPage", function () {
      return FairChaperoneRegisterPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/fairs.service */
    "./src/app/services/fairs.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/internal/operators/catchError */
    "./node_modules/rxjs/internal/operators/catchError.js");
    /* harmony import */


    var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__);

    let FairChaperoneRegisterPage = class FairChaperoneRegisterPage {
      constructor(modal, alert, formBuilder, fairs, navParams) {
        this.modal = modal;
        this.alert = alert;
        this.formBuilder = formBuilder;
        this.fairs = fairs;
        this.navParams = navParams;
        this.registered = false;
        this.chaperoneObject = {
          id: '',
          name: '',
          email: '',
          school: '',
          phone: '',
          lunch: '',
          gender: ''
        };
        this.schools = ['Martin Luther King High School', 'Cass Technical High School', 'Renaissance High School'];
        this.lunches = ['Ham', 'Turkey', 'Veggietarian'];
        this.validationMessasges = {
          email: [{
            type: 'email',
            message: 'Must be a valid email address'
          }],
          phone: [{
            type: 'pattern',
            message: 'Phone number must be 10 digits, ei (734)123-4567.'
          }]
        };
      }

      ngOnDestroy() {
        this.registerChaperoneSubscription.unsubscribe();
      }

      ngOnInit() {
        this.resgisterForm = this.formBuilder.group({
          name: ['Eddie', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9 ]{10}')]]
        });
        this.chaperoneObject.id = this.navParams.get('id');
        this.resgisterForm.statusChanges.subscribe(status => console.log(status));
      }

      cancel() {
        this.modal.dismiss();
      }

      selectSchool(e) {
        console.log('Added School ' + e.detail.value);
        this.chaperoneObject.school = e.detail.value;
      }

      selectLunch(e) {
        console.log('Added Lunch ' + e.detail.value);
        this.chaperoneObject.lunch = e.detail.value;
      }

      selectGender(e) {
        console.log('Added Gender ' + e.detail.value);
        this.chaperoneObject.gender = e.detail.value;
      }

      registerStudent() {
        // Check to see if the user has answered all the questions
        this.chaperoneObject.name = this.resgisterForm.value['name'];
        this.chaperoneObject.email = this.resgisterForm.value['email'];
        this.chaperoneObject.phone = this.resgisterForm.value['phone'];

        if (!this.resgisterForm.valid || !this.chaperoneObject.id || !this.chaperoneObject.name || !this.chaperoneObject.phone || !this.chaperoneObject.gender || !this.chaperoneObject.email || !this.chaperoneObject.lunch) {
          console.log('Please answer all the questions!');
          console.log(this.chaperoneObject);
          return this.presentFormAlert();
        } else {
          this.registerChaperoneSubscription = this.fairs.registerChaperone(this.chaperoneObject).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            if (error.error === 'A Chaperone already has that email address') {
              console.log('A Chaperone already has that email address');
              this.presentEmailTakenAlert();
              return rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"];
            }
          })).subscribe(() => {
            console.log('REGISTERED CHAPERONE TO FAIR!');
            this.registered = true;
          });
          console.log(this.chaperoneObject);
        }
      }

      presentFormAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            // tslint:disable-next-line: max-line-length
            message: 'Please fill out the entire form.',
            // cssClass: ''
            buttons: [{
              text: 'Okay',
              role: 'cancel'
            }]
          });
          yield alert.present();
        });
      }

      presentEmailTakenAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            // tslint:disable-next-line: max-line-length
            message: 'This email has already been registered as a Chaperone. Please use another email, or contact us if you believe your email has been used without your permission.',
            // cssClass: ''
            buttons: [{
              text: 'Okay',
              role: 'cancel'
            }]
          });
          yield alert.present();
        });
      }

      confirm() {
        this.modal.dismiss();
      }

    };

    FairChaperoneRegisterPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
    }];

    FairChaperoneRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fair-chaperone-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fair-chaperone-register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fair-chaperone-register.page.scss */
      "./src/app/modals/fair-chaperone-register/fair-chaperone-register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_fairs_service__WEBPACK_IMPORTED_MODULE_4__["FairsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], FairChaperoneRegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=default~fair-page-fair-page-module~modals-fair-chaperone-register-fair-chaperone-register-module~pag~111c3137-es5.js.map