(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"3c3Z":function(t,o,n){"use strict";n.r(o),n.d(o,"MyPostsPageModule",function(){return O});var e=n("ofXK"),i=n("3Pt+"),s=n("zAgk"),r=n("TEn/"),c=n("tyNb"),b=n("mrSG"),a=n("ENZJ"),m=n("Aso2"),l=n("sWYD"),p=n("7xvl"),u=n("DtjX"),d=n("fXoL"),g=n("u6v2"),h=n("84P7");function f(t,o){1&t&&(d.Mb(0,"ion-col",18),d.Mb(1,"div"),d.Mb(2,"p",19),d.mc(3,"You currently do not have any posts. Please click the Add Post button to create a Post."),d.Lb(),d.Lb(),d.Lb())}function M(t,o){1&t&&(d.Mb(0,"ion-button",43),d.mc(1,"Post "),d.Lb())}function x(t,o){if(1&t){const t=d.Nb();d.Mb(0,"ion-row",20),d.Mb(1,"ion-col",21),d.Mb(2,"ion-row",22),d.Mb(3,"ion-col",23),d.Ib(4,"img",24),d.Lb(),d.Mb(5,"ion-col",25),d.Mb(6,"h6",26),d.mc(7),d.Lb(),d.Lb(),d.Mb(8,"ion-col",27),d.Mb(9,"h6",28),d.mc(10),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(11,"ion-col",29),d.Mb(12,"ion-row",15),d.Mb(13,"ion-col",30),d.Mb(14,"p",31),d.mc(15),d.Lb(),d.Lb(),d.Lb(),d.Mb(16,"ion-row"),d.Mb(17,"ion-col",32),d.Mb(18,"p",33),d.mc(19),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(20,"ion-col",29),d.Mb(21,"ion-row",34),d.Mb(22,"ion-col",35),d.Mb(23,"ion-item",36),d.Mb(24,"form",37),d.Ub("ngSubmit",function(){d.gc(t);const n=o.$implicit,e=d.Wb();return e.comment(n._id,e.userFullName,e.userEmail,e.userProfilePicture,e.commentForm.value)}),d.Ib(25,"ion-textarea",38),d.lc(26,M,2,0,"ion-button",39),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(27,"ion-col",29),d.Mb(28,"ion-row"),d.Mb(29,"ion-col",40),d.Ib(30,"app-up-down-vote-buttons",41),d.Lb(),d.Mb(31,"ion-col",42),d.Ib(32,"app-follow-comment-buttons",41),d.Lb(),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=o.$implicit,n=d.Wb();d.xb(4),d.ac("src",t.creatorProfilePicture,d.ic),d.xb(3),d.nc(t.creatorName),d.xb(3),d.nc(t.date),d.xb(5),d.nc(t.title),d.xb(4),d.nc(t.post),d.xb(5),d.Zb("formGroup",n.commentForm),d.xb(2),d.Zb("ngIf",!n.commentForm.get("comment").pristine&&n.commentForm.value.comment.length>=3),d.xb(4),d.Zb("postID",t._id),d.xb(2),d.Zb("postID",t._id)}}function P(t,o){1&t&&(d.Mb(0,"ion-col",18),d.Mb(1,"div"),d.Mb(2,"p",19),d.mc(3,"You are currently not following any posts. Please click the follow button on any Post to add it to this page."),d.Lb(),d.Lb(),d.Lb())}function L(t,o){1&t&&(d.Mb(0,"ion-button",43),d.mc(1,"Post "),d.Lb())}function w(t,o){if(1&t){const t=d.Nb();d.Mb(0,"ion-row",44),d.Mb(1,"ion-col",21),d.Mb(2,"ion-row",45),d.Mb(3,"ion-col",46),d.Ib(4,"img",24),d.Lb(),d.Mb(5,"ion-col",47),d.Mb(6,"h6",48),d.mc(7),d.Lb(),d.Lb(),d.Mb(8,"ion-col",49),d.Mb(9,"h6",50),d.mc(10),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(11,"ion-col",29),d.Mb(12,"ion-row",15),d.Mb(13,"ion-col",30),d.Mb(14,"p",31),d.mc(15),d.Lb(),d.Lb(),d.Lb(),d.Mb(16,"ion-row",15),d.Mb(17,"ion-col",51),d.Mb(18,"p",52),d.mc(19),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(20,"ion-col",29),d.Mb(21,"ion-row",53),d.Mb(22,"ion-col",29),d.Mb(23,"ion-item",54),d.Mb(24,"form",37),d.Ub("ngSubmit",function(){d.gc(t);const n=o.$implicit,e=d.Wb();return e.comment(n._id,e.userFullName,e.userEmail,e.userProfilePicture,e.commentForm.value)}),d.Ib(25,"ion-textarea",55),d.lc(26,L,2,0,"ion-button",39),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(27,"ion-col",29),d.Mb(28,"ion-row",15),d.Mb(29,"ion-col",56),d.Ib(30,"app-up-down-vote-buttons",41),d.Lb(),d.Mb(31,"ion-col",57),d.Ib(32,"app-follow-comment-buttons",58),d.Lb(),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=o.$implicit,n=d.Wb();d.xb(4),d.ac("src",t.creatorProfilePicture,d.ic),d.xb(3),d.nc(t.creatorName),d.xb(3),d.nc(t.date),d.xb(5),d.nc(t.title),d.xb(4),d.nc(t.post),d.xb(5),d.Zb("formGroup",n.commentForm),d.xb(2),d.Zb("ngIf",!n.commentForm.get("comment").pristine&&n.commentForm.value.comment.length>=3),d.xb(4),d.Zb("postID",t._id),d.xb(2),d.Zb("postID",t._id)}}const y=[{path:"",component:(()=>{class t{constructor(t,o,n,e,i,s,r,c,b){this.activatedRoute=t,this.router=o,this.posts=n,this.profile=e,this.toast=i,this.formBuilder=s,this.eventEmitterService=r,this.modal=c,this.location=b,this.allMyPosts=[]}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profile.getUserDetails().subscribe(t=>{this.userID=t._id,this.userFullName=t.fullName,this.userEmail=t.email,this.userProfilePicture=t.profilePicture}),this.commentForm=this.formBuilder.group({comment:[""]});const t=this.activatedRoute.snapshot.paramMap.get("email");this.userEmail=t,console.log(this.userEmail),this.myPosts(this.userEmail)}addPost(){this.router.navigate(["/home/posts/add-post"])}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/posts"])}myPosts(t){this.posts.getMyPosts(t).subscribe(t=>{this.allMyPosts=Object.values(t).reverse(),console.log(t);for(const o of this.allMyPosts)o.date=Object(l.a)(new Date(o.date),"MMMM do, yyyy");return this.allMyPosts})}comment(t,o,n,e,i){return Object(b.a)(this,void 0,void 0,function*(){this.commentForm.reset(),yield Date.now(),console.log("Posting comment"),console.log("Post ID: "+t),yield this.posts.comment(t,this.userFullName,this.userEmail,this.userProfilePicture,i).subscribe(()=>{this.posts.getPostInfo(t).subscribe(o=>{this.posts.getPostInfo(t).subscribe(t=>{for(let o of t.comments)console.log(o),o.isUser=!1,o.canDeleteComment=!1,o.canReport=!0,o.userEmail===this.userEmail&&(o.isUser=!0,o.canDeleteComment=!0,o.canReport=!1),o.repliesLength=o.replies.length,o.date=Object(p.a)(new Date(o.date),{includeSeconds:!0,addSuffix:!1});this.posts.commentsSubject$.next(t.comments.reverse())})})}),yield this.posts.getPostInfo(t).subscribe(t=>{for(let o of t.comments)o.date=Object(p.a)(new Date(o.date),{includeSeconds:!0,addSuffix:!0});this.posts.commentsSubject$.next(t.comments.reverse())}),this.toast.create({message:"Your comment has been added.",duration:1500}).then(t=>t.present()),yield this.router.navigate(["/home/posts/post-page",t])})}}return t.\u0275fac=function(o){return new(o||t)(d.Hb(c.a),d.Hb(c.f),d.Hb(a.a),d.Hb(m.a),d.Hb(r.Z),d.Hb(i.a),d.Hb(u.a),d.Hb(r.T),d.Hb(e.l))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-my-posts"]],decls:30,vars:4,consts:[[1,"ion-hide-lg-up"],["slot","start"],["vertical","bottom","horizontal","end","slot","fixed",1,"ion-hide-lg-up"],[3,"click"],["name","add","size","large"],[1,"ion-hide-md-down"],["offset","2.5","size","2.5",2,"margin","3% 0% 2% 0%"],["push","2.65","size","2",1,"ion-text-center"],[1,"add-button",3,"click"],["push","1","size","2",1,"ion-text-center"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center",2,"margin-top","1%"],["class","no-posts ion-align-items-center","size-xs","11","size-sm","9","size-md","8","size-lg","7",4,"ngIf"],["size","7"],["class","post",4,"ngFor","ngForOf"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","12","size-md","8","size-lg","10","pull-lg","2"],["style","margin-top: 1%;","class","post",4,"ngFor","ngForOf"],["size-xs","11","size-sm","9","size-md","8","size-lg","7",1,"no-posts","ion-align-items-center"],[2,"font-size","1.2em"],[1,"post"],["size","11"],[1,"ion-align-items-center"],["push","0.25","size","1"],[2,"background","#999","border-radius","100px","height","40px","width","40px",3,"src"],["size","4"],[2,"font-size","1em","font-weight","500"],["push-lg","5","size","3",1,"ion-float-right"],[2,"opacity","0.4","font-size","0.8em"],["size","12"],["size","11.3"],[1,"post-title"],["push","0.25","size","11"],[1,"post-content"],[2,"position","relative","right","6px","top","-4px"],["size","11.8"],["lines","none"],[3,"formGroup","ngSubmit"],["autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","placeholder","Add a Comment","formControlName","comment",1,"comment-input"],["style","float: right;","class","comment-post-button","name","send","type","submit",4,"ngIf"],["size","4.7"],[3,"postID"],["push","0.75","size","6"],["name","send","type","submit",1,"comment-post-button",2,"float","right"],[1,"post",2,"margin-top","1%"],[2,"position","relative","right","5px","top","-4px"],["push","0.2","size","1.3"],["push","0.2","size","5"],[2,"font-size","1em","margin","10px 0 10px 0px","color","#666"],["push","1.5","size","3",1,"ion-text-right"],[2,"opacity","0.4","font-size","0.7em","margin","10px 0","position","relative","top","10px"],["size","11",2,"height","auto","background","white"],[1,"post-content",2,"font-size","1em","width","100%","position","unset","line-height","unset"],[1,"ion-justify-content-center",2,"position","relative","right","6px","top","-4px"],["lines","none",2,"height","auto"],["autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","placeholder","Add a Comment","formControlName","comment",1,"comment-input-mobile"],["pull","1","size","4","size-xs","4.4"],["size","6"],[2,"font-size","1.3em",3,"postID"]],template:function(t,o){1&t&&(d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-buttons",1),d.Ib(3,"ion-back-button"),d.Lb(),d.Mb(4,"ion-title"),d.mc(5,"My Posts"),d.Lb(),d.Lb(),d.Lb(),d.Mb(6,"ion-content"),d.Mb(7,"ion-fab",2),d.Mb(8,"ion-fab-button",3),d.Ub("click",function(){return o.addPost()}),d.Ib(9,"ion-icon",4),d.Lb(),d.Lb(),d.Mb(10,"ion-grid",5),d.Mb(11,"ion-row",5),d.Mb(12,"ion-col",6),d.Mb(13,"h1"),d.mc(14,"My Posts"),d.Lb(),d.Lb(),d.Mb(15,"ion-col",7),d.Mb(16,"ion-button",8),d.Ub("click",function(){return o.addPost()}),d.mc(17," Add Post "),d.Lb(),d.Lb(),d.Mb(18,"ion-col",9),d.Mb(19,"ion-button",10),d.Ub("click",function(){return o.back()}),d.mc(20," Back "),d.Lb(),d.Lb(),d.Lb(),d.Mb(21,"ion-row",11),d.lc(22,f,4,0,"ion-col",12),d.Mb(23,"ion-col",13),d.lc(24,x,33,9,"ion-row",14),d.Lb(),d.Lb(),d.Lb(),d.Mb(25,"ion-grid",0),d.Mb(26,"ion-row",15),d.lc(27,P,4,0,"ion-col",12),d.Mb(28,"ion-col",16),d.lc(29,w,33,9,"ion-row",17),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.xb(22),d.Zb("ngIf",0===o.allMyPosts.length),d.xb(2),d.Zb("ngForOf",o.allMyPosts),d.xb(3),d.Zb("ngIf",0===o.allMyPosts.length),d.xb(2),d.Zb("ngForOf",o.allMyPosts))},directives:[r.t,r.P,r.h,r.e,r.f,r.O,r.o,r.p,r.q,r.u,r.s,r.F,r.n,r.g,e.j,e.i,r.w,i.o,i.j,i.c,r.N,r.Y,i.i,i.b,g.a,h.a],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.post[_ngcontent-%COMP%]{padding:30px;margin-bottom:80px;border-radius:5px;box-shadow:1px 10px 10px rgba(0,0,0,.05);background:#fff;font-size:1em;line-height:35px}.post[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background:#999;opacity:.4}.post-title[_ngcontent-%COMP%]{font-weight:800;color:#005191;position:relative;left:5px;margin:0}@media screen and (max-width:567px){.post[_ngcontent-%COMP%]{padding:30px 0}}.no-posts[_ngcontent-%COMP%]{height:70vh}form[_ngcontent-%COMP%]{width:100%}.comment[_ngcontent-%COMP%]{border:1px solid #005191;border-radius:5px;margin-top:20px;padding:10px;--padding-start:20px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4,#005191);height:30px;margin-top:20px;width:80px}.comment-input[_ngcontent-%COMP%]{margin:30px 0 60px}.comment-input[_ngcontent-%COMP%]:hover{margin:50px 0 80px}.comment-input-mobile[_ngcontent-%COMP%]{height:auto;margin:30px 0 60px;box-shadow:none;padding-left:10px;border:1px solid rgba(0,81,145,.4);border-radius:5px}.comment-input-mobile[_ngcontent-%COMP%], .comment-input-mobile[_ngcontent-%COMP%]:focus{background:rgba(247,248,248,.5);transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]:focus{height:100px;margin:30px 0 150px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}ion-item[_ngcontent-%COMP%]{--background:none}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:45px;border-radius:5px;padding:10px;--background:rgba(209,216,224,0.13);--color:#fff;width:140px;font-size:.6em}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-10px}.post-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:140px;font-size:1em;--color:#005191}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset;height:36px;margin-bottom:4px;position:unset}.add-button[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]{width:100px;margin-top:30px;font-size:.7em}.add-button[_ngcontent-%COMP%]{--color:#fff;--background:linear-gradient(#5ad8b2,#40c59d);--background-hover:linear-gradient(#bffce9,#7efcd4);font-weight:800;display:block}.comment-input[_ngcontent-%COMP%]{margin:10px 0 0;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px}.comment-input[_ngcontent-%COMP%], .comment-input[_ngcontent-%COMP%]:hover{background:rgba(247,248,248,.5);height:auto;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{margin:12px 0 0;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#5ad8b2,#40c59d);height:40px;margin-top:40px;opacity:0;width:100%;transform:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards}ion-fab-button[_ngcontent-%COMP%]{--background:#1baf88;--color-focused:#fff;--color-hover:#fff;--color-activated:#fff;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}"]}),t})()}];let z=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(o){return new(o||t)},imports:[[c.j.forChild(y)],c.j]}),t})(),O=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(o){return new(o||t)},imports:[[e.b,i.d,s.a,i.l,r.Q,z]]}),t})()}}]);