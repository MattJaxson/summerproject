!function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[1,64,65,66],{"/Tr7":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n("jIYg");function r(e){Object(a.a)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},"7xvl":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n("JhOC"),r=n("/Tr7"),o=n("jIYg");function i(e,t){Object(o.a)(2,arguments);var n=Object(r.a)(e),a=Object(r.a)(t),i=n.getFullYear()-a.getFullYear(),s=n.getMonth()-a.getMonth();return 12*i+s}function s(e,t){Object(o.a)(2,arguments);var n=Object(r.a)(e),s=Object(r.a)(t),u=Object(a.a)(n,s),c=Math.abs(i(n,s));n.setMonth(n.getMonth()-u*c);var h=Object(a.a)(n,s)===-u,d=u*(c-h);return 0===d?0:d}function u(e,t){Object(o.a)(2,arguments);var n=Object(r.a)(e),a=Object(r.a)(t);return n.getTime()-a.getTime()}function c(e,t){Object(o.a)(2,arguments);var n=u(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var h=n("iSMj");function d(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var l=n("JCDJ");function m(e,t,n){Object(o.a)(2,arguments);var i=n||{},u=i.locale||h.a;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=Object(a.a)(e,t);if(isNaN(m))throw new RangeError("Invalid time value");var f,g,b=d(i);b.addSuffix=Boolean(i.addSuffix),b.comparison=m,m>0?(f=Object(r.a)(t),g=Object(r.a)(e)):(f=Object(r.a)(e),g=Object(r.a)(t));var p,v=c(g,f),w=(Object(l.a)(g)-Object(l.a)(f))/1e3,y=Math.round((v-w)/60);if(y<2)return i.includeSeconds?v<5?u.formatDistance("lessThanXSeconds",5,b):v<10?u.formatDistance("lessThanXSeconds",10,b):v<20?u.formatDistance("lessThanXSeconds",20,b):v<40?u.formatDistance("halfAMinute",null,b):u.formatDistance(v<60?"lessThanXMinutes":"xMinutes",1,b):0===y?u.formatDistance("lessThanXMinutes",1,b):u.formatDistance("xMinutes",y,b);if(y<45)return u.formatDistance("xMinutes",y,b);if(y<90)return u.formatDistance("aboutXHours",1,b);if(y<1440){var M=Math.round(y/60);return u.formatDistance("aboutXHours",M,b)}if(y<2520)return u.formatDistance("xDays",1,b);if(y<43200){var j=Math.round(y/1440);return u.formatDistance("xDays",j,b)}if(y<86400)return p=Math.round(y/43200),u.formatDistance("aboutXMonths",p,b);if((p=s(g,f))<12){var k=Math.round(y/43200);return u.formatDistance("xMonths",k,b)}var D=p%12,C=Math.floor(p/12);return D<3?u.formatDistance("aboutXYears",C,b):D<9?u.formatDistance("overXYears",C,b):u.formatDistance("almostXYears",C+1,b)}function f(e,t){return Object(o.a)(1,arguments),m(e,Date.now(),t)}},Aso2:function(t,n,a){"use strict";a.d(n,"a",function(){return g});var r=a("mrSG"),o=a("NuaS"),i=a("lGQG"),s=a("2Vo4"),u=a("JIr8"),c=a("AytR"),h=a("fXoL"),d=a("tk/3"),l=a("e8h1"),m=a("TEn/"),f=a("tyNb"),g=function(){var t=function(){function t(e,n,a,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.http=e,this.storage=n,this.alertController=a,this.helper=r,this.auth=o,this.router=i,this.toastController=u,this.BACKEND_URL=c.a.url,this.activeEmail="",this.fullName=new s.a(""),this.about=new s.a(""),this.city=new s.a(""),this.state=new s.a(""),this.zip=new s.a(""),this.gender=new s.a(""),this.dob=new s.a(""),this.school=new s.a(""),this.grade=new s.a(""),this.profilePicture=new s.a(""),this.resume=new s.a(""),this.email=new s.a(""),this.activeEmail=this.auth.user.email}var n,a,o;return n=t,(a=[{key:"getAllUsers",value:function(){return this.http.get(this.BACKEND_URL+"/api/home/user")}},{key:"getUserDetails",value:function(){return this.http.post(this.BACKEND_URL+"/api/home/user",{email:this.activeEmail})}},{key:"getTheirDetails",value:function(e){return this.http.post(this.BACKEND_URL+"/api/home/user/their-details",{email:e})}},{key:"changeEmail",value:function(e,t,n){var a=this;return this.http.post(this.BACKEND_URL+"/api/home/user/change-email",{oldEmail:this.activeEmail,email:t,password:n}).pipe(Object(u.a)(function(e){throw a.presentFailToast(a.activeEmail),new Error(e)})).subscribe(function(e){if(!0!==e)return a.presentFailToast(a.activeEmail),console.log("Passwords dont match");a.email.next(t),a.activeEmail=t,a.router.navigate(["/home/profile"]),a.presentSuccessToast()})}},{key:"presentSuccessToast",value:function(){this.toastController.create({message:"Your Email address has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(function(e){return e.present()})}},{key:"presentFailToast",value:function(e){this.toastController.create({message:"Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of "+e,duration:9e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(function(e){return e.present()})}},{key:"changePassword",value:function(e,t,n,a){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var o=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.http.post(this.BACKEND_URL+"/api/home/user/change-password",{oldPassword:t,email:e,newPassword:n,reTypeNewPassword:a}).subscribe(function(e){!0===e?(console.log("TRUE"),o.router.navigate([""]),o.toastController.create({message:"Password updated. Please login with your new password.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(function(e){return e.present()})):console.log("Passwords dont match!")});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},r,this)}))}},{key:"changeAbout",value:function(e,t,n){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.http.post(this.BACKEND_URL+"/api/home/user/change-about",{email:e,newAbout:t,passsword:n}).subscribe();case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},a,this)}))}},{key:"changeSchool",value:function(e,t,n,a){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var o=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.http.post(this.BACKEND_URL+"/api/home/user/change-school",{email:e,newSchool:t,newGrade:n,password:a}).subscribe(function(e){if(!0!==e)return o.toastController.create({message:"Please make sure your password is correct",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(function(e){return e.present()}),console.log("Passwords dont match");o.school.next(t),o.grade.next(n),o.router.navigate(["/home/profile"]),o.toastController.create({message:"Your school information has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(function(e){return e.present()})});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},r,this)}))}},{key:"changeProfilePicture",value:function(e,t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.http.post(this.BACKEND_URL+"/api/photo/change-profile-picture",{imageForm:e,oldPhotoKey:t}).subscribe());case 1:case"end":return n.stop()}},n,this)}))}},{key:"changeResume",value:function(e,t,n){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function a(){var r=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.http.post(this.BACKEND_URL+"/api/home/user/change-school",{email:e,newResume:t,password:n}).subscribe(function(e){if(!0!==e)return console.log("Passwords dont match");console.log("Changing Resume..."),r.resume.next(t),r.router.navigate(["/home/user/change-school/:school/:grade/confirm"])});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},a,this)}))}},{key:"delete",value:function(){console.log("Deleted User")}}])&&e(n.prototype,a),o&&e(n,o),t}();return t.\u0275fac=function(e){return new(e||t)(h.Qb(d.b),h.Qb(l.b),h.Qb(m.a),h.Qb(o.b),h.Qb(i.a),h.Qb(f.f),h.Qb(m.Z))},t.\u0275prov=h.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},JCDJ:function(e,t,n){"use strict";function a(e){return e.getTime()%6e4}function r(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+a(t))%6e4:a(t))}n.d(t,"a",function(){return r})},JhOC:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("/Tr7"),r=n("jIYg");function o(e,t){Object(r.a)(2,arguments);var n=Object(a.a)(e),o=Object(a.a)(t),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}},iSMj:function(e,t,n){"use strict";var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;a=e.values[u]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}var u={ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function c(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=a.match(o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth]);if(!i)return null;var s,u=i[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(c):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(c),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(u.length)}}}var h,d={ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(h.matchPattern);if(!r)return null;var o=r[0],i=n.match(h.parsePattern);if(!i)return null;var s=h.valueCallback?h.valueCallback(i[0]):i[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(o.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.a={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(e,t,n,a){return i[e]},localize:u,match:d,options:{weekStartsOn:0,firstWeekContainsDate:1}}},jIYg:function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,"a",function(){return a})}}])}();