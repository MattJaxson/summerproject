!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{QGQF:function(o,t,i){"use strict";i.r(t),i.d(t,"ConfirmPageModule",function(){return h});var c,r,a,u=i("ofXK"),f=i("3Pt+"),l=i("TEn/"),b=i("tyNb"),s=i("fXoL"),p=[{path:"",component:(c=function(){function o(e){n(this,o),this.router=e}var t,i,c;return t=o,(i=[{key:"ngOnInit",value:function(){}},{key:"backToProfilePage",value:function(){console.log("Going back to Profile Page"),this.router.navigate(["/home/profile"])}},{key:"cancel",value:function(){console.log("change email password cancelled"),this.router.navigate(["/home/profile"])}}])&&e(t.prototype,i),c&&e(t,c),o}(),c.\u0275fac=function(n){return new(n||c)(s.Hb(b.f))},c.\u0275cmp=s.Bb({type:c,selectors:[["app-confirm"]],decls:9,vars:0,consts:[["id","next-button",3,"click"]],template:function(n,e){1&n&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.mc(3,"confirm"),s.Lb(),s.Lb(),s.Lb(),s.Mb(4,"ion-content"),s.Mb(5,"h5"),s.mc(6,"You email has been changed."),s.Lb(),s.Lb(),s.Mb(7,"button",0),s.Ub("click",function(){return e.backToProfilePage()}),s.mc(8,"BACK TO PROFILE"),s.Lb())},directives:[l.u,l.P,l.O,l.o],styles:[""]}),c)}],m=((a=function e(){n(this,e)}).\u0275mod=s.Fb({type:a}),a.\u0275inj=s.Eb({factory:function(n){return new(n||a)},imports:[[b.j.forChild(p)],b.j]}),a),h=((r=function e(){n(this,e)}).\u0275mod=s.Fb({type:r}),r.\u0275inj=s.Eb({factory:function(n){return new(n||r)},imports:[[u.b,f.d,l.Q,m]]}),r)}}])}();