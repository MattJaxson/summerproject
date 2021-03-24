(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["following-following-module"],{

/***/ "Go9/":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/following/following.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.post {\n  padding: 24px 0;\n  margin-bottom: 80px;\n  border-radius: 11px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  font-size: 1.1em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-content {\n  font-size: 1em;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #0055a5;\n  font-size: 0.9em;\n  position: relative;\n  top: -20px;\n  line-height: 25px;\n  margin: 10px 0px 0px 0px;\n}\n\n.post-buttons ion-toolbar {\n  --background: none;\n}\n\n.post-name {\n  font-size: 0.9em;\n  font-weight: 700;\n  color: #666;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.65em;\n  margin: 0;\n  line-height: 18px;\n}\n\n.show-less {\n  height: auto;\n  overflow: hidden;\n}\n\n.show-more-or-less-button {\n  float: right;\n  position: relative;\n  right: 0px;\n  margin-top: 35px;\n  padding: 0.5em;\n  background: #0055a5;\n  color: white;\n  border-radius: 5px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n\n.ellipsis {\n  float: right;\n  position: relative;\n  right: 20px;\n  top: -18px;\n}\n\n@media screen and (max-width: 567px) {\n  .post {\n    padding: 30px 0px;\n  }\n}\n\n.no-posts {\n  height: 70vh;\n}\n\nform {\n  width: 100%;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 0.55em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.no-tags {\n  font-size: 0.7em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #333;\n  opacity: 0.5;\n  position: relative;\n  top: -32px;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.blue-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0055a2);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#bffce9, #7efcd4);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.comment {\n  border: 1px solid #0055a5;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-button {\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  right: -20px;\n  top: 5px;\n}\n\n.comment-post-button {\n  --border-color: #40c59d;\n  --border-width: 2px;\n  --border-style: solid;\n  --background: #40c59d;\n  --color: white;\n  height: 40px;\n  margin: 29px auto;\n  font-weight: 600;\n  font-size: 0.6em;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-button {\n  width: 130px;\n  --background: #0055a5;\n  --background-hover: #0055a5;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZvbGxvd2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFHRjs7QUFDRTtFQUNFLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUFhLFNBQUE7RUFDYixpQkFBQTtBQUVGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUFXLGlCQUFBO0FBRWI7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLGlCQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFB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LFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUFGO0VBR0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFERjtBQUNGOztBQVJBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFBRjtFQUdBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBREY7QUFDRiIsImZpbGUiOiJmb2xsb3dpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucG9zdC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxZW07XG4gfVxuLnBvc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzAwNTVhNTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG4ucG9zdC1idXR0b25ze1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG5cbi5wb3N0LW5hbWUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzY2NjsgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMThweDtcblxufVxuXG4ucG9zdC1kYXRlIHtcbiAgb3BhY2l0eTogMC40O1xuICBmb250LXNpemU6IDAuNjVlbTtcbiAgbWFyZ2luOiAwOyBsaW5lLWhlaWdodDogMThweDtcbn1cbi5zaG93LWxlc3Mge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaG93LW1vcmUtb3ItbGVzcy1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZWxsaXBzaXMge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTE4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5wb3N0IHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgfVxufVxuXG4ubm8tcG9zdHMge1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oYXNodGFnc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMnB4O1xufVxuLmhhc2h0YWd7XG4gIGZvbnQtc2l6ZTogMC41NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2VhODQwMDtcbn1cbi5uby10YWdzIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMnB4O1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDYwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDUwcHggMCA4MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udG9vbGJhciA+IGlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyMDksMjE2LDIyNCwwLjEzKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcblxuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICB9XG59XG5cbi5wb3N0LXRvb2xiYXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgfVxuICB9XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwMDU1YTIpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjYmZmY2U5LCAjN2VmY2Q0KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbW1lbnQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJvcmRlci1jb2xvcjogIzQwYzU5ZDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJhY2tncm91bmQ6ICM0MGM1OWQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMjlweCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMnB4IDAgNHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjMyLCAyMzYsIC4zKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNTVhNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDMwcHggMCAxNTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1idXR0b257XG4gIHdpZHRoOiAxMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMDU1YTU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXNpemU6IDgwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "L9PC":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/following/following.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Following</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n  <!-- Desktop Header -->\n  <ion-row class=\"ion-hide-lg-down\">\n    <ion-col offset-lg=\"2\" offset-xl=\"3\" size=\"3\" style=\"margin: 3% 0% 2% 0%;\">\n      <h1 style=\"font-size: 3em;\n      font-weight: 600;\">Following</h1>\n    </ion-col>\n    <ion-col style=\"padding-top: 64px;\" push-lg=\"2.5\" push-xl=\"0.8\" size-lg=\"4.2\" size-xl=\"3.5\">\n      <ion-button style=\"position: relative; top: 33px;\" class=\"add-button\"  (click)=\"addPost()\">\n        Add Post\n      </ion-button>\n      <ion-button class=\"blue-button\"  (click)=\"back()\">\n        Back\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n    <ion-col\n    class=\"no-posts ion-align-items-center\"\n    *ngIf=\"allFollowedPosts.length === 0\"\n    size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n    <div>\n      <p style=\"font-size: 1.2em;\">You currently do not have any posts. Please click the Add Post button to create a Post.</p>\n    </div>\n    </ion-col>\n\n  <!-- Posts -->\n  <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n    <div class=\"post\" *ngFor=\"let post of allFollowedPosts\" style=\"margin-top: 1%;\">\n      <!-- Profile Header -->\n      <ion-row class=\"ion-justify-content-center\">\n            <!-- Profile Picture -->\n            <ion-col size=\"1\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"10\">\n              <p class=\"post-name\">{{post.creatorName}}</p>\n              <p class=\"post-date\">{{post.date}}</p>\n            </ion-col>\n\n      </ion-row>\n      <!-- Post Content -->\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- (click)=\"postPage(post)\"  -->\n        <!-- 1080x1350 -->\n        <ion-col size=\"11\">\n          <p class=\"post-title\">{{post.title}}</p>\n          <div class=\"hashtags\">\n            <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n              #{{tag}}\n            </p>\n          </div>\n          <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n            No #hashtags for this post\n          </p>\n          <p [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n          <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n          <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText()\">\n            {{ showShortDesciption ? 'SHOW ALL': 'SHOW LESS' }}\n          </button>\n        </ion-col>\n      </ion-row>\n      <!-- Comment -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <ion-item  style=\"height: auto;\" lines=\"none\">\n            <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n              <ion-textarea\n                  class=\"comment-input-mobile\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  #postComment\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n              </ion-textarea>\n              <!-- Comment Post Button -->\n              <ion-button\n                style=\"float: right;\"\n                *ngIf=\"postComment.value.length >= 2;\"\n                class=\"comment-post-button\"\n                name=\"send\"\n                type=\"submit\">Post Comment\n              </ion-button>\n            </form>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Post Buttons -->\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- Upvote & Downvote-->\n        <ion-col size=\"8\">\n          <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n        </ion-col>\n        <!-- Follow & Comment -->\n        <ion-col size=\"3\">\n          <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-col>\n\n  </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "c9Mp":
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/following/following.page.ts ***!
  \*********************************************************/
/*! exports provided: FollowingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPage", function() { return FollowingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_following_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./following.page.html */ "L9PC");
/* harmony import */ var _following_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./following.page.scss */ "Go9/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













let FollowingPage = class FollowingPage {
    constructor(router, posts, profile, toast, formBuilder, eventEmitterService, modal, location) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.eventEmitterService = eventEmitterService;
        this.modal = modal;
        this.location = location;
        this.showShortDesciption = true;
        this.allFollowedPosts = [];
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        // Get the User's Followed Posts
        this.profile.getUserDetails().subscribe(details => {
            console.log('User ID from Following Page OnInit');
            this.userID = details['_id'];
            this.userFullName = details['fullName'];
            this.userEmail = details['email'];
            this.userProfilePicture = details['profilePicture'];
            this.posts.getFollowedPost(this.userID).subscribe(data => {
                this.allFollowedPosts = Object.values(data).reverse();
                console.log(data);
                for (const post of this.allFollowedPosts) {
                    post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), 'MMMM do, yyyy');
                }
                return this.allFollowedPosts;
            });
        });
        console.log('Got Followed Posts');
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
    }
    alterDescriptionText() {
        this.showShortDesciption = !this.showShortDesciption;
    }
    postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/posts']);
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Reset Comment Input
            this.commentForm.reset();
            const date = yield Date.now();
            console.log('Posting comment');
            console.log('Post ID: ' + postID);
            yield this.posts.comment(postID, this.userFullName, this.userEmail, this.userProfilePicture, comment).subscribe(() => {
                this.posts.getPostInfo(postID).subscribe(post => {
                    this.posts.getPostInfo(postID).subscribe(post => {
                        for (let postComments of post['comments']) {
                            console.log(postComments);
                            postComments.isUser = false;
                            postComments.canDeleteComment = false;
                            postComments.canReport = true;
                            // If this comment is from the logged in user, they can delete and edit
                            if (postComments.userEmail === this.userEmail) {
                                postComments.isUser = true;
                                postComments.canDeleteComment = true;
                                postComments.canReport = false;
                            }
                            postComments.repliesLength = postComments.replies.length;
                            postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                                includeSeconds: true,
                                addSuffix: false
                            });
                        }
                        this.posts.commentsSubject$.next(post['comments'].reverse());
                    });
                });
            });
            yield this.posts.getPostInfo(postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(postComments.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
                this.posts.commentsSubject$.next(post['comments'].reverse());
            });
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
            yield this.router.navigate(['/home/posts/post-page', postID]);
        });
    }
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the User's Followed Posts
            this.profile.getUserDetails().subscribe(details => {
                console.log('User ID from Following Page OnInit');
                this.userID = details['_id'];
                this.userFullName = details['fullName'];
                this.userEmail = details['email'];
                this.userProfilePicture = details['profilePicture'];
                this.posts.getFollowedPost(this.userID).subscribe(data => {
                    this.allFollowedPosts = Object.values(data).reverse();
                    console.log(data);
                    for (const post of this.allFollowedPosts) {
                        post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(new Date(post.date), 'MMMM do, yyyy');
                    }
                    return this.allFollowedPosts;
                });
            });
            // Present Toast
            yield setTimeout(() => {
                const toast = this.toast.create({
                    message: 'Inspiration Page has been refreshed',
                    duration: 3000
                });
                event.target.complete();
                toast.then(toast => toast.present());
            }, 2000);
        });
    }
};
FollowingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"] }
];
FollowingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-following',
        template: _raw_loader_following_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_following_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]])
], FollowingPage);



/***/ }),

/***/ "txkh":
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/following/following.module.ts ***!
  \***********************************************************/
/*! exports provided: FollowingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/custom-component.module */ "zAgk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _following_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./following-routing.module */ "vF9a");
/* harmony import */ var _following_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./following.page */ "c9Mp");








let FollowingPageModule = class FollowingPageModule {
};
FollowingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_4__["CustomComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _following_routing_module__WEBPACK_IMPORTED_MODULE_6__["FollowingPageRoutingModule"]
        ],
        declarations: [_following_page__WEBPACK_IMPORTED_MODULE_7__["FollowingPage"]]
    })
], FollowingPageModule);



/***/ }),

/***/ "vF9a":
/*!*******************************************************************!*\
  !*** ./src/app/pages/posts/following/following-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FollowingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageRoutingModule", function() { return FollowingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _following_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./following.page */ "c9Mp");




const routes = [
    {
        path: '',
        component: _following_page__WEBPACK_IMPORTED_MODULE_3__["FollowingPage"]
    }
];
let FollowingPageRoutingModule = class FollowingPageRoutingModule {
};
FollowingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=following-following-module-es2015.js.map