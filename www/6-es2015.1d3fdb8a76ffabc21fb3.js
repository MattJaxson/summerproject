(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+DJb":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n("AytR"),i=n("fXoL"),r=n("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.BACKEND_URL=o.a.url}getMentors(){return console.log("Getting Mentors"),this.http.get(this.BACKEND_URL+"/api/mentors")}sendMentorAnEmail(t,e,n,o,i,r,s,a,c,l,h,b){return console.log("Sending email to "+n),this.http.post(this.BACKEND_URL+"/api/mentors/mentor-message",{message:t,mentorName:e,mentorEmail:n,studentEmail:o,studentName:i,studentCity:r,studentState:s,studentAge:a,studentGrade:c,studentSchool:l,studentProfilePic:h,studentResume:b})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(r.b))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},heuU:function(t,e,n){"use strict";n.r(e),n.d(e,"MentorsPageModule",function(){return p});var o=n("ofXK"),i=n("3Pt+"),r=n("zAgk"),s=n("TEn/"),a=n("tyNb"),c=n("mrSG"),l=n("+DJb"),h=n("R7fP"),b=n("fXoL");function u(t,e){if(1&t){const t=b.Nb();b.Mb(0,"ion-row",9),b.Mb(1,"ion-col",10),b.Mb(2,"ion-list"),b.Mb(3,"ion-item",11),b.Mb(4,"ion-avatar",12),b.Ib(5,"img",13),b.Lb(),b.Mb(6,"ion-label"),b.Mb(7,"h2"),b.mc(8),b.Lb(),b.Mb(9,"p"),b.mc(10),b.Lb(),b.Lb(),b.Mb(11,"ion-buttons",14),b.Mb(12,"ion-button",15),b.Ub("click",function(){b.gc(t);const n=e.$implicit;return b.Wb().mentorPage(n)}),b.mc(13," Info "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&t){const t=e.$implicit;b.xb(8),b.nc(t.name),b.xb(2),b.nc(t.title)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.router=t,this.mentors=e,this.loading=n,this.modal=o,this.searching=!1,this.noSearchInput=!1}ngOnInit(){this.getMentors()}ngAfterViewInit(){this.searchbar.getInputElement().then(t=>{t.style.boxShadow="none"})}getMentors(){this.mentors.getMentors().subscribe(t=>{this.allMentors=Object.values(t),this.allMentorsLength=this.allMentors.length,this.allMentors.reverse(),this.loadedAllMentors=Object.values(t),this.loadedAllMentors.reverse(),this.searching=!1})}chat(){this.router.navigate(["/home/mentors/mentor-chat"])}newMessage(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.modal.create({component:h.a,componentProps:{}});yield t.present()})}mentorPage(t){this.router.navigate(["/home/mentors/mentor-page",t.name,t.title,t.email,t.description,t.photo,t.city,t.state])}filter(t){this.initializeItems();let e=t.detail.value;this.presentLoadingWithOptions(),console.log(this.allMentors),this.allMentors=this.allMentors.filter(t=>{if(console.log(t),t&&e||(console.log("No results from that search"),this.noSearchInput=!0),t.name&&e)return t.name.toLowerCase().indexOf(e.toLowerCase())>-1&&(console.log(t.name),console.log(t),this.searchTerm=e,this.searching=!0,this.noSearchInput=!1,!0)}),this.allMentorsLength=this.allMentors.length,0===this.allMentorsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=e,this.searchbar.getInputElement().then(t=>{t.value=""}),this.noSearchInput=!0),e||(console.log("Search term is empty; showing all events instead"),this.noSearchInput=!1,this.searching=!1,this.getMentors())}initializeItems(){this.allMentors=this.loadedAllMentors}presentLoadingWithOptions(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.loading.create({duration:1e3,message:"Searching for Mentors...",translucent:!0,cssClass:"custom-class custom-loading"});return yield t.present()})}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(a.f),b.Hb(l.a),b.Hb(s.S),b.Hb(s.T))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-mentors"]],viewQuery:function(t,e){if(1&t&&b.tc(s.H,!0),2&t){let t;b.ec(t=b.Vb())&&(e.searchbar=t.first)}},decls:23,vars:1,consts:[["no-border","",1,"ion-hide-lg-up"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","8","size-lg","10","size-xl","5"],[2,"border-top","#9993 solid 2px","margin-bottom","20px"],["class","ion-justify-content-center","style"," margin-top: 20px;",4,"ngFor","ngForOf"],["id","searchbar-wrapper"],["debounce","2000","animated","true","searchIcon","none","showCancelButton","true","placeholder","Search for Mentor by Name",1,"searchbar",3,"ionChange"],["id","search-options"],[1,"cancel-button"],[1,"ion-justify-content-center",2,"margin-top","20px"],["size-xs","12","size-sm","10","size-md","8","size-lg","10","size-xl","5"],["lines","none"],["slot","start"],["src","../../../assets/aaron.jpg"],["slot","end"],[2,"--background","linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2))","--color","#005191","font-weight","600","margin-right","20px","width","80px",3,"click"]],template:function(t,e){1&t&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.mc(3,"Mentors"),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content"),b.Mb(5,"ion-grid"),b.Mb(6,"ion-row",1),b.Mb(7,"ion-col",2),b.Mb(8,"p"),b.mc(9,"Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!"),b.Lb(),b.Ib(10,"hr",3),b.Lb(),b.Lb(),b.lc(11,u,14,2,"ion-row",4),b.Lb(),b.Lb(),b.Mb(12,"ion-footer"),b.Mb(13,"div",5),b.Mb(14,"ion-searchbar",6),b.Ub("ionChange",function(t){return e.filter(t)}),b.Lb(),b.Mb(15,"div",7),b.Mb(16,"p"),b.mc(17,'You can choose up to five hashtags. Please seperate each tag with a comma ( , ) . Example: "Computers, Science, Technology"'),b.Lb(),b.Mb(18,"p"),b.mc(19,"Current Search: ----"),b.Lb(),b.Mb(20,"div"),b.Mb(21,"ion-button",8),b.mc(22," Cancel "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.xb(11),b.Zb("ngForOf",e.allMentors))},directives:[s.u,s.P,s.O,s.o,s.t,s.G,s.n,o.i,s.s,s.H,s.Y,s.g,s.C,s.x,s.d,s.B,s.h],styles:["ion-toolbar[_ngcontent-%COMP%]{padding:0}.new-message[_ngcontent-%COMP%]{color:#faa71b}h2[_ngcontent-%COMP%]{font-size:1em;font-weight:400}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.mentor-thumbnail[_ngcontent-%COMP%]{position:absolute;top:25px;right:15px;height:50px;width:50px;background-image:url(aaron.51813457a867ebfcb7d8.jpg);background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px}.mentors[_ngcontent-%COMP%]{margin:20px 0;box-shadow:none;box-shadow:1px 10px 10px rgba(0,0,0,.05);border-radius:5px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-delay:.1s}.mentors[_ngcontent-%COMP%], .mentors[_ngcontent-%COMP%]:hover{background:#fff;height:auto;padding:40px}.mentors[_ngcontent-%COMP%]:hover{margin:30px 0;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;transition:.1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}#mentor-name[_ngcontent-%COMP%]{font-size:1.3em;font-weight:800}#mentor-title[_ngcontent-%COMP%]{font-size:1.1em;font-weight:800;color:#777;position:relative;top:-10px}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}"]}),t})()},{path:"mentor-page/:name/:title/:email/:description/:photo/:city/:state",loadChildren:()=>n.e(41).then(n.bind(null,"o1Rv")).then(t=>t.MentorPagePageModule)},{path:"mentor-chat",loadChildren:()=>n.e(39).then(n.bind(null,"NZe1")).then(t=>t.MentorChatPageModule)}];let d=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(g)],a.j]}),t})();var m=n("OWIS");let p=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[r.a,o.b,i.d,s.Q,d,m.NewMessageMentorPageModule]]}),t})()}}]);