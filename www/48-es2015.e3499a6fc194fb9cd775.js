(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"8QiE":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class o{}var e=t("pMnS"),i=t("oBZk"),s=t("ZZ/e"),b=t("s7LF"),a=t("SVse"),r=t("kcry"),c=t("u6v2"),p=t("ENZJ"),d=t("Aso2"),m=t("dneo"),g=t("84P7"),f=t("iInd"),h=t("mrSG"),z=t("sWYD"),k=t("7xvl"),x=t("DtjX");class F{constructor(l,n,t,u,o,e,i){this.router=l,this.posts=n,this.profile=t,this.toast=u,this.formBuilder=o,this.eventEmitterService=e,this.location=i,this.allFollowedPosts=[]}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profile.getUserDetails().subscribe(l=>{console.log("User ID from Following Page OnInit"),this.userID=l._id,this.userFullName=l.fullName,this.userEmail=l.email,this.userProfilePicture=l.profilePicture,this.posts.getFollowedPost(this.userID).subscribe(l=>{this.allFollowedPosts=Object.values(l).reverse(),console.log(l);for(const n of this.allFollowedPosts)n.date=Object(z.a)(new Date(n.date),"MMMM do, yyyy");return this.allFollowedPosts})}),console.log("Got Followed Posts"),this.commentForm=this.formBuilder.group({comment:[""]})}postPage(l){this.router.navigate(["/home/posts/post-page",l._id])}addPost(){this.router.navigate(["/home/posts/add-post"])}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/posts"])}comment(l,n){return h.b(this,void 0,void 0,(function*(){this.commentForm.reset();const t=yield Date.now();console.log("Posting comment"),console.log("Post ID: "+n),yield this.posts.comment(n,t,this.userFullName,this.userEmail,this.userProfilePicture,l),yield this.posts.getPostInfo(n).subscribe(l=>{for(let n of l.comments)n.date=Object(k.a)(new Date(n.date),{includeSeconds:!0,addSuffix:!0});this.posts.commentsSubject$.next(l.comments.reverse())}),this.toast.create({message:"Your comment has been added.",duration:1500}).then(l=>l.present()),yield this.router.navigate(["/home/posts/post-page",n])}))}}var w=u.zb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.post[_ngcontent-%COMP%]{padding-top:20px;margin-bottom:90px;background:#fff;border-radius:5px;box-shadow:1px 1px 3px #888}form[_ngcontent-%COMP%]{width:100%;border-top:1px solid rgba(50,50,50,.2)}.comment[_ngcontent-%COMP%]{border:1px solid #005191;border-radius:5px;margin-top:20px;padding:10px;--padding-start:20px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4, #005191);height:30px;margin-top:20px;opacity:0;width:80px;transform:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) forwards slide-up}ion-item[_ngcontent-%COMP%]{--background:none}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:45px;border-radius:5px;padding:10px;--background:rgb(209,216,224,0.13);--color:white;width:140px;font-size:.6em}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-10px}.post-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:140px;font-size:1em;--color:#005191}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset;width:unset;height:36px;margin-top:20px;margin-bottom:4px;position:unset}.add-button[_ngcontent-%COMP%]{--color:white;--background:linear-gradient(#24d8a8, #1baf88);font-weight:800;display:block;width:100px;margin-top:20px}.comment-input[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);height:auto;margin:30px 0 60px;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{background:rgba(247,248,248,.5);height:auto;margin:50px 0 80px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}ion-fab-button[_ngcontent-%COMP%]{--background:#1baf88;--background-focused:#FFB351;--background-hover:#FFB351;--background-activated:#FFB351;--color-focused:white;--color-hover:white;--color-activated:white;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{transform:translateY(10px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(10px);opacity:0}100%{transform:translateY(0);opacity:1}}"]],data:{}});function B(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,3,"ion-col",[["size","6"]],null,null,null,i.V,i.k)),u.Ab(1,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(2,0,null,0,1,"p",[["style","font-size: 1.4em;"]],null,null,null,null,null)),(l()(),u.Tb(-1,null,["You are currently not following any posts. Please click the follow button on any Post to add it to this page."]))],(function(l,n){l(n,1,0,"6")}),null)}function A(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,2,"ion-button",[["class","comment-post-button"],["name","send"],["style","float: right;"],["type","submit"]],null,null,null,i.O,i.d)),u.Ab(1,49152,null,0,s.k,[u.j,u.p,u.F],{type:[0,"type"]},null),(l()(),u.Tb(-1,0,["Post "]))],(function(l,n){l(n,1,0,"submit")}),null)}function v(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,58,"ion-row",[["class","post"]],null,null,null,i.kb,i.z)),u.Ab(1,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,14,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.Ab(3,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(4,0,null,0,12,"ion-row",[["style","position: relative; left: 5px; top: 4px;"]],null,null,null,i.kb,i.z)),u.Ab(5,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,2,"ion-col",[["offset","0.5"],["size","1"]],null,null,null,i.V,i.k)),u.Ab(7,49152,null,0,s.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(8,0,null,0,0,"img",[["src","../../../../assets/aaron.jpg"],["style","background: #999; border-radius: 100px; height: 40px; width: 40px;"]],null,null,null,null,null)),(l()(),u.Bb(9,0,null,0,3,"ion-col",[["size","8"]],null,null,null,i.V,i.k)),u.Ab(10,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(11,0,null,0,1,"h6",[["style","font-size: 1em; font-weight: 500;"]],null,null,null,null,null)),(l()(),u.Tb(12,null,["",""])),(l()(),u.Bb(13,0,null,0,3,"ion-col",[["size","2"]],null,null,null,i.V,i.k)),u.Ab(14,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(15,0,null,0,1,"h6",[["style","opacity: 0.4; font-size: 0.8em;"]],null,null,null,null,null)),(l()(),u.Tb(16,null,["",""])),(l()(),u.Bb(17,0,null,0,7,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.Ab(18,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(19,0,null,0,5,"ion-row",[],null,null,null,i.kb,i.z)),u.Ab(20,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(21,0,null,0,3,"ion-col",[["offset","0.5"],["size","11"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.postPage(l.context.$implicit)&&u),u}),i.V,i.k)),u.Ab(22,49152,null,0,s.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(23,0,null,0,1,"p",[["class","post-content"]],null,null,null,null,null)),(l()(),u.Tb(24,null,["",""])),(l()(),u.Bb(25,0,null,0,21,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.Ab(26,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(27,0,null,0,19,"ion-row",[["style","position: relative; right: 6px; top: -4px;"]],null,null,null,i.kb,i.z)),u.Ab(28,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(29,0,null,0,17,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,i.V,i.k)),u.Ab(30,49152,null,0,s.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(31,0,null,0,15,"ion-item",[["lines","none"]],null,null,null,i.fb,i.u)),u.Ab(32,49152,null,0,s.H,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(l()(),u.Bb(33,0,null,0,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,t){var o=!0,e=l.component;return"submit"===n&&(o=!1!==u.Nb(l,35).onSubmit(t)&&o),"reset"===n&&(o=!1!==u.Nb(l,35).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.comment(e.commentForm.value,l.context.$implicit._id)&&o),o}),null,null)),u.Ab(34,16384,null,0,b.t,[],null,null),u.Ab(35,540672,null,0,b.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Qb(2048,null,b.a,null,[b.d]),u.Ab(37,16384,null,0,b.l,[[4,b.a]],null,null),(l()(),u.Bb(38,0,null,null,6,"ion-textarea",[["autocapitalize","true"],["autogrow","true"],["class","comment-input"],["formControlName","comment"],["placeholder","Add a Comment"],["rows","5"],["spellcheck","true"],["type","text"],["wrap","soft"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var o=!0;return"ionBlur"===n&&(o=!1!==u.Nb(l,39)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==u.Nb(l,39)._handleInputEvent(t.target)&&o),o}),i.tb,i.I)),u.Ab(39,16384,null,0,s.Ob,[u.p],null,null),u.Qb(1024,null,b.i,(function(l){return[l]}),[s.Ob]),u.Ab(41,671744,null,0,b.c,[[3,b.a],[8,null],[8,null],[6,b.i],[2,b.s]],{name:[0,"name"]},null),u.Qb(2048,null,b.j,null,[b.c]),u.Ab(43,16384,null,0,b.k,[[4,b.j]],null,null),u.Ab(44,49152,null,0,s.yb,[u.j,u.p,u.F],{autocapitalize:[0,"autocapitalize"],placeholder:[1,"placeholder"],rows:[2,"rows"],spellcheck:[3,"spellcheck"],wrap:[4,"wrap"]},null),(l()(),u.qb(16777216,null,null,1,null,A)),u.Ab(46,16384,null,0,a.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Bb(47,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.V,i.k)),u.Ab(48,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.Bb(49,0,null,0,9,"ion-row",[],null,null,null,i.kb,i.z)),u.Ab(50,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(51,0,null,0,3,"ion-col",[["offset","0.5"],["size","4"]],null,null,null,i.V,i.k)),u.Ab(52,49152,null,0,s.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(53,0,null,0,1,"app-up-down-vote-buttons",[],null,null,null,r.b,r.a)),u.Ab(54,114688,null,0,c.a,[p.a,d.a,s.Pb],{postID:[0,"postID"]},null),(l()(),u.Bb(55,0,null,0,3,"ion-col",[["push","1"],["size","6"]],null,null,null,i.V,i.k)),u.Ab(56,49152,null,0,s.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(57,0,null,0,1,"app-follow-comment-buttons",[],null,null,null,m.b,m.a)),u.Ab(58,114688,null,0,g.a,[f.m,p.a,d.a,s.Pb],{postID:[0,"postID"]},null)],(function(l,n){var t=n.component;l(n,3,0,"12"),l(n,7,0,"0.5","1"),l(n,10,0,"8"),l(n,14,0,"2"),l(n,18,0,"12"),l(n,22,0,"0.5","11"),l(n,26,0,"12"),l(n,30,0,"0.5","11"),l(n,32,0,"none"),l(n,35,0,t.commentForm),l(n,41,0,"comment"),l(n,44,0,"true","Add a Comment","5","true","soft"),l(n,46,0,!t.commentForm.get("comment").pristine&&t.commentForm.value.comment.length>=3),l(n,48,0,"12"),l(n,52,0,"0.5","4"),l(n,54,0,n.context.$implicit._id),l(n,56,0,"1","6"),l(n,58,0,n.context.$implicit._id)}),(function(l,n){l(n,12,0,n.context.$implicit.creatorName),l(n,16,0,n.context.$implicit.date),l(n,24,0,n.context.$implicit.post),l(n,33,0,u.Nb(n,37).ngClassUntouched,u.Nb(n,37).ngClassTouched,u.Nb(n,37).ngClassPristine,u.Nb(n,37).ngClassDirty,u.Nb(n,37).ngClassValid,u.Nb(n,37).ngClassInvalid,u.Nb(n,37).ngClassPending),l(n,38,0,u.Nb(n,43).ngClassUntouched,u.Nb(n,43).ngClassTouched,u.Nb(n,43).ngClassPristine,u.Nb(n,43).ngClassDirty,u.Nb(n,43).ngClassValid,u.Nb(n,43).ngClassInvalid,u.Nb(n,43).ngClassPending)}))}function P(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,i.cb,i.r)),u.Ab(1,49152,null,0,s.B,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.vb,i.K)),u.Ab(3,49152,null,0,s.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.P,i.e)),u.Ab(5,49152,null,0,s.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==u.Nb(l,8).onClick(t)&&o),o}),i.N,i.c)),u.Ab(7,49152,null,0,s.g,[u.j,u.p,u.F],null,null),u.Ab(8,16384,null,0,s.h,[[2,s.ib],s.Ib],null,null),(l()(),u.Bb(9,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),u.Ab(10,49152,null,0,s.Ab,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,["Following"])),(l()(),u.Bb(12,0,null,null,33,"ion-content",[],null,null,null,i.W,i.l)),u.Ab(13,49152,null,0,s.u,[u.j,u.p,u.F],null,null),(l()(),u.Bb(14,0,null,0,5,"ion-fab",[["class","ion-hide-lg-up"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.Z,i.n)),u.Ab(15,49152,null,0,s.w,[u.j,u.p,u.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.Bb(16,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.addPost()&&u),u}),i.Y,i.o)),u.Ab(17,49152,null,0,s.x,[u.j,u.p,u.F],null,null),(l()(),u.Bb(18,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.db,i.s)),u.Ab(19,49152,null,0,s.C,[u.j,u.p,u.F],{name:[0,"name"]},null),(l()(),u.Bb(20,0,null,0,25,"ion-grid",[],null,null,null,i.bb,i.q)),u.Ab(21,49152,null,0,s.A,[u.j,u.p,u.F],null,null),(l()(),u.Bb(22,0,null,0,15,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,i.kb,i.z)),u.Ab(23,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(24,0,null,0,3,"ion-col",[["offset","2.5"],["size","2.5"]],null,null,null,i.V,i.k)),u.Ab(25,49152,null,0,s.t,[u.j,u.p,u.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),u.Bb(26,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Tb(-1,null,["Following"])),(l()(),u.Bb(28,0,null,0,4,"ion-col",[["class","ion-text-center"],["push","1.8"],["size","2"]],null,null,null,i.V,i.k)),u.Ab(29,49152,null,0,s.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(30,0,null,0,2,"ion-button",[["class","add-button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.addPost()&&u),u}),i.O,i.d)),u.Ab(31,49152,null,0,s.k,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,[" Add Post "])),(l()(),u.Bb(33,0,null,0,4,"ion-col",[["class","ion-text-center"],["push","1"],["size","2"]],null,null,null,i.V,i.k)),u.Ab(34,49152,null,0,s.t,[u.j,u.p,u.F],{push:[0,"push"],size:[1,"size"]},null),(l()(),u.Bb(35,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.back()&&u),u}),i.O,i.d)),u.Ab(36,49152,null,0,s.k,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,[" Back "])),(l()(),u.Bb(38,0,null,0,7,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.kb,i.z)),u.Ab(39,49152,null,0,s.jb,[u.j,u.p,u.F],null,null),(l()(),u.qb(16777216,null,0,1,null,B)),u.Ab(41,16384,null,0,a.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Bb(42,0,null,0,3,"ion-col",[["size","6"],["size-sm","8"],["size-xs","11"]],null,null,null,i.V,i.k)),u.Ab(43,49152,null,0,s.t,[u.j,u.p,u.F],{size:[0,"size"]},null),(l()(),u.qb(16777216,null,0,1,null,v)),u.Ab(45,278528,null,0,a.i,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,15,0,"end","bottom"),l(n,19,0,"add"),l(n,25,0,"2.5","2.5"),l(n,29,0,"1.8","2"),l(n,34,0,"1","2"),l(n,41,0,0===t.allFollowedPosts.length),l(n,43,0,"6"),l(n,45,0,t.allFollowedPosts)}),null)}function j(l){return u.Vb(0,[(l()(),u.Bb(0,0,null,null,1,"app-following",[],null,null,null,P,w)),u.Ab(1,114688,null,0,F,[f.m,p.a,d.a,s.Pb,b.b,x.a,a.n],null,null)],(function(l,n){l(n,1,0)}),null)}var y=u.xb("app-following",F,j,{},{},[]),C=t("zAgk");class O{}t.d(n,"FollowingPageModuleNgFactory",(function(){return _}));var _=u.yb(o,[],(function(l){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[e.a,y]],[3,u.m],u.D]),u.Lb(4608,a.l,a.k,[u.z,[2,a.s]]),u.Lb(4608,b.r,b.r,[]),u.Lb(4608,s.b,s.b,[u.F,u.g]),u.Lb(4608,s.Hb,s.Hb,[s.b,u.m,u.w]),u.Lb(4608,s.Lb,s.Lb,[s.b,u.m,u.w]),u.Lb(5120,u.d,(function(l,n,t){return[s.Rb(l,n,t)]}),[s.Qb,a.d,u.F]),u.Lb(4608,b.b,b.b,[]),u.Lb(1073742336,a.c,a.c,[]),u.Lb(1073742336,b.q,b.q,[]),u.Lb(1073742336,b.e,b.e,[]),u.Lb(1073742336,s.Eb,s.Eb,[]),u.Lb(1073742336,C.a,C.a,[]),u.Lb(1073742336,b.n,b.n,[]),u.Lb(1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),u.Lb(1073742336,O,O,[]),u.Lb(1073742336,o,o,[]),u.Lb(256,s.Qb,void 0,[]),u.Lb(1024,f.k,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);