!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"a3/p":function(n,t,i){"use strict";i.r(t),i.d(t,"PersonalInfoPageModule",function(){return g});var r,a,l,c=i("ofXK"),u=i("3Pt+"),b=i("TEn/"),s=i("tyNb"),m=i("lGQG"),h=i("fXoL"),p=["ioninput"],d=[{path:"",component:(r=function(){function n(o,t,i){e(this,n),this.formBuilder=o,this.router=t,this.auth=i,this.validationMessasges={password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number."}],phone:[{type:"text",message:"Phone Number has to be 10 digits (xxx) xxx - xxxx"}]},this.fullNamePattern="/^([^0-9]*)$/",this.phonePattern=""}var t,i,r;return t=n,(i=[{key:"ngOnInit",value:function(){this.userInfoForm=this.formBuilder.group({fullName:["Eddie",u.n.compose([u.n.required])],gender:"",dob:"",school:["Wayne",u.n.required],grade:["Senior",u.n.required],about:["Wassup",u.n.required]}),this.formOnChanges()}},{key:"goToProfilePicturePage",value:function(e){console.log(e),this.auth.getPersonalInfo(e),this.router.navigate(["/personal-info/profile-picture"])}},{key:"cancel",value:function(){console.log("Sign up cancelled"),this.router.navigate([""])}},{key:"formOnChanges",value:function(){console.log(this.userInfoForm)}}])&&o(t.prototype,i),r&&o(t,r),n}(),r.\u0275fac=function(e){return new(e||r)(h.Hb(u.a),h.Hb(s.f),h.Hb(m.a))},r.\u0275cmp=h.Bb({type:r,selectors:[["app-personal-info"]],viewQuery:function(e,o){var n;1&e&&h.tc(p,!0),2&e&&h.ec(n=h.Vb())&&(o.inputElement=n.first)},decls:53,vars:1,consts:[[2,"display","none"],[1,"ion-text-center"],[1,"header","ion-justify-content-center"],["size-lg","5","size-md","7","size-xs","11"],[1,"text-header"],[1,"ion-justify-content-center"],["size-lg","5","size-md","7","size-xs","11",2,"margin-top","50px"],[3,"formGroup","ngSubmit"],[1,"line-input"],["autocapitalize","on","required","","inputmode","text","formControlName","fullName","placeholder","First & Last Name"],["ioninput",""],["required","","formControlName","gender","placeholder","Gender"],["value","female"],["value","male"],["required","","min","2000","displayFormat","DDD. MMM DD, YY","placeholder","Select Date","formControlName","dob","monthShortNames","Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"],["required","","formControlName","school","placeholder","School"],["required","","formControlName","grade","placeholder","Grade"],["value","7th Grade"],["value","8th Grade"],["value","High School - Freshmen"],["value","High School - Sophmore"],["value","High School - Junior"],["value","High School - Senior"],["value","Collge - Freshmen"],["value","Collge - Sophmore"],["autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","maxlength","500","placeholder","Tell us about yourself","formControlName","about"],[1,"char-limit"],["type","submit",1,"orange-button"],["id","cancel-button","slot","end",1,"blue-button",3,"click"]],template:function(e,o){1&e&&(h.Ib(0,"ion-header",0),h.Mb(1,"ion-content"),h.Mb(2,"ion-grid",1),h.Mb(3,"ion-row",2),h.Mb(4,"ion-col",3),h.Mb(5,"h6",4),h.mc(6,"Please enter your profile information."),h.Lb(),h.Lb(),h.Lb(),h.Mb(7,"ion-row",5),h.Mb(8,"ion-col",6),h.Mb(9,"form",7),h.Ub("ngSubmit",function(){return o.goToProfilePicturePage(o.userInfoForm.value)}),h.Mb(10,"ion-list",8),h.Mb(11,"ion-item"),h.Ib(12,"ion-input",9,10),h.Lb(),h.Mb(14,"ion-item"),h.Mb(15,"ion-select",11),h.Mb(16,"ion-select-option",12),h.mc(17,"Female"),h.Lb(),h.Mb(18,"ion-select-option",13),h.mc(19,"Male"),h.Lb(),h.Lb(),h.Lb(),h.Mb(20,"ion-item"),h.Mb(21,"ion-label"),h.mc(22,"Date of Birth"),h.Lb(),h.Ib(23,"ion-datetime",14),h.Lb(),h.Mb(24,"ion-item"),h.Ib(25,"ion-input",15),h.Lb(),h.Mb(26,"ion-item"),h.Mb(27,"ion-select",16),h.Mb(28,"ion-select-option",17),h.mc(29,"Middle School - 7th Grade"),h.Lb(),h.Mb(30,"ion-select-option",18),h.mc(31,"Middle School - 8th Grade"),h.Lb(),h.Mb(32,"ion-select-option",19),h.mc(33,"High School - Freshmen"),h.Lb(),h.Mb(34,"ion-select-option",20),h.mc(35,"High School - Sophmore"),h.Lb(),h.Mb(36,"ion-select-option",21),h.mc(37,"High School - Junior"),h.Lb(),h.Mb(38,"ion-select-option",22),h.mc(39,"High School - Senior"),h.Lb(),h.Mb(40,"ion-select-option",23),h.mc(41,"College - Freshmen"),h.Lb(),h.Mb(42,"ion-select-option",24),h.mc(43,"College - Sophmore"),h.Lb(),h.Lb(),h.Lb(),h.Mb(44,"ion-item"),h.Ib(45,"ion-textarea",25),h.Lb(),h.Mb(46,"p",26),h.mc(47,"500 character limit"),h.Lb(),h.Lb(),h.Mb(48,"ion-button",27),h.mc(49,"NEXT"),h.Lb(),h.Ib(50,"br"),h.Mb(51,"ion-button",28),h.Ub("click",function(){return o.cancel()}),h.mc(52," cancel "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&e&&(h.xb(9),h.Zb("formGroup",o.userInfoForm))},directives:[b.u,b.o,b.t,b.G,b.n,u.o,u.j,u.c,b.C,b.x,b.w,b.Y,u.m,u.i,u.b,b.I,b.X,b.J,b.B,b.p,b.N,u.e,b.g],styles:["h6[_ngcontent-%COMP%]{padding:unset}.header[_ngcontent-%COMP%]{background:#edf3f8;height:auto;text-align:center}.blue-button[_ngcontent-%COMP%], .orange-button[_ngcontent-%COMP%]{margin:25px 0}.blue-button[_ngcontent-%COMP%]{margin:25px 0 100px}.text-header[_ngcontent-%COMP%]{background:#edf3f8;padding:30px 0;color:#666;z-index:999;margin:0 auto}.char-limit[_ngcontent-%COMP%]{float:right;position:relative;top:-20px;color:#e4405f}"]}),r)},{path:"profile-picture",loadChildren:function(){return Promise.all([i.e(4),i.e(0),i.e(30)]).then(i.bind(null,"V0uV")).then(function(e){return e.ProfilePicturePageModule})}}],f=((l=function o(){e(this,o)}).\u0275mod=h.Fb({type:l}),l.\u0275inj=h.Eb({factory:function(e){return new(e||l)},imports:[[s.j.forChild(d)],s.j]}),l),g=((a=function o(){e(this,o)}).\u0275mod=h.Fb({type:a}),a.\u0275inj=h.Eb({factory:function(e){return new(e||a)},imports:[[c.b,u.d,b.Q,u.l,f]]}),a)}}])}();