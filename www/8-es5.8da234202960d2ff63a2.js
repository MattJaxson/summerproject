!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var e=0;e<o.length;e++){var t=o[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qdgq:function(e,t,i){"use strict";i.r(t),i.d(t,"LoginPageModule",function(){return I});var r=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),l=i("tyNb"),d=i("mrSG"),c=i("lGQG"),u=i("fXoL"),b=["autoFocusInput"];function g(n,o){if(1&n&&(u.Mb(0,"div",26),u.mc(1),u.Lb()),2&n){var e=u.Wb().$implicit;u.xb(1),u.oc(" ",e.message," ")}}function p(n,o){if(1&n&&(u.Kb(0),u.lc(1,g,2,1,"div",25),u.Jb()),2&n){var e=o.$implicit,t=u.Wb();u.xb(1),u.Zb("ngIf",t.loginForm.get("email").hasError(e.type)&&(t.loginForm.get("email").dirty||t.loginForm.get("email").touched))}}function m(n,o){if(1&n&&(u.Mb(0,"div",26),u.mc(1),u.Lb()),2&n){var e=u.Wb().$implicit;u.xb(1),u.oc(" ",e.message," ")}}function f(n,o){if(1&n&&(u.Kb(0),u.lc(1,m,2,1,"div",25),u.Jb()),2&n){var e=o.$implicit,t=u.Wb();u.xb(1),u.Zb("ngIf",t.loginForm.get("password").hasError(e.type)&&(t.loginForm.get("password").dirty||t.loginForm.get("password").touched))}}function h(n,o){if(1&n&&(u.Mb(0,"div",26),u.mc(1),u.Lb()),2&n){var e=u.Wb().$implicit;u.xb(1),u.oc(" ",e.message," ")}}function y(n,o){if(1&n&&(u.Kb(0),u.lc(1,h,2,1,"div",25),u.Jb()),2&n){var e=o.$implicit,t=u.Wb();u.xb(1),u.Zb("ngIf",t.loginForm.get("email").hasError(e.type)&&(t.loginForm.get("email").dirty||t.loginForm.get("email").touched))}}function w(n,o){if(1&n&&(u.Mb(0,"div",26),u.mc(1),u.Lb()),2&n){var e=u.Wb().$implicit;u.xb(1),u.oc(" ",e.message," ")}}function L(n,o){if(1&n&&(u.Kb(0),u.lc(1,w,2,1,"div",25),u.Jb()),2&n){var e=o.$implicit,t=u.Wb();u.xb(1),u.Zb("ngIf",t.loginForm.get("password").hasError(e.type)&&(t.loginForm.get("password").dirty||t.loginForm.get("password").touched))}}var v,M,B,k=function(){return["personal-info"]},x=function(){return["enter-email"]},P=[{path:"",component:(v=function(){function e(o,t,i,r,a){n(this,e),this.formBuilder=o,this.auth=t,this.loading=i,this.toast=r,this.router=a,this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number."}]}}var t,i,r;return t=e,(i=[{key:"ngOnInit",value:function(){var n=this;!1===window.navigator.onLine&&console.log("We are OFFLINE!"),!0===window.navigator.onLine&&console.log("We are ONLINE!"),window.addEventListener("beforeinstallprompt",function(o){console.log("beforeinstallprompt Event fired"),o.preventDefault(),n.deferredPrompt=o,console.log(n.deferredPrompt),n.deferredPrompt&&(n.downloadButton.style.display="block",n.downloadButton.addEventListener("click",function(){n.deferredPrompt.prompt()})),n.deferredPrompt||(n.downloadButton.style.display="none")}),this.loginForm=this.formBuilder.group({email:["eddielacrosse2@gmail.com",[a.n.required,a.n.email]],password:["Lacrosse2",a.n.compose([a.n.minLength(6),a.n.required,a.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.downloadButton=document.getElementById("download-button"),this.closeIPhoneInstallBannerButton=document.getElementById("close"),this.iPhoneInstallBanner=document.getElementById("iphone-install-banner"),this.openSafariBanner=document.getElementById("open-safari-banner"),this.openSafariClose=document.getElementById("open-safari-close");var o=window.navigator.userAgent;console.log(o),o.search("Version")>-1&&(console.log("Safari"),this.downloadButton.innerHTML="Safari"),o.search("Chrome"),o.search("Firefox")>-1&&(this.downloadButton.innerHTML="Firefox"),o.search("Edg")>-1&&(this.downloadButton.innerHTML="Edge"),o.search("OPR")>-1&&(console.log("Opera"),this.downloadButton.innerHTML="Opera"),o.search("Mobile")>-1&&(this.downloadButton.innerHTML="iOS Safari",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.iPhoneInstallBanner.style.display="block",n.closeIPhoneInstallBannerButton.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.iPhoneInstallBanner.style.display="none"})})),o.search("CriOS")>-1&&(this.downloadButton.innerHTML="iOS Chrome",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.openSafariBanner.style.display="block",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("FxiOS")>-1&&(this.downloadButton.innerHTML="iOS Firefox",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.openSafariBanner.style.display="block",n.iPhoneInstallBanner.style.display="none",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("EdgiOS")>-1&&(this.downloadButton.innerHTML="iOS Edge",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){n.openSafariBanner.style.display="block",n.iPhoneInstallBanner.style.display="none",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("OPT")>-1&&(this.downloadButton.innerHTML="iOS Opera",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.openSafariBanner.style.display="block",n.iPhoneInstallBanner.style.display="none",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("iPad")>-1&&(this.downloadButton.innerHTML="iPad",this.downloadButton.style.display="block"),o.search("Chrome")>-1&&o.search("Android")>-1&&(this.downloadButton.innerHTML="Chrome Android",this.downloadButton.addEventListener("click",function(){n.iPhoneInstallBanner.style.display="none",n.showInstallBanner()})),o.search("Firefox")>-1&&o.search("Android")>-1&&(this.downloadButton.innerHTML="Firefox Android"),o.search("EdgA")>-1&&(this.downloadButton.innerHTML="Edge Android"),o.search("SamsungBrowser")>-1&&(this.downloadButton.innerHTML="Samsung Browser"),console.log(window.navigator),window.matchMedia("(display-mode: standalone)").matches&&(console.log("display-mode is standalone"),this.iPhoneInstallBanner.style.display="none",this.openSafariBanner.style.display="none",this.downloadButton.style.display="none"),!0===window.navigator.standalone&&(console.log("display-mode is standalone"),this.iPhoneInstallBanner.style.display="none",this.openSafariBanner.style.display="none",this.downloadButton.style.display="none")}},{key:"showInstallBanner",value:function(){var n=this;console.log("Trying to Show Install Banner ..."),console.log(this.deferredPrompt),void 0===this.deferredPrompt&&(console.log("This page was already installed"),this.downloadButton.style.display="none"),null!=this.deferredPrompt&&(this.downloadButton.style.display="none",this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(function(o){"accepted"===o.outcome?console.log("User accepted the A2HS prompt"):(n.downloadButton.style.display="block",n.downloadButton.style.margin="0 auto 90px auto",console.log("User dismissed the A2HS prompt")),n.deferredPrompt=null}))}},{key:"ngAfterViewInit",value:function(){var n=this;setTimeout(function(){n.inputElement.setFocus()},1e3)}},{key:"presentLoading",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loading.create({message:"Logging in...",duration:1e3,cssClass:"success-toast",keyboardClose:!0});case 2:return o=n.sent,n.next=5,o.present();case 5:return n.next=7,o.onDidDismiss();case 7:case"end":return n.stop()}},n,this)}))}},{key:"login",value:function(n){this.presentLoading(),this.auth.login(n)}},{key:"back",value:function(){this.router.navigate(["/landing"])}},{key:"download",value:function(){console.log("Attempting to download app..")}}])&&o(t.prototype,i),r&&o(t,r),e}(),v.\u0275fac=function(n){return new(n||v)(u.Hb(a.a),u.Hb(c.a),u.Hb(s.S),u.Hb(s.Z),u.Hb(l.f))},v.\u0275cmp=u.Bb({type:v,selectors:[["app-login"]],viewQuery:function(n,o){var e;1&n&&u.tc(b,!0),2&n&&u.ec(e=u.Vb())&&(o.inputElement=e.first)},decls:59,vars:14,consts:[[1,"ion-hide-md-up"],[1,"ion-justify-content-center"],["size-xs","8","size-sm","8","size-md","8",1,"ion-text-center",2,"margin-top","10%"],["id","logo","src","../../../../assets/logo-2.png"],["size-xs","8","size-sm","8","size-md","8",1,"ion-text-center"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","placeholder","Email","inputmode","email","formControlName","email","type","email",3,"keyup.enter"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","placeholder","Password","inputmode","text","formControlName","password","type","password",3,"keyup.enter"],["size","12"],["type","submit",1,"orange-button"],[1,"blue-button",3,"routerLink"],["id","forgot",3,"routerLink"],[1,"ion-text-center","ion-hide-md-down"],["size-md","4","size-lg","4","size-xl","4",2,"margin-top","5%"],["src","../../../../assets/logo-2.png",2,"height","70px","margin","35px 0 30px 0"],["autoFocusInput",""],["type","submit",1,"orange-button",2,"width","200px"],["size","6",1,"ion-hide-sm-down"],["size","6"],["text-center","","id","forgot",3,"routerLink"],[1,"grey-button",3,"click"],["id","download-button",2,"border-radius","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,o){1&n&&(u.Mb(0,"ion-content"),u.Mb(1,"ion-grid",0),u.Mb(2,"ion-row",1),u.Mb(3,"ion-col",2),u.Ib(4,"img",3),u.Lb(),u.Lb(),u.Mb(5,"ion-row",1),u.Mb(6,"ion-col",4),u.Mb(7,"form",5),u.Ub("ngSubmit",function(){return o.login(o.loginForm.value)}),u.Mb(8,"ion-list",6),u.Mb(9,"ion-item"),u.Mb(10,"ion-input",7),u.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),u.Lb(),u.Lb(),u.Mb(11,"div",8),u.lc(12,p,2,1,"ng-container",9),u.Lb(),u.Mb(13,"ion-item"),u.Mb(14,"ion-input",10),u.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),u.Lb(),u.Lb(),u.Mb(15,"div",8),u.lc(16,f,2,1,"ng-container",9),u.Lb(),u.Lb(),u.Mb(17,"ion-col",11),u.Mb(18,"ion-button",12),u.mc(19,"Login"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(20,"ion-row",1),u.Mb(21,"ion-col",11),u.Mb(22,"ion-button",13),u.mc(23,"Sign Up "),u.Lb(),u.Lb(),u.Mb(24,"ion-col",11),u.Mb(25,"ion-button",14),u.mc(26,"Forgot Password?"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(27,"ion-grid",15),u.Mb(28,"ion-row",1),u.Mb(29,"ion-col",16),u.Mb(30,"form",5),u.Ub("ngSubmit",function(){return o.login(o.loginForm.value)}),u.Mb(31,"ion-list",6),u.Ib(32,"img",17),u.Mb(33,"ion-item"),u.Mb(34,"ion-input",7,18),u.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),u.Lb(),u.Lb(),u.Mb(36,"div",8),u.lc(37,y,2,1,"ng-container",9),u.Lb(),u.Mb(38,"ion-item"),u.Mb(39,"ion-input",10),u.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),u.Lb(),u.Lb(),u.Lb(),u.Mb(40,"div",8),u.lc(41,L,2,1,"ng-container",9),u.Lb(),u.Mb(42,"ion-button",19),u.mc(43,"Login"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(44,"ion-row",1),u.Mb(45,"ion-col",20),u.Mb(46,"ion-button",13),u.mc(47,"Sign Up "),u.Lb(),u.Lb(),u.Lb(),u.Mb(48,"ion-row",1),u.Mb(49,"ion-col",21),u.Mb(50,"ion-button",22),u.mc(51,"Forgot Password?"),u.Lb(),u.Lb(),u.Lb(),u.Mb(52,"ion-row",1),u.Mb(53,"ion-col",21),u.Mb(54,"ion-button",23),u.Ub("click",function(){return o.back()}),u.mc(55,"Back"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(56,"ion-footer"),u.Mb(57,"button",24),u.mc(58,"Install App"),u.Lb(),u.Lb()),2&n&&(u.xb(7),u.Zb("formGroup",o.loginForm),u.xb(5),u.Zb("ngForOf",o.validationMessasges.email),u.xb(4),u.Zb("ngForOf",o.validationMessasges.password),u.xb(6),u.Zb("routerLink",u.cc(10,k)),u.xb(3),u.Zb("routerLink",u.cc(11,x)),u.xb(5),u.Zb("formGroup",o.loginForm),u.xb(7),u.Zb("ngForOf",o.validationMessasges.email),u.xb(4),u.Zb("ngForOf",o.validationMessasges.password),u.xb(5),u.Zb("routerLink",u.cc(12,k)),u.xb(4),u.Zb("routerLink",u.cc(13,x)))},directives:[s.o,s.t,s.G,s.n,a.o,a.j,a.c,s.C,s.x,s.w,s.Y,a.m,a.i,a.b,r.i,s.g,s.W,l.g,s.s,r.j],styles:["ion-content[_ngcontent-%COMP%]{text-align:center}#logo[_ngcontent-%COMP%]{height:50px;margin:150px 0 30px}ion-footer[_ngcontent-%COMP%]{opacity:1;border:none}ion-button[_ngcontent-%COMP%]{margin:0}#download-button[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1fcc6d 19.625%,#1ecb6c 0,#17bf28 79.625%);-webkit-background:linear-gradient(90deg,#1fcc6d 19.625%,#1ecb6c 0,#17bf28 79.625%);color:#fff;width:100%;height:60px;font-size:1.4em;font-weight:500;margin:0;border-radius:0!important;transition:.5;position:fixed;bottom:0;left:0;display:none;-webkit-animation:slide-up .5s ease 1s forwards;animation:slide-up .5s ease 1s forwards;transform:translateY(100%)}@-webkit-keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0);opacity:1}}#sign-up-button[_ngcontent-%COMP%]{width:200px;--color:#fff;--background:linear-gradient(#005191,#000)}#forgot[_ngcontent-%COMP%], #sign-up-button[_ngcontent-%COMP%]{height:50px;font-size:1em;font-weight:700;opacity:0}#forgot[_ngcontent-%COMP%]{width:220px;margin-top:20px;--background:none;--background-hover:#474444;--color:hsla(0,0%,51%,0.5);--color-hover:#fff;--transition:0.5s;-webkit-animation:slide-up .5s ease 1.5s forwards;animation:slide-up .5s ease 1.5s forwards}.grey-button[_ngcontent-%COMP%]{width:150px;height:40px;font-size:1em;font-weight:700;margin:10px auto;--border-width:1px;--border-style:solid;--border-color:#999;--background:none;--color:#999;--border-radius:5px}"]}),v)}],F=((B=function o(){n(this,o)}).\u0275mod=u.Fb({type:B}),B.\u0275inj=u.Eb({factory:function(n){return new(n||B)},imports:[[l.j.forChild(P)],l.j]}),B),I=((M=function o(){n(this,o)}).\u0275mod=u.Fb({type:M}),M.\u0275inj=u.Eb({factory:function(n){return new(n||M)},imports:[[r.b,a.d,s.Q,F,a.l]]}),M)}}])}();