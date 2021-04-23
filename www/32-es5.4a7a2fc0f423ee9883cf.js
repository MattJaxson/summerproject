!function(){function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function e(o,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"a3/p":function(n,t,i){"use strict";i.r(t),i.d(t,"PersonalInfoPageModule",function(){return f});var r,a,l,b=i("ofXK"),c=i("3Pt+"),u=i("TEn/"),s=i("tyNb"),p=i("lGQG"),h=i("fXoL"),d=["ioninput"],m=[{path:"",component:(r=function(){function n(e,t,i){o(this,n),this.formBuilder=e,this.router=t,this.auth=i,this.validationMessasges={phone:[{type:"text",message:"Phone Number has to be 10 digits (xxx) xxx - xxxx"}]},this.fullNamePattern="/^([^0-9]*)$/",this.phonePattern=""}var t,i,r;return t=n,(i=[{key:"ngOnInit",value:function(){this.userInfoForm=this.formBuilder.group({fullName:["",c.n.compose([c.n.required])],gender:"",dob:"",school:["",c.n.required],phone:["",c.n.required],grade:["",c.n.required],about:["",c.n.required]}),this.formOnChanges()}},{key:"goToProfilePicturePage",value:function(o){console.log(o),this.auth.getPersonalInfo(o),this.router.navigate(["/personal-info/profile-picture"])}},{key:"cancel",value:function(){console.log("Sign up cancelled"),this.router.navigate([""])}},{key:"formOnChanges",value:function(){console.log(this.userInfoForm)}}])&&e(t.prototype,i),r&&e(t,r),n}(),r.\u0275fac=function(o){return new(o||r)(h.Hb(c.a),h.Hb(s.g),h.Hb(p.a))},r.\u0275cmp=h.Bb({type:r,selectors:[["app-personal-info"]],viewQuery:function(o,e){var n;1&o&&h.tc(d,!0),2&o&&h.ec(n=h.Vb())&&(e.inputElement=n.first)},decls:68,vars:1,consts:[[1,"ion-hide-md-up"],["slot","start"],["slot","end"],["height","32","src","../../../../../assets/icon/fyf-white-icon.svg",2,"margin-right","16px"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size","12",1,"ion-text-center"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["autocapitalize","on","required","","inputmode","text","formControlName","fullName","placeholder","First & Last Name"],["ioninput",""],["autocapitalize","on","required","","maxlength","10","inputmode","text","formControlName","phone","placeholder","Phone: (xxx) xxx - xxxx"],["required","","formControlName","gender","placeholder","Gender"],["value","female"],["value","male"],["required","","min","2000","displayFormat","DDD. MMM DD, YY","placeholder","Select Date","formControlName","dob","monthShortNames","Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"],["required","","formControlName","school","placeholder","School"],["required","","formControlName","grade","placeholder","Grade"],["value","7th Grade"],["value","8th Grade"],["value","High School - Freshmen"],["value","High School - Sophmore"],["value","High School - Junior"],["value","High School - Senior"],["value","Collge - Freshmen"],["value","Collge - Sophmore"],["autogrow","true","autocapitalize","true","rows","10","spellcheck","true","wrap","soft","type","text","maxlength","150","placeholder","About Me","formControlName","about"],[1,"ion-text-center"],["type","submit",1,"orange-button"],[1,"cancel-button",3,"click"]],template:function(o,e){1&o&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-buttons",1),h.Ib(3,"ion-back-button"),h.Lb(),h.Mb(4,"ion-buttons",2),h.Ib(5,"img",3),h.Lb(),h.Mb(6,"ion-title"),h.nc(7,"Sign Up"),h.Lb(),h.Lb(),h.Lb(),h.Mb(8,"ion-content"),h.Mb(9,"ion-grid"),h.Mb(10,"ion-row",4),h.Mb(11,"ion-col",5),h.Mb(12,"ion-toolbar",6),h.Mb(13,"ion-buttons",1),h.Ib(14,"img",7),h.Lb(),h.Mb(15,"ion-buttons",2),h.Mb(16,"ion-button",8),h.Ub("click",function(){return e.cancel()}),h.nc(17," Back "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(18,"ion-row",9),h.Mb(19,"ion-col",10),h.Mb(20,"h6",11),h.nc(21,"Please enter your profile information."),h.Lb(),h.Lb(),h.Lb(),h.Mb(22,"ion-row",9),h.Mb(23,"ion-col",12),h.Mb(24,"form",13),h.Ub("ngSubmit",function(){return e.goToProfilePicturePage(e.userInfoForm.value)}),h.Mb(25,"ion-list",14),h.Mb(26,"ion-item"),h.Ib(27,"ion-input",15,16),h.Lb(),h.Mb(29,"ion-item"),h.Ib(30,"ion-input",17),h.Lb(),h.Mb(31,"ion-item"),h.Mb(32,"ion-select",18),h.Mb(33,"ion-select-option",19),h.nc(34,"Female"),h.Lb(),h.Mb(35,"ion-select-option",20),h.nc(36,"Male"),h.Lb(),h.Lb(),h.Lb(),h.Mb(37,"ion-item"),h.Mb(38,"ion-label"),h.nc(39,"Date of Birth"),h.Lb(),h.Ib(40,"ion-datetime",21),h.Lb(),h.Mb(41,"ion-item"),h.Ib(42,"ion-input",22),h.Lb(),h.Mb(43,"ion-item"),h.Mb(44,"ion-select",23),h.Mb(45,"ion-select-option",24),h.nc(46,"Middle School - 7th Grade"),h.Lb(),h.Mb(47,"ion-select-option",25),h.nc(48,"Middle School - 8th Grade"),h.Lb(),h.Mb(49,"ion-select-option",26),h.nc(50,"High School - Freshmen"),h.Lb(),h.Mb(51,"ion-select-option",27),h.nc(52,"High School - Sophmore"),h.Lb(),h.Mb(53,"ion-select-option",28),h.nc(54,"High School - Junior"),h.Lb(),h.Mb(55,"ion-select-option",29),h.nc(56,"High School - Senior"),h.Lb(),h.Mb(57,"ion-select-option",30),h.nc(58,"College - Freshmen"),h.Lb(),h.Mb(59,"ion-select-option",31),h.nc(60,"College - Sophmore"),h.Lb(),h.Lb(),h.Lb(),h.Ib(61,"ion-textarea",32),h.Lb(),h.Mb(62,"div",33),h.Mb(63,"ion-button",34),h.nc(64,"NEXT"),h.Lb(),h.Ib(65,"br"),h.Mb(66,"ion-button",35),h.Ub("click",function(){return e.auth.cancelSignUp()}),h.nc(67," cancel "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&o&&(h.xb(24),h.Zb("formGroup",e.userInfoForm))},directives:[u.u,u.S,u.h,u.e,u.f,u.R,u.o,u.t,u.I,u.n,u.g,c.o,c.j,c.c,u.C,u.x,u.w,u.db,c.m,c.i,c.b,c.e,u.K,u.cb,u.L,u.B,u.p,u.Q],styles:[".blue-button[_ngcontent-%COMP%]{margin:0 0 100px}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;margin-bottom:100px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}ion-textarea[_ngcontent-%COMP%]{background:#fff;transition:.2s;border-radius:4px;padding:8px;box-shadow:1px 10px 26px rgba(0,0,0,.05);border:2px solid #0055a5}.char-limit[_ngcontent-%COMP%]{float:right;position:relative;top:20px;margin-bottom:80px;color:#e4405f}"]}),r)},{path:"profile-picture",loadChildren:function(){return Promise.all([i.e(4),i.e(0),i.e(21)]).then(i.bind(null,"V0uV")).then(function(o){return o.ProfilePicturePageModule})}}],g=((l=function e(){o(this,e)}).\u0275mod=h.Fb({type:l}),l.\u0275inj=h.Eb({factory:function(o){return new(o||l)},imports:[[s.k.forChild(m)],s.k]}),l),f=((a=function e(){o(this,e)}).\u0275mod=h.Fb({type:a}),a.\u0275inj=h.Eb({factory:function(o){return new(o||a)},imports:[[b.b,c.d,u.T,c.l,g]]}),a)}}])}();