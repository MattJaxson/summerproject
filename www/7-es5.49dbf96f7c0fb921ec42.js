!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{veoP:function(o,n,r){"use strict";r.r(n),r.d(n,"EnterCodePageModule",function(){return v});var s=r("ofXK"),i=r("3Pt+"),a=r("TEn/"),c=r("tyNb"),u=r("mrSG"),d=r("lGQG"),l=r("fXoL");function m(e,t){if(1&e&&(l.Mb(0,"div",14),l.mc(1),l.Lb()),2&e){var o=l.Wb().$implicit;l.xb(1),l.oc(" ",o.message," ")}}function b(e,t){if(1&e&&(l.Kb(0),l.lc(1,m,2,1,"div",13),l.Jb()),2&e){var o=t.$implicit,n=l.Wb();l.xb(1),l.Zb("ngIf",n.enterCodeForm.get("code").hasError(o.type)&&(n.enterCodeForm.get("code").dirty||n.enterCodeForm.get("code").touched))}}var h,f,p,g=[{path:"",component:(h=function(){function o(t,n,r,s,i){e(this,o),this.router=t,this.formBuilder=n,this.auth=r,this.activatedRoute=s,this.toast=i,this.code="",this.userEmail="",this.validationMessasges={code:[{type:"text",message:"The codes do not match"}]}}var n,r,s;return n=o,(r=[{key:"ngOnInit",value:function(){var e=this;this.enterCodeForm=this.formBuilder.group({code:["",i.n.required]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),this.generateCode(6).then(function(t){e.auth.sendEmailWithCodeForgotPassword(t,e.userEmail)}),this.formOnChanges()}},{key:"formOnChanges",value:function(){console.log(this.enterCodeForm),this.enterCodeForm.valueChanges.subscribe(function(e){console.log(e)})}},{key:"generateCode",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var o,n,r,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(o="",r=(n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,s=0;s<e;s++)o+=n.charAt(Math.floor(Math.random()*r));return t.abrupt("return",(console.log("Generated Code: "+o),this.code=o));case 4:case"end":return t.stop()}},t,this)}))}},{key:"newPasswordPage",value:function(e){console.log("New Password: "),console.log(e),this.enterCodeForm.controls.code.value!==this.code?(this.presentToast(),console.log("Codes do not match")):(console.log("Codes matched"),this.router.navigate(["/enter-email/enter-code/:email/new-password",this.userEmail]))}},{key:"sendNewCode",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generateCode(6).then(function(e){console.log("Data: "+e),t.auth.sendEmailWithCode(e,t.userEmail)});case 2:return e.next=4,this.presentNewCodeToast(this.userEmail);case 4:case"end":return e.stop()}},e,this)}))}},{key:"presentToast",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"The codes do not match. Please try again.",duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentNewCodeToast",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toast.create({message:"New Code sent to "+e,duration:2e3,cssClass:"success-toast",keyboardClose:!0,position:"top"});case 2:t.sent.present();case 3:case"end":return t.stop()}},t,this)}))}},{key:"cancel",value:function(){console.log("Forgot password cancelled"),this.router.navigate([""])}}])&&t(n.prototype,r),s&&t(n,s),o}(),h.\u0275fac=function(e){return new(e||h)(l.Hb(c.f),l.Hb(i.a),l.Hb(d.a),l.Hb(c.a),l.Hb(a.Z))},h.\u0275cmp=l.Bb({type:h,selectors:[["app-enter-code"]],decls:23,vars:3,consts:[[2,"display","none"],[1,"ion-text-center",2,"margin-top","10%"],["size-sm","10","size-lg","6","offset-lg","3","offset-sm","1"],[1,"text-header"],[2,"font-weight","700"],[3,"formGroup","ngSubmit"],[1,"line-input"],["placeholder","Enter Code","required","","formControlName","code","type","text","placeholder","Enter Code"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","submit",1,"orange-button"],[1,"send-new-code",3,"click"],["slot","end",1,"cancel-button",3,"click"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(l.Ib(0,"ion-header",0),l.Mb(1,"ion-content"),l.Mb(2,"ion-grid",1),l.Mb(3,"ion-row"),l.Mb(4,"ion-col",2),l.Mb(5,"h6",3),l.mc(6,"Please enter "),l.Mb(7,"span",4),l.mc(8,"6 character code"),l.Lb(),l.mc(9),l.Lb(),l.Mb(10,"form",5),l.Ub("ngSubmit",function(){return t.newPasswordPage(t.enterCodeForm.value)}),l.Mb(11,"ion-list",6),l.Mb(12,"ion-item"),l.Ib(13,"ion-input",7),l.Lb(),l.Mb(14,"div",8),l.lc(15,b,2,1,"ng-container",9),l.Lb(),l.Mb(16,"ion-button",10),l.mc(17,"ENTER CODE"),l.Lb(),l.Ib(18,"br"),l.Mb(19,"ion-button",11),l.Ub("click",function(){return t.sendNewCode()}),l.mc(20," Send new code "),l.Lb(),l.Mb(21,"ion-button",12),l.Ub("click",function(){return t.cancel()}),l.mc(22," cancel "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.xb(9),l.oc(" that was sent to ",t.userEmail,""),l.xb(1),l.Zb("formGroup",t.enterCodeForm),l.xb(5),l.Zb("ngForOf",t.validationMessasges.code))},directives:[a.u,a.o,a.t,a.G,a.n,i.o,i.j,i.c,a.C,a.x,a.w,a.Y,i.m,i.i,i.b,s.i,a.g,s.j],styles:[".send-new-code[_ngcontent-%COMP%]{display:block;--background:none;color:#005191;--border-color:#005191;--border-width:1px;--border-style:solid;border:1px;width:150px;margin:50px auto;opacity:0;-webkit-animation:slide-from-right 1s ease-out 5s forwards;animation:slide-from-right 1s ease-out 5s forwards}span[_ngcontent-%COMP%]{font-weight:900;font-size:1.2em;color:#005191}@-webkit-keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}"]}),h)},{path:"new-password/:email",loadChildren:function(){return r.e(26).then(r.bind(null,"PJsJ")).then(function(e){return e.NewPasswordPageModule})}}],w=((p=function t(){e(this,t)}).\u0275mod=l.Fb({type:p}),p.\u0275inj=l.Eb({factory:function(e){return new(e||p)},imports:[[c.j.forChild(g)],c.j]}),p),v=((f=function t(){e(this,t)}).\u0275mod=l.Fb({type:f}),f.\u0275inj=l.Eb({factory:function(e){return new(e||f)},imports:[[s.b,i.d,i.l,a.Q,w]]}),f)}}])}();