function _createForOfIteratorHelper(n,l){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=_unsupportedIterableToArray(n))||l&&n&&"number"==typeof n.length){e&&(n=e);var t=0,o=function(){};return{s:o,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,r=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return u=n.done,n},e:function(n){r=!0,i=n},f:function(){try{u||null==e.return||e.return()}finally{if(r)throw i}}}}function _unsupportedIterableToArray(n,l){if(n){if("string"==typeof n)return _arrayLikeToArray(n,l);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,l):void 0}}function _arrayLikeToArray(n,l){(null==l||l>n.length)&&(l=n.length);for(var e=0,t=new Array(l);e<l;e++)t[e]=n[e];return t}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{b7Ok:function(n,l,e){"use strict";e.d(l,"a",(function(){return t})),e("U8oy"),e("Aso2");var t=function(){function n(l,e){_classCallCheck(this,n),this.favorites=l,this.profile=e,this.favoriteState="unfavorited",this.iconName="heart-empty"}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;setTimeout((function(){var l,e=_createForOfIteratorHelper(n.favoriteJobs);try{for(e.s();!(l=e.n()).done;){var t=l.value;n.job._id==t._id&&n.setFavoriteStateOn()}}catch(o){e.e(o)}finally{e.f()}}),300)}},{key:"toggleLikeState",value:function(){"unfavorited"===this.favoriteState?(this.setFavoriteStateOn(),this.favorites.favoriteThisJob(this.job)):(this.setFavoriteStateOff(),this.favorites.unFavoriteThisJob(this.job))}},{key:"setFavoriteStateOn",value:function(){this.favoriteState="favorited",this.iconName="heart"}},{key:"setFavoriteStateOff",value:function(){this.favoriteState="unfavorited",this.iconName="heart-empty"}}]),n}()},r7LA:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},i=e("pMnS"),u=e("oBZk"),r=e("ZZ/e"),a=e("wWec"),s=e("b7Ok"),c=e("U8oy"),b=e("Aso2"),p=e("SVse"),h=e("s7LF"),f=e("mrSG"),d=e("sgUz"),g=e("7xvl"),v=e("lFXj"),m=function(){function n(l,e,t,o,i,u){_classCallCheck(this,n),this.router=l,this.jobs=e,this.favorites=t,this.profile=o,this.eventEmitterService=i,this.loading=u,this.jobsGoingLength=0,this.searching=!1,this.noSearchInput=!1,this.favorited="favorited",this.unfavorited="unfavorited"}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;null==this.eventEmitterService.subsVar&&(this.eventEmitterService.subsVar=this.eventEmitterService.invokeJobsPageRefresh.subscribe((function(){n.getJobs()}))),this.jobs.getJobs().subscribe((function(l){n.allJobs=Object.values(l),console.log("alljobs: ",n.allJobs)})),this.getFavoriteJobs(),this.jobs.getJobs().subscribe((function(l){console.log("jobs that are intially loaded: "),console.log(l),n.allJobs=Object.values(l),n.allJobsLength=n.allJobs.length,n.allJobs.reverse(),n.loadedAllJobs=Object.values(l),n.loadedAllJobs.reverse();var e,t=_createForOfIteratorHelper(n.allJobs);try{for(t.s();!(e=t.n()).done;){var o=e.value;o.dateCreated=Object(g.a)(new Date(o.dateCreated),{addSuffix:!0})}}catch(i){t.e(i)}finally{t.f()}}))}},{key:"ngOnDestroy",value:function(){}},{key:"getFavoriteJobs",value:function(){var n=this;this.profile.getUserDetails().subscribe((function(l){n.favoriteJobs=l.favoriteJobs,console.log("Favorite Jobs:"),console.log(n.favoriteJobs),n.favorites.favoriteJobs$.next(n.favoriteJobs),n.favorites.favoriteJobs$.subscribe((function(e){console.log("Favorite Jobs in Service: ".concat(e)),n.favoriteJobsAmount=e.length,n.favorites.getFavorites(l.email).subscribe((function(l){n.favoriteJobsObj=l}))}))}))}},{key:"jobPage",value:function(n){console.log("Going to specific Job Page:",n.title),console.log("The job: ",n),this.router.navigate(["/home/jobs/job-page",n._id,n.title,n.companyName,n.companyEmail,n.summary,n.fullJobDescription,n.rateOfPay])}},{key:"favoritesPage",value:function(){this.router.navigate(["/home/jobs/favorites"])}},{key:"doRefresh",value:function(n){return f.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return this.allJobs=[],this.getFavoriteJobs(),l.next=4,this.jobs.getJobs().subscribe((function(n){e.allJobs=Object.values(n),e.allJobsLength=e.allJobs.length,e.allJobs.reverse(),e.searching=!1;var l,t=_createForOfIteratorHelper(e.allJobs);try{for(t.s();!(l=t.n()).done;){var o=l.value;o.dateCreated=Object(g.a)(new Date(o.dateCreated),{addSuffix:!1})}}catch(i){t.e(i)}finally{t.f()}}));case 4:return setTimeout((function(){n.target.complete(),console.log("jobs Refreshed")}),2e3),l.next=7,this.searchbar.getInputElement().then((function(n){n.value="",e.noSearchInput=!1}));case 7:return l.next=9,console.log("Refreshing jobs Page..");case 9:case"end":return l.stop()}}),l,this)})))}},{key:"getJobs",value:function(){return f.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.jobs.getJobs().subscribe((function(n){l.allJobs=Object.values(n),l.allJobsLength=l.allJobs.length,l.allJobs.reverse(),l.searching=!1;var e,t=_createForOfIteratorHelper(l.allJobs);try{for(t.s();!(e=t.n()).done;){var o=e.value;o.dateCreated=Object(g.a)(new Date(o.dateCreated),{addSuffix:!1})}}catch(i){t.e(i)}finally{t.f()}}));case 2:case"end":return n.stop()}}),n,this)})))}},{key:"filter",value:function(n){var l=this;this.initializeItems();var e=n.detail.value;e||(console.log("No results returned from Search"),this.noSearchInput=!0),this.presentLoadingWithOptions(),this.allJobs=this.allJobs.filter((function(n){if(console.log(n),n&&e||(console.log("No results from that search"),l.noSearchInput=!0),n.title&&e)return n.title.toLowerCase().indexOf(e.toLowerCase())>-1&&(console.log(n.title),console.log(n),l.searchTerm=e,l.searching=!0,l.noSearchInput=!1,!0);l.noSearchInput=!0})),this.allJobsLength=this.allJobs.length,0===this.allJobsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=e,this.searchbar.getInputElement().then((function(n){n.value=""})),this.noSearchInput=!0)}},{key:"initializeItems",value:function(){this.allJobs=this.loadedAllJobs}},{key:"presentLoadingWithOptions",value:function(){return f.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loading.create({duration:1e3,message:"Searching for jobs...",translucent:!0,cssClass:"custom-class custom-loading"});case 2:return l=n.sent,n.next=5,l.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}}]),n}(),y=e("iInd"),j=t.zb({encapsulation:0,styles:[["#logo[_ngcontent-%COMP%]{width:100px;position:relative;top:10px;left:10px}.company-logo[_ngcontent-%COMP%]{background-image:url(journi-logo.394c593afb46f04d7760.png);background-repeat:no-repeat;background-size:contain;background-position:center}#job-details[_ngcontent-%COMP%]{--background:#e6e6e6;--background-hover:#999;color:#888;margin-right:10px;font-size:15px;height:45px;border-radius:5px}#job-details[_ngcontent-%COMP%]:hover{color:#fff}#favorites-button[_ngcontent-%COMP%]{opacity:1;--background:rgba(255,255,255,0.1);--color:white;--border-style:solid;--border-width:1px;--border-color:white;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:70px;height:50px;font-size:.8em;font-weight:600}ion-icon[_ngcontent-%COMP%]{color:red;font-size:25px;position:relative;right:5px}ion-searchbar[_ngcontent-%COMP%]{--background:white;border-radius:5px;--height:60px;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;transition:.5s;padding:5px}ion-searchbar[_ngcontent-%COMP%]:focus{border:1px solid #005191}.job-section[_ngcontent-%COMP%]{background:#fff;height:auto;color:#777;width:100%;margin-bottom:50px;box-shadow:1px 1px 10px rgba(0,0,0,.1)}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1.1em;line-height:29px;position:relative;color:#666;opacity:.7;top:-60px}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-31px}#job-title[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;position:relative;top:-15px}@media only screen and (min-width:992px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}@media only screen and (min-width:576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}"]],data:{}});function k(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,8,"ion-row",[["class","ion-justify-content-center"]],null,null,null,u.kb,u.z)),t.Ab(1,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,0,6,"ion-col",[["size","6"],["style","margin-top: 25px;"]],null,null,null,u.V,u.k)),t.Ab(3,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(4,0,null,0,1,"h6",[["class","text-header-mobile"],["style","text-align: center;"]],null,null,null,null,null)),(n()(),t.Tb(-1,null,["There were no search results with that name."])),(n()(),t.Bb(6,0,null,0,2,"ion-button",[["class","orange-button"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.doRefresh(e)&&t),t}),u.O,u.d)),t.Ab(7,49152,null,0,r.k,[t.j,t.p,t.F],{expand:[0,"expand"]},null),(n()(),t.Tb(-1,0,[" Clear Search "]))],(function(n,l){n(l,3,0,"6"),n(l,7,0,"block")}),null)}function x(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,1,"app-heart-icon",[],null,null,null,a.b,a.a)),t.Ab(1,114688,null,0,s.a,[c.a,b.a],{job:[0,"job"],favoriteJobs:[1,"favoriteJobs"]},null)],(function(n,l){n(l,1,0,l.parent.context.$implicit,l.component.favoriteJobsObj)}),null)}function A(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,41,"ion-row",[["class","job-section"]],null,null,null,u.kb,u.z)),t.Ab(1,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,0,18,"ion-col",[["push","0.5"],["push-lg","0.6"],["size","7"],["size-xs","12 "],["style","padding-top: 30px"]],null,null,null,u.V,u.k)),t.Ab(3,49152,null,0,r.t,[t.j,t.p,t.F],{push:[0,"push"],size:[1,"size"]},null),(n()(),t.Bb(4,0,null,0,16,"ion-row",[["class","ion-align-items-start"]],null,null,null,u.kb,u.z)),t.Ab(5,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(6,0,null,0,2,"ion-col",[["size","1"]],null,null,null,u.V,u.k)),t.Ab(7,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(8,0,null,0,0,"div",[["class","company-logo"],["style","height: 60px; width: 60px;"]],null,null,null,null,null)),(n()(),t.Bb(9,0,null,0,7,"ion-col",[["push-lg","0.5"],["push-md","1"],["push-sm","1"],["push-xs","1"],["size","4"]],null,null,null,u.V,u.k)),t.Ab(10,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(11,0,null,0,1,"h5",[["id","job-title"]],null,null,null,null,null)),(n()(),t.Tb(12,null,["",""])),(n()(),t.Bb(13,0,null,0,1,"p",[["id","company-name"]],null,null,null,null,null)),(n()(),t.Tb(14,null,["",""])),(n()(),t.Bb(15,0,null,0,1,"h5",[["id","job-posted-date"]],null,null,null,null,null)),(n()(),t.Tb(16,null,["Posted: ",""])),(n()(),t.Bb(17,0,null,0,3,"ion-col",[["push-sm","3.9"],["push-xs","3.5"],["size","1"]],null,null,null,u.V,u.k)),t.Ab(18,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.qb(16777216,null,0,1,null,x)),t.Ab(20,16384,null,0,p.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.Bb(21,0,null,0,7,"ion-col",[["size","12"]],null,null,null,u.V,u.k)),t.Ab(22,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(23,0,null,0,5,"ion-row",[],null,null,null,u.kb,u.z)),t.Ab(24,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(25,0,null,0,3,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,u.V,u.k)),t.Ab(26,49152,null,0,r.t,[t.j,t.p,t.F],{push:[0,"push"],size:[1,"size"]},null),(n()(),t.Bb(27,0,null,0,1,"p",[["id","job-summary"]],null,null,null,null,null)),(n()(),t.Tb(28,null,["",""])),(n()(),t.Bb(29,0,null,0,8,"ion-col",[["size","12"]],null,null,null,u.V,u.k)),t.Ab(30,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(31,0,null,0,6,"ion-row",[],null,null,null,u.kb,u.z)),t.Ab(32,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(33,0,null,0,4,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,u.V,u.k)),t.Ab(34,49152,null,0,r.t,[t.j,t.p,t.F],{push:[0,"push"],size:[1,"size"]},null),(n()(),t.Bb(35,0,null,0,2,"ion-button",[["class","ion-float-right"],["id","job-details"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.jobPage(n.context.$implicit)&&t),t}),u.O,u.d)),t.Ab(36,49152,null,0,r.k,[t.j,t.p,t.F],null,null),(n()(),t.Tb(-1,0,[" Details "])),(n()(),t.Bb(38,0,null,0,3,"ion-col",[["size","12"]],null,null,null,u.V,u.k)),t.Ab(39,49152,null,0,r.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(40,0,null,0,1,"ion-row",[],null,null,null,u.kb,u.z)),t.Ab(41,49152,null,0,r.jb,[t.j,t.p,t.F],null,null)],(function(n,l){var e=l.component;n(l,3,0,"0.5","7"),n(l,7,0,"1"),n(l,10,0,"4"),n(l,18,0,"1"),n(l,20,0,e.favoriteJobsObj),n(l,22,0,"12"),n(l,26,0,"0.5","10.5"),n(l,30,0,"12"),n(l,34,0,"0.5","10.5"),n(l,39,0,"12")}),(function(n,l){n(l,12,0,l.context.$implicit.title),n(l,14,0,l.context.$implicit.companyName),n(l,16,0,l.context.$implicit.dateCreated),n(l,28,0,l.context.$implicit.summary)}))}function z(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,5,"ion-row",[],null,null,null,u.kb,u.z)),t.Ab(1,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,0,3,"ion-col",[["push-lg","1.05"],["push-sm","1.3"],["push-xs","0"],["size-md","7.4"],["size-sm","10"],["size-xs","12"]],null,null,null,u.V,u.k)),t.Ab(3,49152,null,0,r.t,[t.j,t.p,t.F],null,null),(n()(),t.qb(16777216,null,0,1,null,A)),t.Ab(5,278528,null,0,p.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,5,0,l.component.allJobs)}),null)}function J(n){return t.Vb(0,[t.Rb(671088640,1,{searchbar:0}),(n()(),t.Bb(1,0,null,null,20,"ion-header",[["class","ion-hide-lg-up"],["no-border",""]],null,null,null,u.cb,u.r)),t.Ab(2,49152,null,0,r.B,[t.j,t.p,t.F],null,null),(n()(),t.Bb(3,0,null,0,18,"ion-toolbar",[],null,null,null,u.vb,u.K)),t.Ab(4,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(5,0,null,0,16,"ion-grid",[],null,null,null,u.bb,u.q)),t.Ab(6,49152,null,0,r.A,[t.j,t.p,t.F],null,null),(n()(),t.Bb(7,0,null,0,14,"ion-row",[["class","ion-justify-content-center ion-align-items-center"]],null,null,null,u.kb,u.z)),t.Ab(8,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(9,0,null,0,5,"ion-col",[["push-sm","1"],["push-xs","0.5"],["size-md","8"],["size-sm","8"],["size-xs","8"]],null,null,null,u.V,u.k)),t.Ab(10,49152,null,0,r.t,[t.j,t.p,t.F],null,null),(n()(),t.Bb(11,0,null,0,3,"ion-searchbar",[["class","searchbar"],["debounce","2000"],["placeholder","Search Job Titles"],["showCancelButton","true"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Nb(n,14)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Nb(n,14)._handleInputEvent(e.target)&&o),"ionChange"===l&&(o=!1!==i.filter(e)&&o),o}),u.lb,u.A)),t.Qb(5120,null,h.i,(function(n){return[n]}),[r.Ob]),t.Ab(13,49152,[[1,4]],0,r.kb,[t.j,t.p,t.F],{debounce:[0,"debounce"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),t.Ab(14,16384,null,0,r.Ob,[t.p],null,null),(n()(),t.Bb(15,0,null,0,6,"ion-col",[["push-sm","1"],["push-xs","0.5"],["size-md","3"],["size-sm","3"],["size-xs","3"]],null,null,null,u.V,u.k)),t.Ab(16,49152,null,0,r.t,[t.j,t.p,t.F],null,null),(n()(),t.Bb(17,0,null,0,4,"ion-button",[["id","favorites-button"],["style","--color: white;"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.favoritesPage()&&t),t}),u.O,u.d)),t.Ab(18,49152,null,0,r.k,[t.j,t.p,t.F],null,null),(n()(),t.Bb(19,0,null,0,1,"ion-icon",[["src","../../../assets/icon/heart-inactive.svg"]],null,null,null,u.db,u.s)),t.Ab(20,49152,null,0,r.C,[t.j,t.p,t.F],{src:[0,"src"]},null),(n()(),t.Tb(21,0,[" ",""])),(n()(),t.Bb(22,0,null,null,26,"ion-content",[],null,null,null,u.W,u.l)),t.Ab(23,49152,null,0,r.u,[t.j,t.p,t.F],null,null),(n()(),t.Bb(24,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,l,e){var t=!0;return"ionRefresh"===l&&(t=!1!==n.component.doRefresh(e)&&t),t}),u.jb,u.x)),t.Ab(25,49152,null,0,r.db,[t.j,t.p,t.F],null,null),(n()(),t.Bb(26,0,null,0,1,"ion-refresher-content",[],null,null,null,u.ib,u.y)),t.Ab(27,49152,null,0,r.eb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(28,0,null,0,20,"ion-grid",[],null,null,null,u.bb,u.q)),t.Ab(29,49152,null,0,r.A,[t.j,t.p,t.F],null,null),(n()(),t.Bb(30,0,null,0,14,"ion-row",[["class","ion-hide-md-down"],["style","margin-top: 50px;"]],null,null,null,u.kb,u.z)),t.Ab(31,49152,null,0,r.jb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(32,0,null,0,5,"ion-col",[["push","1"],["size","7.5"]],null,null,null,u.V,u.k)),t.Ab(33,49152,null,0,r.t,[t.j,t.p,t.F],{push:[0,"push"],size:[1,"size"]},null),(n()(),t.Bb(34,0,null,0,3,"ion-searchbar",[["class","searchbar"],["debounce","1500"],["placeholder","Search Job Titles"],["showCancelButton","true"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Nb(n,37)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Nb(n,37)._handleInputEvent(e.target)&&o),"ionChange"===l&&(o=!1!==i.filter(e)&&o),o}),u.lb,u.A)),t.Qb(5120,null,h.i,(function(n){return[n]}),[r.Ob]),t.Ab(36,49152,[[1,4]],0,r.kb,[t.j,t.p,t.F],{debounce:[0,"debounce"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),t.Ab(37,16384,null,0,r.Ob,[t.p],null,null),(n()(),t.Bb(38,0,null,0,6,"ion-col",[["push","1.5"],["size","2"]],null,null,null,u.V,u.k)),t.Ab(39,49152,null,0,r.t,[t.j,t.p,t.F],{push:[0,"push"],size:[1,"size"]},null),(n()(),t.Bb(40,0,null,0,4,"ion-button",[["class","blue-button ion-float-right"],["style","width: 170px; position: fixed; top: 60px;"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.favoritesPage()&&t),t}),u.O,u.d)),t.Ab(41,49152,null,0,r.k,[t.j,t.p,t.F],null,null),(n()(),t.Bb(42,0,null,0,1,"ion-icon",[["src","../../../assets/icon/heart-inactive.svg"]],null,null,null,u.db,u.s)),t.Ab(43,49152,null,0,r.C,[t.j,t.p,t.F],{src:[0,"src"]},null),(n()(),t.Tb(44,0,[" "," "])),(n()(),t.qb(16777216,null,0,1,null,k)),t.Ab(46,16384,null,0,p.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(16777216,null,0,1,null,z)),t.Ab(48,16384,null,0,p.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,13,0,"2000","Search Job Titles","true"),n(l,20,0,"../../../assets/icon/heart-inactive.svg"),n(l,33,0,"1","7.5"),n(l,36,0,"1500","Search Job Titles","true"),n(l,39,0,"1.5","2"),n(l,43,0,"../../../assets/icon/heart-inactive.svg"),n(l,46,0,e.noSearchInput),n(l,48,0,!e.noSearchInput)}),(function(n,l){var e=l.component;n(l,21,0,e.favoriteJobsAmount),n(l,44,0,e.favoriteJobsAmount)}))}var F=t.xb("app-jobs",m,(function(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,1,"app-jobs",[],null,null,null,J,j)),t.Ab(1,245760,null,0,m,[y.m,d.a,c.a,b.a,v.a,r.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),C=e("zAgk"),B=function(){return e.e(40).then(e.bind(null,"K5GS")).then((function(n){return n.JobPagePageModuleNgFactory}))},w=function(){return e.e(39).then(e.bind(null,"tXR0")).then((function(n){return n.FavoritesPageModuleNgFactory}))},O=function n(){_classCallCheck(this,n)};e.d(l,"JobsPageModuleNgFactory",(function(){return _}));var _=t.yb(o,[],(function(n){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[i.a,F]],[3,t.m],t.D]),t.Lb(4608,p.l,p.k,[t.z,[2,p.s]]),t.Lb(4608,r.b,r.b,[t.F,t.g]),t.Lb(4608,r.Hb,r.Hb,[r.b,t.m,t.w]),t.Lb(4608,r.Lb,r.Lb,[r.b,t.m,t.w]),t.Lb(5120,t.d,(function(n,l,e){return[r.Rb(n,l,e)]}),[r.Qb,p.d,t.F]),t.Lb(4608,h.r,h.r,[]),t.Lb(4608,h.b,h.b,[]),t.Lb(1073742336,p.c,p.c,[]),t.Lb(1073742336,r.Eb,r.Eb,[]),t.Lb(1073742336,C.a,C.a,[]),t.Lb(1073742336,h.q,h.q,[]),t.Lb(1073742336,h.e,h.e,[]),t.Lb(1073742336,h.n,h.n,[]),t.Lb(1073742336,y.q,y.q,[[2,y.v],[2,y.m]]),t.Lb(1073742336,O,O,[]),t.Lb(1073742336,o,o,[]),t.Lb(256,r.Qb,void 0,[]),t.Lb(1024,y.k,(function(){return[[{path:"",component:m},{path:"job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay",loadChildren:B},{path:"favorites",loadChildren:w}],[{path:"",component:m}]]}),[])])}))},sgUz:function(n,l,e){"use strict";e.d(l,"a",(function(){return u}));var t=e("AytR"),o=e("8Y7J"),i=e("IheW"),u=function(){var n=function(){function n(l){_classCallCheck(this,n),this.http=l,this.BACKEND_URL=t.a.url}return _createClass(n,[{key:"getJobs",value:function(){return console.log("Getting Jobs"),this.http.get("".concat(this.BACKEND_URL,"/api/jobs"))}},{key:"sendEmailApplication",value:function(n,l,e,t,o,i){return console.log("Sending email to ".concat(i)),this.http.post("".concat(this.BACKEND_URL,"/api/jobs/send-application"),{user:n,age:l,phoneNumber:e,reason:t,jobTitle:o,jobCompanyEmail:i})}}]),n}();return n.ngInjectableDef=o.Yb({factory:function(){return new n(o.Zb(i.c))},token:n,providedIn:"root"}),n}()},wWec:function(n,l,e){"use strict";var t=e("8Y7J"),o=e("oBZk"),i=e("ZZ/e");e("b7Ok"),e("U8oy"),e("Aso2"),e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return r}));var u=t.zb({encapsulation:0,styles:[["ion-icon[_ngcontent-%COMP%]{float:right;z-index:9999;position:relative;right:10px;color:red}"]],data:{animation:[{type:7,name:"heart",definitions:[{type:0,name:"unfavorited",styles:{type:6,styles:{color:"#FF443B",opacity:"0.4",transform:"scale(0.9)"},offset:null},options:void 0},{type:0,name:"favorited",styles:{type:6,styles:{color:"#FF443B",opacity:"1",transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"unfavorited <=> favorited",animation:{type:4,styles:null,timings:"100ms ease-out"},options:null}],options:{}}]}});function r(n){return t.Vb(0,[(n()(),t.Bb(0,0,null,null,1,"ion-icon",[["style","font-size: 4em"],["tappable",""]],[[24,"@heart",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleLikeState()&&t),t}),o.db,o.s)),t.Ab(1,49152,null,0,i.C,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,l.component.iconName)}),(function(n,l){n(l,0,0,l.component.favoriteState)}))}}}]);