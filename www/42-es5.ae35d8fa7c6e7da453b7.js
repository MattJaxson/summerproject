!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"p/Ua":function(e,o,i){"use strict";i.r(o),i.d(o,"ConfirmPageModule",function(){return d});var a,r,s,c=i("ofXK"),u=i("3Pt+"),f=i("TEn/"),b=i("tyNb"),l=i("fXoL"),m=[{path:"",component:(a=function(){function e(n,o){t(this,e),this.activatedRoute=n,this.router=o}var o,i,a;return o=e,(i=[{key:"ngOnInit",value:function(){this.mentorName=this.activatedRoute.snapshot.paramMap.get("name"),this.mentorEmail=this.activatedRoute.snapshot.paramMap.get("email"),this.mentorPhoto=this.activatedRoute.snapshot.paramMap.get("photo"),console.log("Mentor Photo:"),console.log(this.mentorName)}},{key:"returnToMentors",value:function(){this.router.navigate(["/home/mentors"])}}])&&n(o.prototype,i),a&&n(o,a),e}(),a.\u0275fac=function(t){return new(t||a)(l.Hb(b.a),l.Hb(b.g))},a.\u0275cmp=l.Bb({type:a,selectors:[["app-confirm"]],decls:13,vars:1,consts:[[2,"display","none"],["id","background"],[1,"ion-justify-content-center","full-page",2,"margin","15% 0% 3% 0%"],["size-xs","11","size-sm","10","size-md","7","size-lg","6","size-xl","5","size","10",1,"ion-text-center"],["src","../../../../../../assets/icon/Green-Checked.svg"],[2,"font-weight","800"],[3,"click"]],template:function(t,n){1&t&&(l.Ib(0,"ion-header",0),l.Mb(1,"ion-content",1),l.Mb(2,"ion-grid"),l.Mb(3,"ion-row",2),l.Mb(4,"ion-col",3),l.Ib(5,"img",4),l.Mb(6,"p"),l.nc(7,"An email has been sent to "),l.Mb(8,"span",5),l.nc(9),l.Lb(),l.nc(10," with your message. They will contact you at their earliest convenience. Please be sure to check the email you have associated with your FYF Account."),l.Lb(),l.Mb(11,"ion-button",6),l.Ub("click",function(){return n.returnToMentors()}),l.nc(12," Done "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.xb(9),l.oc(n.mentorName))},directives:[f.u,f.o,f.t,f.I,f.n,f.g],styles:["#background[_ngcontent-%COMP%]{opacity:0;height:90vh;--background:#efffef;--transition:0.5s;-webkit-animation:slide-in-up .8s cubic-bezier(.15,.85,.75,.9) .3s forwards;animation:slide-in-up .8s cubic-bezier(.15,.85,.75,.9) .3s forwards}#confirm-text[_ngcontent-%COMP%]{color:#111;font-size:1.3em;-webkit-animation:slide-in-up-2 .2s cubic-bezier(.15,.85,.75,.9) .3s forwards;animation:slide-in-up-2 .2s cubic-bezier(.15,.85,.75,.9) .3s forwards}ion-button[_ngcontent-%COMP%]{opacity:1;font-weight:600;--background:#4dc066}@-webkit-keyframes slide-in-up{0%{transform:translateY(100vh)}to{opacity:1;--background:#dcffdc;transform:translateY(0)}}@keyframes slide-in-up{0%{transform:translateY(100vh)}to{opacity:1;--background:#dcffdc;transform:translateY(0)}}@-webkit-keyframes slide-in-up-2{0%{transform:translateY(0)}to{opacity:1;transform:translateY(-100px)}}@keyframes slide-in-up-2{0%{transform:translateY(0)}to{opacity:1;transform:translateY(-100px)}}"]}),a)}],p=((s=function n(){t(this,n)}).\u0275mod=l.Fb({type:s}),s.\u0275inj=l.Eb({factory:function(t){return new(t||s)},imports:[[b.k.forChild(m)],b.k]}),s),d=((r=function n(){t(this,n)}).\u0275mod=l.Fb({type:r}),r.\u0275inj=l.Eb({factory:function(t){return new(t||r)},imports:[[c.b,u.d,f.T,p]]}),r)}}])}();