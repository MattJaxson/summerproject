(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{no2t:function(t,n,e){"use strict";e.r(n),e.d(n,"GoingPageModule",function(){return L});var i=e("ofXK"),o=e("3Pt+"),s=e("TEn/"),c=e("tyNb"),r=e("mrSG"),b=e("riPR"),a=e("Aso2"),l=e("sWYD"),g=e("7xvl"),u=e("xcW5"),d=e("fXoL");function h(t,n){1&t&&(d.Mb(0,"ion-row",8),d.Mb(1,"ion-col",11),d.Mb(2,"p"),d.mc(3,"You have no events saved in My Events list."),d.Lb(),d.Lb(),d.Lb())}function v(t,n){if(1&t){const t=d.Nb();d.Mb(0,"ion-row",12),d.Mb(1,"ion-col",13),d.Ib(2,"img",14),d.Lb(),d.Mb(3,"ion-col",15),d.Mb(4,"p"),d.mc(5),d.Lb(),d.Mb(6,"p"),d.mc(7),d.Lb(),d.Mb(8,"p"),d.mc(9),d.Lb(),d.Lb(),d.Mb(10,"ion-col",16),d.Mb(11,"ion-button",17),d.Ub("click",function(){d.gc(t);const e=n.$implicit;return d.Wb().eventPage(e)}),d.mc(12," Details "),d.Lb(),d.Mb(13,"ion-button",18),d.Ub("click",function(){d.gc(t);const e=n.$implicit;return d.Wb().presentAlertMultipleButtons(e._id)}),d.mc(14," Cancel "),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=n.$implicit;d.xb(5),d.nc(t.title),d.xb(2),d.nc(t.time),d.xb(2),d.nc(t.date)}}function m(t,n){1&t&&(d.Mb(0,"ion-row",8),d.Mb(1,"ion-col",11),d.Mb(2,"p"),d.mc(3,"You have no events saved in My Events list."),d.Lb(),d.Lb(),d.Lb())}function p(t,n){if(1&t){const t=d.Nb();d.Mb(0,"ion-card"),d.Ib(1,"img",19),d.Mb(2,"ion-card-header",20),d.Ub("click",function(){d.gc(t);const e=n.$implicit;return d.Wb().eventPage(e)}),d.Mb(3,"ion-card-title"),d.mc(4),d.Lb(),d.Mb(5,"ion-card-subtitle"),d.mc(6),d.Lb(),d.Mb(7,"ion-card-subtitle"),d.mc(8),d.Lb(),d.Mb(9,"ion-card-subtitle"),d.mc(10),d.Lb(),d.Lb(),d.Mb(11,"ion-card-content",21),d.Mb(12,"ion-button",17),d.Ub("click",function(){d.gc(t);const e=n.$implicit;return d.Wb().eventPage(e)}),d.mc(13," Details "),d.Lb(),d.Mb(14,"ion-button",18),d.Ub("click",function(){d.gc(t);const e=n.$implicit;return d.Wb().cancel(e._id)}),d.mc(15," Cancel "),d.Lb(),d.Lb(),d.Lb()}if(2&t){const t=n.$implicit;d.xb(4),d.nc(t.title),d.xb(2),d.nc(t.time),d.xb(2),d.nc(t.date),d.xb(2),d.pc(" ",t.city,", ",t.state,"")}}const f=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,s,c,r){this.router=t,this.events=n,this.profile=e,this.cdr=i,this.toast=o,this.alert=s,this.eventEmitterService=c,this.location=r,this.goingToEvents=[]}ngOnDestroy(){this.profileSub.unsubscribe(),this.eventsGoingSub.unsubscribe()}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.profileSub=this.profile.getUserDetails().subscribe(t=>{this.id=t._id,this.userEmail=t.email,this.eventsGoingSub=this.events.eventsGoing$.subscribe(t=>{this.goingToEvents=t}),console.log("getting event user "+this.id+" is going to"),this.refreshGoingEvents()})}eventPage(t){this.router.navigate(["/home/events/events-page",t._id,t.title,t.addressOne,t.addressOne,t.city,t.state,t.zip,t.dateCreated,t.date,t.time,t.photo,t.description])}goBack(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/events"])}cancel(t){console.log(t),console.log(`Removing ${t} from this Users eventsGoing property`),this.cancelSub=this.events.notGoingToEvent(t,this.userEmail,this.id).subscribe(n=>{const e=this.events.eventsGoing$.getValue();for(let i=0;i<e.length;i++)e[i]===t&&e.splice(i,1);console.log(e),this.goingToEvents=e,this.events.eventsGoing$.next(e),this.eventEmitterService.resetEvents(),this.presentNotGoingToast()})}refreshGoingEvents(){this.eventsGoingSub=this.events.getEventsGoing(this.id).subscribe(t=>{this.goingToEvents=Object.values(t),this.goingToEvents.reverse(),console.log("Updated events going list: "+this.goingToEvents);for(const n of this.goingToEvents)n.date=Object(l.a)(new Date(n.date),"MMMM dd, yyyy"),n.time=Object(l.a)(new Date(n.date),"hh:mm a"),n.dateCreated=Object(g.a)(new Date(n.dateCreated),{includeSeconds:!0,addSuffix:!0})})}presentNotGoingToast(){return Object(r.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:'You are no longer going to event. It has been removed from your "Going" list',duration:2e3})).present()})}presentAlertMultipleButtons(t){return Object(r.a)(this,void 0,void 0,function*(){const n=yield this.alert.create({header:"Are you sure you want to delete this from My Events?",buttons:[{text:"Yes",handler:()=>(this.cancel(t),!0)},{text:"Cancel",role:"cancel",handler:()=>{console.log("confirm cancel")}}]});yield n.present()})}}return t.\u0275fac=function(n){return new(n||t)(d.Hb(c.f),d.Hb(b.a),d.Hb(a.a),d.Hb(d.i),d.Hb(s.Z),d.Hb(s.a),d.Hb(u.a),d.Hb(i.l))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-going"]],decls:22,vars:4,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-md-down"],[1,"ion-justify-content-center","ion-align-items-center",2,"margin-top","5%"],["pull",".1","size","8",1,"ion-align-self-center"],[1,"ion-float-right","blue-button",2,"position","relative","top","-40px",3,"click"],["class","ion-justify-content-center",4,"ngIf"],["class","ion-justify-content-center","style","margin-top: 5%;",4,"ngFor","ngForOf"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","9"],[4,"ngFor","ngForOf"],["size","10",1,"ion-text-center",2,"margin-top","3%"],[1,"ion-justify-content-center",2,"margin-top","5%"],["size","2"],["src","../assets/Journi_flyer.jpg",1,"thumbnail"],["size","4"],["size","2",1,"ion-text-center"],[1,"grey-button",3,"click"],[1,"orange-button",3,"click"],["src","../assets/Journi_flyer.jpg"],[3,"click"],[1,"ion-text-center"]],template:function(t,n){1&t&&(d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-buttons",1),d.Ib(3,"ion-back-button"),d.Lb(),d.Mb(4,"ion-title"),d.mc(5,"My Events"),d.Lb(),d.Lb(),d.Lb(),d.Mb(6,"ion-content"),d.Mb(7,"ion-grid",2),d.Mb(8,"ion-row",3),d.Mb(9,"ion-col",4),d.Mb(10,"div"),d.Mb(11,"h1"),d.mc(12,"My Events"),d.Lb(),d.Lb(),d.Mb(13,"ion-button",5),d.Ub("click",function(){return n.goBack()}),d.mc(14," Go Back "),d.Lb(),d.Lb(),d.Lb(),d.lc(15,h,4,0,"ion-row",6),d.lc(16,v,15,3,"ion-row",7),d.Lb(),d.Mb(17,"ion-grid",0),d.lc(18,m,4,0,"ion-row",6),d.Mb(19,"ion-row",8),d.Mb(20,"ion-col",9),d.lc(21,p,16,5,"ion-card",10),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.xb(15),d.Zb("ngIf",0===n.goingToEvents.length),d.xb(1),d.Zb("ngForOf",n.goingToEvents),d.xb(2),d.Zb("ngIf",0===n.goingToEvents.length),d.xb(3),d.Zb("ngForOf",n.goingToEvents))},directives:[s.u,s.P,s.h,s.e,s.f,s.O,s.o,s.t,s.G,s.n,s.g,i.j,i.i,s.i,s.k,s.m,s.l,s.j],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.thumbnail[_ngcontent-%COMP%]{width:200px}p[_ngcontent-%COMP%]{font-size:1.2em;color:#999}hr[_ngcontent-%COMP%]{border:1px solid #999}ion-card[_ngcontent-%COMP%]{margin-top:5%}ion-card-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:47%}ion-card-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child{margin-right:5px}ion-card-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){margin-left:5px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(n){return new(n||t)},imports:[[c.j.forChild(f)],c.j]}),t})(),L=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(n){return new(n||t)},imports:[[i.b,o.d,s.Q,M]]}),t})()}}]);