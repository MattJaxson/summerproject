(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{E2mU:function(t,e,o){"use strict";o.r(e),o.d(e,"AddPostPageModule",function(){return f});var n=o("ofXK"),i=o("3Pt+"),s=o("TEn/"),a=o("tyNb"),r=o("mrSG"),c=o("ENZJ"),l=o("Aso2"),b=o("fXoL");const h=["postChars"],g=["titleChars"],d=["hashtagRef"];function p(t,e){if(1&t){const t=b.Nb();b.Mb(0,"div",27),b.Mb(1,"p"),b.mc(2),b.Lb(),b.Mb(3,"img",28),b.Ub("click",function(){b.gc(t);const o=e.index;return b.Wb().deleteTag(o)}),b.Lb(),b.Lb()}if(2&t){const t=e.$implicit;b.xb(2),b.nc(t)}}const m=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i){this.router=t,this.loading=e,this.posts=o,this.profile=n,this.formBuilder=i,this.hashtags=[],this.validationMessages={}}ngAfterViewInit(){}ngOnInit(){this.textPostForm=this.formBuilder.group({title:["",i.n.required],hashtags:["",i.n.required],post:["",i.n.required]}),this.profile.getUserDetails().subscribe(t=>{console.log(t),this.creatorEmail=t.email,this.creatorName=t.fullName,this.creatorProfilePicture=t.profilePicture})}back(){this.router.navigate(["/home/posts"])}post(t,e,o,n,i,s){return Object(r.a)(this,void 0,void 0,function*(){yield this.presentLoading(),yield this.posts.addPost(t,e,o,n,i,s).subscribe(t=>{console.log(t)}),yield this.router.navigate(["home/posts/add-post/verification"])})}presentLoading(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.loading.create({message:"Sending post to be Verified...",spinner:"bubbles",duration:2e3});yield t.present(),yield t.onDidDismiss(),console.log("Loading dismissed!")})}addHashTag(t){console.log(t);let e=this.textPostForm.get("hashtags");"Enter"===t.code&&(console.log("ENTER button pressed."),console.log("Value: "),console.log(e.value),console.log("Hashtags: "),this.hashtags.push(e.value),console.log(this.hashtags))}deleteTag(t){console.log(t);let e=this.hashtags.indexOf(t);console.log(e),(e=-1)&&(this.hashtags.splice(e,1),console.log(this.hashtags))}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(a.f),b.Hb(s.S),b.Hb(c.a),b.Hb(l.a),b.Hb(i.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-add-post"]],viewQuery:function(t,e){if(1&t&&(b.sc(h,!0),b.sc(g,!0),b.sc(d,!0)),2&t){let t;b.ec(t=b.Vb())&&(e.postChars=t.first),b.ec(t=b.Vb())&&(e.titleChars=t.first),b.ec(t=b.Vb())&&(e.hashtagRef=t.first)}},decls:56,vars:3,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"header","ion-hide-md-down","ion-justify-content-center","ion-text-center",2,"margin","2% 0% 3% 0%"],["size","5"],["push","","size","5"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center",2,"margin-top","1%"],["size-xs","11","size-sm","10","size-md","9","size-lg","7","size-xl","6",1,"ion-text-center"],[1,"message","ion-hide-lg-up"],[1,"message","ion-hide-md-down"],[2,"border-top","#9993 solid 2px","margin-bottom","50px"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","9","size-lg","7","size-xl","6"],[3,"formGroup","ngSubmit"],[1,"line-input"],["autocapitalize","on","required","","inputmode","text","maxlength","100","formControlName","title","placeholder","Title"],["titleChars",""],["class","hashtag",4,"ngFor","ngForOf"],["autocapitalize","on","required","","inputmode","text","maxlength","100","clearInput","true","formControlName","hashtags","placeholder","Type tag then press Enter",3,"keydown"],["hashtagRef",""],[2,"height","auto"],["rows","50","auto-grow","true","spellcheck","true","maxlength","1000","formControlName","post","placeholder","What do you have to say?",3,"keydown.control.enter"],["postChars",""],[1,"char-limit"],["lines","none",2,"margin","15px 0 20px"],["type","submit",1,"orange-button"],["size-lg","6",1,"ion-text-center",2,"margin-bottom","100px"],[1,"hashtag"],["src","../../../../assets/icon/close-icon.svg","alt","","srcset","",3,"click"]],template:function(t,e){if(1&t&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",1),b.Ib(3,"ion-back-button"),b.Lb(),b.Mb(4,"ion-title"),b.mc(5,"Add Post"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content"),b.Mb(7,"ion-grid"),b.Mb(8,"ion-row",2),b.Mb(9,"ion-col",3),b.Mb(10,"h1"),b.mc(11,"New Post"),b.Lb(),b.Lb(),b.Mb(12,"ion-col",4),b.Mb(13,"ion-button",5),b.Ub("click",function(){return e.back()}),b.mc(14," Back "),b.Lb(),b.Lb(),b.Lb(),b.Mb(15,"ion-row",6),b.Mb(16,"ion-col",7),b.Mb(17,"p",8),b.mc(18,"Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!"),b.Lb(),b.Mb(19,"p",9),b.mc(20,"Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!"),b.Lb(),b.Ib(21,"hr",10),b.Lb(),b.Lb(),b.Mb(22,"ion-row",11),b.Mb(23,"ion-col",12),b.Mb(24,"form",13),b.Ub("ngSubmit",function(){return e.textPostForm.value.post.length>0?e.post(e.creatorName,e.creatorEmail,e.creatorProfilePicture,e.hashtags,e.textPostForm.controls.post.value,e.textPostForm.controls.title.value):null}),b.Mb(25,"ion-list",14),b.Mb(26,"ion-label"),b.mc(27,"Title"),b.Lb(),b.Mb(28,"ion-item"),b.Ib(29,"ion-input",15,16),b.Lb(),b.Mb(31,"ion-label"),b.mc(32,"Hashtags"),b.Lb(),b.Mb(33,"h5"),b.mc(34,"Please seperate each tag with a comma ( , ). You can add up to 5 hashtags."),b.Lb(),b.lc(35,p,4,1,"div",17),b.Mb(36,"ion-item"),b.Mb(37,"ion-input",18,19),b.Ub("keydown",function(t){return e.addHashTag(t)}),b.mc(39,"#"),b.Lb(),b.Lb(),b.Mb(40,"ion-label"),b.mc(41,"Post"),b.Lb(),b.Mb(42,"h5"),b.mc(43,"Keep your content clean. There is a filter for profane language. Administrative action will be taken against posts with too much profanity."),b.Lb(),b.Mb(44,"ion-item",20),b.Mb(45,"ion-textarea",21,22),b.Ub("keydown.control.enter",function(){return e.textPostForm.value.textPost.length>0?e.post(e.hashtags,e.creatorName,e.creatorEmail,e.creatorProfilePicture,e.textPostForm.value.textPost,e.textPostForm.value.title):null}),b.Lb(),b.Lb(),b.Mb(47,"p",23),b.mc(48),b.Lb(),b.Lb(),b.Mb(49,"ion-row"),b.Mb(50,"ion-col"),b.Mb(51,"ion-item",24),b.Mb(52,"ion-button",25),b.mc(53," Submit "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(54,"ion-row",11),b.Ib(55,"ion-col",26),b.Lb(),b.Lb(),b.Lb()),2&t){const t=b.fc(46);b.xb(24),b.Zb("formGroup",e.textPostForm),b.xb(11),b.Zb("ngForOf",e.hashtags),b.xb(13),b.oc("",t.value.length," / 3000 character limit")}},directives:[s.t,s.P,s.h,s.e,s.f,s.O,s.o,s.s,s.F,s.n,s.g,i.o,i.j,i.c,s.B,s.A,s.w,s.v,s.Y,i.m,i.e,i.i,i.b,n.i,s.N],styles:[".blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset;width:unset;height:36px;margin-top:20px;margin-bottom:4px;position:unset}ion-label[_ngcontent-%COMP%]{color:#0055a5;font-weight:600}h5[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{font-size:1em}h5[_ngcontent-%COMP%]{color:#222;margin-bottom:25px}.hashtag[_ngcontent-%COMP%]{background:#e1f0fc;width:300px;padding:.1px 10px;margin-bottom:14px;border-radius:5px;font-size:1em;color:#005191}.hashtag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .hashtag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block}.hashtag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px;float:right;position:relative;top:14px}.line-input[_ngcontent-%COMP%] > ion-item[_ngcontent-%COMP%]{margin-bottom:45px}.char-limit[_ngcontent-%COMP%]{position:relative;top:-35px;text-align:right}ion-title[_ngcontent-%COMP%]{margin:0}.message[_ngcontent-%COMP%]{font-size:1.05em;text-align:left;font-weight:600;line-height:1.5em;color:#555}.char-limit[_ngcontent-%COMP%]{color:#e4405f;margin-bottom:50px}@media only screen and (max-width:576px){.text-input[_ngcontent-%COMP%]{box-shadow:none;background:#edf3f8}}.item-interactive[_ngcontent-%COMP%]{--border-width:0px;--show-full-highlight:0}h6[_ngcontent-%COMP%]{padding:15px;line-height:35px;font-weight:400}"]}),t})()},{path:"verification",loadChildren:()=>o.e(43).then(o.bind(null,"Wtw0")).then(t=>t.VerificationPageModule)}];let u=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(m)],a.j]}),t})(),f=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[n.b,i.d,i.d,i.l,s.Q,u]]}),t})()}}]);