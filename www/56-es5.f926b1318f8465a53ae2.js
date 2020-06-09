function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{Zdun:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},i=u("pMnS"),o=u("SVse"),r=u("oBZk"),a=u("ZZ/e"),s=u("s7LF"),b=u("mrSG"),c=u("lGQG"),h=u("Aso2"),d=function(){function l(n,u,e,t,i){_classCallCheck(this,l),this.formBuilder=n,this.router=u,this.auth=e,this.alertController=t,this.profile=i,this.activeEmail=this.profile.email.getValue(),this.activePhone=this.profile.phone.getValue(),this.disabled=!0,this.validationMessasges={phone:[{type:"text",message:"Phone number has to be 10 digits long"}]},this.activeEmail=this.auth.user.email}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.changePhone=this.formBuilder.group({newNumber:["",s.p.compose([s.p.maxLength(10),s.p.minLength(10),s.p.required])],password:["",s.p.required]}),this.changePhone.valueChanges.subscribe((function(n){setTimeout((function(){l.formValid=!!l.changePhone.valid}),100)}))}},{key:"back",value:function(){console.log("change phone number cancelled"),this.router.navigate(["/home/profile/edit-profile-page"])}},{key:"presentAlert",value:function(){return b.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({cssClass:"danger-alert",header:"Already Using This Number",message:"You are already using this phone number.",buttons:[{text:"OK"}]});case 2:return n=l.sent,l.next=5,n.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"confirmChangedPhoneNumber",value:function(l,n){l==this.activePhone?this.presentAlert():this.profile.changePhone(this.activeEmail,l,n)}}]),l}(),g=u("iInd"),p=e.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}"]],data:{}});function m(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Tb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function f(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,m)),e.Ab(2,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.changePhone.get("newNumber").hasError(n.context.$implicit.message)&&(u.changePhone.get("newNumber").dirty||u.changePhone.get("newNumber").touched))}),null)}function v(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,r.cb,r.r)),e.Ab(1,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.vb,r.K)),e.Ab(3,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.P,r.e)),e.Ab(5,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Nb(l,8).onClick(u)&&t),t}),r.N,r.c)),e.Ab(7,49152,null,0,a.g,[e.j,e.p,e.F],null,null),e.Ab(8,16384,null,0,a.h,[[2,a.ib],a.Ib],null,null),(l()(),e.Bb(9,0,null,0,2,"ion-title",[],null,null,null,r.ub,r.J)),e.Ab(10,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Change Phone Number"])),(l()(),e.Bb(12,0,null,null,60,"ion-content",[],null,null,null,r.W,r.l)),e.Ab(13,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Bb(14,0,null,0,58,"ion-grid",[["class","ion-text-center"],["fixed",""]],null,null,null,r.bb,r.q)),e.Ab(15,49152,null,0,a.A,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(l()(),e.Bb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,r.kb,r.z)),e.Ab(17,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,3,"ion-col",[["offset","1.8"],["size","4"]],null,null,null,r.V,r.k)),e.Ab(19,49152,null,0,a.t,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.Bb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Change Phone Number"])),(l()(),e.Bb(22,0,null,0,4,"ion-col",[["push","2.1"],["size","2"]],null,null,null,r.V,r.k)),e.Ab(23,49152,null,0,a.t,[e.j,e.p,e.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),e.Bb(24,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.back()&&e),e}),r.O,r.d)),e.Ab(25,49152,null,0,a.k,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,[" Back "])),(l()(),e.Bb(27,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,r.kb,r.z)),e.Ab(28,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(29,0,null,0,2,"ion-col",[["size","10"]],null,null,null,r.V,r.k)),e.Ab(30,49152,null,0,a.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(31,0,null,0,0,"hr",[["style","background-color: #00000044;"]],null,null,null,null,null)),(l()(),e.Bb(32,0,null,0,40,"ion-row",[["class","ion-justify-content-center"]],null,null,null,r.kb,r.z)),e.Ab(33,49152,null,0,a.jb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(34,0,null,0,38,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xs","11"]],null,null,null,r.V,r.k)),e.Ab(35,49152,null,0,a.t,[e.j,e.p,e.F],null,null),(l()(),e.Bb(36,0,null,0,1,"h6",[["class","text-header"],["style","width: unset;"]],null,null,null,null,null)),(l()(),e.Tb(37,null,["Current Phone Number: ",""])),(l()(),e.Bb(38,0,null,0,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Nb(l,40).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Nb(l,40).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.confirmChangedPhoneNumber(i.changePhone.controls.newNumber.value,i.changePhone.controls.password.value)&&t),t}),null,null)),e.Ab(39,16384,null,0,s.t,[],null,null),e.Ab(40,540672,null,0,s.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Qb(2048,null,s.a,null,[s.d]),e.Ab(42,16384,null,0,s.l,[[4,s.a]],null,null),(l()(),e.Bb(43,0,null,null,26,"ion-list",[["class","line-input"]],null,null,null,r.hb,r.w)),e.Ab(44,49152,null,0,a.O,[e.j,e.p,e.F],null,null),(l()(),e.Bb(45,0,null,0,10,"ion-item",[],null,null,null,r.fb,r.u)),e.Ab(46,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(47,0,null,0,8,"ion-input",[["formControlName","newNumber"],["maxLength","10"],["placeholder","New Number  - xxx - xxx - xxxx"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,50)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,50)._handleInputEvent(u.target)&&t),"keyup.enter"===n&&(t=!1!==(i.formValid?i.confirmChangedPhoneNumber(i.changePhone.controls.newNumber.value,i.changePhone.controls.password.value):null)&&t),t}),r.eb,r.t)),e.Ab(48,16384,null,0,s.o,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.o]),e.Ab(50,16384,null,0,a.Ob,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[a.Ob]),e.Ab(52,671744,null,0,s.c,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.s]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.c]),e.Ab(54,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(55,49152,null,0,a.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(56,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,f)),e.Ab(58,278528,null,0,o.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(59,0,null,0,10,"ion-item",[],null,null,null,r.fb,r.u)),e.Ab(60,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(61,0,null,0,8,"ion-input",[["formControlName","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,64)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,64)._handleInputEvent(u.target)&&t),"keyup.enter"===n&&(t=!1!==(i.formValid?i.confirmChangedPhoneNumber(i.changePhone.controls.newNumber.value,i.changePhone.controls.password.value):null)&&t),t}),r.eb,r.t)),e.Ab(62,16384,null,0,s.o,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.o]),e.Ab(64,16384,null,0,a.Ob,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[a.Ob]),e.Ab(66,671744,null,0,s.c,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.s]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.c]),e.Ab(68,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(69,49152,null,0,a.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(70,0,null,null,2,"ion-button",[["class","orange-button"],["style","width: unset;"],["type","submit"]],null,null,null,r.O,r.d)),e.Ab(71,49152,null,0,a.k,[e.j,e.p,e.F],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.Tb(-1,0,["CHANGE NUMBER"]))],(function(l,n){var u=n.component;l(n,15,0,""),l(n,19,0,"1.8","4"),l(n,23,0,"2.1","2"),l(n,30,0,"10"),l(n,40,0,u.changePhone),l(n,48,0,""),l(n,52,0,"newNumber"),l(n,55,0,"New Number  - xxx - xxx - xxxx","","text"),l(n,58,0,u.validationMessasges.phone),l(n,62,0,""),l(n,66,0,"password"),l(n,69,0,"Password","","password"),l(n,71,0,!u.formValid,"submit")}),(function(l,n){l(n,37,0,n.component.activePhone),l(n,38,0,e.Nb(n,42).ngClassUntouched,e.Nb(n,42).ngClassTouched,e.Nb(n,42).ngClassPristine,e.Nb(n,42).ngClassDirty,e.Nb(n,42).ngClassValid,e.Nb(n,42).ngClassInvalid,e.Nb(n,42).ngClassPending),l(n,47,0,e.Nb(n,48).required?"":null,e.Nb(n,54).ngClassUntouched,e.Nb(n,54).ngClassTouched,e.Nb(n,54).ngClassPristine,e.Nb(n,54).ngClassDirty,e.Nb(n,54).ngClassValid,e.Nb(n,54).ngClassInvalid,e.Nb(n,54).ngClassPending),l(n,61,0,e.Nb(n,62).required?"":null,e.Nb(n,68).ngClassUntouched,e.Nb(n,68).ngClassTouched,e.Nb(n,68).ngClassPristine,e.Nb(n,68).ngClassDirty,e.Nb(n,68).ngClassValid,e.Nb(n,68).ngClassInvalid,e.Nb(n,68).ngClassPending)}))}var N=e.xb("app-change-phone",d,(function(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-change-phone",[],null,null,null,v,p)),e.Ab(1,114688,null,0,d,[s.b,g.m,c.a,a.a,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=function(){return u.e(57).then(u.bind(null,"zdp5")).then((function(l){return l.ConfirmPageModuleNgFactory}))},w=function l(){_classCallCheck(this,l)};u.d(n,"ChangePhonePageModuleNgFactory",(function(){return A}));var A=e.yb(t,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[i.a,N]],[3,e.m],e.D]),e.Lb(4608,o.l,o.k,[e.z,[2,o.s]]),e.Lb(4608,s.r,s.r,[]),e.Lb(4608,a.b,a.b,[e.F,e.g]),e.Lb(4608,a.Hb,a.Hb,[a.b,e.m,e.w]),e.Lb(4608,a.Lb,a.Lb,[a.b,e.m,e.w]),e.Lb(4608,s.b,s.b,[]),e.Lb(1073742336,o.c,o.c,[]),e.Lb(1073742336,s.q,s.q,[]),e.Lb(1073742336,s.e,s.e,[]),e.Lb(1073742336,a.Eb,a.Eb,[]),e.Lb(1073742336,s.n,s.n,[]),e.Lb(1073742336,g.q,g.q,[[2,g.v],[2,g.m]]),e.Lb(1073742336,w,w,[]),e.Lb(1073742336,t,t,[]),e.Lb(1024,g.k,(function(){return[[{path:"",component:d},{path:"confirm",loadChildren:C}]]}),[])])}))}}]);