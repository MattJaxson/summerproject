(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{wQpE:function(n,l,s){"use strict";s.r(l);var o=s("8Y7J");class u{}var e=s("pMnS"),a=s("oBZk"),t=s("ZZ/e"),r=s("s7LF"),i=s("SVse"),b=s("mrSG"),d=s("lGQG"),c=s("AytR");class g{constructor(n,l,s,o,u){this.formBuilder=n,this.router=l,this.auth=s,this.activatedRoute=o,this.toast=u,this.BACKEND_URL=c.a.url,this.passwordsMatch=!1,this.validationMessasges={password:[{type:"password",message:"Please enter a valid password."}]}}ngOnInit(){this.newPasswordForm=this.formBuilder.group({newPassword:["",r.p.required],reTypeNewPassword:["",r.p.required]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),console.log("Email: "+this.userEmail),this.formOnChanges()}formOnChanges(){console.log(this.newPasswordForm),this.newPasswordForm.valueChanges.subscribe(n=>{console.log(n),this.newPasswordForm.statusChanges.subscribe(n=>{console.log(n),"VALID"===n&&(console.log("you did it bruh"),this.passwordsMatch=!0)}),this.newPasswordForm.controls.newPassword.value===this.newPasswordForm.controls.reTypePassword.value&&this.newPasswordForm.controls.newPassword.touched&&console.log("Passwords Match"),this.newPasswordForm.controls.newPassword.value!==this.newPasswordForm.controls.reTypePassword.value&&(console.log("Passwords Match"),this.passwordsMatch=!1)})}goToConfirmPage(){return b.b(this,void 0,void 0,(function*(){const n=this.userEmail;let l=this.newPasswordForm.value.newPassword;if(l!==this.newPasswordForm.value.reTypeNewPassword)return this.presentToast(),console.log("passwords do not match");yield this.auth.forgotPassword(n,l),yield console.log("Going to Confirm Password Change Page"),yield this.router.navigate(["/enter-email/enter-code/:email/new-password/:email/confirm"])}))}presentToast(){return b.b(this,void 0,void 0,(function*(){(yield this.toast.create({message:"The two passwords you entered do not match. Please try again.",duration:2e3})).present()}))}cancel(){console.log("Forgotten password cancelled"),this.router.navigate([""])}}var w=s("iInd"),h=o.pb({encapsulation:0,styles:[["span[_ngcontent-%COMP%]{font-weight:900;font-size:1.2em;color:#005191}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}@-webkit-keyframes password-icons{0%{-webkit-transform:translateX(50px);transform:translateX(50px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes password-icons{0%{-webkit-transform:translateX(50px);transform:translateX(50px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}"]],data:{}});function p(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.O,a.d)),o.qb(1,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.db,a.s)),o.qb(3,49152,null,0,t.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"close")}),null)}function m(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.O,a.d)),o.qb(1,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.db,a.s)),o.qb(3,49152,null,0,t.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"checkmark")}),null)}function f(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.O,a.d)),o.qb(1,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.db,a.s)),o.qb(3,49152,null,0,t.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"close")}),null)}function k(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.O,a.d)),o.qb(1,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.db,a.s)),o.qb(3,49152,null,0,t.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"checkmark")}),null)}function P(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,1,"ion-header",[["style","display: none;"]],null,null,null,a.cb,a.r)),o.qb(1,49152,null,0,t.B,[o.h,o.k,o.x],null,null),(n()(),o.rb(2,0,null,null,49,"ion-content",[],null,null,null,a.W,a.l)),o.qb(3,49152,null,0,t.u,[o.h,o.k,o.x],null,null),(n()(),o.rb(4,0,null,0,47,"ion-grid",[["class","ion-text-center"],["style","margin-top: 10%;"]],null,null,null,a.bb,a.q)),o.qb(5,49152,null,0,t.A,[o.h,o.k,o.x],null,null),(n()(),o.rb(6,0,null,0,45,"ion-row",[],null,null,null,a.kb,a.z)),o.qb(7,49152,null,0,t.jb,[o.h,o.k,o.x],null,null),(n()(),o.rb(8,0,null,0,43,"ion-col",[["offset-lg","3"],["size-lg","6"]],null,null,null,a.V,a.k)),o.qb(9,49152,null,0,t.t,[o.h,o.k,o.x],null,null),(n()(),o.rb(10,0,null,0,1,"h6",[["class","text-header"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Please enter your new password."])),(n()(),o.rb(12,0,null,0,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,s){var u=!0,e=n.component;return"submit"===l&&(u=!1!==o.Db(n,14).onSubmit(s)&&u),"reset"===l&&(u=!1!==o.Db(n,14).onReset()&&u),"ngSubmit"===l&&(u=!1!==e.goToConfirmPage()&&u),u}),null,null)),o.qb(13,16384,null,0,r.t,[],null,null),o.qb(14,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Gb(2048,null,r.a,null,[r.d]),o.qb(16,16384,null,0,r.l,[[4,r.a]],null,null),(n()(),o.rb(17,0,null,null,34,"ion-list",[["class","line-input"]],null,null,null,a.hb,a.w)),o.qb(18,49152,null,0,t.O,[o.h,o.k,o.x],null,null),(n()(),o.rb(19,0,null,0,12,"ion-item",[],null,null,null,a.fb,a.u)),o.qb(20,49152,null,0,t.H,[o.h,o.k,o.x],null,null),(n()(),o.rb(21,0,null,0,6,"ion-input",[["formControlName","newPassword"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,s){var u=!0;return"ionBlur"===l&&(u=!1!==o.Db(n,22)._handleBlurEvent(s.target)&&u),"ionChange"===l&&(u=!1!==o.Db(n,22)._handleInputEvent(s.target)&&u),u}),a.eb,a.t)),o.qb(22,16384,null,0,t.Ob,[o.k],null,null),o.Gb(1024,null,r.i,(function(n){return[n]}),[t.Ob]),o.qb(24,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),o.Gb(2048,null,r.j,null,[r.c]),o.qb(26,16384,null,0,r.k,[[4,r.j]],null,null),o.qb(27,49152,null,0,t.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),o.gb(16777216,null,0,1,null,p)),o.qb(29,16384,null,0,i.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,m)),o.qb(31,16384,null,0,i.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(32,0,null,0,12,"ion-item",[],null,null,null,a.fb,a.u)),o.qb(33,49152,null,0,t.H,[o.h,o.k,o.x],null,null),(n()(),o.rb(34,0,null,0,6,"ion-input",[["formControlName","reTypeNewPassword"],["placeholder","Re-type Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,s){var u=!0;return"ionBlur"===l&&(u=!1!==o.Db(n,35)._handleBlurEvent(s.target)&&u),"ionChange"===l&&(u=!1!==o.Db(n,35)._handleInputEvent(s.target)&&u),u}),a.eb,a.t)),o.qb(35,16384,null,0,t.Ob,[o.k],null,null),o.Gb(1024,null,r.i,(function(n){return[n]}),[t.Ob]),o.qb(37,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.s]],{name:[0,"name"]},null),o.Gb(2048,null,r.j,null,[r.c]),o.qb(39,16384,null,0,r.k,[[4,r.j]],null,null),o.qb(40,49152,null,0,t.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),o.gb(16777216,null,0,1,null,f)),o.qb(42,16384,null,0,i.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,k)),o.qb(44,16384,null,0,i.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(45,0,null,0,2,"ion-button",[["class","orange-button"],["type","submit"]],null,null,null,a.O,a.d)),o.qb(46,49152,null,0,t.k,[o.h,o.k,o.x],{type:[0,"type"]},null),(n()(),o.Jb(-1,0,["NEXT"])),(n()(),o.rb(48,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),o.rb(49,0,null,0,2,"ion-button",[["class","cancel-button"],["slot","end"]],null,[[null,"click"]],(function(n,l,s){var o=!0;return"click"===l&&(o=!1!==n.component.cancel()&&o),o}),a.O,a.d)),o.qb(50,49152,null,0,t.k,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,[" cancel "]))],(function(n,l){var s=l.component;n(l,14,0,s.newPasswordForm),n(l,24,0,"newPassword"),n(l,27,0,"Password","password"),n(l,29,0,!s.passwordsMatch),n(l,31,0,s.passwordsMatch),n(l,37,0,"reTypeNewPassword"),n(l,40,0,"Re-type Password","password"),n(l,42,0,!s.passwordsMatch),n(l,44,0,s.passwordsMatch),n(l,46,0,"submit")}),(function(n,l){n(l,12,0,o.Db(l,16).ngClassUntouched,o.Db(l,16).ngClassTouched,o.Db(l,16).ngClassPristine,o.Db(l,16).ngClassDirty,o.Db(l,16).ngClassValid,o.Db(l,16).ngClassInvalid,o.Db(l,16).ngClassPending),n(l,21,0,o.Db(l,26).ngClassUntouched,o.Db(l,26).ngClassTouched,o.Db(l,26).ngClassPristine,o.Db(l,26).ngClassDirty,o.Db(l,26).ngClassValid,o.Db(l,26).ngClassInvalid,o.Db(l,26).ngClassPending),n(l,34,0,o.Db(l,39).ngClassUntouched,o.Db(l,39).ngClassTouched,o.Db(l,39).ngClassPristine,o.Db(l,39).ngClassDirty,o.Db(l,39).ngClassValid,o.Db(l,39).ngClassInvalid,o.Db(l,39).ngClassPending)}))}function y(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,1,"app-new-password",[],null,null,null,P,h)),o.qb(1,114688,null,0,g,[r.b,w.m,d.a,w.a,t.Pb],null,null)],(function(n,l){n(l,1,0)}),null)}var C=o.nb("app-new-password",g,y,{},{},[]);const v=()=>s.e(28).then(s.bind(null,"F170")).then(n=>n.ConfirmPageModuleNgFactory);class q{}s.d(l,"NewPasswordPageModuleNgFactory",(function(){return D}));var D=o.ob(u,[],(function(n){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[e.a,C]],[3,o.j],o.v]),o.Bb(4608,i.l,i.k,[o.s,[2,i.s]]),o.Bb(4608,r.r,r.r,[]),o.Bb(4608,r.b,r.b,[]),o.Bb(4608,t.b,t.b,[o.x,o.g]),o.Bb(4608,t.Hb,t.Hb,[t.b,o.j,o.p]),o.Bb(4608,t.Lb,t.Lb,[t.b,o.j,o.p]),o.Bb(1073742336,i.c,i.c,[]),o.Bb(1073742336,r.q,r.q,[]),o.Bb(1073742336,r.e,r.e,[]),o.Bb(1073742336,r.n,r.n,[]),o.Bb(1073742336,t.Eb,t.Eb,[]),o.Bb(1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),o.Bb(1073742336,q,q,[]),o.Bb(1073742336,u,u,[]),o.Bb(1024,w.k,(function(){return[[{path:"",component:g},{path:"confirm",loadChildren:v}]]}),[])])}))}}]);