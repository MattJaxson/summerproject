(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{NZe1:function(n,t,e){"use strict";e.r(t),e.d(t,"MentorChatPageModule",function(){return p});var o=e("ofXK"),a=e("3Pt+"),i=e("TEn/"),r=e("tyNb"),b=e("mrSG"),s=e("R7fP"),c=e("fXoL");let l=(()=>{class n{constructor(){}chatId(){let n="chat-";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)n+=t.charAt(Math.floor(Math.random()*t.length));return n+=Date.now(),n}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const d=[{path:"",component:(()=>{class n{constructor(n,t,e){this.router=n,this.modal=t,this.mentorChat=e}ngOnInit(){}chatPage(){this.router.navigate(["home/mentors/mentor-chat/chat-page"])}newMessage(){return Object(b.a)(this,void 0,void 0,function*(){const n=yield this.modal.create({component:s.a,componentProps:{}});yield n.present()})}}return n.\u0275fac=function(t){return new(t||n)(c.Hb(r.f),c.Hb(i.T),c.Hb(l))},n.\u0275cmp=c.Bb({type:n,selectors:[["app-mentor-chat"]],decls:41,vars:0,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"toolbar-title"],["slot","end"],[3,"click"],["size","large","name","create",1,"new-message"],[1,"searchbar-wrapper","ion-hide-lg-up"],[1,"unread"],["src","../../../../assets/batman-pro-pic.png"],[1,"date-sent"],["side","end"],[1,"ion-hide-lg-down"],["size","6"]],template:function(n,t){1&n&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-buttons",1),c.Ib(3,"ion-back-button"),c.Mb(4,"p",2),c.mc(5,"Mentor Chat"),c.Lb(),c.Lb(),c.Mb(6,"ion-buttons",3),c.Mb(7,"ion-button",4),c.Ub("click",function(){return t.newMessage()}),c.Ib(8,"ion-icon",5),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"ion-content"),c.Mb(10,"ion-toolbar",6),c.Ib(11,"ion-searchbar"),c.Lb(),c.Mb(12,"ion-list",0),c.Mb(13,"ion-item-sliding",4),c.Ub("click",function(){return t.chatPage()}),c.Mb(14,"ion-item",7),c.Mb(15,"ion-avatar",1),c.Ib(16,"img",8),c.Lb(),c.Mb(17,"ion-label"),c.Mb(18,"h2"),c.mc(19,"Username "),c.Mb(20,"span",9),c.mc(21,"\xb7 date"),c.Lb(),c.Lb(),c.Mb(22,"p"),c.mc(23,"This is the message..."),c.Lb(),c.Lb(),c.Lb(),c.Ib(24,"ion-item-options",10),c.Lb(),c.Mb(25,"ion-item-sliding"),c.Mb(26,"ion-item"),c.Mb(27,"ion-avatar",1),c.Ib(28,"img",8),c.Lb(),c.Mb(29,"ion-label"),c.Mb(30,"h2"),c.mc(31,"Username "),c.Mb(32,"span",9),c.mc(33,"\xb7 date"),c.Lb(),c.Lb(),c.Mb(34,"p"),c.mc(35,"This is the message..."),c.Lb(),c.Lb(),c.Lb(),c.Ib(36,"ion-item-options",10),c.Lb(),c.Lb(),c.Mb(37,"ion-grid",11),c.Mb(38,"ion-row"),c.Ib(39,"ion-col",12),c.Ib(40,"ion-col",12),c.Lb(),c.Lb(),c.Lb())},directives:[i.u,i.P,i.h,i.e,i.f,i.g,i.v,i.o,i.H,i.Y,i.C,i.A,i.x,i.d,i.B,i.z,i.t,i.G,i.n],styles:[".new-message[_ngcontent-%COMP%]{color:#faa71b}ion-label[_ngcontent-%COMP%]{font-weight:800;display:block}.searchbar-wrapper[_ngcontent-%COMP%]{margin:20px 0}.unread[_ngcontent-%COMP%]{--background:#cbd7e6}.date-sent[_ngcontent-%COMP%]{font-size:.8em;opacity:.5}"]}),n})()},{path:"chat-page",loadChildren:()=>Promise.all([e.e(0),e.e(38)]).then(e.bind(null,"mEkD")).then(n=>n.ChatPagePageModule)}];let h=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(t){return new(t||n)},imports:[[r.j.forChild(d)],r.j]}),n})();var m=e("OWIS");let p=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(t){return new(t||n)},imports:[[o.b,a.d,i.Q,h,m.NewMessageMentorPageModule]]}),n})()}}]);