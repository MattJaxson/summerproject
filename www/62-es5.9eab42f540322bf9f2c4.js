(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"8QiE":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var i=u("pMnS"),e=u("oBZk"),s=u("ZZ/e"),b=u("SVse"),c=u("ENZJ"),p=u("Aso2");class r{constructor(l,n,u,o){this.router=l,this.posts=n,this.profile=u,this.toast=o}ngOnInit(){this.profile.getUserDetails().subscribe(l=>{this.userID=l._id,this.posts.getFollowedPost(this.userID).subscribe(l=>{this.allFollowedPosts=l,console.log(this.allFollowedPosts)})}),console.log("Got Followed Posts")}postPage(l){this.router.navigate(["/home/posts/post-page",l._id])}}var a=u("iInd"),f=o.zb({encapsulation:0,styles:[[""]],data:{}});function g(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,26,"ion-row",[["style","margin: 20px 0px 60px 0px;"]],null,null,null,e.qb,e.C)),o.Ab(1,49152,null,0,s.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,2,"ion-col",[["offset","0.5"],["size","2"]],null,null,null,e.Y,e.k)),o.Ab(3,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(4,0,null,0,0,"div",[["style","height: 50px; width: 50px; background: #222; border-radius: 50px;"]],null,null,null,null,null)),(l()(),o.Bb(5,0,null,0,3,"ion-col",[["size","7"]],null,null,null,e.Y,e.k)),o.Ab(6,49152,null,0,s.u,[o.j,o.p,o.F],{size:[0,"size"]},null),(l()(),o.Bb(7,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),o.Sb(8,null,["",""])),(l()(),o.Bb(9,0,null,0,3,"ion-col",[["offset","0.5"],["size","2"]],null,null,null,e.Y,e.k)),o.Ab(10,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(11,0,null,0,1,"h6",[["style","opacity: 0.4"]],null,null,null,null,null)),(l()(),o.Sb(12,null,["",""])),(l()(),o.Bb(13,0,null,0,3,"ion-col",[["offset","0.5"],["size","11"],["style","margin-top: 20px; height: 200px;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.postPage(l.context.$implicit)&&o),o}),e.Y,e.k)),o.Ab(14,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(15,0,null,0,1,"p",[["style","font-size: 1em; line-height: 25px;"]],null,null,null,null,null)),(l()(),o.Sb(16,null,["",""])),(l()(),o.Bb(17,0,null,0,9,"ion-col",[["offset","0.5"],["size","11"],["style","margin-top: 10px; height: 50px;"]],null,null,null,e.Y,e.k)),o.Ab(18,49152,null,0,s.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(19,0,null,0,7,"ion-toolbar",[["style","--background: none;"]],null,null,null,e.Bb,e.N)),o.Ab(20,49152,null,0,s.Db,[o.j,o.p,o.F],null,null),(l()(),o.Bb(21,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,e.S,e.e)),o.Ab(22,49152,null,0,s.m,[o.j,o.p,o.F],null,null),(l()(),o.Bb(23,0,null,0,2,"ion-button",[["style","font-size: 0.8em; color: #555;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.postPage(l.context.$implicit)&&o),o}),e.R,e.d)),o.Ab(24,49152,null,0,s.l,[o.j,o.p,o.F],null,null),(l()(),o.Sb(25,0,[" Comments (",") "])),(l()(),o.Bb(26,0,null,0,0,"hr",[["style","color: red;"]],null,null,null,null,null))],(function(l,n){l(n,3,0,"0.5","2"),l(n,6,0,"7"),l(n,10,0,"0.5","2"),l(n,14,0,"0.5","11"),l(n,18,0,"0.5","11")}),(function(l,n){l(n,8,0,n.context.$implicit.postID),l(n,12,0,n.context.$implicit.date),l(n,16,0,n.context.$implicit.post),l(n,25,0,n.context.$implicit.comments.length)}))}function h(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,11,"ion-header",[],null,null,null,e.fb,e.r)),o.Ab(1,49152,null,0,s.C,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,e.Bb,e.N)),o.Ab(3,49152,null,0,s.Db,[o.j,o.p,o.F],null,null),(l()(),o.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.S,e.e)),o.Ab(5,49152,null,0,s.m,[o.j,o.p,o.F],null,null),(l()(),o.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Nb(l,8).onClick(u)&&t),t}),e.Q,e.c)),o.Ab(7,49152,null,0,s.h,[o.j,o.p,o.F],null,null),o.Ab(8,16384,null,0,s.i,[[2,s.jb],s.Jb],null,null),(l()(),o.Bb(9,0,null,0,2,"ion-title",[],null,null,null,e.Ab,e.M)),o.Ab(10,49152,null,0,s.Bb,[o.j,o.p,o.F],null,null),(l()(),o.Sb(-1,0,["Posts you are Following"])),(l()(),o.Bb(12,0,null,null,6,"ion-content",[],null,null,null,e.Z,e.l)),o.Ab(13,49152,null,0,s.v,[o.j,o.p,o.F],null,null),(l()(),o.Bb(14,0,null,0,4,"ion-grid",[["no-padding",""]],null,null,null,e.eb,e.q)),o.Ab(15,49152,null,0,s.B,[o.j,o.p,o.F],null,null),o.Ab(16,16384,null,0,s.e,[o.p],null,null),(l()(),o.qb(16777216,null,0,1,null,g)),o.Ab(18,278528,null,0,b.h,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,18,0,n.component.allFollowedPosts)}),null)}var F=o.xb("app-following",r,(function(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,1,"app-following",[],null,null,null,h,f)),o.Ab(1,114688,null,0,r,[a.m,c.a,p.a,s.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=u("s7LF");class d{}u.d(n,"FollowingPageModuleNgFactory",(function(){return B}));var B=o.yb(t,[],(function(l){return o.Kb([o.Lb(512,o.m,o.jb,[[8,[i.a,F]],[3,o.m],o.D]),o.Lb(4608,b.k,b.j,[o.z,[2,b.q]]),o.Lb(4608,m.q,m.q,[]),o.Lb(4608,s.c,s.c,[o.F,o.g]),o.Lb(4608,s.Ib,s.Ib,[s.c,o.m,o.w]),o.Lb(4608,s.Lb,s.Lb,[s.c,o.m,o.w]),o.Lb(1073742336,b.b,b.b,[]),o.Lb(1073742336,m.p,m.p,[]),o.Lb(1073742336,m.e,m.e,[]),o.Lb(1073742336,s.Fb,s.Fb,[]),o.Lb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),o.Lb(1073742336,d,d,[]),o.Lb(1073742336,t,t,[]),o.Lb(1024,a.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);