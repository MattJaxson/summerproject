(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{JGKh:function(e,t,n){"use strict";n.r(t),n.d(t,"StudentChatPageModule",function(){return M});var s=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),r=n("mrSG"),c=n("gLVQ"),b=n("Y19J"),l=n("Aso2"),u=n("7xvl"),g=n("fXoL");function d(e,t){1&e&&(g.Mb(0,"div",9),g.Mb(1,"p"),g.mc(2,"You have "),g.Mb(3,"b"),g.mc(4,"no messages"),g.Lb(),g.mc(5," in your inbox. Please press the "),g.Ib(6,"ion-icon",10),g.mc(7," button to create a new message. "),g.Lb(),g.Lb())}function m(e,t){if(1&e){const e=g.Nb();g.Mb(0,"ion-item-sliding",4),g.Ub("click",function(){g.gc(e);const n=t.$implicit;return g.Wb().chatPage(n.chatId)}),g.Mb(1,"ion-item",11),g.Mb(2,"ion-avatar",1),g.Ib(3,"img",12),g.Lb(),g.Mb(4,"ion-label"),g.Mb(5,"h2"),g.mc(6),g.Mb(7,"span",13),g.mc(8),g.Lb(),g.Lb(),g.Mb(9,"p"),g.mc(10),g.Lb(),g.Lb(),g.Lb(),g.Ib(11,"ion-item-options",14),g.Lb()}if(2&e){const e=t.$implicit;g.xb(3),g.ac("src",e.isUser?e.respondingUserPhoto:e.requestingUserPhoto,g.ic),g.xb(3),g.oc("",e.isUser?e.respondingUserFullname:e.requestingUserFullname," "),g.xb(2),g.oc("\xb7 ",e.lastMessageTime,""),g.xb(2),g.nc(e.lastMessageText)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,s){this.router=e,this.modal=t,this.studentChat=n,this.profile=s}ngOnInit(){this.profile.getUserDetails().subscribe(e=>{this.fullName=e.fullName,this.profilePicture=e.profilePicture,this.email=e.email,this.studentChat.conversations$.subscribe(e=>{this.conversations=Object.values(e).reverse();for(let t of this.conversations){for(const e of t.messages)e.date=Object(u.a)(new Date(e.date));t.requestingUserEmail===this.email&&(t.isUser=!0),t.lastMessage=t.messages.slice(-1)[0],t.lastMessageText=t.lastMessage.text,t.lastMessageTime=t.lastMessage.date}})})}chatPage(e){this.router.navigate(["home/posts/student-chat/chat-page",e,this.fullName,this.profilePicture,this.email])}newMessage(){return Object(r.a)(this,void 0,void 0,function*(){const e=yield this.modal.create({component:c.a,componentProps:{}});yield e.present()})}delete(e){}}return e.\u0275fac=function(t){return new(t||e)(g.Hb(a.f),g.Hb(o.T),g.Hb(b.a),g.Hb(l.a))},e.\u0275cmp=g.Bb({type:e,selectors:[["app-student-chat"]],decls:15,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"toolbar-title"],["slot","end"],[3,"click"],["size","large","name","create",1,"new-message"],[1,"searchbar-wrapper","ion-hide-lg-up"],["id","no-messages","class","ion-text-center","style","margin-top: 75px; padding: 15px;",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["id","no-messages",1,"ion-text-center",2,"margin-top","75px","padding","15px"],["size","small","name","create",1,"new-message"],[1,"unread"],[3,"src"],[1,"date-sent"],["side","end"]],template:function(e,t){1&e&&(g.Mb(0,"ion-header",0),g.Mb(1,"ion-toolbar"),g.Mb(2,"ion-buttons",1),g.Ib(3,"ion-back-button"),g.Mb(4,"p",2),g.mc(5,"Student Chat"),g.Lb(),g.Lb(),g.Mb(6,"ion-buttons",3),g.Mb(7,"ion-button",4),g.Ub("click",function(){return t.newMessage()}),g.Ib(8,"ion-icon",5),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(9,"ion-content"),g.Mb(10,"ion-toolbar",6),g.Ib(11,"ion-searchbar"),g.Lb(),g.Mb(12,"ion-list",0),g.lc(13,d,8,0,"div",7),g.lc(14,m,12,4,"ion-item-sliding",8),g.Lb(),g.Lb()),2&e&&(g.xb(13),g.Zb("ngIf",0==t.conversations),g.xb(1),g.Zb("ngForOf",t.conversations))},directives:[o.t,o.P,o.h,o.e,o.f,o.g,o.u,o.o,o.G,o.Y,o.B,s.j,s.i,o.z,o.w,o.d,o.A,o.y],styles:[".new-message[_ngcontent-%COMP%]{color:#faa71b}ion-label[_ngcontent-%COMP%]{font-weight:800;display:block}.searchbar-wrapper[_ngcontent-%COMP%]{margin:20px 0}.unread[_ngcontent-%COMP%]{--background:#cbd7e6}.date-sent[_ngcontent-%COMP%]{font-size:.8em;opacity:.5}"]}),e})()},{path:"chat-page/:chatId/:fullName/:profilePicture/:email",loadChildren:()=>Promise.all([n.e(0),n.e(48)]).then(n.bind(null,"j1T8")).then(e=>e.ChatPagePageModule)}];let h=(()=>{class e{}return e.\u0275mod=g.Fb({type:e}),e.\u0275inj=g.Eb({factory:function(t){return new(t||e)},imports:[[a.j.forChild(p)],a.j]}),e})();var f=n("AhZb");let M=(()=>{class e{}return e.\u0275mod=g.Fb({type:e}),e.\u0275inj=g.Eb({factory:function(t){return new(t||e)},imports:[[s.b,i.d,o.Q,h,f.NewMessageStudentPageModule]]}),e})()}}]);