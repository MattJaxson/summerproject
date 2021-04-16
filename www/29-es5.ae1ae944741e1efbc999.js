!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Wx8N:function(n,o,r){"use strict";r.r(o),r.d(o,"EnterCodePageModule",function(){return m});var i,a,s,c=r("ofXK"),u=r("3Pt+"),d=r("TEn/"),l=r("tyNb"),b=r("mrSG"),h=r("lGQG"),p=r("fXoL"),f=[{path:"",component:(i=function(){function n(t,o,r,i,a){e(this,n),this.router=t,this.formBuilder=o,this.auth=r,this.activatedRoute=i,this.toast=a,this.disabled=!0,this.code="",this.userEmail=""}var o,r,i;return o=n,(r=[{key:"ngOnInit",value:function(){var e=this;this.enterCodeForm=this.formBuilder.group({code:["",[u.n.required,u.n.maxLength(6)]]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),this.generateCode(6).then(function(t){console.log("Sent Email to "+e.userEmail),e.auth.sendEmailWithCode(t,e.userEmail)}),this.formOnChanges()}},{key:"formOnChanges",value:function(){var e=this;console.log(this.enterCodeForm),this.enterCodeForm.valueChanges.subscribe(function(t){console.log(t),t.code===e.code&&(console.log("codes match"),e.disabled=!1),t.code!==e.code&&(e.disabled=!0)})}},{key:"generateCode",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,o,r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n="",r=(o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,i=0;i<e;i++)n+=o.charAt(Math.floor(Math.random()*r));return t.abrupt("return",(console.log("Generated Code: "+n),this.code=n));case 4:case"end":return t.stop()}},t,this)}))}},{key:"sendNewCode",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generateCode(6).then(function(e){console.log("Data: "+e),t.auth.sendEmailWithCode(e,t.userEmail)});case 2:return e.next=4,this.presentNewCodeToast(this.userEmail);case 4:case"end":return e.stop()}},e,this)}))}},{key:"thankYouPage",value:function(){this.enterCodeForm.controls.code.value!==this.code&&(this.presentErrorToast(),console.log("Codes do not match")),console.log("Thank you page"),this.auth.register(),this.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page"])}},{key:"presentCodesMatchedToast",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"Codes Matched!",duration:2e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentErrorToast",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"The codes do not match. Please try again.",duration:2e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentNewCodeToast",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toast.create({message:"New Code sent to "+e,duration:2e3,cssClass:"success-toast",keyboardClose:!0,position:"top"});case 2:t.sent.present();case 3:case"end":return t.stop()}},t,this)}))}},{key:"back",value:function(){console.log("Sign up cancelled"),this.router.navigate(["/personal-info/profile-picture/upload-resume/"])}}])&&t(o.prototype,r),i&&t(o,i),n}(),i.\u0275fac=function(e){return new(e||i)(p.Hb(l.g),p.Hb(u.a),p.Hb(h.a),p.Hb(l.a),p.Hb(d.eb))},i.\u0275cmp=p.Bb({type:i,selectors:[["app-enter-code"]],decls:35,vars:3,consts:[[1,"ion-hide-lg-up"],["mode","md"],["slot","start"],["size","small"],[1,"spacer","ion-hide-lg-down"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center","header"],["size","12",1,"ion-text-center"],[1,"text-header"],[1,"ion-justify-content-center","ion-align-items-center"],["size-xs","11","size-sm","10","size-md","10","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["formControlName","code","type","email","placeholder","enter code"],["type","submit",1,"orange-button",3,"disabled"],[1,"send-new-code",3,"click"],[1,"cancel-button",3,"click"]],template:function(e,t){1&e&&(p.Mb(0,"ion-header",0),p.Mb(1,"ion-toolbar",1),p.Mb(2,"ion-buttons",2),p.Ib(3,"ion-back-button"),p.Lb(),p.Mb(4,"ion-title",3),p.nc(5,"Enter Code"),p.Lb(),p.Lb(),p.Lb(),p.Mb(6,"ion-content"),p.Ib(7,"div",4),p.Mb(8,"ion-grid"),p.Mb(9,"ion-row",5),p.Mb(10,"ion-col",6),p.Mb(11,"ion-toolbar",7),p.Mb(12,"ion-buttons",2),p.Ib(13,"img",8),p.Lb(),p.Mb(14,"ion-buttons",9),p.Mb(15,"ion-button",10),p.Ub("click",function(){return t.back()}),p.nc(16," Back "),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(17,"ion-row",11),p.Mb(18,"ion-col",12),p.Mb(19,"h6",13),p.nc(20,"Please enter the 6 character code that was sent to "),p.Mb(21,"span"),p.nc(22),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(23,"ion-row",14),p.Mb(24,"ion-col",15),p.Mb(25,"form",16),p.Ub("ngSubmit",function(){return t.thankYouPage()}),p.Mb(26,"ion-list",17),p.Mb(27,"ion-item"),p.Ib(28,"ion-input",18),p.Lb(),p.Mb(29,"ion-button",19),p.nc(30," ENTER CODE "),p.Lb(),p.Mb(31,"ion-button",20),p.Ub("click",function(){return t.sendNewCode()}),p.nc(32," Send new code "),p.Lb(),p.Mb(33,"ion-button",21),p.Ub("click",function(){return t.auth.cancelSignUp()}),p.nc(34," Cancel "),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&e&&(p.xb(22),p.oc(t.userEmail),p.xb(3),p.Zb("formGroup",t.enterCodeForm),p.xb(4),p.Zb("disabled",t.disabled))},directives:[d.u,d.S,d.h,d.e,d.f,d.R,d.o,d.t,d.I,d.n,d.g,u.o,u.j,u.c,d.C,d.x,d.w,d.db,u.i,u.b],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.5em;color:#222;z-index:999}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.orange-button[_ngcontent-%COMP%]{display:block;margin:48px auto 16px;width:200px;-webkit-animation:none;animation:none;opacity:1}span[_ngcontent-%COMP%]{font-size:1.2em;color:#005191}.send-new-code[_ngcontent-%COMP%]{display:block;--background:#005191;color:#fff;font-weight:600;width:150px;margin:8px auto;opacity:0;-webkit-animation:slide-from-right 1s ease-out 5s forwards;animation:slide-from-right 1s ease-out 5s forwards}span[_ngcontent-%COMP%]{font-weight:900;font-size:1em;color:#e3405f}@-webkit-keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}"]}),i)},{path:"thank-you-page",loadChildren:function(){return r.e(32).then(r.bind(null,"oo7F")).then(function(e){return e.ThankYouPageModule})}}],g=((s=function t(){e(this,t)}).\u0275mod=p.Fb({type:s}),s.\u0275inj=p.Eb({factory:function(e){return new(e||s)},imports:[[l.k.forChild(f)],l.k]}),s),m=((a=function t(){e(this,t)}).\u0275mod=p.Fb({type:a}),a.\u0275inj=p.Eb({factory:function(e){return new(e||a)},imports:[[c.b,u.d,d.T,u.l,g]]}),a)}}])}();