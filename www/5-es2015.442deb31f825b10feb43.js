(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EdnJ:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("mrSG"),o=n("R0Ic"),s=n("riPR"),a=n("Aso2"),c=n("xcW5"),r=n("fXoL"),l=n("TEn/"),g=n("tyNb"),b=n("ofXK");function h(t,e){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",10),r.Ub("click",function(){r.gc(t);const e=r.Wb();return e.toggleGoingState(e.event)}),r.nc(1," Go "),r.Lb()}}function d(t,e){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",11),r.Ub("click",function(){r.gc(t);const e=r.Wb();return e.toggleGoingState(e.event)}),r.nc(1," Cancel "),r.Lb()}}function u(t,e){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",12),r.Ub("click",function(){r.gc(t);const e=r.Wb();return e.toggleGoingState(e.event)}),r.nc(1," Go "),r.Lb()}}function v(t,e){if(1&t){const t=r.Nb();r.Mb(0,"ion-button",13),r.Ub("click",function(){r.gc(t);const e=r.Wb();return e.toggleGoingState(e.event)}),r.nc(1," Cancel "),r.Lb()}}let f=(()=>{class t{constructor(t,e,n,i,o){this.events=t,this.eventsEventEmitterService=e,this.toast=n,this.router=i,this.profile=o,this.going=!1,this.goingState="not-going",this.iconName="add-circle-outline"}ngOnInit(){this.profile.getUserDetails().subscribe(t=>{this.userEmail=t.email,t.eventsGoing.includes(this.event._id)?(this.going=!0,this.goingState="going"):(this.going=!1,this.goingState="not-going")})}toggleGoingState(t){"not-going"===this.goingState?(this.goingState="going",this.iconName="close-circle-outline",this.going=!0,this.goingToast(),console.log("Going to event, "+t.title),this.events.goingToEvent(t._id,this.userEmail,this.id).subscribe(t=>{let e=[...Object.values(t.eventsGoing),this.event._id];this.events.eventsGoing$.next(e),console.log(this.events.eventsGoing$.getValue())})):(this.goingState="not-going",this.iconName="add-circle-outline",this.going=!1,this.notGoingToast(),console.log("No longer going to Event"),this.events.notGoingToEvent(t._id,this.userEmail,this.id).subscribe(t=>{const e=this.events.eventsGoing$.getValue();for(let n=0;n<e.length;n++)e[n]===this.event._id&&e.splice(n,1);console.log(e),this.events.eventsGoing$.next(e)}))}goingToast(){return Object(i.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:"You are going to this event.",duration:2e3})).present()})}notGoingToast(){return Object(i.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:"You are no longer going to this event.",duration:2e3})).present()})}eventPage(t){this.router.navigate(["/home/events/events-page",t._id,t.title,t.addressOne,t.addressOne,t.city,t.state,t.zip,t.dateCreated,t.date,t.time,t.photo,t.description])}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(s.a),r.Hb(c.a),r.Hb(l.eb),r.Hb(g.g),r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-going-icon"]],inputs:{event:"event",userEmail:"userEmail",id:"id"},decls:14,vars:4,consts:[[1,"ion-hide-lg-down","ion-justify-content-center"],["size","5",2,"height","20px"],[1,"grey-button",3,"click"],["class","going",3,"click",4,"ngIf"],["class","not-going",3,"click",4,"ngIf"],[1,"ion-hide-lg-up","ion-justify-content-center",2,"margin-top","24px"],["size","11"],[1,"grey-button-mobile",3,"click"],["class","going-mobile",3,"click",4,"ngIf"],["class","not-going-mobile",3,"click",4,"ngIf"],[1,"going",3,"click"],[1,"not-going",3,"click"],[1,"going-mobile",3,"click"],[1,"not-going-mobile",3,"click"]],template:function(t,e){1&t&&(r.Mb(0,"ion-grid"),r.Mb(1,"ion-row",0),r.Mb(2,"ion-col",1),r.Mb(3,"ion-button",2),r.Ub("click",function(){return e.eventPage(e.event)}),r.nc(4," Details "),r.Lb(),r.Lb(),r.Mb(5,"ion-col",1),r.mc(6,h,2,0,"ion-button",3),r.mc(7,d,2,0,"ion-button",4),r.Lb(),r.Lb(),r.Mb(8,"ion-row",5),r.Mb(9,"ion-col",6),r.Mb(10,"ion-button",7),r.Ub("click",function(){return e.eventPage(e.event)}),r.nc(11," Details "),r.Lb(),r.mc(12,u,2,0,"ion-button",8),r.mc(13,v,2,0,"ion-button",9),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.xb(6),r.Zb("ngIf",!e.going),r.xb(1),r.Zb("ngIf",e.going),r.xb(5),r.Zb("ngIf",!e.going),r.xb(1),r.Zb("ngIf",e.going))},directives:[l.t,l.I,l.n,l.g,b.j],styles:["p[_ngcontent-%COMP%]{transition:.5s;opacity:1}ion-button[_ngcontent-%COMP%]{font-size:1em;font-weight:800;height:20px;width:100px;margin-left:0;margin-right:10px;display:inline}.not-going[_ngcontent-%COMP%]{--color:#fff;font-size:.65em;--background:linear-gradient(#faa71b,#e99b14)}.grey-button[_ngcontent-%COMP%]{margin-right:10px;--background:#222;--color:#edf3f8;font-size:.65em}.going[_ngcontent-%COMP%]{--color:#fff;font-size:.65em;--background:#24d8a8;--background-hover:#24d8a8}.not-going-mobile[_ngcontent-%COMP%]{--color:#fff;--background:linear-gradient(#faa71b,#e99b14)}.grey-button-mobile[_ngcontent-%COMP%], .not-going-mobile[_ngcontent-%COMP%]{display:block;width:100%;height:40px;font-size:1em}.grey-button-mobile[_ngcontent-%COMP%]{margin-right:10px;--background:#0055a5;--color:#edf3f8;top:-8px;position:relative}.going-mobile[_ngcontent-%COMP%]{--color:#fff;display:block;width:100%;height:40px;font-size:1em;--background:#24d8a8;--background-hover:#24d8a8}"],data:{animation:[Object(o.j)("going",[Object(o.g)("going",Object(o.h)({color:"blue",opacity:"0.4",transition:"0.5s",transform:"scale(0.9)"})),Object(o.g)("not-going",Object(o.h)({color:"#21ce99",opacity:"1",transition:"0.5s",transform:"scale(1)"})),Object(o.i)("not-going <=> going",Object(o.e)("100ms ease-out"))])]}}),t})()},Obr4:function(t,e,n){"use strict";n.r(e),n.d(e,"EventsPageModule",function(){return k});var i=n("ofXK"),o=n("3Pt+"),s=n("tyNb"),a=n("zAgk"),c=n("TEn/"),r=n("mrSG"),l=n("pLZG"),g=n("riPR"),b=n("sWYD"),h=n("7xvl"),d=n("Aso2"),u=n("xcW5"),v=n("/Tr7"),f=n("jIYg");function p(t,e){Object(f.a)(2,arguments);var n=Object(v.a)(t),i=Object(v.a)(e);return n.getTime()>i.getTime()}var m=n("fXoL"),E=n("EdnJ");function M(t,e){if(1&t&&(m.Mb(0,"ion-col",15),m.Mb(1,"ion-card",16),m.Ib(2,"img",17),m.Mb(3,"ion-card-header"),m.Mb(4,"ion-card-title"),m.nc(5),m.Lb(),m.Mb(6,"ion-card-subtitle"),m.nc(7),m.Lb(),m.Mb(8,"ion-card-subtitle"),m.nc(9),m.Lb(),m.Lb(),m.Mb(10,"ion-card-content",18),m.Mb(11,"ion-toolbar",19),m.Ib(12,"app-going-icon",20),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&t){const t=e.$implicit,n=m.Wb();m.xb(2),m.ac("src",t.photo,m.ic),m.xb(3),m.oc(t.title),m.xb(2),m.oc(t.time),m.xb(2),m.oc(t.date),m.xb(3),m.Zb("event",t)("userEmail",n.userEmail)("id",n.id)}}let O=(()=>{class t{constructor(t,e,n,i,o){this.router=t,this.events=e,this.profile=n,this.loading=i,this.eventEmitterService=o,this.searching=!1,this.noSearchInput=!1}ngOnInit(){this.deleteEvent(),this.trackRoute(),null==this.eventEmitterService.subsVar&&(this.eventEmitterService.subsVar=this.eventEmitterService.invokeEventsPageRefresh.subscribe(()=>{this.getEvents()})),this.profileSub=this.profile.getUserDetails().subscribe(t=>{this.id=t._id,this.userEmail=t.email,this.events.eventsGoing$.next(t.eventsGoing),this.eventsGoingSub=this.events.eventsGoing$.subscribe(t=>{console.log(t.length),this.eventsGoingLength=t.length}),console.log("User id: "+this.id),console.log("User email: "+this.userEmail)}),this.eventsGoing=this.events.getEvents().subscribe(t=>{this.allEvents=Object.values(t),this.allEventsLength=this.allEvents.length,this.allEvents.reverse(),console.log(this.allEvents),this.loadedAllEvents=Object.values(t),this.loadedAllEvents.reverse();for(const e of this.allEvents)p(new Date(Date.now()),new Date(e.date))&&(this.deleteEventSub=this.events.deleteEvent(e._id).subscribe()),e.date=Object(b.a)(new Date(e.date),"MMMM dd, yyyy"),e.time=Object(b.a)(new Date(e.date),"hh:mm a"),e.dateCreated=Object(h.a)(new Date(e.dateCreated),{includeSeconds:!0,addSuffix:!0})})}trackRoute(){this.routerSub=this.router.events.pipe(Object(l.a)(t=>t instanceof s.c)).subscribe(t=>{if(console.log(t.url),t.url.includes("/home/events/event-page/")){console.log("Hide Tab Bar!");let t=document.getElementById("tabBar");t.style.height="0px",t.style.transition="1s"}else{let t=document.getElementById("tabBar");console.log(t),t.style.height="50px",t.style.transition="1s"}})}deleteEvent(){var t=p(new Date(1989,6,10),new Date(1987,1,11));console.log(t)}eventPage(t){this.router.navigate(["/home/events/events-page",t._id,t.title,t.addressOne,t.addressOne,t.city,t.state,t.zip,t.dateCreated,t.date,t.time,t.photo,t.description])}myEvents(){this.router.navigate(["/home/events/going"])}filter(t){this.initializeItems();let e=t.detail.value;this.presentLoadingWithOptions(),this.allEvents=this.allEvents.filter(t=>{if(console.log(t),t&&e||(console.log("No results from that search"),this.noSearchInput=!0),t.title&&e)return t.title.toLowerCase().indexOf(e.toLowerCase())>-1&&(console.log(t.title),console.log(t),this.searchTerm=e,this.searching=!0,this.noSearchInput=!1,!0);this.noSearchInput=!0}),this.allEventsLength=this.allEvents.length,0===this.allEventsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=e,this.searchbar.getInputElement().then(t=>{t.value=""}),this.noSearchInput=!0),e||(console.log("Search term is empty; showing all events instead"),this.noSearchInput=!1,this.searching=!1,this.getEvents())}initializeItems(){this.allEvents=this.loadedAllEvents}presentLoadingWithOptions(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.loading.create({duration:1e3,message:"Searching for Events...",translucent:!0,cssClass:"custom-class custom-loading",keyboardClose:!1});return yield t.present()})}doRefresh(t){return Object(r.a)(this,void 0,void 0,function*(){this.allEvents=[],this.eventsSub=this.events.getEvents().subscribe(t=>{this.allEvents=Object.values(t),this.allEventsLength=this.allEvents.length,this.allEvents.reverse(),this.searching=!1;for(const e of this.allEvents)p(new Date(Date.now()),new Date(e.date))&&(this.deleteEventSub=this.events.deleteEvent(e._id).subscribe()),e.date=Object(b.a)(new Date(e.date),"MMMM dd, yyyy"),e.dateCreated=Object(h.a)(new Date(e.dateCreated),{includeSeconds:!0,addSuffix:!0}),e.time=Object(b.a)(new Date(e.date),"hh:mm a")}),setTimeout(()=>{t.target.complete(),console.log("Events Refreshed")},2e3),yield console.log("Refreshing Events Page..")})}getEvents(){return Object(r.a)(this,void 0,void 0,function*(){this.eventsSub=this.events.getEvents().subscribe(t=>{this.allEvents=Object.values(t),this.allEventsLength=this.allEvents.length,this.allEvents.reverse(),this.searching=!1;for(const e of this.allEvents)e.date=Object(b.a)(new Date(e.date),"MMMM dd, yyyy"),e.dateCreated=Object(h.a)(new Date(e.dateCreated),{includeSeconds:!0,addSuffix:!0}),e.time=Object(b.a)(new Date(e.date),"hh:mm a")})})}}return t.\u0275fac=function(e){return new(e||t)(m.Hb(s.g),m.Hb(g.a),m.Hb(d.a),m.Hb(c.V),m.Hb(u.a))},t.\u0275cmp=m.Bb({type:t,selectors:[["app-events"]],viewQuery:function(t,e){if(1&t&&m.tc(c.J,!0),2&t){let t;m.ec(t=m.Vb())&&(e.searchbar=t.first)}},decls:25,vars:1,consts:[[1,"ion-hide-lg-up"],["color","light","name","calendar-outline",2,"position","relative","left","24px"],["slot","end"],[2,"width","100px","--background","#faa71b","font-weight","600",3,"click"],["slot","fixed",3,"ionRefresh"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","start"],["height","50","src","../../../assets/icon/my-events-icon.svg","alt","","srcset",""],[1,"my-events-button",3,"click"],[1,"ion-justify-content-center"],[1,"spacer","ion-hide-lg-down"],["size-xs","12","size-sm","10","size-md","10","size-lg","8","size-xl","8"],["size-xs","12","size-sm","10","size-md","8","size-lg","3","size-xl","3",4,"ngFor","ngForOf"],["size-xs","12","size-sm","10","size-md","8","size-lg","3","size-xl","3"],[1,"event-card"],[3,"src"],[1,"ion-text-center"],[2,"--background","none","height","auto"],[3,"event","userEmail","id"]],template:function(t,e){1&t&&(m.Mb(0,"ion-header",0),m.Mb(1,"ion-toolbar"),m.Ib(2,"ion-icon",1),m.Mb(3,"ion-buttons",2),m.Mb(4,"ion-button",3),m.Ub("click",function(){return e.myEvents()}),m.nc(5," My Events "),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(6,"ion-content"),m.Mb(7,"ion-refresher",4),m.Ub("ionRefresh",function(t){return e.doRefresh(t)}),m.Ib(8,"ion-refresher-content"),m.Lb(),m.Mb(9,"ion-grid"),m.Mb(10,"ion-row",5),m.Mb(11,"ion-col",6),m.Mb(12,"ion-toolbar",7),m.Mb(13,"ion-buttons",8),m.Ib(14,"img",9),m.Mb(15,"h1"),m.nc(16,"Events"),m.Lb(),m.Lb(),m.Mb(17,"ion-buttons",2),m.Mb(18,"ion-button",10),m.Ub("click",function(){return e.myEvents()}),m.nc(19," My Events "),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Mb(20,"ion-row",11),m.Ib(21,"div",12),m.Mb(22,"ion-col",13),m.Mb(23,"ion-row",11),m.mc(24,M,13,7,"ion-col",14),m.Lb(),m.Lb(),m.Lb(),m.Lb(),m.Lb()),2&t&&(m.xb(24),m.Zb("ngForOf",e.allEvents))},directives:[c.u,c.S,c.v,c.h,c.g,c.o,c.F,c.G,c.t,c.I,c.n,i.i,c.i,c.k,c.m,c.l,c.j,E.a],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 5px rgba(0,0,0,.1)}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2em}ion-card[_ngcontent-%COMP%]{--background:#fff;margin:0 0 50px;position:relative;padding-bottom:32px;box-shadow:1px 10px 10px rgba(0,0,0,.1)}ion-searchbar[_ngcontent-%COMP%]{--background:#fff;margin-left:10px;border-radius:5px;--height:30px;width:95%;font-size:.8em;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;transition:.5s}.job-section[_ngcontent-%COMP%]{height:230px;color:#777;position:relative;top:20px;width:100%}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}h6.text-header[_ngcontent-%COMP%]{padding:unset;text-align:center}--ion-buttons[_ngcontent-%COMP%]{--color:#888}ion-button[_ngcontent-%COMP%]{--background:none}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5em}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5;position:relative;left:8px}.my-events-button[_ngcontent-%COMP%]{--color:#fff;--background:#e3405f;--background-hover:linear-gradient(#e3405f,#5f4045);height:24px;width:100px;font-size:.5em;font-weight:600;display:block}ion-card-title[_ngcontent-%COMP%]{font-size:1em;font-weight:600;color:#0055a5}ion-card-subtitle[_ngcontent-%COMP%]{font-size:1em}"]}),t})();const x=[{path:"",component:O},{path:"events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description",loadChildren:()=>n.e(34).then(n.bind(null,"kH/Y")).then(t=>t.EventsPagePageModule)},{path:"going",loadChildren:()=>n.e(35).then(n.bind(null,"no2t")).then(t=>t.GoingPageModule)}];let y=(()=>{class t{}return t.\u0275mod=m.Fb({type:t}),t.\u0275inj=m.Eb({factory:function(e){return new(e||t)},imports:[[s.k.forChild(x)],s.k]}),t})(),k=(()=>{class t{}return t.\u0275mod=m.Fb({type:t}),t.\u0275inj=m.Eb({factory:function(e){return new(e||t)},imports:[[a.a,i.b,o.d,c.T,y,s.k.forChild([{path:"",component:O}])]]}),t})()},riPR:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("AytR"),o=n("2Vo4"),s=n("Aso2"),a=n("fXoL"),c=n("tk/3");let r=(()=>{class t{constructor(t,e){this.http=t,this.profile=e,this.eventsGoing$=new o.a([]),this.BACKEND_URL=i.a.url}getEvents(){return console.log("Getting Events"),this.http.get(this.BACKEND_URL+"/api/events")}getEventsGoing(t){return this.http.post(this.BACKEND_URL+"/api/events/events-going",{_id:t})}goingToEvent(t,e,n){return console.log(this.profile),this.http.post(this.BACKEND_URL+"/api/events/go-to-event",{eventID:t,userEmail:e,id:n})}notGoingToEvent(t,e,n){return this.http.post(this.BACKEND_URL+"/api/events/dont-go-to-event",{userEmail:e,eventID:t,id:n})}deleteEvent(t){return this.http.post(this.BACKEND_URL+"/api/events/delete-event",{_id:t})}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(c.b),a.Qb(s.a))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xcW5:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL");let o=(()=>{class t{constructor(){this.invokeEventsPageRefresh=new i.o}onBackAction(){this.invokeEventsPageRefresh.emit()}resetEvents(){console.log("Reseting Events Page"),this.invokeEventsPageRefresh.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);