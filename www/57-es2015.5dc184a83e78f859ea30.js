(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{K5GS:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var a=u("pMnS"),b=u("oBZk"),e=u("ZZ/e"),i=u("mrSG");class s{constructor(l,n,u){this.activatedRoute=l,this.router=n,this.toastController=u}applyForJob(){this.router.navigate(["/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply",this.jobTitle,this.jobCompanyName,this.jobCompanyEmail])}favoriteThisJob(){console.log("Favoriting this Job"),this.presentToast()}presentToast(){return i.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"This job has been favorited.",duration:2e3})).present()}))}ngOnInit(){const l=this.activatedRoute.snapshot.paramMap.get("id"),n=this.activatedRoute.snapshot.paramMap.get("title"),u=this.activatedRoute.snapshot.paramMap.get("companyName"),t=this.activatedRoute.snapshot.paramMap.get("companyEmail"),o=this.activatedRoute.snapshot.paramMap.get("summary"),a=this.activatedRoute.snapshot.paramMap.get("fullJobDescription"),b=this.activatedRoute.snapshot.paramMap.get("rateOfPay");this.jobId=l,this.jobTitle=n,this.jobCompanyName=u,this.jobCompanyEmail=t,this.jobSummary=o,this.jobFullJobDescription=a,this.jobRateOfPay=b}}var p=u("iInd"),r=t.zb({encapsulation:0,styles:[["span[_ngcontent-%COMP%]{font-weight:700}"]],data:{}});function c(l){return t.Tb(0,[(l()(),t.Bb(0,0,null,null,11,"ion-header",[],null,null,null,b.fb,b.r)),t.Ab(1,49152,null,0,e.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.Bb,b.N)),t.Ab(3,49152,null,0,e.Db,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.S,b.e)),t.Ab(5,49152,null,0,e.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Nb(l,8).onClick(u)&&o),o}),b.Q,b.c)),t.Ab(7,49152,null,0,e.h,[t.j,t.p,t.F],null,null),t.Ab(8,16384,null,0,e.i,[[2,e.jb],e.Jb],null,null),(l()(),t.Bb(9,0,null,0,2,"ion-title",[],null,null,null,b.Ab,b.M)),t.Ab(10,49152,null,0,e.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Sb(-1,0,["Job Page"])),(l()(),t.Bb(12,0,null,null,36,"ion-content",[],null,null,null,b.Z,b.l)),t.Ab(13,49152,null,0,e.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(14,0,null,0,28,"ion-grid",[["fixed",""]],null,null,null,b.eb,b.q)),t.Ab(15,49152,null,0,e.B,[t.j,t.p,t.F],{fixed:[0,"fixed"]},null),(l()(),t.Bb(16,0,null,0,19,"ion-row",[],null,null,null,b.qb,b.C)),t.Ab(17,49152,null,0,e.kb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(18,0,null,0,17,"ion-col",[["size","10"]],null,null,null,b.Y,b.k)),t.Ab(19,49152,null,0,e.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(20,0,null,0,1,"h3",[["style","color: #005191; font-weight: 600;"]],null,null,null,null,null)),(l()(),t.Sb(21,null,["",""])),(l()(),t.Bb(22,0,null,0,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(23,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Company "])),(l()(),t.Sb(25,null,["",""])),(l()(),t.Bb(26,0,null,0,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(27,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Email:"])),(l()(),t.Sb(29,null,[" ",""])),(l()(),t.Bb(30,0,null,0,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(31,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Description:"])),(l()(),t.Sb(33,null,[" ",""])),(l()(),t.Bb(34,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(35,null,["",""])),(l()(),t.Bb(36,0,null,0,6,"ion-row",[],null,null,null,b.qb,b.C)),t.Ab(37,49152,null,0,e.kb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(38,0,null,0,4,"ion-col",[["class","ion-text-center"],["offset","0.5"],["size","11"]],null,null,null,b.Y,b.k)),t.Ab(39,49152,null,0,e.u,[t.j,t.p,t.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),t.Bb(40,0,null,0,2,"ion-button",[["class","orange-button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.applyForJob()&&t),t}),b.R,b.d)),t.Ab(41,49152,null,0,e.l,[t.j,t.p,t.F],null,null),(l()(),t.Sb(-1,0,["Apply for Job"])),(l()(),t.Bb(43,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,b.cb,b.n)),t.Ab(44,49152,null,0,e.x,[t.j,t.p,t.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.Bb(45,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.favoriteThisJob()&&t),t}),b.bb,b.o)),t.Ab(46,49152,null,0,e.y,[t.j,t.p,t.F],null,null),(l()(),t.Bb(47,0,null,0,1,"ion-icon",[["name","heart"]],null,null,null,b.gb,b.s)),t.Ab(48,49152,null,0,e.D,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(l,n){l(n,15,0,""),l(n,19,0,"10"),l(n,39,0,"0.5","11"),l(n,44,0,"end","bottom"),l(n,48,0,"heart")}),(function(l,n){var u=n.component;l(n,21,0,u.jobTitle),l(n,25,0,u.jobCompanyName),l(n,29,0,u.jobCompanyEmail),l(n,33,0,u.jobSummary),l(n,35,0,u.jobFullJobDescription)}))}function m(l){return t.Tb(0,[(l()(),t.Bb(0,0,null,null,1,"app-job-page",[],null,null,null,c,r)),t.Ab(1,114688,null,0,s,[p.a,p.m,e.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}var h=t.xb("app-job-page",s,m,{},{},[]),j=u("SVse"),f=u("s7LF");const d=()=>u.e(55).then(u.bind(null,"8BpF")).then(l=>l.ApplyPageModuleNgFactory);class y{}u.d(n,"JobPagePageModuleNgFactory",(function(){return B}));var B=t.yb(o,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[a.a,h]],[3,t.m],t.D]),t.Lb(4608,j.k,j.j,[t.z,[2,j.q]]),t.Lb(4608,f.q,f.q,[]),t.Lb(4608,f.b,f.b,[]),t.Lb(4608,e.c,e.c,[t.F,t.g]),t.Lb(4608,e.Ib,e.Ib,[e.c,t.m,t.w]),t.Lb(4608,e.Lb,e.Lb,[e.c,t.m,t.w]),t.Lb(1073742336,j.b,j.b,[]),t.Lb(1073742336,f.p,f.p,[]),t.Lb(1073742336,f.e,f.e,[]),t.Lb(1073742336,f.m,f.m,[]),t.Lb(1073742336,e.Fb,e.Fb,[]),t.Lb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Lb(1073742336,y,y,[]),t.Lb(1073742336,o,o,[]),t.Lb(1024,p.k,(function(){return[[{path:"",component:s},{path:"apply/:title/:companyName/:companyEmail",loadChildren:d}]]}),[])])}))}}]);