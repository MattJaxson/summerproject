(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{V0uV:function(i,t,e){"use strict";e.r(t),e.d(t,"ProfilePicturePageModule",function(){return b});var g=e("ofXK"),o=e("3Pt+"),I=e("TEn/"),M=e("tyNb"),n=e("mrSG"),c=e("lGQG"),a=e("6/gD"),D=e("AytR"),l=e("1tJ+"),d=e("fXoL");const r=["defaultPicture"];function C(i,t){1&i&&d.Ib(0,"canvas",14,15)}function u(i,t){if(1&i&&d.Ib(0,"img",16),2&i){const i=d.Wb();d.ac("src",i.uploadedPhotoURL,d.ic)}}const s=[{path:"",component:(()=>{class i{constructor(i,t,e,g,o,I){this.router=i,this.alertController=t,this.modal=e,this.photo=g,this.auth=o,this.toast=I,this.defaultProfilePicturePath="../../../../../assets/icon/default-pro-picture.svg",this.uploadedPhoto=!1,this.BACKEND_URL=D.a.url}ngOnInit(){console.log(this.defaultPicDataURI())}ngAfterViewInit(){console.log(this.defaultPictureRef.nativeElement)}getFormData(i){return Object(n.a)(this,void 0,void 0,function*(){const t=document.querySelectorAll("form");yield t.forEach(i=>{"proPicForm"===i.id&&(console.log("Got Form: ",i),this.formData=new FormData(i),console.log("Form data: ",this.formData),this.uploadedPhoto=!0)});const e=new FileReader;if(yield e.addEventListener("load",()=>Object(n.a)(this,void 0,void 0,function*(){this.uploadedPhotoURL=e.result,console.log("Before cropping: "+e.result),yield this.cropPhoto(this.uploadedPhotoURL)}),!0),t)return console.log(i.target.files[0]),e.readAsDataURL(i.target.files[0])})}uploadPhoto(){document.querySelectorAll("form").forEach(i=>{"proPicForm"===i.id&&(console.log("Got Form: "+i),this.formData=new FormData(i))});const i=new FormData,t=new File([this.dataURLtoBlob(this.uploadedPhotoURL)],"picture.png");i.append("profile-picture",t),!0===this.uploadedPhoto&&this.photo.imageUpload(i).subscribe(i=>{console.log(i),console.log("Image Upload API Successful"),this.goToUploadResumePage(i.objectUrl)})}skip(){console.log("Skipping to Upload Resume >>"),this.presentSkipAlert()}cropPhoto(i){return Object(n.a)(this,void 0,void 0,function*(){const t=yield this.modal.create({component:l.a,cssClass:"image-cropper",componentProps:{uploadedPhotoURL:i}});yield t.present(),t.onDidDismiss().then(i=>{this.uploadedPhotoURL=i.data,console.log("After cropping: "+this.uploadedPhotoURL)})})}goToUploadResumePage(i){this.auth.getProfilePicture(i),console.log("Going to Resume Page >>"),this.router.navigate(["/personal-info/profile-picture/upload-resume"])}presentSkipAlert(){return Object(n.a)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Skip",message:"Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.",buttons:[{text:"Skip",handler:()=>{}},{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancelling Profile Picture Upload Skip...")}}]});yield i.present()})}presentToast(i){return Object(n.a)(this,void 0,void 0,function*(){(yield this.toast.create({message:i,position:"bottom",duration:3e3})).present()})}presentCancelAlert(){return Object(n.a)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Cancel Sign up?",cssClass:"danger-alert",buttons:[{text:"Yes",handler:()=>{this.router.navigate([""]),console.log("Cancelling Sign Up...")}},{text:"No",role:"cancel",handler:()=>{}}]});yield i.present()})}cancel(){console.log("Sign up cancelled"),this.presentCancelAlert()}defaultPicDataURI(){return"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="}dataURLtoBlob(i){const t=i.split(","),e=t[0].match(/:(.*?);/)[1],g=atob(t[1]);let o=g.length;const I=new Uint8Array(o);for(;o--;)I[o]=g.charCodeAt(o);return new Blob([I],{type:e})}}return i.\u0275fac=function(t){return new(t||i)(d.Hb(M.f),d.Hb(I.a),d.Hb(I.T),d.Hb(a.a),d.Hb(c.a),d.Hb(I.Z))},i.\u0275cmp=d.Bb({type:i,selectors:[["app-profile-picture"]],viewQuery:function(i,t){if(1&i&&d.tc(r,!0),2&i){let i;d.ec(i=d.Vb())&&(t.defaultPictureRef=i.first)}},features:[d.wb([])],decls:22,vars:3,consts:[[2,"display","none"],[1,"ion-text-center"],[1,"ion-justify-content-center"],["size","12"],[1,"ion-justify-content-center","header"],["size","12",1,"ion-align-items-center"],["id","default-picture-wrapper",4,"ngIf"],["id","upload-picture-wrapper",3,"src",4,"ngIf"],[1,"text-header"],["id","proPicForm","type","multipart/form-data",3,"ngSubmit"],["name","profile-picture","placeholder","Upload Image","type","file",3,"change"],["type","submit",1,"orange-button",3,"disabled"],[1,"blue-button","skip-button",3,"click"],[1,"cancel-button",3,"click"],["id","default-picture-wrapper"],["defaultPicture",""],["id","upload-picture-wrapper",3,"src"]],template:function(i,t){1&i&&(d.Ib(0,"ion-header",0),d.Mb(1,"ion-content",1),d.Mb(2,"ion-grid"),d.Mb(3,"ion-row",2),d.Mb(4,"ion-col",3),d.Mb(5,"ion-row",4),d.Mb(6,"ion-col",5),d.lc(7,C,2,0,"canvas",6),d.lc(8,u,1,1,"img",7),d.Lb(),d.Mb(9,"h6",8),d.mc(10,"Please select your profile picture. Only pictures with the extentions "),d.Mb(11,"span"),d.mc(12,"'.png', '.jpg', and '.jpeg'"),d.Lb(),d.mc(13," are allowed. "),d.Lb(),d.Lb(),d.Mb(14,"form",9),d.Ub("ngSubmit",function(){return t.uploadPhoto()}),d.Mb(15,"input",10),d.Ub("change",function(i){return t.getFormData(i)}),d.Lb(),d.Mb(16,"ion-button",11),d.mc(17,"Next "),d.Lb(),d.Lb(),d.Mb(18,"ion-button",12),d.Ub("click",function(){return t.skip()}),d.mc(19," Skip "),d.Lb(),d.Mb(20,"ion-button",13),d.Ub("click",function(){return t.cancel()}),d.mc(21," Cancel "),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&i&&(d.xb(7),d.Zb("ngIf",!t.uploadedPhoto),d.xb(1),d.Zb("ngIf",t.uploadedPhoto),d.xb(8),d.Zb("disabled",!t.uploadedPhoto))},directives:[I.u,I.o,I.t,I.G,I.n,g.j,o.o,o.j,o.k,I.g],styles:['.orange-button[_ngcontent-%COMP%]{width:unset;display:block;margin:40px auto;width:200px;-webkit-animation:none;animation:none;opacity:1}.blue-button[_ngcontent-%COMP%]{width:200px}.skip-button[_ngcontent-%COMP%]{display:block;--background:#e6e6e6;--background-hover:#999;color:#888;width:150px;margin:40px auto;-webkit-animation:none;animation:none;opacity:.5}.skip-button[_ngcontent-%COMP%]:hover{color:#fff}.wrapper[_ngcontent-%COMP%]{box-shadow:1px 1px 10px rgba(0,0,0,.1);height:auto;padding:50px}#default-picture-wrapper[_ngcontent-%COMP%]{height:100px;width:100px;margin:0 auto;border-radius:50px;background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");opacity:0;-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1) .5s forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1) .5s forwards}#upload-picture-wrapper[_ngcontent-%COMP%]{height:100px;width:100px;margin:0 auto;opacity:0;-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards}span[_ngcontent-%COMP%]{color:#005191;font-weight:600;background:#fff;padding:6px;line-height:1.5em;border-radius:5px}#next-button[_ngcontent-%COMP%]{width:100%;height:60px;background:#d3d3d3;position:absolute;bottom:0;font-size:1em}.header[_ngcontent-%COMP%]{background:#edf3f8;margin-bottom:20px;padding:50px 0}.text-header[_ngcontent-%COMP%]{font-size:1em;padding:0 50px;color:#333;text-align:justify;opacity:0;position:relative;top:35px;-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1) .9s forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1) .9s forwards}@media only screen and (max-width:576px){.text-header[_ngcontent-%COMP%]{padding:0 50px;font-size:1em}}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:linear-gradient(#fdfbfb,#fff7f8);--background-hover:linear-gradient(#f15b77,#e4405f);height:50px;width:150px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.cancel-button[_ngcontent-%COMP%]:hover{color:#fff}.camera-button[_ngcontent-%COMP%]{--background:#fff;--color:#005191;--border-style:solid;--border-width:1px;--border-color:#005191;border:1px;margin:30px auto}input[type=file][_ngcontent-%COMP%]{color:#005191;font-size:1.2em;font-weight:600;border:1px solid #005191;background:linear-gradient(rgba(6,114,196,.3),rgba(0,81,145,.2));width:300px;height:50px;border-radius:5px;padding:20px 0 0;text-align:center;cursor:pointer;margin:0 auto}input[type=file][_ngcontent-%COMP%]:hover{background:linear-gradient(#0672c4,#054372);color:#fff}input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}#img-wrapper[_ngcontent-%COMP%]{height:150px;width:150px;margin:50px auto}']}),i})()},{path:"upload-resume",loadChildren:()=>Promise.all([e.e(0),e.e(32)]).then(e.bind(null,"bQWd")).then(i=>i.UploadResumePageModule)}];let A=(()=>{class i{}return i.\u0275mod=d.Fb({type:i}),i.\u0275inj=d.Eb({factory:function(t){return new(t||i)},imports:[[M.j.forChild(s)],M.j]}),i})();var N=e("Scpy");let b=(()=>{class i{}return i.\u0275mod=d.Fb({type:i}),i.\u0275inj=d.Eb({factory:function(t){return new(t||i)},imports:[[g.b,o.d,o.l,I.Q,A,N.ImageCropperPageModule]]}),i})()}}]);