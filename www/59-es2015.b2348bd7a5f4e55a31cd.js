(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{J2g1:function(n,e,i){"use strict";i.r(e),i.d(e,"EditProfilePagePageModule",function(){return u});var o=i("ofXK"),t=i("3Pt+"),a=i("TEn/"),c=i("tyNb"),b=i("lGQG"),r=i("Aso2"),l=i("fXoL"),s=i("e8h1");const m=[{path:"",component:(()=>{class n{constructor(n,e,i,o,t){this.auth=n,this.profile=e,this.storage=i,this.router=o,this.toastController=t,this.userObject={fullName:"",about:"",city:"",state:"",zip:"",gender:"",dob:"",school:"",grade:"",profilePicture:"",resume:"",email:""}}ngOnInit(){}back(){this.router.navigate(["/home/profile"])}changeEmail(){console.log("Navigating to Change Email Page"),this.router.navigate(["/home/profile/change-email"])}changeAbout(){console.log("Navigating to Change About Page"),this.router.navigate(["/home/profile/change-about/",this.userObject.about])}changePassword(){console.log("Navigating to Change Password Page"),this.router.navigate(["/home/profile/change-password"])}changePhoneNumber(){console.log("Navigating to Change Phone Number Page"),this.router.navigate(["/home/profile/change-phone",this.userObject.phone])}changeSchool(){console.log("Navigating to Change School Page"),this.router.navigate(["/home/profile/change-school",this.userObject.school,this.userObject.grade])}changeProfilePicture(){console.log("Navigating to Change Profile Page"),this.router.navigate(["/home/profile/change-profile-picture",this.userObject.profilePicture])}updateResume(){console.log("Navigating to Change Resume Page"),this.router.navigate(["/home/profile/view-resume"])}logout(){this.router.navigate(["/home/profile/logout"])}}return n.\u0275fac=function(e){return new(e||n)(l.Hb(b.a),l.Hb(r.a),l.Hb(s.b),l.Hb(c.f),l.Hb(a.Z))},n.\u0275cmp=l.Bb({type:n,selectors:[["app-edit-profile-page"]],decls:83,vars:0,consts:[["no-border","",1,"ion-hide-lg-up"],["slot","end"],["slot","start"],[1,"ion-hide-md-down",2,"margin","5% 0% 3% 0%"],["offset","3","size","2"],["push","2.1","size","2",1,"ion-text-center"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center","ion-hide-lg-up"],["size-xs","11","size-sm","10","size-md","8","size-lg","6"],["detail","true","lines","none",3,"click"],["name","mail","slot","start"],["name","home","slot","start"],["name","help","slot","start"],["name","call","slot","start"],["name","school","slot","start"],["name","image","slot","start"],["name","document","slot","start"],["name","arrow-round-back","color","danger","slot","start"],[1,"ion-justify-content-center","ion-hide-md-down"],["size-xs","11","size-sm","10","size-md","8","size-lg","6",1,"edit-profile-desktop"],[1,"ion-justify-content-center"],["size","10"]],template:function(n,e){1&n&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title",1),l.mc(3,"Edit Profile"),l.Lb(),l.Mb(4,"ion-buttons",2),l.Ib(5,"ion-back-button"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content"),l.Mb(7,"ion-grid"),l.Mb(8,"ion-row",3),l.Mb(9,"ion-col",4),l.Mb(10,"h1"),l.mc(11,"Edit Profile"),l.Lb(),l.Lb(),l.Mb(12,"ion-col",5),l.Mb(13,"ion-button",6),l.Ub("click",function(){return e.back()}),l.mc(14," Back "),l.Lb(),l.Lb(),l.Lb(),l.Mb(15,"ion-row",7),l.Mb(16,"ion-col",8),l.Mb(17,"ion-list"),l.Mb(18,"ion-item",9),l.Ub("click",function(){return e.changeEmail()}),l.Ib(19,"ion-icon",10),l.Mb(20,"ion-label"),l.mc(21,"Change Email"),l.Lb(),l.Lb(),l.Mb(22,"ion-item",9),l.Ub("click",function(){return e.changeAbout()}),l.Ib(23,"ion-icon",11),l.Mb(24,"ion-label"),l.mc(25,"Change About Description"),l.Lb(),l.Lb(),l.Mb(26,"ion-item",9),l.Ub("click",function(){return e.changePassword()}),l.Ib(27,"ion-icon",12),l.Mb(28,"ion-label"),l.mc(29,"Change Password"),l.Lb(),l.Lb(),l.Mb(30,"ion-item",9),l.Ub("click",function(){return e.changePhoneNumber()}),l.Ib(31,"ion-icon",13),l.Mb(32,"ion-label"),l.mc(33,"Change Phone Number"),l.Lb(),l.Lb(),l.Mb(34,"ion-item",9),l.Ub("click",function(){return e.changeSchool()}),l.Ib(35,"ion-icon",14),l.Mb(36,"ion-label"),l.mc(37,"Change School/Grade"),l.Lb(),l.Lb(),l.Mb(38,"ion-item",9),l.Ub("click",function(){return e.changeProfilePicture()}),l.Ib(39,"ion-icon",15),l.Mb(40,"ion-label"),l.mc(41,"Change Profile Picture"),l.Lb(),l.Lb(),l.Mb(42,"ion-item",9),l.Ub("click",function(){return e.updateResume()}),l.Ib(43,"ion-icon",16),l.Mb(44,"ion-label"),l.mc(45,"View/Update Resume"),l.Lb(),l.Lb(),l.Mb(46,"ion-item",9),l.Ub("click",function(){return e.logout()}),l.Ib(47,"ion-icon",17),l.Mb(48,"ion-label"),l.mc(49,"Logout"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(50,"ion-row",18),l.Mb(51,"ion-col",19),l.Mb(52,"ion-row",20),l.Mb(53,"ion-col",21),l.Mb(54,"ion-list"),l.Mb(55,"ion-item",9),l.Ub("click",function(){return e.changeEmail()}),l.Ib(56,"ion-icon",10),l.Mb(57,"ion-label"),l.mc(58,"Change Email"),l.Lb(),l.Lb(),l.Mb(59,"ion-item",9),l.Ub("click",function(){return e.changeAbout()}),l.Ib(60,"ion-icon",11),l.Mb(61,"ion-label"),l.mc(62,"Change About Description"),l.Lb(),l.Lb(),l.Mb(63,"ion-item",9),l.Ub("click",function(){return e.changePassword()}),l.Ib(64,"ion-icon",12),l.Mb(65,"ion-label"),l.mc(66,"Change Password"),l.Lb(),l.Lb(),l.Mb(67,"ion-item",9),l.Ub("click",function(){return e.changeSchool()}),l.Ib(68,"ion-icon",14),l.Mb(69,"ion-label"),l.mc(70,"Change School/Grade"),l.Lb(),l.Lb(),l.Mb(71,"ion-item",9),l.Ub("click",function(){return e.changeProfilePicture()}),l.Ib(72,"ion-icon",15),l.Mb(73,"ion-label"),l.mc(74,"Change Profile Picture"),l.Lb(),l.Lb(),l.Mb(75,"ion-item",9),l.Ub("click",function(){return e.updateResume()}),l.Ib(76,"ion-icon",16),l.Mb(77,"ion-label"),l.mc(78,"View/Update Resume"),l.Lb(),l.Lb(),l.Mb(79,"ion-item",9),l.Ub("click",function(){return e.logout()}),l.Ib(80,"ion-icon",17),l.Mb(81,"ion-label"),l.mc(82,"Logout"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb())},directives:[a.u,a.P,a.O,a.h,a.e,a.f,a.o,a.t,a.G,a.n,a.g,a.C,a.x,a.v,a.B],styles:[".blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}ion-item[_ngcontent-%COMP%]{--min-height:65px;opacity:0;-webkit-animation:item-slide-right .5s cubic-bezier(.175,.885,.32,1.275) forwards;animation:item-slide-right .5s cubic-bezier(.175,.885,.32,1.275) forwards;cursor:pointer}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#005191;font-size:1.4em}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2em;color:#555}ion-item[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:.1s;animation-delay:.1s}ion-item[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}ion-item[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.3s;animation-delay:.3s}ion-item[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:.4s;animation-delay:.4s}ion-item[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:.5s;animation-delay:.5s}ion-item[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:.6s;animation-delay:.6s}ion-item[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:.7s;animation-delay:.7s}ion-item[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:.8s;animation-delay:.8s}ion-title[_ngcontent-%COMP%]{margin:0}.edit-profile-desktop[_ngcontent-%COMP%]{box-shadow:1px 1px 10px rgba(0,0,0,.1);padding:20px 0;margin-bottom:100px}@-webkit-keyframes item-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes item-slide-right{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}"]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=l.Fb({type:n}),n.\u0275inj=l.Eb({factory:function(e){return new(e||n)},imports:[[c.j.forChild(m)],c.j]}),n})(),u=(()=>{class n{}return n.\u0275mod=l.Fb({type:n}),n.\u0275inj=l.Eb({factory:function(e){return new(e||n)},imports:[[o.b,t.d,a.Q,g]]}),n})()}}]);