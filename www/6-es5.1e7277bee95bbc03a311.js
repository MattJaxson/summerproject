(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5ENJ":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var i=t("pMnS"),u=t("oBZk"),s=t("ZZ/e"),r=t("SVse"),a=t("mrSG"),c=t("riPR"),b=t("Aso2"),g=t("U8oy");class h{constructor(n,l,t,e,o){this.events=n,this.favs=l,this.toast=t,this.router=e,this.profile=o,this.going=!1,this.goingState="not-going",this.iconName="add-circle-outline"}ngOnInit(){this.profile.getUserDetails().subscribe(n=>{this.userEmail=n.email,this.events=n.eventsGoing})}toggleGoingState(n){"not-going"===this.goingState?(this.goingState="going",this.iconName="close-circle-outline",this.going=!0,this.goingToast(),console.log("Going to event, ".concat(n.title)),this.events.getEvents()):(this.goingState="not-going",this.iconName="add-circle-outline",this.going=!1,this.notGoingToast(),console.log("No longer going to Event"))}goingToast(){return a.b(this,void 0,void 0,(function*(){(yield this.toast.create({message:"You are going to this event.",duration:2e3})).present()}))}notGoingToast(){return a.b(this,void 0,void 0,(function*(){(yield this.toast.create({message:"You are no longer going to this event.",duration:2e3})).present()}))}eventPage(n){this.router.navigate(["/home/events/events-page",n._id,n.title,n.addressOne,n.addressOne,n.city,n.state,n.zip,n.dateCreated,n.date,n.time,n.photo,n.description])}}var d=t("iInd"),p=e.zb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{-webkit-transition:.5s;transition:.5s;opacity:1}ion-button[_ngcontent-%COMP%]{font-size:1em;font-weight:800;height:50px;width:90%;margin:5px;--background:none;--color:#21ce99;--border-style:solid;--border-color:#21ce99;--border-width:2px}.not-going[_ngcontent-%COMP%]{--color:#e4405f;--border-style:solid;--border-color:#e4405f;--border-width:2px}.event-details[_ngcontent-%COMP%]{--color:#999;--border-style:solid;--border-color:#999;--border-width:2px}"]],data:{animation:[{type:7,name:"going",definitions:[{type:0,name:"going",styles:{type:6,styles:{color:"blue",opacity:"0.4",transition:"0.5s",transform:"scale(0.9)"},offset:null},options:void 0},{type:0,name:"not-going",styles:{type:6,styles:{color:"#21ce99",opacity:"1",transition:"0.5s",transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"not-going <=> going",animation:{type:4,styles:null,timings:"100ms ease-out"},options:null}],options:{}}]}});function v(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.toggleGoingState(o.event)&&e),e}),u.R,u.d)),e.Ab(1,49152,null,0,s.l,[e.j,e.p,e.F],null,null),(n()(),e.Sb(-1,0,[" Go to Event\n"]))],null,null)}function f(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,2,"ion-button",[["class","not-going"]],null,[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.toggleGoingState(o.event)&&e),e}),u.R,u.d)),e.Ab(1,49152,null,0,s.l,[e.j,e.p,e.F],null,null),(n()(),e.Sb(-1,0,[" Cancel\n"]))],null,null)}function m(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,2,"ion-button",[["class","event-details"]],null,[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.eventPage(o.event)&&e),e}),u.R,u.d)),e.Ab(1,49152,null,0,s.l,[e.j,e.p,e.F],null,null),(n()(),e.Sb(-1,0,[" View Event Details\n"])),(n()(),e.qb(16777216,null,null,1,null,v)),e.Ab(4,16384,null,0,r.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,null,1,null,f)),e.Ab(6,16384,null,0,r.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,!t.going),n(l,6,0,t.going)}),null)}var B=t("s7LF"),A=t("sWYD"),E=t("7xvl");class j{constructor(n,l,t,e,o){this.router=n,this.events=l,this.profile=t,this.toast=e,this.loading=o,this.eventsGoingLength=0,this.searching=!1,this.noSearchInput=!1}ngAfterViewInit(){this.searchbar.getInputElement().then(n=>{n.style.boxShadow="none"})}ngOnInit(){this.profile.getUserDetails().subscribe(n=>{this.id=n._id,this.userEmail=n.email,this.events.eventsGoing$.next(n.eventsGoing),this.events.eventsGoing$.subscribe(n=>{this.eventsGoingLength=Object.values(n).length}),console.log("User id: "+this.id),console.log("User email: "+this.userEmail)}),this.events.getEvents().subscribe(n=>{console.log("Events that are intially loaded: "),console.log(n),this.allEvents=Object.values(n),this.allEventsLength=this.allEvents.length,this.allEvents.reverse(),this.loadedAllEvents=Object.values(n),this.loadedAllEvents.reverse();for(const l of this.allEvents)l.date=Object(A.a)(new Date(l.date),"MMMM dd, yyyy"),l.time=Object(A.a)(new Date(l.date),"hh:mm a"),l.dateCreated=Object(E.a)(new Date(l.dateCreated),{includeSeconds:!0,addSuffix:!0})})}eventPage(n){this.router.navigate(["/home/events/events-page",n._id,n.title,n.addressOne,n.addressOne,n.city,n.state,n.zip,n.dateCreated,n.date,n.time,n.photo,n.description])}going(){this.router.navigate(["/home/events/going"])}filter(n){this.initializeItems();let l=n.detail.value;l||(console.log("No results returned from Search"),this.noSearchInput=!0),this.presentLoadingWithOptions(),this.allEvents=this.allEvents.filter(n=>{if(console.log(n),n&&l||(console.log("No results from that search"),this.noSearchInput=!0),n.title&&l)return n.title.toLowerCase().indexOf(l.toLowerCase())>-1&&(console.log(n.title),console.log(n),this.searchTerm=l,this.searching=!0,this.noSearchInput=!1,!0);this.noSearchInput=!0}),this.allEventsLength=this.allEvents.length,0===this.allEventsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=l,this.searchbar.getInputElement().then(n=>{n.value=""}),this.noSearchInput=!0)}initializeItems(){this.allEvents=this.loadedAllEvents}presentLoadingWithOptions(){return a.b(this,void 0,void 0,(function*(){const n=yield this.loading.create({duration:1e3,message:"Searching for Events...",translucent:!0,cssClass:"custom-class custom-loading"});return yield n.present()}))}doRefresh(n){return a.b(this,void 0,void 0,(function*(){this.allEvents=[],yield this.events.getEvents().subscribe(n=>{this.allEvents=Object.values(n),this.allEventsLength=this.allEvents.length,this.allEvents.reverse(),this.searching=!1;for(const l of this.allEvents)l.date=Object(A.a)(new Date(l.date),"MMMM dd, yyyy"),l.dateCreated=Object(E.a)(new Date(l.dateCreated),{includeSeconds:!0,addSuffix:!0}),l.time=Object(A.a)(new Date(l.date),"hh:mm a")}),setTimeout(()=>{n.target.complete(),console.log("Events Refreshed")},2e3),yield this.searchbar.getInputElement().then(n=>{n.value="",this.noSearchInput=!1}),yield console.log("Refreshing Events Page..")}))}}var y=e.zb({encapsulation:0,styles:[["ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:35px;border-radius:5px;padding:0;--color:#ffffff;font-size:.7em;opacity:1}a[_ngcontent-%COMP%]{color:#005191;padding-bottom:15px;font-size:1.2em;font-weight:800;-webkit-transition:.5s;transition:.5s}a[_ngcontent-%COMP%]:hover, ion-icon[_ngcontent-%COMP%]{color:#faa71b}#logo[_ngcontent-%COMP%]{height:40px}ion-title[_ngcontent-%COMP%]{color:#555;font-size:1.2em}ion-card[_ngcontent-%COMP%]{background:#fff}ion-toolbar[_ngcontent-%COMP%]{padding:10px;--background:none}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:#999;font-weight:700;font-size:1.2em}.events-toolbar[_ngcontent-%COMP%]{--background:white}.going[_ngcontent-%COMP%]{font-size:1em;font-weight:800;height:50px;width:90%;margin:5px;--background:none;--color:#999;--border-style:solid;--border-color:#999;--border-width:2px}ion-row[_ngcontent-%COMP%]{margin-top:10px}ion-searchbar[_ngcontent-%COMP%]{--background:white;border-radius:5px;--height:60px;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;-webkit-transition:.5s;transition:.5s;padding:5px}.searchbar-input.sc-ion-searchbar-md[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px}"]],data:{}});function w(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,6,"ion-row",[["class","ion-text-center"]],null,null,null,u.qb,u.C)),e.Ab(1,49152,null,0,s.kb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,4,"ion-col",[["size","12"]],null,null,null,u.Y,u.k)),e.Ab(3,49152,null,0,s.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(4,0,null,0,2,"ion-title",[["style","background: rgba(230,230,230,1); padding: 20px;"]],null,null,null,u.Ab,u.M)),e.Ab(5,49152,null,0,s.Bb,[e.j,e.p,e.F],null,null),(n()(),e.Sb(6,0,[""," search result(s) for '","'"]))],(function(n,l){n(l,3,0,"12")}),(function(n,l){var t=l.component;n(l,6,0,t.allEventsLength,t.searchTerm)}))}function C(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,8,"ion-row",[["class","ion-text-center"]],null,null,null,u.qb,u.C)),e.Ab(1,49152,null,0,s.kb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,6,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,u.Y,u.k)),e.Ab(3,49152,null,0,s.u,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(n()(),e.Bb(4,0,null,0,1,"h6",[["class","text-header"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,["There were no Search results with that name. Please Refresh the page"])),(n()(),e.Bb(6,0,null,0,2,"ion-button",[["class","orange-button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.doRefresh(t)&&e),e}),u.R,u.d)),e.Ab(7,49152,null,0,s.l,[e.j,e.p,e.F],null,null),(n()(),e.Sb(-1,0,[" Refresh "]))],(function(n,l){n(l,3,0,"0.5","11")}),null)}function F(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,22,"ion-card",[],null,null,null,u.X,u.f)),e.Ab(1,49152,null,0,s.n,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,0,"img",[["src","../assets/Journi_flyer.jpg"]],null,null,null,null,null)),(n()(),e.Bb(3,0,null,0,13,"ion-card-header",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.eventPage(n.context.$implicit)&&e),e}),u.U,u.h)),e.Ab(4,49152,null,0,s.p,[e.j,e.p,e.F],null,null),(n()(),e.Bb(5,0,null,0,2,"ion-card-title",[],null,null,null,u.W,u.j)),e.Ab(6,49152,null,0,s.r,[e.j,e.p,e.F],null,null),(n()(),e.Sb(7,0,["",""])),(n()(),e.Bb(8,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.V,u.i)),e.Ab(9,49152,null,0,s.q,[e.j,e.p,e.F],null,null),(n()(),e.Sb(10,0,["",""])),(n()(),e.Bb(11,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.V,u.i)),e.Ab(12,49152,null,0,s.q,[e.j,e.p,e.F],null,null),(n()(),e.Sb(13,0,["",""])),(n()(),e.Bb(14,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.V,u.i)),e.Ab(15,49152,null,0,s.q,[e.j,e.p,e.F],null,null),(n()(),e.Sb(16,0,[" ",", ",""])),(n()(),e.Bb(17,0,null,0,5,"ion-card-content",[["style","--ion-grid-padding: 0;"]],null,null,null,u.T,u.g)),e.Ab(18,49152,null,0,s.o,[e.j,e.p,e.F],null,null),(n()(),e.Bb(19,0,null,0,3,"ion-toolbar",[],null,null,null,u.Bb,u.N)),e.Ab(20,49152,null,0,s.Db,[e.j,e.p,e.F],null,null),(n()(),e.Bb(21,0,null,0,1,"app-going-icon",[],null,null,null,m,p)),e.Ab(22,114688,null,0,h,[c.a,g.a,s.Qb,d.m,b.a],{event:[0,"event"],userEmail:[1,"userEmail"],id:[2,"id"]},null)],(function(n,l){var t=l.component;n(l,22,0,l.context.$implicit,t.userEmail,t.id)}),(function(n,l){n(l,7,0,l.context.$implicit.title),n(l,10,0,l.context.$implicit.time),n(l,13,0,l.context.$implicit.date),n(l,16,0,l.context.$implicit.city,l.context.$implicit.state)}))}function S(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,3,"ion-row",[],null,null,null,u.qb,u.C)),e.Ab(1,49152,null,0,s.kb,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,F)),e.Ab(3,278528,null,0,r.h,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.allEvents)}),null)}function x(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,24,"ion-col",[["size","4"]],null,null,null,u.Y,u.k)),e.Ab(1,49152,null,0,s.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(2,0,null,0,22,"ion-card",[],null,null,null,u.X,u.f)),e.Ab(3,49152,null,0,s.n,[e.j,e.p,e.F],null,null),(n()(),e.Bb(4,0,null,0,0,"img",[["src","../assets/Journi_flyer.jpg"]],null,null,null,null,null)),(n()(),e.Bb(5,0,null,0,13,"ion-card-header",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.eventPage(n.context.$implicit)&&e),e}),u.U,u.h)),e.Ab(6,49152,null,0,s.p,[e.j,e.p,e.F],null,null),(n()(),e.Bb(7,0,null,0,2,"ion-card-title",[],null,null,null,u.W,u.j)),e.Ab(8,49152,null,0,s.r,[e.j,e.p,e.F],null,null),(n()(),e.Sb(9,0,["",""])),(n()(),e.Bb(10,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.V,u.i)),e.Ab(11,49152,null,0,s.q,[e.j,e.p,e.F],null,null),(n()(),e.Sb(12,0,["",""])),(n()(),e.Bb(13,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.V,u.i)),e.Ab(14,49152,null,0,s.q,[e.j,e.p,e.F],null,null),(n()(),e.Sb(15,0,["",""])),(n()(),e.Bb(16,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.V,u.i)),e.Ab(17,49152,null,0,s.q,[e.j,e.p,e.F],null,null),(n()(),e.Sb(18,0,[" ",", ",""])),(n()(),e.Bb(19,0,null,0,5,"ion-card-content",[["class","ion-text-center"]],null,null,null,u.T,u.g)),e.Ab(20,49152,null,0,s.o,[e.j,e.p,e.F],null,null),(n()(),e.Bb(21,0,null,0,3,"ion-toolbar",[["style","--background: none; height: auto;"]],null,null,null,u.Bb,u.N)),e.Ab(22,49152,null,0,s.Db,[e.j,e.p,e.F],null,null),(n()(),e.Bb(23,0,null,0,1,"app-going-icon",[],null,null,null,m,p)),e.Ab(24,114688,null,0,h,[c.a,g.a,s.Qb,d.m,b.a],{event:[0,"event"],userEmail:[1,"userEmail"],id:[2,"id"]},null)],(function(n,l){var t=l.component;n(l,1,0,"4"),n(l,24,0,l.context.$implicit,t.userEmail,t.id)}),(function(n,l){n(l,9,0,l.context.$implicit.title),n(l,12,0,l.context.$implicit.time),n(l,15,0,l.context.$implicit.date),n(l,18,0,l.context.$implicit.city,l.context.$implicit.state)}))}function k(n){return e.Tb(0,[e.Qb(671088640,1,{searchbar:0}),(n()(),e.Bb(1,0,null,null,7,"ion-header",[["class","ion-hide-md-up"]],null,null,null,u.fb,u.r)),e.Ab(2,49152,null,0,s.C,[e.j,e.p,e.F],null,null),(n()(),e.Bb(3,0,null,0,5,"ion-col",[["offset","0.5"],["size","11"]],null,null,null,u.Y,u.k)),e.Ab(4,49152,null,0,s.u,[e.j,e.p,e.F],{offset:[0,"offset"],size:[1,"size"]},null),(n()(),e.Bb(5,0,null,0,3,"ion-searchbar",[["debounce","800"],["placeholder","Search Events"],["showCancelButton","focus"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Nb(n,8)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Nb(n,8)._handleInputEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.filter(t)&&o),o}),u.rb,u.D)),e.Pb(5120,null,B.i,(function(n){return[n]}),[s.Pb]),e.Ab(7,49152,[[1,4]],0,s.lb,[e.j,e.p,e.F],{debounce:[0,"debounce"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),e.Ab(8,16384,null,0,s.Pb,[e.p],null,null),(n()(),e.Bb(9,0,null,null,43,"ion-content",[["style","--background: rgba(245,245,245,1); background-attachment: fixed;"]],null,null,null,u.Z,u.l)),e.Ab(10,49152,null,0,s.v,[e.j,e.p,e.F],null,null),(n()(),e.Bb(11,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,l,t){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(t)&&e),e}),u.pb,u.A)),e.Ab(12,49152,null,0,s.eb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(13,0,null,0,1,"ion-refresher-content",[],null,null,null,u.ob,u.B)),e.Ab(14,49152,null,0,s.fb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(15,0,null,0,9,"ion-toolbar",[["class","ion-hide-md-up"]],null,null,null,u.Bb,u.N)),e.Ab(16,49152,null,0,s.Db,[e.j,e.p,e.F],null,null),(n()(),e.Bb(17,0,null,0,2,"ion-title",[["slot","start"],["style","font-weight: 800;"]],null,null,null,u.Ab,u.M)),e.Ab(18,49152,null,0,s.Bb,[e.j,e.p,e.F],null,null),(n()(),e.Sb(19,0,["Events (",")"])),(n()(),e.Bb(20,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,u.S,u.e)),e.Ab(21,49152,null,0,s.m,[e.j,e.p,e.F],null,null),(n()(),e.Bb(22,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.going()&&e),e}),u.R,u.d)),e.Ab(23,49152,null,0,s.l,[e.j,e.p,e.F],null,null),(n()(),e.Sb(24,0,[" Going ( "," ) "])),(n()(),e.qb(16777216,null,0,1,null,w)),e.Ab(26,16384,null,0,r.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(27,0,null,0,5,"ion-grid",[["class","ion-hide-md-up"]],null,null,null,u.eb,u.q)),e.Ab(28,49152,null,0,s.B,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,C)),e.Ab(30,16384,null,0,r.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,0,1,null,S)),e.Ab(32,16384,null,0,r.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(33,0,null,0,19,"ion-grid",[["class","ion-hide-md-down"],["style","--ion-grid-padding: 5%; --ion-grid-column-padding:        25px;"]],null,null,null,u.eb,u.q)),e.Ab(34,49152,null,0,s.B,[e.j,e.p,e.F],null,null),(n()(),e.Bb(35,0,null,0,13,"ion-row",[],null,null,null,u.qb,u.C)),e.Ab(36,49152,null,0,s.kb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(37,0,null,0,5,"ion-col",[["size","5"]],null,null,null,u.Y,u.k)),e.Ab(38,49152,null,0,s.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(39,0,null,0,3,"ion-searchbar",[["debounce","800"],["no-border",""],["placeholder","Search Events"],["showCancelButton","focus"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Nb(n,42)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Nb(n,42)._handleInputEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.filter(t)&&o),o}),u.rb,u.D)),e.Pb(5120,null,B.i,(function(n){return[n]}),[s.Pb]),e.Ab(41,49152,[[1,4]],0,s.lb,[e.j,e.p,e.F],{debounce:[0,"debounce"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),e.Ab(42,16384,null,0,s.Pb,[e.p],null,null),(n()(),e.Bb(43,0,null,0,5,"ion-col",[["size","6"]],null,null,null,u.Y,u.k)),e.Ab(44,49152,null,0,s.u,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(45,0,null,0,3,"ion-toolbar",[["class","ion-hide-md-down"],["style","--ion-grid-padding: 5%;"]],null,null,null,u.Bb,u.N)),e.Ab(46,49152,null,0,s.Db,[e.j,e.p,e.F],null,null),(n()(),e.Bb(47,0,null,0,1,"a",[["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.going()&&e),e}),null,null)),(n()(),e.Sb(48,null,[" View Events you are going to ( "," ) "])),(n()(),e.Bb(49,0,null,0,3,"ion-row",[],null,null,null,u.qb,u.C)),e.Ab(50,49152,null,0,s.kb,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,x)),e.Ab(52,278528,null,0,r.h,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"0.5","11"),n(l,7,0,"800","Search Events","focus"),n(l,26,0,t.searching),n(l,30,0,t.noSearchInput),n(l,32,0,!t.noSearchInput),n(l,38,0,"5"),n(l,41,0,"800","Search Events","focus"),n(l,44,0,"6"),n(l,52,0,t.allEvents)}),(function(n,l){var t=l.component;n(l,19,0,t.allEventsLength),n(l,24,0,t.eventsGoingLength),n(l,48,0,t.eventsGoingLength)}))}var O=e.xb("app-events",j,(function(n){return e.Tb(0,[(n()(),e.Bb(0,0,null,null,1,"app-events",[],null,null,null,k,y)),e.Ab(1,4308992,null,0,j,[d.m,c.a,b.a,s.Qb,s.Hb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);const P=()=>t.e(35).then(t.bind(null,"n23q")).then(n=>n.EventsPagePageModuleNgFactory),I=()=>t.e(36).then(t.bind(null,"Aows")).then(n=>n.GoingPageModuleNgFactory);class L{}t.d(l,"EventsPageModuleNgFactory",(function(){return M}));var M=e.yb(o,[],(function(n){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[i.a,O]],[3,e.m],e.D]),e.Lb(4608,r.k,r.j,[e.z,[2,r.q]]),e.Lb(4608,B.q,B.q,[]),e.Lb(4608,s.c,s.c,[e.F,e.g]),e.Lb(4608,s.Ib,s.Ib,[s.c,e.m,e.w]),e.Lb(4608,s.Lb,s.Lb,[s.c,e.m,e.w]),e.Lb(1073742336,r.b,r.b,[]),e.Lb(1073742336,B.p,B.p,[]),e.Lb(1073742336,B.e,B.e,[]),e.Lb(1073742336,s.Fb,s.Fb,[]),e.Lb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Lb(1073742336,L,L,[]),e.Lb(1073742336,o,o,[]),e.Lb(1024,d.k,(function(){return[[{path:"",component:j},{path:"events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description",loadChildren:P},{path:"going",loadChildren:I}],[{path:"",component:j}]]}),[])])}))},riPR:function(n,l,t){"use strict";t.d(l,"a",(function(){return r}));var e=t("AytR"),o=t("2Vo4"),i=t("Aso2"),u=t("8Y7J"),s=t("IheW");let r=(()=>{class n{constructor(n,l){this.http=n,this.profile=l,this.eventsGoing$=new o.a([]),this.BACKEND_URL=e.a.url}getEvents(){return console.log("Getting Events"),this.http.get("".concat(this.BACKEND_URL,"/api/events"))}getEventsGoing(n){return this.http.post("".concat(this.BACKEND_URL,"/api/events/events-going"),{id:n})}goingToEvent(n,l,t){return console.log(this.profile),this.http.post("".concat(this.BACKEND_URL,"/api/events/go-to-event"),{eventID:n,userEmail:l,id:t})}notGoingToEvent(n,l,t){return this.http.post("".concat(this.BACKEND_URL,"/api/events/dont-go-to-event"),{userEmail:l,eventID:n,id:t})}}return n.ngInjectableDef=u.Wb({factory:function(){return new n(u.Xb(s.c),u.Xb(i.a))},token:n,providedIn:"root"}),n})()}}]);