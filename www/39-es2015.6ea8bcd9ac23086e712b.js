(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{tXR0:function(l,n,o){"use strict";o.r(n);var u=o("8Y7J");class t{}var i=o("pMnS"),e=o("wWec"),b=o("b7Ok"),s=o("U8oy"),a=o("Aso2"),c=o("oBZk"),r=o("ZZ/e"),p=o("SVse"),g=o("7xvl"),h=o("lFXj");class d{constructor(l,n,o,u,t){this.router=l,this.favorites=n,this.profile=o,this.eventEmitterService=u,this.location=t}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.getFavoriteJobs()}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/jobs"])}getFavoriteJobs(){this.profile.getUserDetails().subscribe(l=>{this.userEmail=l.email,this.favorites.favoriteJobs$.subscribe(l=>{console.log(`Favorite Jobs in Service: ${l}`),this.favorites.getFavorites(this.userEmail).subscribe(l=>{this.favoriteJobsObj=l,console.log("Favorite jobs:"),console.log(l);for(const n of this.favoriteJobsObj)n.dateCreated=Object(g.a)(new Date(n.dateCreated),{addSuffix:!0})})})})}jobPage(l){console.log(l),console.log("Going to specific Job Page"),this.router.navigate(["/home/jobs/job-page",l._id,l.title,l.companyName,l.companyEmail,l.summary,l.fullJobDescription,l.rateOfPay]),console.log(l.name)}favoriteJobPage(){console.log("Going to favorite bad")}}var f=o("iInd"),m=u.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.company-logo[_ngcontent-%COMP%]{background-image:url(journi-logo.394c593afb46f04d7760.png);background-repeat:no-repeat;background-size:contain;background-position:center}.job-section[_ngcontent-%COMP%]{background:#fff;height:auto;color:#777;position:relative;top:20px;width:100%;margin-bottom:50px;padding-bottom:10px;box-shadow:1px 1px 10px rgba(0,0,0,.1)}#job-details[_ngcontent-%COMP%]{color:#005191;--background:white;--background-hover:linear-gradient(#0672c4, #00467c);--color-hover:white;font-size:15px;height:45px;border-radius:10px;box-shadow:1px 1px 10px rgba(0,0,0,.1)}#favorites-button[_ngcontent-%COMP%]{opacity:1;--background:rgba(255,255,255,0.1);--color:white;--border-style:solid;--border-width:1px;--border-color:white;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:70px;height:40px;font-size:.8em;font-weight:600}ion-icon[_ngcontent-%COMP%]{color:red;font-size:25px;position:relative;right:5px}ion-searchbar[_ngcontent-%COMP%]{--background:white;border-radius:5px;--height:60px;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;transition:.5s;padding:5px}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1.1em;line-height:29px;position:relative;color:#666;opacity:.7;top:-60px}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-31px}#job-title[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;position:relative;top:-15px}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}@media only screen and (min-width:576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}"]],data:{}});function j(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,1,"app-heart-icon",[],null,null,null,e.b,e.a)),u.Ab(1,114688,null,0,b.a,[s.a,a.a],{job:[0,"job"],favoriteJobs:[1,"favoriteJobs"]},null)],(function(l,n){l(n,1,0,n.parent.context.$implicit,n.component.favoriteJobsObj)}),null)}function v(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,37,"ion-row",[["class","job-section"]],null,null,null,c.kb,c.z)),u.Ab(1,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,18,"ion-col",[["push","0.5"],["size","10"],["style","padding-top: 30px"]],null,null,null,c.V,c.k)),u.Ab(3,49152,null,0,r.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(4,0,null,0,16,"ion-row",[],null,null,null,c.kb,c.z)),u.Ab(5,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,2,"ion-col",[["size","1"]],null,null,null,c.V,c.k)),u.Ab(7,49152,null,0,r.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(8,0,null,0,0,"div",[["class","company-logo"],["style","height: 40px; width: 40px;"]],null,null,null,null,null)),(l()(),u.Bb(9,0,null,0,7,"ion-col",[["push-xs","0.5"],["size","8.7"]],null,null,null,c.V,c.k)),u.Ab(10,49152,null,0,r.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(11,0,null,0,1,"h5",[["id","job-title"]],null,null,null,null,null)),(l()(),u.Tb(12,null,["",""])),(l()(),u.Bb(13,0,null,0,1,"p",[["id","company-name"]],null,null,null,null,null)),(l()(),u.Tb(14,null,["",""])),(l()(),u.Bb(15,0,null,0,1,"h5",[["id","job-posted-date"]],null,null,null,null,null)),(l()(),u.Tb(16,null,["Posted: ",""])),(l()(),u.Bb(17,0,null,0,3,"ion-col",[["push","1"],["size","1"]],null,null,null,c.V,c.k)),u.Ab(18,49152,null,0,r.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.qb(16777216,null,0,1,null,j)),u.Ab(20,16384,null,0,p.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Bb(21,0,null,0,7,"ion-col",[["size","12"]],null,null,null,c.V,c.k)),u.Ab(22,49152,null,0,r.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(23,0,null,0,5,"ion-row",[],null,null,null,c.kb,c.z)),u.Ab(24,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(25,0,null,0,3,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,c.V,c.k)),u.Ab(26,49152,null,0,r.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(27,0,null,0,1,"p",[["id","job-summary"]],null,null,null,null,null)),(l()(),u.Tb(28,null,["",""])),(l()(),u.Bb(29,0,null,0,8,"ion-col",[["size","12"]],null,null,null,c.V,c.k)),u.Ab(30,49152,null,0,r.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(31,0,null,0,6,"ion-row",[],null,null,null,c.kb,c.z)),u.Ab(32,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(33,0,null,0,4,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,c.V,c.k)),u.Ab(34,49152,null,0,r.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(35,0,null,0,2,"ion-button",[["class","back-button ion-float-right"],["id","job-details"]],null,[[null,"click"]],(function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.jobPage(l.context.$implicit)&&u),u}),c.O,c.d)),u.Ab(36,49152,null,0,r.k,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,[" Details "]))],(function(l,n){var o=n.component;l(n,3,0,"0.5","10"),l(n,7,0,"1"),l(n,10,0,"8.7"),l(n,18,0,"1","1"),l(n,20,0,o.favoriteJobsObj),l(n,22,0,"12"),l(n,26,0,"0.5","10.5"),l(n,30,0,"12"),l(n,34,0,"0.5","10.5")}),(function(l,n){l(n,12,0,n.context.$implicit.title),l(n,14,0,n.context.$implicit.companyName),l(n,16,0,n.context.$implicit.dateCreated),l(n,28,0,n.context.$implicit.summary)}))}function z(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,c.cb,c.r)),u.Ab(1,49152,null,0,r.B,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,c.vb,c.K)),u.Ab(3,49152,null,0,r.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,2,"ion-title",[],null,null,null,c.ub,c.J)),u.Ab(5,49152,null,0,r.Ab,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,["Favorite Jobs"])),(l()(),u.Bb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.P,c.e)),u.Ab(8,49152,null,0,r.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,o){var t=!0;return"click"===n&&(t=!1!==u.Nb(l,11).onClick(o)&&t),t}),c.N,c.c)),u.Ab(10,49152,null,0,r.g,[u.j,u.p,u.F],null,null),u.Ab(11,16384,null,0,r.h,[[2,r.ib],r.Ib],null,null),(l()(),u.Bb(12,0,null,null,20,"ion-content",[],null,null,null,c.W,c.l)),u.Ab(13,49152,null,0,r.u,[u.j,u.p,u.F],null,null),(l()(),u.Bb(14,0,null,0,18,"ion-grid",[],null,null,null,c.bb,c.q)),u.Ab(15,49152,null,0,r.A,[u.j,u.p,u.F],null,null),(l()(),u.Bb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 5% 0%;"]],null,null,null,c.kb,c.z)),u.Ab(17,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(18,0,null,0,3,"ion-col",[["offset","2.9"],["size","2.5"]],null,null,null,c.V,c.k)),u.Ab(19,49152,null,0,r.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Tb(-1,null,["Favorite Jobs"])),(l()(),u.Bb(22,0,null,0,4,"ion-col",[["push","2.3"],["size","2"]],null,null,null,c.V,c.k)),u.Ab(23,49152,null,0,r.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(24,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.back()&&u),u}),c.O,c.d)),u.Ab(25,49152,null,0,r.k,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,[" Back "])),(l()(),u.Bb(27,0,null,0,5,"ion-row",[["class","ion-justify-content-center"]],null,null,null,c.kb,c.z)),u.Ab(28,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(29,0,null,0,3,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xs","10.7"]],null,null,null,c.V,c.k)),u.Ab(30,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.qb(16777216,null,0,1,null,v)),u.Ab(32,278528,null,0,p.i,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var o=n.component;l(n,19,0,"2.9","2.5"),l(n,23,0,"2.3","2"),l(n,32,0,o.favoriteJobsObj)}),null)}function k(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,1,"app-favorites",[],null,null,null,z,m)),u.Ab(1,114688,null,0,d,[f.m,s.a,a.a,h.a,p.n],null,null)],(function(l,n){l(n,1,0)}),null)}var x=u.xb("app-favorites",d,k,{},{},[]),F=o("s7LF");class B{}var A=o("zAgk");o.d(n,"FavoritesPageModuleNgFactory",(function(){return w}));var w=u.yb(t,[],(function(l){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[i.a,x]],[3,u.m],u.D]),u.Lb(4608,p.l,p.k,[u.z,[2,p.s]]),u.Lb(4608,F.r,F.r,[]),u.Lb(4608,r.b,r.b,[u.F,u.g]),u.Lb(4608,r.Hb,r.Hb,[r.b,u.m,u.w]),u.Lb(4608,r.Lb,r.Lb,[r.b,u.m,u.w]),u.Lb(5120,u.d,(function(l,n,o){return[r.Rb(l,n,o)]}),[r.Qb,p.d,u.F]),u.Lb(1073742336,p.c,p.c,[]),u.Lb(1073742336,F.q,F.q,[]),u.Lb(1073742336,F.e,F.e,[]),u.Lb(1073742336,r.Eb,r.Eb,[]),u.Lb(1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),u.Lb(1073742336,B,B,[]),u.Lb(1073742336,A.a,A.a,[]),u.Lb(1073742336,t,t,[]),u.Lb(1024,f.k,(function(){return[[{path:"",component:d}]]}),[]),u.Lb(256,r.Qb,void 0,[])])}))}}]);