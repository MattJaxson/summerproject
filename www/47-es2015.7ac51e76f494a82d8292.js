(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"3c3Z":function(t,o,n){"use strict";n.r(o),n.d(o,"MyPostsPageModule",function(){return L});var e=n("ofXK"),i=n("3Pt+"),s=n("zAgk"),r=n("TEn/"),c=n("tyNb"),a=n("mrSG"),b=n("ENZJ"),p=n("Aso2"),l=n("sWYD"),m=n("7xvl"),g=n("DtjX"),d=n("fXoL"),u=n("u6v2"),h=n("84P7");function f(t,o){1&t&&(d.Mb(0,"ion-col",15),d.Mb(1,"div"),d.Mb(2,"p",16),d.nc(3,"You currently do not have any posts. Please click the Add Post button to create a Post."),d.Lb(),d.Lb(),d.Lb())}function x(t,o){if(1&t&&(d.Mb(0,"p",42),d.nc(1),d.Lb()),2&t){const t=o.$implicit;d.xb(1),d.pc(" #",t," ")}}function M(t,o){1&t&&(d.Mb(0,"p",43),d.nc(1," No #hashtags for this post "),d.Lb())}function P(t,o){1&t&&(d.Mb(0,"span",44),d.nc(1,"..."),d.Lb())}function O(t,o){if(1&t){const t=d.Nb();d.Mb(0,"button",45),d.Ub("click",function(){return d.gc(t),d.Wb(2).alterDescriptionText()}),d.nc(1),d.Lb()}if(2&t){const t=d.Wb(2);d.xb(1),d.pc(" ",t.showShortDesciption?"SHOW ALL":"SHOW LESS"," ")}}function C(t,o){1&t&&(d.Mb(0,"ion-button",46),d.nc(1,"Post Comment "),d.Lb())}const w=function(t){return{"show-less":t}};function _(t,o){if(1&t){const t=d.Nb();d.Mb(0,"div",17),d.Mb(1,"ion-row",18),d.Mb(2,"ion-col",19),d.Ib(3,"img",20),d.Lb(),d.Mb(4,"ion-col",21),d.Mb(5,"p",22),d.nc(6),d.Lb(),d.Mb(7,"p",23),d.nc(8),d.Lb(),d.Lb(),d.Lb(),d.Mb(9,"ion-row",18),d.Mb(10,"ion-col",24),d.Mb(11,"p",25),d.nc(12),d.Lb(),d.Mb(13,"div",26),d.mc(14,x,2,1,"p",27),d.Lb(),d.mc(15,M,2,0,"p",28),d.Mb(16,"p",29),d.nc(17),d.Lb(),d.mc(18,P,2,0,"span",30),d.mc(19,O,2,1,"button",31),d.Lb(),d.Lb(),d.Mb(20,"ion-row",18),d.Mb(21,"ion-col",32),d.Mb(22,"ion-item",33),d.Mb(23,"form",34),d.Ub("ngSubmit",function(){d.gc(t);const n=o.$implicit,e=d.Wb();return e.comment(n._id,e.userFullName,e.userEmail,e.userProfilePicture,e.commentForm.value)}),d.Ib(24,"ion-textarea",35,36),d.mc(26,C,2,0,"ion-button",37),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(27,"ion-row",18),d.Mb(28,"ion-col",38),d.Ib(29,"app-up-down-vote-buttons",39),d.Lb(),d.Mb(30,"ion-col",40),d.Ib(31,"app-follow-comment-buttons",41),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=o.$implicit,n=d.fc(25),e=d.Wb();d.xb(3),d.ac("src",t.creatorProfilePicture,d.ic),d.xb(3),d.oc(t.creatorName),d.xb(2),d.oc(t.date),d.xb(4),d.oc(t.title),d.xb(2),d.Zb("ngForOf",t.hashtags),d.xb(1),d.Zb("ngIf",0===t.hashtags.length),d.xb(1),d.Zb("ngClass",d.dc(16,w,e.showShortDesciption)),d.xb(1),d.oc(t.post),d.xb(1),d.Zb("ngIf",t.post.length>400&&e.showShortDesciption),d.xb(1),d.Zb("ngIf",t.post.length>400),d.xb(4),d.Zb("formGroup",e.commentForm),d.xb(3),d.Zb("ngIf",n.value.length>=2),d.xb(3),d.Zb("postID",t._id)("postEmail",t.creatorEmail),d.xb(2),d.Zb("postID",t._id)("commentLength",t.comments.length)}}const y=[{path:"",component:(()=>{class t{constructor(t,o,n,e,i,s,r,c,a){this.activatedRoute=t,this.router=o,this.posts=n,this.profile=e,this.toast=i,this.formBuilder=s,this.eventEmitterService=r,this.modal=c,this.location=a,this.showShortDesciption=!0,this.isUser=!0,this.allMyPosts=[]}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profile.getUserDetails().subscribe(t=>{this.userID=t._id,this.userFullName=t.fullName,this.userEmail=t.email,this.userProfilePicture=t.profilePicture}),this.commentForm=this.formBuilder.group({comment:[""]});const t=this.activatedRoute.snapshot.paramMap.get("email");this.userEmail=t,console.log(this.userEmail),this.myPosts(this.userEmail)}alterDescriptionText(){this.showShortDesciption=!this.showShortDesciption}addPost(){this.router.navigate(["/home/posts/add-post"])}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/posts"])}myPosts(t){this.posts.getMyPosts(t).subscribe(t=>{this.allMyPosts=Object.values(t).reverse(),console.log(t);for(const o of this.allMyPosts)o.date=Object(l.a)(new Date(o.date),"MMMM do, yyyy");return this.allMyPosts})}comment(t,o,n,e,i){return Object(a.a)(this,void 0,void 0,function*(){this.commentForm.reset(),yield Date.now(),console.log("Posting comment"),console.log("Post ID: "+t),yield this.posts.comment(t,this.userFullName,this.userEmail,this.userProfilePicture,i).subscribe(()=>{this.posts.getPostInfo(t).subscribe(o=>{this.posts.getPostInfo(t).subscribe(t=>{for(let o of t.comments)console.log(o),o.isUser=!1,o.canDeleteComment=!1,o.canReport=!0,o.userEmail===this.userEmail&&(o.isUser=!0,o.canDeleteComment=!0,o.canReport=!1),o.repliesLength=o.replies.length,o.date=Object(m.a)(new Date(o.date),{includeSeconds:!0,addSuffix:!1});this.posts.commentsSubject$.next(t.comments.reverse())})})}),yield this.posts.getPostInfo(t).subscribe(t=>{for(let o of t.comments)o.date=Object(m.a)(new Date(o.date),{includeSeconds:!0,addSuffix:!0});this.posts.commentsSubject$.next(t.comments.reverse())}),this.toast.create({message:"Your comment has been added.",duration:1500}).then(t=>t.present()),yield this.router.navigate(["/home/posts/post-page",t])})}}return t.\u0275fac=function(o){return new(o||t)(d.Hb(c.a),d.Hb(c.g),d.Hb(b.a),d.Hb(p.a),d.Hb(r.eb),d.Hb(i.a),d.Hb(g.a),d.Hb(r.W),d.Hb(e.l))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-my-posts"]],decls:26,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],["vertical","bottom","horizontal","end","slot","fixed",1,"ion-hide-lg-up"],[3,"click"],["name","add","size","large"],[1,"ion-hide-md-down"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"add-button",3,"click"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center",2,"margin-top","1%"],["class","no-posts ion-align-items-center","size-xs","11","size-sm","9","size-md","8","size-lg","7",4,"ngIf"],["class","post","style","margin-top: 1%;",4,"ngFor","ngForOf"],["size-xs","11","size-sm","9","size-md","8","size-lg","7",1,"no-posts","ion-align-items-center"],[2,"font-size","1.2em"],[1,"post",2,"margin-top","1%"],[1,"ion-justify-content-center"],["size","1"],[2,"background","#999","border-radius","100px","height","35xpx","width","35px",3,"src"],["size","10"],[1,"post-name"],[1,"post-date"],["size","11"],[1,"post-title"],[1,"hashtags"],["class","hashtag",4,"ngFor","ngForOf"],["class","no-tags",4,"ngIf"],[1,"post-content",3,"ngClass"],["class","ellipsis",4,"ngIf"],["class","show-more-or-less-button","type","button",3,"click",4,"ngIf"],["size","12"],["lines","none",2,"height","auto"],[3,"formGroup","ngSubmit"],["autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","placeholder","Add a Comment","formControlName","comment",1,"comment-input-mobile"],["postComment",""],["style","float: right;","class","comment-post-button","name","send","type","submit",4,"ngIf"],["size","8"],[3,"postID","postEmail"],["size","3"],[3,"postID","commentLength"],[1,"hashtag"],[1,"no-tags"],[1,"ellipsis"],["type","button",1,"show-more-or-less-button",3,"click"],["name","send","type","submit",1,"comment-post-button",2,"float","right"]],template:function(t,o){1&t&&(d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-buttons",1),d.Ib(3,"ion-back-button"),d.Lb(),d.Mb(4,"ion-title"),d.nc(5,"My Posts"),d.Lb(),d.Lb(),d.Lb(),d.Mb(6,"ion-content"),d.Mb(7,"ion-fab",2),d.Mb(8,"ion-fab-button",3),d.Ub("click",function(){return o.addPost()}),d.Ib(9,"ion-icon",4),d.Lb(),d.Lb(),d.Mb(10,"ion-grid",5),d.Mb(11,"ion-row",6),d.Mb(12,"ion-col",7),d.Mb(13,"ion-toolbar",8),d.Mb(14,"ion-buttons",1),d.Mb(15,"h1"),d.nc(16,"My Posts"),d.Lb(),d.Lb(),d.Mb(17,"ion-buttons",9),d.Mb(18,"ion-button",10),d.Ub("click",function(){return o.addPost()}),d.nc(19," Add Post "),d.Lb(),d.Mb(20,"ion-button",11),d.Ub("click",function(){return o.back()}),d.nc(21," Back "),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(22,"ion-row",12),d.mc(23,f,4,0,"ion-col",13),d.Mb(24,"ion-col",7),d.mc(25,_,32,18,"div",14),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.xb(23),d.Zb("ngIf",0===o.allMyPosts.length),d.xb(2),d.Zb("ngForOf",o.allMyPosts))},directives:[r.u,r.S,r.h,r.e,r.f,r.R,r.o,r.q,r.r,r.v,r.t,r.I,r.n,r.g,e.j,e.i,e.h,r.x,i.o,i.j,i.c,r.Q,r.db,i.i,i.b,u.a,h.a],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.post[_ngcontent-%COMP%]{padding:24px 0;margin-bottom:80px;border-radius:11px;box-shadow:1px 10px 26px rgba(0,0,0,.05);font-size:1.1em;line-height:35px;background:#fff}.post-content[_ngcontent-%COMP%]{font-size:1em}.post-title[_ngcontent-%COMP%]{font-weight:800;color:#0055a5;font-size:.9em;position:relative;top:-20px;line-height:25px;margin:10px 0 0}.post-buttons[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:none}.post-name[_ngcontent-%COMP%]{font-size:.9em;font-weight:700;color:#666}.post-date[_ngcontent-%COMP%], .post-name[_ngcontent-%COMP%]{margin:0;line-height:18px}.post-date[_ngcontent-%COMP%]{opacity:.4;font-size:.65em}.show-less[_ngcontent-%COMP%]{height:auto;overflow:hidden}.show-more-or-less-button[_ngcontent-%COMP%]{float:right;position:relative;right:0;margin-top:35px;padding:.5em;background:#0055a5;color:#fff;border-radius:5px;font-size:.6em;font-weight:600}.ellipsis[_ngcontent-%COMP%]{float:right;position:relative;right:20px;top:-18px}@media screen and (max-width:567px){.post[_ngcontent-%COMP%]{padding:30px 0}}.no-posts[_ngcontent-%COMP%]{height:70vh}form[_ngcontent-%COMP%]{width:100%}.hashtags[_ngcontent-%COMP%]{position:relative;top:-32px}.hashtag[_ngcontent-%COMP%]{font-size:.55em;color:#ea8400}.hashtag[_ngcontent-%COMP%], .no-tags[_ngcontent-%COMP%]{font-weight:600;display:inline-block;margin-right:5px}.no-tags[_ngcontent-%COMP%]{font-size:.7em;color:#333;opacity:.5;position:relative;top:-32px}.comment[_ngcontent-%COMP%]{border:1px solid #005191;--padding-start:20px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4,#005191);height:30px;margin-top:20px;opacity:0;width:80px;transform:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards}.comment-input[_ngcontent-%COMP%]{margin:30px 0 60px}.comment-input[_ngcontent-%COMP%]:hover{margin:50px 0 80px}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(247,248,248,.5);margin:30px 0 60px;border:1px solid rgba(0,81,145,.4);border-radius:5px}ion-item[_ngcontent-%COMP%]{--background:none}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:45px;border-radius:5px;padding:10px;--background:rgba(209,216,224,0.13);--color:#fff;width:140px;font-size:.6em}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-10px}.post-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:140px;font-size:1em;--color:#005191}.blue-button[_ngcontent-%COMP%]{--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0055a2)}.add-button[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]{--color:#fff;height:24px;width:100px;font-size:.5em;font-weight:600;display:block}.add-button[_ngcontent-%COMP%]{--background:linear-gradient(#5ad8b2,#40c59d);--background-hover:linear-gradient(#bffce9,#7efcd4)}.comment[_ngcontent-%COMP%]{border:1px solid #0055a5;border-radius:5px;margin-top:20px;padding:10px}.comment-button[_ngcontent-%COMP%]{font-size:1em;font-weight:600;position:relative;right:-20px;top:5px}.comment-post-button[_ngcontent-%COMP%]{--border-color:#40c59d;--border-width:2px;--border-style:solid;--background:#40c59d;--color:#fff;height:40px;margin:29px auto;font-weight:600;font-size:.6em;border-radius:5px;width:100px}.comment-input[_ngcontent-%COMP%]{margin:10px 0 0;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px}.comment-input[_ngcontent-%COMP%], .comment-input[_ngcontent-%COMP%]:hover{background:rgba(247,248,248,.5);height:auto;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{margin:12px 0 4px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(213,232,236,.3);height:auto;margin:20px 0 10px;box-shadow:none;padding-left:10px;border:3px solid #0055a5;border-radius:2px}.comment-input-mobile[_ngcontent-%COMP%], .comment-input-mobile[_ngcontent-%COMP%]:focus{transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]:focus{background:rgba(247,248,248,.5);height:100px;margin:30px 0 150px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-button[_ngcontent-%COMP%]{width:130px;--background:#0055a5;--background-hover:#0055a5;--color:#fff;font-size:.6em;font-size:800;border-radius:5px}ion-fab-button[_ngcontent-%COMP%]{--background:#1baf88;--color-focused:#fff;--color-hover:#fff;--color-activated:#fff;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(o){return new(o||t)},imports:[[c.k.forChild(y)],c.k]}),t})(),L=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(o){return new(o||t)},imports:[[e.b,i.d,s.a,i.l,r.T,k]]}),t})()}}]);