(window.webpackJsonp=window.webpackJsonp||[]).push([[22,64,65,66],{"723k":function(e,t,i){"use strict";i.r(t),i.d(t,"ProfilePageModule",function(){return g});var o=i("TEn/"),s=i("tyNb"),r=i("ofXK"),n=i("3Pt+"),a=i("mrSG"),l=i("lGQG"),c=i("Aso2"),b=i("fXoL"),u=i("e8h1");let h=(()=>{class e{constructor(e,t,i,o,s,r,n){this.auth=e,this.profile=t,this.storage=i,this.router=o,this.toast=s,this.alert=r,this.loading=n,this.userObject={fullName:"",about:"",city:"",state:"",zip:"",gender:"",dob:"",school:"",grade:"",profilePicture:"",resume:"",email:""}}ngOnDestroy(){this.detailsSub.unsubscribe(),this.profile.fullName.unsubscribe(),this.profile.about.unsubscribe(),this.profile.city.unsubscribe(),this.profile.state.unsubscribe(),this.profile.zip.unsubscribe(),this.profile.gender.unsubscribe(),this.profile.school.unsubscribe(),this.profile.grade.unsubscribe(),this.profile.profilePicture.unsubscribe(),this.profile.email.unsubscribe(),this.profile.resume.unsubscribe()}ngOnInit(){this.detailsSub=this.profile.getUserDetails().subscribe(e=>{console.log(e);const t=e.about,i=e.city,o=e.state,s=e.zip,r=e.gender,n=e.dob,a=e.school,l=e.grade,c=e.profilePicture,b=e.resume,u=e.email;this.profile.fullName.next(e.fullName),this.profile.about.next(t),this.profile.city.next(i),this.profile.state.next(o),this.profile.zip.next(s),this.profile.gender.next(r),this.profile.dob.next(n),this.profile.school.next(a),this.profile.grade.next(l),this.profile.profilePicture.next(c),this.profile.resume.next(b),this.profile.email.next(u),this.profile.fullName.subscribe(e=>{this.userObject.fullName=e}),this.profile.about.subscribe(e=>{this.userObject.about=e}),this.profile.city.subscribe(e=>{this.userObject.city=e}),this.profile.state.subscribe(e=>{this.userObject.state=e}),this.profile.zip.subscribe(e=>{this.userObject.zip=e}),this.profile.gender.subscribe(e=>{this.userObject.gender=e}),this.profile.dob.subscribe(e=>{this.userObject.dob=e}),this.profile.school.subscribe(e=>{this.userObject.school=e}),this.profile.grade.subscribe(e=>{this.userObject.grade=e}),this.profile.profilePicture.subscribe(e=>{this.userObject.profilePicture=e}),this.profile.resume.subscribe(e=>{this.userObject.resume=e}),this.profile.email.subscribe(e=>{this.userObject.email=e})})}clearToken(){this.storage.remove("access_token"),this.toast.create({message:"JWT removed",duration:3e3}).then(e=>e.present())}editPage(){this.router.navigate(["/home/profile/edit-profile-page"])}changeProfilePicture(){console.log("Navigating to Change Profile Page"),this.router.navigate(["/home/profile/change-profile-picture",this.userObject.profilePicture])}updateResume(){console.log("Navigating to Change Resume Page"),this.router.navigate(["/home/profile/view-resume"])}confirmLogout(){return Object(a.a)(this,void 0,void 0,function*(){const e=this.toast.create({message:"User has been logged out",duration:3e3}),t=yield this.loading.create({message:"Logging out...",duration:1e3}),i=yield this.alert.create({header:"Logout",cssClass:"alert",message:"Are you sure you want to logout?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Canceling logout"),this.profile.fullName.next(""),this.profile.about.next(""),this.profile.city.next(""),this.profile.state.next(""),this.profile.zip.next(""),this.profile.gender.next(""),this.profile.dob.next(""),this.profile.school.next(""),this.profile.grade.next(""),this.profile.profilePicture.next(""),this.profile.resume.next(""),this.profile.email.next(""),this.router.navigate(["/home/profile"])}},{text:"Logout",handler:()=>{console.log("Logging out"),this.auth.logout(),t.present(),e.then(e=>e.present())}}]});yield i.present()})}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(l.a),b.Hb(c.a),b.Hb(u.b),b.Hb(s.f),b.Hb(o.Z),b.Hb(o.a),b.Hb(o.S))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-profile"]],decls:88,vars:14,consts:[[2,"display","none"],[1,"ion-text-center","ion-hide-md-up",2,"--ion-grid-padding","0px"],[1,"header-half","ion-justify-content-center"],["size","12"],["id","profile-picture","alt","User Profile Picture",3,"src"],["id","change-pro-pic-button",3,"click"],["size","6"],[1,"orange-button",3,"click"],["id","profile-info","push","0.5","size","11"],[2,"text-transform","capitalize"],[1,"ion-justify-content-center"],[1,"logout-button",3,"click"],[1,"ion-hide-sm-down"],[2,"margin-top","5%"],["size","4"],["push","2","size","6"],[1,"blue-button",2,"display","inline-block","width","200px","margin-right","50px","animation-delay","2.5s",3,"click"],[1,"blue-button",2,"display","inline-block","width","200px","animation-delay","3s",3,"click"],["id","profile-info","push","1","size","10"],[2,"margin-bottom","10px"],[2,"margin-top","30px"],["size","11","offset","0.5"]],template:function(e,t){1&e&&(b.Ib(0,"ion-header",0),b.Mb(1,"ion-content"),b.Mb(2,"ion-grid",1),b.Mb(3,"ion-row",2),b.Mb(4,"ion-col",3),b.Mb(5,"div"),b.Ib(6,"img",4),b.Mb(7,"button",5),b.Ub("click",function(){return t.changeProfilePicture()}),b.mc(8," + "),b.Lb(),b.Lb(),b.Lb(),b.Mb(9,"ion-col",6),b.Mb(10,"ion-button",7),b.Ub("click",function(){return t.editPage()}),b.mc(11," Edit Profile "),b.Lb(),b.Lb(),b.Mb(12,"ion-col",6),b.Mb(13,"ion-button",7),b.Ub("click",function(){return t.updateResume()}),b.mc(14," View Resume "),b.Lb(),b.Lb(),b.Lb(),b.Mb(15,"ion-row"),b.Mb(16,"ion-col",8),b.Mb(17,"p"),b.Mb(18,"span"),b.mc(19,"About"),b.Lb(),b.mc(20),b.Lb(),b.Mb(21,"p"),b.Mb(22,"span"),b.mc(23,"Name:"),b.Lb(),b.mc(24),b.Lb(),b.Mb(25,"p"),b.Mb(26,"span"),b.mc(27,"Email:"),b.Lb(),b.mc(28),b.Lb(),b.Mb(29,"p",9),b.Mb(30,"span"),b.mc(31,"Gender:"),b.Lb(),b.mc(32),b.Lb(),b.Mb(33,"p"),b.Mb(34,"span"),b.mc(35,"School:"),b.Lb(),b.mc(36),b.Lb(),b.Mb(37,"p"),b.Mb(38,"span"),b.mc(39,"Grade:"),b.Lb(),b.mc(40),b.Lb(),b.Lb(),b.Lb(),b.Mb(41,"ion-row",10),b.Mb(42,"ion-col",6),b.Mb(43,"ion-button",11),b.Ub("click",function(){return t.confirmLogout()}),b.mc(44," Logout "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(45,"ion-grid",12),b.Mb(46,"ion-row",13),b.Mb(47,"ion-col",14),b.Mb(48,"div"),b.Ib(49,"img",4),b.Mb(50,"button",5),b.Ub("click",function(){return t.changeProfilePicture()}),b.mc(51," + "),b.Lb(),b.Lb(),b.Lb(),b.Mb(52,"ion-col",15),b.Mb(53,"ion-button",16),b.Ub("click",function(){return t.editPage()}),b.mc(54," Edit Profile "),b.Lb(),b.Mb(55,"ion-button",17),b.Ub("click",function(){return t.updateResume()}),b.mc(56," View Resume "),b.Lb(),b.Lb(),b.Lb(),b.Mb(57,"ion-row"),b.Mb(58,"ion-col",18),b.Mb(59,"h4"),b.mc(60,"Profile Information: "),b.Lb(),b.Ib(61,"br"),b.Mb(62,"p"),b.Mb(63,"span",19),b.mc(64,"About: "),b.Lb(),b.Ib(65,"br"),b.mc(66),b.Lb(),b.Mb(67,"p"),b.Mb(68,"span",20),b.mc(69,"Name:"),b.Lb(),b.mc(70),b.Lb(),b.Mb(71,"p"),b.Mb(72,"span"),b.mc(73,"Email:"),b.Lb(),b.mc(74),b.Lb(),b.Mb(75,"p",9),b.Mb(76,"span"),b.mc(77,"Gender:"),b.Lb(),b.mc(78),b.Lb(),b.Mb(79,"p"),b.Mb(80,"span"),b.mc(81,"School:"),b.Lb(),b.mc(82),b.Lb(),b.Mb(83,"p"),b.Mb(84,"span"),b.mc(85,"Grade:"),b.Lb(),b.mc(86),b.Lb(),b.Lb(),b.Ib(87,"ion-col",21),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.xb(6),b.ac("src",t.userObject.profilePicture,b.ic),b.xb(14),b.nc(t.userObject.about),b.xb(4),b.oc(" ",t.userObject.fullName,""),b.xb(4),b.oc(" ",t.userObject.email,""),b.xb(4),b.oc(" ",t.userObject.gender,""),b.xb(4),b.oc(" ",t.userObject.school,""),b.xb(4),b.oc(" ",t.userObject.grade,""),b.xb(9),b.ac("src",t.userObject.profilePicture,b.ic),b.xb(17),b.oc(" ",t.userObject.about,""),b.xb(4),b.oc(" ",t.userObject.fullName,""),b.xb(4),b.oc(" ",t.userObject.email,""),b.xb(4),b.oc(" ",t.userObject.gender,""),b.xb(4),b.oc(" ",t.userObject.school,""),b.xb(4),b.oc(" ",t.userObject.grade,""))},directives:[o.u,o.o,o.t,o.G,o.n,o.g],styles:["ion-header[_ngcontent-%COMP%]{display:none}ion-header[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{color:#fff}ion-toolbar[_ngcontent-%COMP%]{--color:#005191}ion-alert[_ngcontent-%COMP%]{--background:#e4405f}#profile-info[_ngcontent-%COMP%]{height:auto;margin-top:20px;text-align:left;padding:25px}h4[_ngcontent-%COMP%]{color:#000;font-size:1.9em;-webkit-animation:header-slide-right .5s cubic-bezier(.175,.885,.32,1.275) 1s forwards;animation:header-slide-right .5s cubic-bezier(.175,.885,.32,1.275) 1s forwards}h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{opacity:0}p[_ngcontent-%COMP%]{font-size:1em;transition:.5s;-webkit-animation:text-slide-up .5s cubic-bezier(.175,.885,.32,1.275) 1.5s forwards;animation:text-slide-up .5s cubic-bezier(.175,.885,.32,1.275) 1.5s forwards}.header-half[_ngcontent-%COMP%]{height:auto;background:#edf3f8;padding:50px 0}.header-half[_ngcontent-%COMP%]   .orange-button[_ngcontent-%COMP%]{opacity:0;-webkit-animation:buttons-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .9s forwards;animation:buttons-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .9s forwards}span[_ngcontent-%COMP%]{color:#005191;font-weight:600;width:120px;display:inline-block}#profile-picture[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:100px;margin:0 auto;display:block;opacity:0;border:2px solid #005191;-webkit-animation:pic-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards;animation:pic-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards}#change-pro-pic-button[_ngcontent-%COMP%]{width:40px;height:40px;background:#faa71b;color:#fff;padding:0;font-size:1.5em;font-weight:400;border-radius:100px;display:inline-block;position:relative;top:-20px;left:25px;opacity:0;-webkit-animation:pic-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .75s forwards;animation:pic-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .75s forwards}.back-button[_ngcontent-%COMP%]{opacity:0;-webkit-animation:buttons-slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards;animation:buttons-slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards}#edit-profile-button[_ngcontent-%COMP%]{--background:#d3d3d3;--color:#333;font-size:.6em}.logout-button[_ngcontent-%COMP%]{color:#fff;--background:#e4405f;--background-hover:#dd3252;height:45px;width:120px;box-shadow:1px 1px 10px rgba(0,0,0,.1);margin-bottom:52px auto;-webkit-animation:buttons-slide-right .5s cubic-bezier(.175,.885,.32,1.275) 1.3s forwards;animation:buttons-slide-right .5s cubic-bezier(.175,.885,.32,1.275) 1.3s forwards}@-webkit-keyframes text-slide-up{0%{transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes text-slide-up{0%{transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes pic-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes pic-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes header-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes header-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes buttons-slide-up{0%{transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes buttons-slide-up{0%{transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes buttons-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes buttons-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@media screen and (max-width:992px){p[_ngcontent-%COMP%]{font-size:1.2em}span[_ngcontent-%COMP%]{color:#005191;font-weight:600;width:90px;display:inline-block;text-align:right;margin-right:10px}}@media screen and (min-width:768px){#change-pro-pic-button[_ngcontent-%COMP%]{position:absolute;top:75px;left:188px}}"]}),e})();var p=i("zAgk");const d=[{path:"",component:h},{path:"change-email",loadChildren:()=>i.e(50).then(i.bind(null,"SmxB")).then(e=>e.ChangeEmailPageModule)},{path:"change-password",loadChildren:()=>i.e(52).then(i.bind(null,"2uJy")).then(e=>e.ChangePasswordPageModule)},{path:"change-school/:school/:grade",loadChildren:()=>i.e(57).then(i.bind(null,"UWje")).then(e=>e.ChangeSchoolPageModule)},{path:"change-profile-picture/:profilePicture",loadChildren:()=>Promise.all([i.e(4),i.e(0),i.e(54)]).then(i.bind(null,"aGP+")).then(e=>e.ChangeProfilePicturePageModule)},{path:"resume",loadChildren:()=>i.e(62).then(i.bind(null,"wgOD")).then(e=>e.ResumePageModule)},{path:"logout",loadChildren:()=>i.e(60).then(i.bind(null,"GWPF")).then(e=>e.LogoutPageModule)},{path:"view-resume",loadChildren:()=>i.e(0).then(i.bind(null,"bUUK")).then(e=>e.ViewResumePageModule)},{path:"update-resume",loadChildren:()=>Promise.all([i.e(0),i.e(63)]).then(i.bind(null,"e0Xu")).then(e=>e.UpdateResumePageModule)},{path:"confirm-photo",loadChildren:()=>i.e(55).then(i.bind(null,"RA/u")).then(e=>e.ConfirmPhotoPageModule)},{path:"change-about/:about",loadChildren:()=>i.e(9).then(i.bind(null,"s+QV")).then(e=>e.ChangeAboutPageModule)},{path:"edit-profile-page",loadChildren:()=>i.e(59).then(i.bind(null,"J2g1")).then(e=>e.EditProfilePagePageModule)},{path:"change-about",loadChildren:()=>i.e(9).then(i.bind(null,"s+QV")).then(e=>e.ChangeAboutPageModule)}];let m=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(d)],s.j]}),e})(),g=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[o.Q,r.b,n.d,m,p.a,s.j.forChild([{path:"",component:h}])]]}),e})()},Aso2:function(e,t,i){"use strict";i.d(t,"a",function(){return d});var o=i("mrSG"),s=i("NuaS"),r=i("lGQG"),n=i("2Vo4"),a=i("JIr8"),l=i("AytR"),c=i("fXoL"),b=i("tk/3"),u=i("e8h1"),h=i("TEn/"),p=i("tyNb");let d=(()=>{class e{constructor(e,t,i,o,s,r,a){this.http=e,this.storage=t,this.alertController=i,this.helper=o,this.auth=s,this.router=r,this.toastController=a,this.BACKEND_URL=l.a.url,this.activeEmail="",this.fullName=new n.a(""),this.about=new n.a(""),this.city=new n.a(""),this.state=new n.a(""),this.zip=new n.a(""),this.gender=new n.a(""),this.dob=new n.a(""),this.school=new n.a(""),this.grade=new n.a(""),this.profilePicture=new n.a(""),this.resume=new n.a(""),this.email=new n.a(""),this.activeEmail=this.auth.user.email}getAllUsers(){return this.http.get(this.BACKEND_URL+"/api/home/user")}getUserDetails(){return this.http.post(this.BACKEND_URL+"/api/home/user",{email:this.activeEmail})}getTheirDetails(e){return this.http.post(this.BACKEND_URL+"/api/home/user/their-details",{email:e})}changeEmail(e,t,i){return this.http.post(this.BACKEND_URL+"/api/home/user/change-email",{oldEmail:this.activeEmail,email:t,password:i}).pipe(Object(a.a)(e=>{throw this.presentFailToast(this.activeEmail),new Error(e)})).subscribe(e=>{if(!0!==e)return this.presentFailToast(this.activeEmail),console.log("Passwords dont match");this.email.next(t),this.activeEmail=t,this.router.navigate(["/home/profile"]),this.presentSuccessToast()})}presentSuccessToast(){this.toastController.create({message:"Your Email address has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(e=>e.present())}presentFailToast(e){this.toastController.create({message:"Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of "+e,duration:9e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(e=>e.present())}changePassword(e,t,i,s){return Object(o.a)(this,void 0,void 0,function*(){return yield this.http.post(this.BACKEND_URL+"/api/home/user/change-password",{oldPassword:t,email:e,newPassword:i,reTypeNewPassword:s}).subscribe(e=>{!0===e?(console.log("TRUE"),this.router.navigate([""]),this.toastController.create({message:"Password updated. Please login with your new password.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(e=>e.present())):console.log("Passwords dont match!")})})}changeAbout(e,t,i){return Object(o.a)(this,void 0,void 0,function*(){return yield this.http.post(this.BACKEND_URL+"/api/home/user/change-about",{email:e,newAbout:t,passsword:i}).subscribe()})}changeSchool(e,t,i,s){return Object(o.a)(this,void 0,void 0,function*(){return yield this.http.post(this.BACKEND_URL+"/api/home/user/change-school",{email:e,newSchool:t,newGrade:i,password:s}).subscribe(e=>{if(!0!==e)return this.toastController.create({message:"Please make sure your password is correct",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(e=>e.present()),console.log("Passwords dont match");this.school.next(t),this.grade.next(i),this.router.navigate(["/home/profile"]),this.toastController.create({message:"Your school information has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(e=>e.present())})})}changeProfilePicture(e,t){return Object(o.a)(this,void 0,void 0,function*(){return this.http.post(this.BACKEND_URL+"/api/photo/change-profile-picture",{imageForm:e,oldPhotoKey:t}).subscribe()})}changeResume(e,t,i){return Object(o.a)(this,void 0,void 0,function*(){return yield this.http.post(this.BACKEND_URL+"/api/home/user/change-school",{email:e,newResume:t,password:i}).subscribe(e=>{if(!0!==e)return console.log("Passwords dont match");console.log("Changing Resume..."),this.resume.next(t),this.router.navigate(["/home/user/change-school/:school/:grade/confirm"])})})}delete(){console.log("Deleted User")}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(b.b),c.Qb(u.b),c.Qb(h.a),c.Qb(s.b),c.Qb(r.a),c.Qb(p.f),c.Qb(h.Z))},e.\u0275prov=c.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);