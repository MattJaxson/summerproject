(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{n23q:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("oBZk"),s=e("ZZ/e"),a=e("SVse"),r=e("mrSG"),b=e("riPR"),c=e("Aso2");class p{constructor(l,n,e,t,u){this.activatedRoute=l,this.events=n,this.profile=e,this.router=t,this.toastController=u,this.going=!1}ngOnInit(){const l=this.activatedRoute.snapshot.paramMap.get("id"),n=this.activatedRoute.snapshot.paramMap.get("title"),e=this.activatedRoute.snapshot.paramMap.get("addressOne"),t=this.activatedRoute.snapshot.paramMap.get("addressTwo"),u=this.activatedRoute.snapshot.paramMap.get("city"),o=this.activatedRoute.snapshot.paramMap.get("state"),i=this.activatedRoute.snapshot.paramMap.get("zip"),s=this.activatedRoute.snapshot.paramMap.get("date"),a=this.activatedRoute.snapshot.paramMap.get("dateCreated"),r=this.activatedRoute.snapshot.paramMap.get("time"),b=this.activatedRoute.snapshot.paramMap.get("description"),c=this.activatedRoute.snapshot.paramMap.get("photo");this.eventId=l,this.eventTitle=n,this.eventAddressOne=e,this.eventAddressTwo=t,this.eventCity=u,this.eventState=o,this.eventZip=i,this.eventDateCreated=a,this.eventDate=s,this.eventTime=r,this.eventDescription=b,this.eventPhoto=c,this.profile.getUserDetails().subscribe(l=>{this.id=l._id;let n=l.eventsGoing;console.log(n),this.going=!!n.includes(this.eventId),console.log()})}goingToEvent(){this.going=!0,this.presentGoingToast(),console.log("Adding ".concat(this.eventId," to this Users eventsGoing property")),this.events.goingToEvent(this.eventId,this.userEmail,this.id).subscribe(l=>{let n=[...Object.values(l.eventsGoing),this.eventId];this.events.eventsGoing$.next(n),console.log(this.events.eventsGoing$.getValue())})}notGoingToEvent(){this.going=!1,this.presentNotGoingToast(),console.log("Removing ".concat(this.eventId," from this Users eventsGoing property")),this.events.notGoingToEvent(this.eventId,this.userEmail,this.id).subscribe(l=>{const n=this.events.eventsGoing$.getValue();for(let e=0;e<n.length;e++)n[e]===this.eventId&&n.splice(e,1);console.log(n),this.events.eventsGoing$.next(n)})}presentGoingToast(){return r.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:'You are going to this Event. It has been saved to your "Going" list',duration:2e3})).present()}))}presentNotGoingToast(){return r.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:'You are no longer going to event. It has been removed from your "Going" list',duration:2e3})).present()}))}googleMaps(){console.log("Google Maps")}}var g=e("iInd"),d=t.zb({encapsulation:0,styles:[["span[_ngcontent-%COMP%]{color:#005191;font-weight:600}ion-header[_ngcontent-%COMP%]::after{background-image:none}.event-header[_ngcontent-%COMP%]{height:40vh;background-attachment:fixed}ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{color:#fff;height:45px;border-radius:5px;font-size:.9em;text-transform:none}"]],data:{}});function h(l){return t.Tb(0,[(l()(),t.Bb(0,0,null,null,4,"ion-button",[["style","--padding-end: 20px;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.notGoingToEvent()&&t),t}),i.R,i.d)),t.Ab(1,49152,null,0,s.l,[t.j,t.p,t.F],null,null),(l()(),t.Sb(-1,0,[" No longer going to this Event? "])),(l()(),t.Bb(3,0,null,0,1,"ion-icon",[["name","close-circle-outline"],["size","large"],["style","color: #e4405f"]],null,null,null,i.gb,i.s)),t.Ab(4,49152,null,0,s.D,[t.j,t.p,t.F],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,4,0,"close-circle-outline","large")}),null)}function v(l){return t.Tb(0,[(l()(),t.Bb(0,0,null,null,4,"ion-button",[["style","--padding-end: 20px;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goingToEvent()&&t),t}),i.R,i.d)),t.Ab(1,49152,null,0,s.l,[t.j,t.p,t.F],null,null),(l()(),t.Sb(-1,0,[" Want to go to this Event? "])),(l()(),t.Bb(3,0,null,0,1,"ion-icon",[["name","add-circle"],["size","large"],["style","color: #21ce99"]],null,null,null,i.gb,i.s)),t.Ab(4,49152,null,0,s.D,[t.j,t.p,t.F],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,4,0,"add-circle","large")}),null)}function m(l){return t.Tb(0,[(l()(),t.Bb(0,0,null,null,14,"ion-header",[],null,null,null,i.fb,i.r)),t.Ab(1,49152,null,0,s.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,12,"ion-toolbar",[],null,null,null,i.Bb,i.N)),t.Ab(3,49152,null,0,s.Db,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.S,i.e)),t.Ab(5,49152,null,0,s.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Nb(l,8).onClick(e)&&u),u}),i.Q,i.c)),t.Ab(7,49152,null,0,s.h,[t.j,t.p,t.F],null,null),t.Ab(8,16384,null,0,s.i,[[2,s.jb],s.Jb],null,null),(l()(),t.Bb(9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.S,i.e)),t.Ab(10,49152,null,0,s.m,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,h)),t.Ab(12,16384,null,0,a.i,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,v)),t.Ab(14,16384,null,0,a.i,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(15,0,null,null,42,"ion-content",[["fullscreen","true"]],null,null,null,i.Z,i.l)),t.Ab(16,49152,null,0,s.v,[t.j,t.p,t.F],{fullscreen:[0,"fullscreen"]},null),(l()(),t.Bb(17,0,null,0,40,"ion-grid",[["fixed",""]],null,null,null,i.eb,i.q)),t.Ab(18,49152,null,0,s.B,[t.j,t.p,t.F],{fixed:[0,"fixed"]},null),(l()(),t.Bb(19,0,null,0,38,"ion-row",[],null,null,null,i.qb,i.C)),t.Ab(20,49152,null,0,s.kb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(21,0,null,0,2,"ion-col",[["class","event-header"],["size","12"]],null,null,null,i.Y,i.k)),t.Ab(22,49152,null,0,s.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(23,0,null,0,0,"img",[["src","../assets/Journi_flyer.jpg"]],null,null,null,null,null)),(l()(),t.Bb(24,0,null,0,26,"ion-col",[["size","12"],["style","--ion-grid-column-padding: 20px;"]],null,null,null,i.Y,i.k)),t.Ab(25,49152,null,0,s.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(26,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.Bb(27,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Title:"])),(l()(),t.Bb(29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Sb(30,null,[" ",""])),(l()(),t.Bb(31,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.Bb(32,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Address: "])),(l()(),t.Bb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Sb(35,null,[""," ",", ",", ",", ",""])),(l()(),t.Bb(36,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.Bb(37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Date:"])),(l()(),t.Bb(39,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Sb(40,null,[" ",""])),(l()(),t.Bb(41,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.Bb(42,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Time:"])),(l()(),t.Bb(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Sb(45,null,[" ",""])),(l()(),t.Bb(46,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.Bb(47,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(-1,null,["Description:"])),(l()(),t.Bb(49,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Sb(50,null,[" ",""])),(l()(),t.Bb(51,0,null,0,6,"ion-col",[["class","ion-text-center"],["size","12"]],null,null,null,i.Y,i.k)),t.Ab(52,49152,null,0,s.u,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(53,0,null,0,2,"ion-button",[["class","orange-button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.googleMaps()&&t),t}),i.R,i.d)),t.Ab(54,49152,null,0,s.l,[t.j,t.p,t.F],null,null),(l()(),t.Sb(-1,0,[" Google Maps "])),(l()(),t.Bb(56,0,null,0,1,"p",[["style","opacity: 0.3; margin-top: 40px; background: rgba(205,205,205, 0.6); padding: 20px;"]],null,null,null,null,null)),(l()(),t.Sb(57,null,["posted: ",""]))],(function(l,n){var e=n.component;l(n,12,0,e.going),l(n,14,0,!e.going),l(n,16,0,"true"),l(n,18,0,""),l(n,22,0,"12"),l(n,25,0,"12"),l(n,52,0,"12")}),(function(l,n){var e=n.component;l(n,30,0,e.eventTitle),l(n,35,0,e.eventAddressOne,e.eventAddressTwo,e.eventCity,e.eventState,e.eventZip),l(n,40,0,e.eventDate),l(n,45,0,e.eventTime),l(n,50,0,e.eventDescription),l(n,57,0,e.eventDateCreated)}))}var f=t.xb("app-events-page",p,(function(l){return t.Tb(0,[(l()(),t.Bb(0,0,null,null,1,"app-events-page",[],null,null,null,m,d)),t.Ab(1,114688,null,0,p,[g.a,b.a,c.a,g.m,s.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),B=e("s7LF");class A{}e.d(n,"EventsPagePageModuleNgFactory",(function(){return M}));var M=t.yb(u,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[o.a,f]],[3,t.m],t.D]),t.Lb(4608,a.k,a.j,[t.z,[2,a.q]]),t.Lb(4608,B.q,B.q,[]),t.Lb(4608,s.c,s.c,[t.F,t.g]),t.Lb(4608,s.Ib,s.Ib,[s.c,t.m,t.w]),t.Lb(4608,s.Lb,s.Lb,[s.c,t.m,t.w]),t.Lb(1073742336,a.b,a.b,[]),t.Lb(1073742336,B.p,B.p,[]),t.Lb(1073742336,B.e,B.e,[]),t.Lb(1073742336,s.Fb,s.Fb,[]),t.Lb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.Lb(1073742336,A,A,[]),t.Lb(1073742336,u,u,[]),t.Lb(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);