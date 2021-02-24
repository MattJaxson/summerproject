!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var s=0;s<o.length;s++){var e=o[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2uJy":function(s,e,a){"use strict";a.r(e),a.d(e,"ChangePasswordPageModule",function(){return x});var r=a("ofXK"),t=a("3Pt+"),i=a("TEn/"),c=a("tyNb"),d=a("mrSG"),b=a("lGQG"),w=a("Aso2"),u=a("fXoL");function l(n,o){1&n&&(u.Mb(0,"ion-button",23),u.Ib(1,"ion-icon",24),u.Lb())}function h(n,o){1&n&&(u.Mb(0,"ion-button",25),u.Ib(1,"ion-icon",26),u.Lb())}function p(n,o){if(1&n&&(u.Mb(0,"div",28),u.mc(1),u.Lb()),2&n){var s=u.Wb().$implicit;u.xb(1),u.oc(" ",s.message," ")}}function g(n,o){if(1&n&&(u.Kb(0),u.lc(1,p,2,1,"div",27),u.Jb()),2&n){var s=u.Wb();u.xb(1),u.Zb("ngIf",s.changePassword.get("newPassword").hasError("pattern")&&(s.changePassword.get("newPassword").dirty||s.changePassword.get("newPassword").touched))}}function f(n,o){1&n&&(u.Mb(0,"ion-button",23),u.Ib(1,"ion-icon",24),u.Lb())}function m(n,o){1&n&&(u.Mb(0,"ion-button",25),u.Ib(1,"ion-icon",26),u.Lb())}function P(n,o){if(1&n&&(u.Mb(0,"div",28),u.mc(1),u.Lb()),2&n){var s=u.Wb().$implicit;u.xb(1),u.oc(" ",s.message," ")}}function v(n,o){if(1&n&&(u.Kb(0),u.lc(1,P,2,1,"div",27),u.Jb()),2&n){var s=u.Wb();u.xb(1),u.Zb("ngIf",s.changePassword.get("reTypeNewPassword").hasError("pattern")&&(s.changePassword.get("reTypeNewPassword").dirty||s.changePassword.get("reTypeNewPassword").touched))}}var M,y,L,k=[{path:"",component:(M=function(){function s(o,e,a,r,t){n(this,s),this.formBuilder=o,this.router=e,this.auth=a,this.alertController=r,this.profile=t,this.activeEmail="",this.passwordsMatch=!1,this.validationMessasges={password:[{type:"password",message:"Please enter a valid password."}]},this.activeEmail=this.auth.user.email}var e,a,r;return e=s,(a=[{key:"ngOnInit",value:function(){this.changePassword=this.formBuilder.group({password:["",t.n.required],newPassword:["",t.n.compose([t.n.minLength(8),t.n.required,t.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])],reTypeNewPassword:["",t.n.compose([t.n.minLength(8),t.n.required,t.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.formOnChanges()}},{key:"back",value:function(){this.router.navigate(["/home/profile/edit-profile-page"])}},{key:"formOnChanges",value:function(){var n=this;console.log(this.changePassword),this.changePassword.valueChanges.subscribe(function(o){console.log(o),n.changePassword.statusChanges.subscribe(function(o){console.log(o),"VALID"===o&&(n.passwordsMatch=!0)}),n.changePassword.controls.newPassword.value===n.changePassword.controls.reTypeNewPassword.value&&n.changePassword.controls.newPassword.touched&&console.log("Passwords Match"),n.changePassword.controls.newPassword.value!==n.changePassword.controls.reTypeNewPassword.value&&(console.log("Passwords dont match"),n.passwordsMatch=!1)})}},{key:"presentAlert",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({cssClass:"danger-alert",header:"Invalid Password",message:"New password cannot be the same as the current one.",buttons:[{text:"OK"}]});case 2:return o=n.sent,n.next=5,o.present();case 5:case"end":return n.stop()}},n,this)}))}},{key:"confirmChangedPassword",value:function(n,o,s){n==o?this.presentAlert():this.profile.changePassword(this.activeEmail,n,o,s)}}])&&o(e.prototype,a),r&&o(e,r),s}(),M.\u0275fac=function(n){return new(n||M)(u.Hb(t.a),u.Hb(c.f),u.Hb(b.a),u.Hb(i.a),u.Hb(w.a))},M.\u0275cmp=u.Bb({type:M,selectors:[["app-change-password"]],decls:40,vars:8,consts:[[1,"ion-hide-lg-up"],["slot","start"],["fixed","",1,"ion-text-center"],[1,"ion-hide-md-down",2,"margin","5% 0% 3% 0%"],["offset","2.4","size","3"],["push","2.5","size","2"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center","ion-hide-md-down"],["size","10"],[2,"background-color","#00000044"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","8","size-lg","6"],[1,"text-header",2,"width","unset"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","placeholder","Current password","formControlName","password","type","password",3,"keyup.enter"],["required","","placeholder","New Password","formControlName","newPassword","type","password",3,"keyup.enter"],["class","badPassword","item-right","",4,"ngIf"],["class","goodPassword","item-right","",4,"ngIf"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","placeholder","Re-Type New Password","formControlName","reTypeNewPassword","type","password",3,"keyup.enter"],["type","submit",1,"orange-button",2,"width","unset",3,"disabled"],["item-right","",1,"badPassword"],["name","close",2,"color","#FF443B"],["item-right","",1,"goodPassword"],["name","checkmark",2,"color","#21df82"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,o){1&n&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-buttons",1),u.Ib(3,"ion-back-button"),u.Lb(),u.Mb(4,"ion-title"),u.mc(5,"Change Password"),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content"),u.Mb(7,"ion-grid",2),u.Mb(8,"ion-row",3),u.Mb(9,"ion-col",4),u.Mb(10,"h1"),u.mc(11,"Change Password"),u.Lb(),u.Lb(),u.Mb(12,"ion-col",5),u.Mb(13,"ion-button",6),u.Ub("click",function(){return o.back()}),u.mc(14," Back "),u.Lb(),u.Lb(),u.Lb(),u.Mb(15,"ion-row",7),u.Mb(16,"ion-col",8),u.Ib(17,"hr",9),u.Lb(),u.Lb(),u.Mb(18,"ion-row",10),u.Mb(19,"ion-col",11),u.Mb(20,"h6",12),u.mc(21,"Change your password below."),u.Lb(),u.Mb(22,"form",13),u.Ub("ngSubmit",function(){return o.confirmChangedPassword(o.changePassword.controls.password.value,o.changePassword.controls.newPassword.value,o.changePassword.controls.reTypeNewPassword.value)}),u.Mb(23,"ion-list",14),u.Mb(24,"ion-item"),u.Mb(25,"ion-input",15),u.Ub("keyup.enter",function(){return o.passwordsMatch?o.confirmChangedPassword(o.changePassword.controls.password.value,o.changePassword.controls.newPassword.value,o.changePassword.controls.reTypeNewPassword.value):null}),u.Lb(),u.Lb(),u.Mb(26,"ion-item"),u.Mb(27,"ion-input",16),u.Ub("keyup.enter",function(){return o.passwordsMatch?o.confirmChangedPassword(o.changePassword.controls.password.value,o.changePassword.controls.newPassword.value,o.changePassword.controls.reTypeNewPassword.value):null}),u.Lb(),u.lc(28,l,2,0,"ion-button",17),u.lc(29,h,2,0,"ion-button",18),u.Lb(),u.Mb(30,"div",19),u.lc(31,g,2,1,"ng-container",20),u.Lb(),u.Mb(32,"ion-item"),u.Mb(33,"ion-input",21),u.Ub("keyup.enter",function(){return o.passwordsMatch?o.confirmChangedPassword(o.changePassword.controls.password.value,o.changePassword.controls.newPassword.value,o.changePassword.controls.reTypeNewPassword.value):null}),u.Lb(),u.lc(34,f,2,0,"ion-button",17),u.lc(35,m,2,0,"ion-button",18),u.Lb(),u.Lb(),u.Mb(36,"div",19),u.lc(37,v,2,1,"ng-container",20),u.Lb(),u.Mb(38,"ion-button",22),u.mc(39,"CHANGE PASSWORD"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&n&&(u.xb(22),u.Zb("formGroup",o.changePassword),u.xb(6),u.Zb("ngIf",!o.passwordsMatch),u.xb(1),u.Zb("ngIf",o.passwordsMatch),u.xb(2),u.Zb("ngForOf",o.validationMessasges.password),u.xb(3),u.Zb("ngIf",!o.passwordsMatch),u.xb(1),u.Zb("ngIf",o.passwordsMatch),u.xb(2),u.Zb("ngForOf",o.validationMessasges.password),u.xb(1),u.Zb("disabled",!o.passwordsMatch))},directives:[i.u,i.P,i.h,i.e,i.f,i.O,i.o,i.t,i.G,i.n,i.g,t.o,t.j,t.c,i.C,i.x,i.w,i.Y,t.m,t.i,t.b,r.j,r.i,i.v],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}@-webkit-keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}@keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}"]}),M)},{path:"confirm",loadChildren:function(){return a.e(53).then(a.bind(null,"cuFB")).then(function(n){return n.ConfirmPageModule})}}],C=((L=function o(){n(this,o)}).\u0275mod=u.Fb({type:L}),L.\u0275inj=u.Eb({factory:function(n){return new(n||L)},imports:[[c.j.forChild(k)],c.j]}),L),x=((y=function o(){n(this,o)}).\u0275mod=u.Fb({type:y}),y.\u0275inj=u.Eb({factory:function(n){return new(n||y)},imports:[[r.b,t.d,i.Q,C,t.l]]}),y)}}])}();