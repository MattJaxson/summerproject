(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{b7Ok:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("U8oy"),t("Aso2");var e=function(){function n(n,l){this.favorites=n,this.profile=l,this.favoriteState="unfavorited",this.iconName="heart-empty"}return n.prototype.ngOnInit=function(){var n=this;setTimeout((function(){for(var l=0,t=n.favoriteJobs;l<t.length;l++)n.job._id==t[l]._id&&n.setFavoriteStateOn()}),300)},n.prototype.toggleLikeState=function(){"unfavorited"===this.favoriteState?(this.setFavoriteStateOn(),this.favorites.favoriteThisJob(this.job)):(this.setFavoriteStateOff(),this.favorites.unFavoriteThisJob(this.job))},n.prototype.setFavoriteStateOn=function(){this.favoriteState="favorited",this.iconName="heart"},n.prototype.setFavoriteStateOff=function(){this.favoriteState="unfavorited",this.iconName="heart-empty"},n}()},r7LA:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),i=t("pMnS"),u=t("oBZk"),s=t("ZZ/e"),r=t("wWec"),a=t("b7Ok"),b=t("U8oy"),c=t("Aso2"),h=t("Ip0R"),p=t("gIcY"),f=t("mrSG"),d=t("sgUz"),g=t("7xvl"),v=t("lFXj"),m=function(){function n(n,l,t,e,o,i){this.router=n,this.jobs=l,this.favorites=t,this.profile=e,this.eventEmitterService=o,this.loading=i,this.jobsGoingLength=0,this.searching=!1,this.noSearchInput=!1,this.favorited="favorited",this.unfavorited="unfavorited"}return n.prototype.ngOnInit=function(){var n=this;null==this.eventEmitterService.subsVar&&(this.eventEmitterService.subsVar=this.eventEmitterService.invokeJobsPageRefresh.subscribe((function(){n.getJobs()}))),this.jobs.getJobs().subscribe((function(l){n.allJobs=Object.values(l),console.log("alljobs: ",n.allJobs)})),this.getFavoriteJobs(),this.jobs.getJobs().subscribe((function(l){console.log("jobs that are intially loaded: "),console.log(l),n.allJobs=Object.values(l),n.allJobsLength=n.allJobs.length,n.allJobs.reverse(),n.loadedAllJobs=Object.values(l),n.loadedAllJobs.reverse();for(var t=0,e=n.allJobs;t<e.length;t++){var o=e[t];o.dateCreated=Object(g.a)(new Date(o.dateCreated),{addSuffix:!0})}}))},n.prototype.ngOnDestroy=function(){},n.prototype.getFavoriteJobs=function(){var n=this;this.profile.getUserDetails().subscribe((function(l){n.favoriteJobs=l.favoriteJobs,console.log("Favorite Jobs:"),console.log(n.favoriteJobs),n.favorites.favoriteJobs$.next(n.favoriteJobs),n.favorites.favoriteJobs$.subscribe((function(t){console.log("Favorite Jobs in Service: "+t),n.favoriteJobsAmount=t.length,n.favorites.getFavorites(l.email).subscribe((function(l){n.favoriteJobsObj=l}))}))}))},n.prototype.jobPage=function(n){console.log("Going to specific Job Page:",n.title),console.log("The job: ",n),this.router.navigate(["/home/jobs/job-page",n._id,n.title,n.companyName,n.companyEmail,n.summary,n.fullJobDescription,n.rateOfPay])},n.prototype.favoritesPage=function(){this.router.navigate(["/home/jobs/favorites"])},n.prototype.doRefresh=function(n){return f.b(this,void 0,void 0,(function(){var l=this;return f.e(this,(function(t){switch(t.label){case 0:return this.allJobs=[],this.getFavoriteJobs(),[4,this.jobs.getJobs().subscribe((function(n){l.allJobs=Object.values(n),l.allJobsLength=l.allJobs.length,l.allJobs.reverse(),l.searching=!1;for(var t=0,e=l.allJobs;t<e.length;t++){var o=e[t];o.dateCreated=Object(g.a)(new Date(o.dateCreated),{addSuffix:!1})}}))];case 1:return t.sent(),setTimeout((function(){n.target.complete(),console.log("jobs Refreshed")}),2e3),[4,this.searchbar.getInputElement().then((function(n){n.value="",l.noSearchInput=!1}))];case 2:return t.sent(),[4,console.log("Refreshing jobs Page..")];case 3:return t.sent(),[2]}}))}))},n.prototype.getJobs=function(){return f.b(this,void 0,void 0,(function(){var n=this;return f.e(this,(function(l){switch(l.label){case 0:return[4,this.jobs.getJobs().subscribe((function(l){n.allJobs=Object.values(l),n.allJobsLength=n.allJobs.length,n.allJobs.reverse(),n.searching=!1;for(var t=0,e=n.allJobs;t<e.length;t++){var o=e[t];o.dateCreated=Object(g.a)(new Date(o.dateCreated),{addSuffix:!1})}}))];case 1:return l.sent(),[2]}}))}))},n.prototype.filter=function(n){var l=this;this.initializeItems();var t=n.detail.value;t||(console.log("No results returned from Search"),this.noSearchInput=!0),this.presentLoadingWithOptions(),this.allJobs=this.allJobs.filter((function(n){if(console.log(n),n&&t||(console.log("No results from that search"),l.noSearchInput=!0),n.title&&t)return n.title.toLowerCase().indexOf(t.toLowerCase())>-1&&(console.log(n.title),console.log(n),l.searchTerm=t,l.searching=!0,l.noSearchInput=!1,!0);l.noSearchInput=!0})),this.allJobsLength=this.allJobs.length,0===this.allJobsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=t,this.searchbar.getInputElement().then((function(n){n.value=""})),this.noSearchInput=!0)},n.prototype.initializeItems=function(){this.allJobs=this.loadedAllJobs},n.prototype.presentLoadingWithOptions=function(){return f.b(this,void 0,void 0,(function(){return f.e(this,(function(n){switch(n.label){case 0:return[4,this.loading.create({duration:1e3,message:"Searching for jobs...",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}}))}))},n}(),z=t("ZYCi"),k=e.rb({encapsulation:0,styles:[["#logo[_ngcontent-%COMP%]{width:100px;position:relative;top:10px;left:10px}.company-logo[_ngcontent-%COMP%]{background-image:url(journi-logo.394c593afb46f04d7760.png);background-repeat:no-repeat;background-size:contain;background-position:center}#job-details[_ngcontent-%COMP%]{--background:#e6e6e6;--background-hover:#999;color:#888;margin-right:10px;font-size:15px;height:45px;border-radius:5px}#job-details[_ngcontent-%COMP%]:hover{color:#fff}#favorites-button[_ngcontent-%COMP%]{opacity:1;--background:#005191;--background-hover:#005191;--color:white;--border-style:solid;--border-width:1px;--border-color:white;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:100px;height:50px;font-size:.8em;font-weight:600;position:relative;right:15px}ion-icon[_ngcontent-%COMP%]{color:red;font-size:25px;position:relative;right:5px}ion-searchbar[_ngcontent-%COMP%]{--background:white;border-radius:5px;--height:60px;width:90%;font-size:.8em;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;-webkit-transition:.5s;transition:.5s;padding:5px}ion-searchbar[_ngcontent-%COMP%]:focus{border:1px solid #005191}.job-section[_ngcontent-%COMP%]{background:#fff;height:auto;color:#777;width:100%;margin-bottom:50px;box-shadow:1px 10px 10px rgba(0,0,0,.1)}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1.1em;line-height:29px;position:relative;color:#666;opacity:.7;top:-60px}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-31px}#job-title[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;position:relative;top:-15px;color:#111}@media only screen and (min-width:992px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}@media only screen and (min-width:576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}"]],data:{}});function y(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,8,"ion-row",[["class","ion-justify-content-center"]],null,null,null,u.kb,u.z)),e.sb(1,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,6,"ion-col",[["size","6"],["style","margin-top: 25px;"]],null,null,null,u.V,u.k)),e.sb(3,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(4,0,null,0,1,"h6",[["class","text-header-mobile"],["style","text-align: center;"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["There were no search results with that name."])),(n()(),e.tb(6,0,null,0,2,"ion-button",[["class","orange-button"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.doRefresh(t)&&e),e}),u.O,u.d)),e.sb(7,49152,null,0,s.k,[e.h,e.k,e.z],{expand:[0,"expand"]},null),(n()(),e.Lb(-1,0,[" Clear Search "]))],(function(n,l){n(l,3,0,"6"),n(l,7,0,"block")}),null)}function x(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"app-heart-icon",[],null,null,null,r.b,r.a)),e.sb(1,114688,null,0,a.a,[b.a,c.a],{job:[0,"job"],favoriteJobs:[1,"favoriteJobs"]},null)],(function(n,l){n(l,1,0,l.parent.context.$implicit,l.component.favoriteJobsObj)}),null)}function j(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,41,"ion-row",[["class","job-section"]],null,null,null,u.kb,u.z)),e.sb(1,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,18,"ion-col",[["push","0.5"],["push-lg","0.6"],["size","7"],["size-xs","12 "],["style","padding-top: 30px"]],null,null,null,u.V,u.k)),e.sb(3,49152,null,0,s.t,[e.h,e.k,e.z],{push:[0,"push"],size:[1,"size"]},null),(n()(),e.tb(4,0,null,0,16,"ion-row",[["class","ion-align-items-start"]],null,null,null,u.kb,u.z)),e.sb(5,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,2,"ion-col",[["size","1"]],null,null,null,u.V,u.k)),e.sb(7,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(8,0,null,0,0,"div",[["class","company-logo"],["style","height: 60px; width: 60px;"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,0,7,"ion-col",[["push-lg","0.5"],["push-md","1"],["push-sm","1"],["push-xs","1"],["size","4"]],null,null,null,u.V,u.k)),e.sb(10,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(11,0,null,0,1,"h5",[["id","job-title"]],null,null,null,null,null)),(n()(),e.Lb(12,null,["",""])),(n()(),e.tb(13,0,null,0,1,"p",[["id","company-name"]],null,null,null,null,null)),(n()(),e.Lb(14,null,["",""])),(n()(),e.tb(15,0,null,0,1,"h5",[["id","job-posted-date"]],null,null,null,null,null)),(n()(),e.Lb(16,null,["Posted: ",""])),(n()(),e.tb(17,0,null,0,3,"ion-col",[["push-sm","3.9"],["push-xs","3.5"],["size","1"]],null,null,null,u.V,u.k)),e.sb(18,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.ib(16777216,null,0,1,null,x)),e.sb(20,16384,null,0,h.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(21,0,null,0,7,"ion-col",[["size","12"]],null,null,null,u.V,u.k)),e.sb(22,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(23,0,null,0,5,"ion-row",[],null,null,null,u.kb,u.z)),e.sb(24,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(25,0,null,0,3,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,u.V,u.k)),e.sb(26,49152,null,0,s.t,[e.h,e.k,e.z],{push:[0,"push"],size:[1,"size"]},null),(n()(),e.tb(27,0,null,0,1,"p",[["id","job-summary"]],null,null,null,null,null)),(n()(),e.Lb(28,null,["",""])),(n()(),e.tb(29,0,null,0,8,"ion-col",[["size","12"]],null,null,null,u.V,u.k)),e.sb(30,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(31,0,null,0,6,"ion-row",[],null,null,null,u.kb,u.z)),e.sb(32,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(33,0,null,0,4,"ion-col",[["push","0.5"],["size","10.5"]],null,null,null,u.V,u.k)),e.sb(34,49152,null,0,s.t,[e.h,e.k,e.z],{push:[0,"push"],size:[1,"size"]},null),(n()(),e.tb(35,0,null,0,2,"ion-button",[["class","ion-float-right"],["id","job-details"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.jobPage(n.context.$implicit)&&e),e}),u.O,u.d)),e.sb(36,49152,null,0,s.k,[e.h,e.k,e.z],null,null),(n()(),e.Lb(-1,0,[" Details "])),(n()(),e.tb(38,0,null,0,3,"ion-col",[["size","12"]],null,null,null,u.V,u.k)),e.sb(39,49152,null,0,s.t,[e.h,e.k,e.z],{size:[0,"size"]},null),(n()(),e.tb(40,0,null,0,1,"ion-row",[],null,null,null,u.kb,u.z)),e.sb(41,49152,null,0,s.jb,[e.h,e.k,e.z],null,null)],(function(n,l){var t=l.component;n(l,3,0,"0.5","7"),n(l,7,0,"1"),n(l,10,0,"4"),n(l,18,0,"1"),n(l,20,0,t.favoriteJobsObj),n(l,22,0,"12"),n(l,26,0,"0.5","10.5"),n(l,30,0,"12"),n(l,34,0,"0.5","10.5"),n(l,39,0,"12")}),(function(n,l){n(l,12,0,l.context.$implicit.title),n(l,14,0,l.context.$implicit.companyName),n(l,16,0,l.context.$implicit.dateCreated),n(l,28,0,l.context.$implicit.summary)}))}function J(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,5,"ion-row",[],null,null,null,u.kb,u.z)),e.sb(1,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,3,"ion-col",[["push-lg","1.05"],["push-sm","1.3"],["push-xs","0"],["size-md","7.4"],["size-sm","10"],["size-xs","12"]],null,null,null,u.V,u.k)),e.sb(3,49152,null,0,s.t,[e.h,e.k,e.z],null,null),(n()(),e.ib(16777216,null,0,1,null,j)),e.sb(5,278528,null,0,h.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,5,0,l.component.allJobs)}),null)}function O(n){return e.Nb(0,[e.Jb(671088640,1,{searchbar:0}),(n()(),e.tb(1,0,null,null,20,"ion-header",[["class","ion-hide-lg-up"],["no-border",""]],null,null,null,u.cb,u.r)),e.sb(2,49152,null,0,s.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(3,0,null,0,18,"ion-toolbar",[],null,null,null,u.vb,u.K)),e.sb(4,49152,null,0,s.Cb,[e.h,e.k,e.z],null,null),(n()(),e.tb(5,0,null,0,16,"ion-grid",[],null,null,null,u.bb,u.q)),e.sb(6,49152,null,0,s.A,[e.h,e.k,e.z],null,null),(n()(),e.tb(7,0,null,0,14,"ion-row",[["class","ion-justify-content-center ion-align-items-center"]],null,null,null,u.kb,u.z)),e.sb(8,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(9,0,null,0,5,"ion-col",[["push-sm","1"],["push-xs","0.5"],["size-md","8"],["size-sm","8"],["size-xs","8"]],null,null,null,u.V,u.k)),e.sb(10,49152,null,0,s.t,[e.h,e.k,e.z],null,null),(n()(),e.tb(11,0,null,0,3,"ion-searchbar",[["class","searchbar"],["debounce","2000"],["placeholder","Search Job Titles"],["showCancelButton","true"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Fb(n,14)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Fb(n,14)._handleInputEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.filter(t)&&o),o}),u.lb,u.A)),e.Ib(5120,null,p.i,(function(n){return[n]}),[s.Ob]),e.sb(13,49152,[[1,4]],0,s.kb,[e.h,e.k,e.z],{debounce:[0,"debounce"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),e.sb(14,16384,null,0,s.Ob,[e.k],null,null),(n()(),e.tb(15,0,null,0,6,"ion-col",[["push-sm","1"],["push-xs","0.5"],["size-md","3"],["size-sm","3"],["size-xs","3"]],null,null,null,u.V,u.k)),e.sb(16,49152,null,0,s.t,[e.h,e.k,e.z],null,null),(n()(),e.tb(17,0,null,0,4,"ion-button",[["id","favorites-button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.favoritesPage()&&e),e}),u.O,u.d)),e.sb(18,49152,null,0,s.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(19,0,null,0,1,"ion-icon",[["src","../../../assets/icon/heart-inactive.svg"]],null,null,null,u.db,u.s)),e.sb(20,49152,null,0,s.C,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.Lb(21,0,[" ",""])),(n()(),e.tb(22,0,null,null,26,"ion-content",[],null,null,null,u.W,u.l)),e.sb(23,49152,null,0,s.u,[e.h,e.k,e.z],null,null),(n()(),e.tb(24,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,l,t){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(t)&&e),e}),u.jb,u.x)),e.sb(25,49152,null,0,s.db,[e.h,e.k,e.z],null,null),(n()(),e.tb(26,0,null,0,1,"ion-refresher-content",[],null,null,null,u.ib,u.y)),e.sb(27,49152,null,0,s.eb,[e.h,e.k,e.z],null,null),(n()(),e.tb(28,0,null,0,20,"ion-grid",[],null,null,null,u.bb,u.q)),e.sb(29,49152,null,0,s.A,[e.h,e.k,e.z],null,null),(n()(),e.tb(30,0,null,0,14,"ion-row",[["class","ion-hide-md-down"],["style","margin: 50px 0 50px 0;"]],null,null,null,u.kb,u.z)),e.sb(31,49152,null,0,s.jb,[e.h,e.k,e.z],null,null),(n()(),e.tb(32,0,null,0,5,"ion-col",[["push","1"],["size","7.5"]],null,null,null,u.V,u.k)),e.sb(33,49152,null,0,s.t,[e.h,e.k,e.z],{push:[0,"push"],size:[1,"size"]},null),(n()(),e.tb(34,0,null,0,3,"ion-searchbar",[["class","searchbar"],["debounce","1500"],["placeholder","Search Job Titles"],["showCancelButton","true"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Fb(n,37)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Fb(n,37)._handleInputEvent(t.target)&&o),"ionChange"===l&&(o=!1!==i.filter(t)&&o),o}),u.lb,u.A)),e.Ib(5120,null,p.i,(function(n){return[n]}),[s.Ob]),e.sb(36,49152,[[1,4]],0,s.kb,[e.h,e.k,e.z],{debounce:[0,"debounce"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"]},null),e.sb(37,16384,null,0,s.Ob,[e.k],null,null),(n()(),e.tb(38,0,null,0,6,"ion-col",[["push","1.5"],["size","2"]],null,null,null,u.V,u.k)),e.sb(39,49152,null,0,s.t,[e.h,e.k,e.z],{push:[0,"push"],size:[1,"size"]},null),(n()(),e.tb(40,0,null,0,4,"ion-button",[["class","blue-button ion-float-right"],["style","width: 170px; position: fixed; top: 60px;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.favoritesPage()&&e),e}),u.O,u.d)),e.sb(41,49152,null,0,s.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(42,0,null,0,1,"ion-icon",[["src","../../../assets/icon/heart-inactive.svg"]],null,null,null,u.db,u.s)),e.sb(43,49152,null,0,s.C,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.Lb(44,0,[" "," "])),(n()(),e.ib(16777216,null,0,1,null,y)),e.sb(46,16384,null,0,h.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,0,1,null,J)),e.sb(48,16384,null,0,h.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,13,0,"2000","Search Job Titles","true"),n(l,20,0,"../../../assets/icon/heart-inactive.svg"),n(l,33,0,"1","7.5"),n(l,36,0,"1500","Search Job Titles","true"),n(l,39,0,"1.5","2"),n(l,43,0,"../../../assets/icon/heart-inactive.svg"),n(l,46,0,t.noSearchInput),n(l,48,0,!t.noSearchInput)}),(function(n,l){var t=l.component;n(l,21,0,t.favoriteJobsAmount),n(l,44,0,t.favoriteJobsAmount)}))}function C(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"app-jobs",[],null,null,null,O,k)),e.sb(1,245760,null,0,m,[z.m,d.a,b.a,c.a,v.a,s.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}var w=e.pb("app-jobs",m,C,{},{},[]),S=t("zAgk"),P=function(){return t.e(41).then(t.bind(null,"K5GS")).then((function(n){return n.JobPagePageModuleNgFactory}))},D=function(){return t.e(40).then(t.bind(null,"tXR0")).then((function(n){return n.FavoritesPageModuleNgFactory}))},L=function(){return function(){}}();t.d(l,"JobsPageModuleNgFactory",(function(){return I}));var I=e.qb(o,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[i.a,w]],[3,e.j],e.x]),e.Db(4608,h.l,h.k,[e.u,[2,h.s]]),e.Db(4608,s.b,s.b,[e.z,e.g]),e.Db(4608,s.Hb,s.Hb,[s.b,e.j,e.q]),e.Db(4608,s.Lb,s.Lb,[s.b,e.j,e.q]),e.Db(5120,e.d,(function(n,l,t){return[s.Rb(n,l,t)]}),[s.Qb,h.d,e.z]),e.Db(4608,p.r,p.r,[]),e.Db(4608,p.b,p.b,[]),e.Db(1073742336,h.c,h.c,[]),e.Db(1073742336,s.Eb,s.Eb,[]),e.Db(1073742336,S.a,S.a,[]),e.Db(1073742336,p.q,p.q,[]),e.Db(1073742336,p.e,p.e,[]),e.Db(1073742336,p.n,p.n,[]),e.Db(1073742336,z.q,z.q,[[2,z.v],[2,z.m]]),e.Db(1073742336,L,L,[]),e.Db(1073742336,o,o,[]),e.Db(256,s.Qb,void 0,[]),e.Db(1024,z.k,(function(){return[[{path:"",component:m},{path:"job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay",loadChildren:P},{path:"favorites",loadChildren:D}],[{path:"",component:m}]]}),[])])}))},sgUz:function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));var e=t("AytR"),o=t("CcnG"),i=t("t/Na"),u=function(){function n(n){this.http=n,this.BACKEND_URL=e.a.url}return n.prototype.getJobs=function(){return console.log("Getting Jobs"),this.http.get(this.BACKEND_URL+"/api/jobs")},n.prototype.sendEmailApplication=function(n,l,t,e,o,i){return console.log("Sending email to "+i),this.http.post(this.BACKEND_URL+"/api/jobs/send-application",{user:n,age:l,phoneNumber:t,reason:e,jobTitle:o,jobCompanyEmail:i})},n.ngInjectableDef=o.Qb({factory:function(){return new n(o.Rb(i.c))},token:n,providedIn:"root"}),n}()},wWec:function(n,l,t){"use strict";var e=t("CcnG"),o=t("oBZk"),i=t("ZZ/e");t("b7Ok"),t("U8oy"),t("Aso2"),t.d(l,"a",(function(){return u})),t.d(l,"b",(function(){return s}));var u=e.rb({encapsulation:0,styles:[["ion-icon[_ngcontent-%COMP%]{float:right;z-index:9999;position:relative;right:10px;color:red}"]],data:{animation:[{type:7,name:"heart",definitions:[{type:0,name:"unfavorited",styles:{type:6,styles:{color:"#FF443B",opacity:"0.4",transform:"scale(0.9)"},offset:null},options:void 0},{type:0,name:"favorited",styles:{type:6,styles:{color:"#FF443B",opacity:"1",transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"unfavorited <=> favorited",animation:{type:4,styles:null,timings:"100ms ease-out"},options:null}],options:{}}]}});function s(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"ion-icon",[["style","font-size: 4em"],["tappable",""]],[[24,"@heart",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleLikeState()&&e),e}),o.db,o.s)),e.sb(1,49152,null,0,i.C,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,l.component.iconName)}),(function(n,l){n(l,0,0,l.component.favoriteState)}))}}}]);