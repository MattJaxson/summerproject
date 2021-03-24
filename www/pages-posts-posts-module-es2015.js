(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "1pJF":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-picture {\n  height: 40px;\n  width: 40px;\n  border-radius: 100px;\n  margin-right: 5px;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n}\n\n.header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.5;\n  margin-top: 10px;\n}\n\n.post {\n  padding: 24px 0;\n  margin-bottom: 80px;\n  border-radius: 10px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  font-size: 1.1em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #0055a5;\n  font-size: 0.9em;\n  position: relative;\n  top: -20px;\n  line-height: 25px;\n  margin: 10px 0px 0px 0px;\n}\n\n.post-buttons ion-toolbar {\n  --background: none;\n}\n\n.post-name {\n  font-size: 0.9em;\n  font-weight: 700;\n  color: #666;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.65em;\n  margin: 0;\n  line-height: 18px;\n}\n\nion-content {\n  background: #edf3f8;\n}\n\n#filter-toolbar {\n  --background: #f4f5f8;\n}\n\n@media screen and (max-width: 744px) {\n  .post {\n    position: relative;\n    top: 0px;\n  }\n}\n\n.searchbar {\n  font-weight: 600;\n  color: #0055a5;\n  background: #0055a5;\n}\n\n.searchbar-desktop {\n  font-weight: 600;\n  color: #0055a5;\n}\n\n.hash {\n  margin-right: 8px;\n  font-size: 2em;\n  font-weight: 600;\n  color: white;\n}\n\n.hash-desktop {\n  margin-right: 8px;\n  font-size: 2em;\n  font-weight: 600;\n  color: #0055a5;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 0.55em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.no-tags {\n  font-size: 0.7em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #333;\n  opacity: 0.5;\n  position: relative;\n  top: -32px;\n}\n\n.post-content {\n  font-size: 0.9em;\n}\n\n.show-less {\n  height: auto;\n  overflow: hidden;\n}\n\n.show-more-or-less-button {\n  float: right;\n  position: relative;\n  right: 0px;\n  margin-top: 35px;\n  padding: 0.5em;\n  background: #0055a5;\n  color: white;\n  border-radius: 5px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n\n.ellipsis {\n  float: right;\n  position: relative;\n  right: 20px;\n  top: -18px;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #f4f5f8;\n}\n\n.searchbar-input-container .sc-ion-searchbar-md {\n  display: block;\n  position: relative;\n  flex-shrink: 1;\n  width: 96%;\n  position: relative;\n  left: 4px;\n}\n\n#search-options {\n  padding: 10px;\n  color: white;\n  font-weight: 500;\n  font-size: 1.2em;\n  background: #0055a5;\n}\n\n#search-options .cancel-button {\n  display: block;\n  --background: #0055a5;\n}\n\n#search-options .search-button {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 16px;\n  --background: #faa71b;\n}\n\n.user-details {\n  position: fixed;\n  background: none;\n  height: 200px;\n}\n\n#username {\n  color: #0055a5;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  left: 0px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-header .header-icons {\n  font-size: 1.6em;\n}\n\nion-header p {\n  color: #000;\n  font-size: 1.2em;\n}\n\nion-item {\n  --backsground: none;\n}\n\n.following-mobile-button {\n  display: inline-block;\n  opacity: 1;\n  --background: #0055a5;\n  --color: white;\n  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.1);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-size: 0.6em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  .following-mobile-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\n.following-button {\n  --color: white;\n  --background: #0055a5;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#5ad8b2, #2e8f72);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.my-post-button {\n  --background: #333;\n  --background-hover: #444;\n  --color: white;\n  font-weight: 600;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  display: block;\n}\n\n.my-post-button:hover {\n  --color: white;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #0055a5;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-button {\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  right: -20px;\n  top: 5px;\n}\n\n.comment-post-button {\n  --border-color: #40c59d;\n  --border-width: 2px;\n  --border-style: solid;\n  --background: #40c59d;\n  --color: white;\n  height: 40px;\n  margin: 29px auto;\n  font-weight: 600;\n  font-size: 0.6em;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-button {\n  width: 130px;\n  --background: #0055a5;\n  --background-hover: #0055a5;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\n.comment-button:focus {\n  --color: orange;\n}\n\n.follow-button {\n  --color: white;\n  --background: #888;\n  --background-hover: #24d8a8;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.unfollow-button {\n  font-weight: 800;\n  line-height: 1em;\n  border: 1px solid #faa71b;\n  width: 300px;\n  color: #faa71b;\n  font-size: 1.5em;\n  padding: 2px 0px 2px 0px;\n  position: relative;\n  right: 20px;\n  border-radius: 50px;\n}\n\n.follow-button:hover, .unfollow-button:hover, .comment-button:hover {\n  --color: white;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button, .follow-button, .unfollow-button {\n    font-weight: 600;\n    font-size: 0.5em;\n    width: 100px;\n  }\n}\n\nion-buttons {\n  position: relative;\n  left: 10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #0055a5;\n}\n\n.upvote ion-icon {\n  color: #0055a5;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #0055a5;\n}\n\n.downvote ion-icon {\n  color: #0055a5;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #0055a5;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n  opacity: 0;\n  transition: 0.5s;\n  -webkit-animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n          animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n}\n\n@-webkit-keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Bvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFBYyxXQUFBO0VBQ2Qsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBR0Y7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFBYSxTQUFBO0VBQ2IsaUJBQUE7QUFFRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFBVyxpQkFBQTtBQUViOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFRRjs7QUFOQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUEM7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBVUY7O0FBUEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVBDO0VBQ0MsY0FBQTtFQUNFLGtCQUFBO0VBRUEsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFVSjs7QUFQQztFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFVSjs7QUFSRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFVSjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFRRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUFRRjs7QUFGRTtFQUNFLGdCQUFBO0FBS0o7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUhGO0FBQ0Y7O0FBUUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtBQUxGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTEY7O0FBUUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUxGOztBQVFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUVBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1FQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBV0E7RUFDRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBUko7QUFDRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBWUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWNBO0VBQ0Usa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBY0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFaSjs7QUFnQkE7RUFDRSxxQkFBQTtBQWJGOztBQWVBO0VBQ0UscUJBQUE7QUFaRjs7QUFlQTtFQUNFLHFCQUFBO0FBWkY7O0FBY0E7RUFDRSxxQkFBQTtBQVhGOztBQWVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0ZBQUE7VUFBQSw4RUFBQTtBQVpGOztBQWVBO0VBQ0U7SUFDRSw0QkFBQTtFQVpGO0VBY0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFaRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSw0QkFBQTtFQVpGO0VBY0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFaRjtBQUNGOztBQWdCQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBZEY7RUFpQkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFmRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFkRjtFQWlCQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQWZGO0FBQ0Y7O0FBa0JBO0VBQ0U7SUFDRSw0QkFBQTtFQWhCRjtFQW1CQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQWpCRjtBQUNGOztBQVNBO0VBQ0U7SUFDRSw0QkFBQTtFQWhCRjtFQW1CQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQWpCRjtBQUNGOztBQW9CQTtFQUNFO0lBQ0UsbUJBQUE7RUFsQkY7RUFvQkE7SUFDRSxxQkFBQTtFQWxCRjtFQW9CQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQWxCRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxtQkFBQTtFQWxCRjtFQW9CQTtJQUNFLHFCQUFBO0VBbEJGO0VBb0JBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBbEJGO0FBQ0YiLCJmaWxlIjoicG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogNDBweDsgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xufVxuXG4uaGVhZGVyLWhye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5wb3N0LWJ1dHRvbnN7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxuLnBvc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNjY2OyBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG59XG5cbi5wb3N0LWRhdGUge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG59XG4jZmlsdGVyLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ0cHgpIHtcbiAgLnBvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLnNlYXJjaGJhciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBiYWNrZ3JvdW5kOiAjMDA1NWE1XG59XG4uc2VhcmNoYmFyLWRlc2t0b3Age1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwNTVhNTtcbn1cbi5oYXNoe1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oYXNoLWRlc2t0b3B7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG4uaGFzaHRhZ3N7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzJweDtcbn1cbi5oYXNodGFne1xuICBmb250LXNpemU6IDAuNTVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNlYTg0MDA7XG59XG4ubm8tdGFncyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzJweDtcbn1cbi5wb3N0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDAuOWVtO1xuIH1cblxuIC5zaG93LWxlc3Mge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaG93LW1vcmUtb3ItbGVzcy1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZWxsaXBzaXMge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTE4cHg7XG59XG5cbiNzZWFyY2hiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiB9XG5cbiAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciAuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICB3aWR0aDogOTYlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0cHg7XG4gfVxuXG4gI3NlYXJjaC1vcHRpb25zIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAjMDA1NWE1O1xuXG4gIC5jYW5jZWwtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIH1cbiAgLnNlYXJjaC1idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgfVxuIH1cbiBcblxuLnVzZXItZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI3VzZXJuYW1lIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG5cbmlvbi1oZWFkZXIge1xuXG4gIC5oZWFkZXItaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1NWE1O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja3Nncm91bmQ6IG5vbmU7XG59XG5cblxuLmZvbGxvd2luZy1tb2JpbGUtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDQwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLmZvbGxvd2luZy1tb2JpbGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuXG5cbi5mb2xsb3dpbmctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICMyZThmNzIpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5teS1wb3N0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzMzMztcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNDQ0O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXktcG9zdC1idXR0b246aG92ZXIge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDU1YTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29tbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNDBjNTlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYmFja2dyb3VuZDogIzQwYzU5ZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAyOXB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEycHggMCA0cHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMzIsIDIzNiwgLjMpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWJ1dHRvbntcbiAgd2lkdGg6IDEzMHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwNTVhNTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtc2l6ZTogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb21tZW50LWJ1dHRvbjpmb2N1cyB7XG4gIC0tY29sb3I6IG9yYW5nZTtcbn1cblxuLmZvbGxvdy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjODg4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyNGQ4YTg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtc2l6ZTogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLy8gQ2hhbmdlIGNvbG9yXG4udW5mb2xsb3ctYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgLy8gYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhYTcxYjtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMnB4IDBweCAycHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uZm9sbG93LWJ1dHRvbjpob3ZlciwgLnVuZm9sbG93LWJ1dHRvbjpob3ZlciwgLmNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmNvbW1lbnQtYnV0dG9uLCAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuXG5pb24tYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbn1cblxuLnVwdm90ZXtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyB3aWR0aDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cblxuLmRvd252b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyB3aWR0aDogNjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tY29sb3I6ICMwMDU1YTU7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIC0tZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi51cHZvdGVkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xufVxuLmRvd252b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbn1cblxuLmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xufVxuLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBmYWItc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAwLjVzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVzZXJuYW1lLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYWRkLXBvc3QtYnV0dG9uLXRhcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "6ViI":
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function() { return PostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.page */ "FvZU");




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]
    },
    {
        path: 'add-post',
        loadChildren: () => __webpack_require__.e(/*! import() | add-post-add-post-module */ "add-post-add-post-module").then(__webpack_require__.bind(null, /*! ./add-post/add-post.module */ "E2mU")).then(m => m.AddPostPageModule)
    },
    {
        path: 'post-page/:_id',
        loadChildren: () => Promise.all(/*! import() | post-page-post-page-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("common"), __webpack_require__.e("post-page-post-page-module")]).then(__webpack_require__.bind(null, /*! ./post-page/post-page.module */ "qgNS")).then(m => m.PostPagePageModule)
    },
    {
        path: 'following',
        loadChildren: () => __webpack_require__.e(/*! import() | following-following-module */ "following-following-module").then(__webpack_require__.bind(null, /*! ./following/following.module */ "txkh")).then(m => m.FollowingPageModule)
    },
    {
        path: 'my-posts/:email',
        loadChildren: () => __webpack_require__.e(/*! import() | my-posts-my-posts-module */ "my-posts-my-posts-module").then(__webpack_require__.bind(null, /*! ./my-posts/my-posts.module */ "3c3Z")).then(m => m.MyPostsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./notifications/notifications.module */ "kVc8")).then(m => m.NotificationsPageModule)
    },
    {
        path: 'student-chat',
        loadChildren: () => Promise.all(/*! import() | student-chat-student-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("student-chat-student-chat-module")]).then(__webpack_require__.bind(null, /*! ./student-chat/student-chat.module */ "JGKh")).then(m => m.StudentChatPageModule)
    }
];
let PostRoutingModule = class PostRoutingModule {
};
PostRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PostRoutingModule);



/***/ }),

/***/ "FvZU":
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./posts.page.html */ "XrIE");
/* harmony import */ var _posts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.page.scss */ "1pJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "DtjX");
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/student-chat.service */ "Y19J");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/notifications.service */ "KWWs");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "R0Ic");















let PostsPage = class PostsPage {
    constructor(router, modal, posts, profile, toast, loading, formBuilder, postsEmitterService, studentChat, notificationsService) {
        this.router = router;
        this.modal = modal;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.postsEmitterService = postsEmitterService;
        this.studentChat = studentChat;
        this.notificationsService = notificationsService;
        this.showShortDesciption = true;
        this.noSearchInput = false;
        this.searching = false;
        this.noPosts = false;
    }
    alterDescriptionText() {
        this.showShortDesciption = !this.showShortDesciption;
    }
    ngOnDestroy() {
        this.postsSub.unsubscribe();
        this.notificationsSub.unsubscribe();
        this.postsEmitterService.subsVar.unsubscribe();
        this.profileSub.unsubscribe();
        this.posts.followingSubject$.unsubscribe();
    }
    ngOnInit() {
        this.getUserInfo();
        this.getPosts();
        this.getFollowingPosts();
        // When Users updated their Profile Picture, Unfollow/Follow, Up/Downvote, or Comment on an individual
        if (this.postsEmitterService.subsVar === undefined) {
            this.postsEmitterService.subsVar = this.postsEmitterService.invokePostsPageRefresh.subscribe(() => {
                this.getPosts();
                this.getUserInfo();
            });
        }
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
    }
    filter(event) {
        this.searchTerm = event.detail.value.replace(/\s+/g, '');
        console.log(this.searchTerm);
    }
    searchHashtags() {
        if (this.noPosts) {
            this.allPosts = this.loadedAllPosts;
            this.noPosts = false;
        }
        let searchedPosts = [];
        let searchTermArray = this.searchTerm.split(',');
        // console.log('Searching...\n');
        // console.log('Search Terms: ')
        // console.log(searchTermArray);
        // console.log('Loaded Posts')
        // console.log(this.loadedAllPosts);
        searchTermArray.forEach(searchedTag => {
            console.log(searchedTag);
            this.loadedAllPosts.filter(foundPost => {
                console.log(foundPost.hashtags);
                foundPost.hashtags.forEach(tag => {
                    console.log(tag);
                    if (tag === searchedTag) {
                        // console.log(tag + ' is a match!');
                        searchedPosts.push(foundPost);
                    }
                });
                if (!this.searchTerm) {
                    // console.log('Search term is empty; showing all events instead');
                    this.noSearchInput = false;
                    this.searching = false;
                    this.getPosts();
                }
                this.noSearchInput = true;
            });
        });
        // Get Unique values from searchPosts Object
        this.allPosts = [...new Set(Object.values(searchedPosts))];
        console.log(this.allPosts);
        if (this.allPosts.length === 0) {
            console.log('That search had no results!');
            return this.noPosts = true;
        }
        if (this.allPosts.length > 0) {
            console.log('That search had results!');
            return this.noPosts = false;
        }
        return this.searchBarBlur();
    }
    searchLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Searching ...',
                duration: 1000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
                // this.searching = true;
                this.searchHashtags();
            });
            console.log('Loading dismissed!');
        });
    }
    searchLoadingEmptySearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Refreshing Posts',
                duration: 1000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
                this.getPosts();
            });
            console.log('Loading dismissed!');
        });
    }
    initializeItems() {
        this.allPosts = this.loadedAllPosts;
    }
    searchBarFocus() {
        console.log('Focusing on Searchbar');
        setTimeout(() => {
            let searchBarWrapper = document.getElementById('searchbar-wrapper');
            let fabWrapper = document.getElementById('fab-wrapper');
            let tabBar = document.getElementById('tabBar');
            searchBarWrapper.style.height = '275px';
            // searchBarWrapper.style.background = '#0055a5c7';
            fabWrapper.style.display = 'none';
            tabBar.style.height = '0px';
            tabBar.style.transition = '500ms';
            tabBar.style.transform = 'translateY(40px)';
        }, 750);
    }
    searchBarBlur() {
        console.log('Blurring out of Searchbar');
        setTimeout(() => {
            let searchBarWrapper = document.getElementById('searchbar-wrapper');
            let fabWrapper = document.getElementById('fab-wrapper');
            let tabBar = document.getElementById('tabBar');
            searchBarWrapper.style.height = '60px';
            searchBarWrapper.style.background = 'none';
            fabWrapper.style.display = 'block';
            tabBar.style.height = '50px';
            tabBar.style.transition = '500ms';
            tabBar.style.transform = 'translateY(0px)';
        }, 750);
    }
    sortPosts() {
        console.log('Attempting to Sort Post...');
    }
    // charHistory = [];
    // addHashTag(key) {
    //   this.charHistory.push(key.code);
    //   console.log(this.charHistory);
    //   if(key.code === "Backspace") {
    //     console.log('Gotta Pop from charHistory!');
    //     let backspace = this.charHistory.pop()
    //     let lastLetter = this.charHistory.pop()
    //     console.log(lastLetter);
    //     console.log(this.charHistory)
    //   }
    // }
    postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    }
    getUserInfo() {
        this.postsSub = this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userProfilePicture = details['profilePicture'];
            this.userFullName = details['fullName'];
            this.followedPost = details['followedPost'];
            this.notificationsSub = this.notificationsService.notifications$.subscribe(notifications => {
                console.log(notifications);
                this.notificationsLength = notifications.length;
            });
        });
    }
    getFollowingPosts() {
        // Get the user's posts he/she is following
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
            this.posts.followingSubject$.next(this.followedPost);
            this.posts.followingSubject$.subscribe(posts => {
                this.followedPostCount = posts.length;
            });
            this.studentChat.conversations$.next(Object.values(details['studentChat']).reverse());
        });
    }
    doRefresh(event) {
        this.getFollowingPosts();
        this.postsSub = this.posts.getPosts().subscribe(jobs => {
            this.allPosts = Object.values(jobs).reverse();
            for (const post of this.allPosts) {
                post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(post.date), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
        });
        // Present Toast
        setTimeout(() => {
            const toast = this.toast.create({
                message: 'Inspiration Page has been refreshed',
                duration: 3000
            });
            event.target.complete();
            toast.then(toast => toast.present());
        }, 2000);
    }
    getPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postsSub = this.posts.getPosts().subscribe(posts => {
                // console.log(posts);
                // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
                // .
                // First Array of Events
                // this.allEvents = Object.values(events);
                this.allPosts = Object.values(posts);
                this.allPostsLength = this.allPosts.length;
                this.allPosts.reverse();
                // Second Array of Events
                this.loadedAllPosts = Object.values(posts);
                this.loadedAllPosts.reverse();
                this.posts.postsSubject$.next(this.allPosts);
                for (const post of this.allPosts) {
                    post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["formatDistanceToNow"])(new Date(post.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
                if (this.allPosts.length === 0) {
                    console.log('That search had no results!');
                    return this.noPosts = true;
                }
                if (this.allPosts.length > 0) {
                    console.log('That search had results!');
                    return this.noPosts = false;
                }
            });
        });
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    myPosts(userEmail) {
        console.log('Going to my posts page');
        this.router.navigate(['/home/posts/my-posts', userEmail]);
    }
    following() {
        this.router.navigate(['/home/posts/following']);
    }
    chat() {
        this.router.navigate(['/home/posts/student-chat']);
    }
    notifications() {
        this.router.navigate(['/home/posts/notifications']);
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(postID, userFullName, userEmail, userProfilePicture, comment);
            // Reset Comment Input
            this.commentForm.reset();
            console.log('Posting comment');
            console.log('Post ID: ' + postID);
            yield this.posts.comment(postID, userFullName, userEmail, userProfilePicture, comment.comment).subscribe(newComment => {
                this.postsSub = this.posts.getPostInfo(postID).subscribe(post => {
                    for (let postComments of post['comments']) {
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
                    let postCreator = post['creatorEmail'];
                    console.log(newComment);
                    // this.userEmail = instigatingUser
                    // postCreator = recievingUser
                    this.notificationsService.
                        commentNotification(this.userEmail, postCreator, postID, newComment).subscribe();
                });
            });
            this.postsSub = this.posts.getPostInfo(postID).subscribe(post => {
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
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"] },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_11__["StudentChatService"] },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"] }
];
PostsPage.propDecorators = {
    fabButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFabButton"], { static: true },] }],
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], { static: false },] }]
};
PostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-posts',
        template: _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('0.8s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ transform: 'translateX(100px)' }))
                ])
            ])
        ],
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__["PostPageEmitterService"],
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_11__["StudentChatService"],
        src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"]])
], PostsPage);



/***/ }),

/***/ "XrIE":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>\n        <img class=\"profile-picture\" src=\"{{userProfilePicture}}\" alt=\"\">\n        <!-- {{userFullName}} -->\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"following()\">\n        <ion-icon class=\"header-icons\" src=\"../../assets/icon/following.svg\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"myPosts(this.userEmail)\">\n        <ion-icon class=\"header-icons\" name=\"list\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"notifications()\">\n        <ion-icon class=\"header-icons\" src=\"../../assets/icon/notifications-icon.svg\"></ion-icon>\n        <span style=\"color: #e4405f; height: 25px; width: 25px; border-radius: 100px; position: relative; font-size: 1.4em; font-weight: 600;\">{{notificationsLength}}</span>\n      </ion-button>\n      <ion-button style=\"position: relative; right: 12px\" (click)=\"sortPosts()\">\n        <ion-icon class=\"header-icons\" name=\"filter\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab [@inOutAnimation] id=\"fab-wrapper\" class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"add-post-button\" (click)=\"addPost()\">\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- Spinner -->\n<ion-spinner *ngIf=\"searching\" name=\"crescent\"></ion-spinner>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-lg-down\">\n    <ion-row style=\"margin-top: 40px;\" class=\"ion-justify-content-center\">\n      <ion-col pull-lg=\"1\" size-md=\"7.5\" size-lg=\"6\" size-xl=\"4.8\">\n        <ion-searchbar\n          class=\"searchbar-desktop\"\n          animated=\"true\"\n          (keyup.enter)=\"searchLoading()\"\n          cancelButtonText=\"\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Posts by Hashtags\"\n          (ionFocus)=\"searchBarFocus()\"\n          (ionChange)=\"filter($event)\">\n          <span class=\"hash-desktop\">#</span>\n        </ion-searchbar>\n        <p style=\"font-size: 0.9em;\">You can choose up to five hashtags. Please seperate each tag with a comma ( , )  Example: \"Computers, Science, Technology\"</p>\n      </ion-col>\n      <ion-col  size-md=\"7.5\" pull-lg=\"3\" size-lg=\"3\" pull-xl=\"1\" size-xl=\"1\">\n        <ion-button class=\"orange-button ion-float-right\" style=\"display: inline-block; width: 72px; font-size: 0.7em;\" (click)=\"searchLoading()\">\n          Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col style=\"border-top: 1px solid #999; padding: 18px 0px;\"  size-md=\"7.5\" size-lg=\"9\" size-xl=\"6\" style=\"margin-top: 2%;\">\n        <div class=\"post\" *ngFor=\"let post of allPosts\" style=\"margin-top: 1%;\">\n          <!-- Profile Header -->\n          <ion-row class=\"ion-justify-content-center\">\n                <!-- Profile Picture -->\n                <ion-col class=\"ion-text-center\" size=\"1\">\n                  <img src=\"{{post.creatorProfilePicture}}\" style=\"border-radius: 100px; height: 35xpx; width: 35px;\">\n                </ion-col>\n                <!-- Post Creator's Name -->\n                <ion-col size=\"10\">\n                  <p class=\"post-name\">{{post.creatorName}}</p>\n                  <p class=\"post-date\">{{post.date}}</p>\n                </ion-col>\n          </ion-row>\n          <!-- Post Content -->\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- (click)=\"postPage(post)\"  -->\n            <!-- 1080x1350 -->\n            <ion-col size=\"11\">\n              <p class=\"post-title\">{{post.title}}</p>\n              <div class=\"hashtags\">\n                <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n                  #{{tag}}\n                </p>\n              </div>\n              <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n                No #hashtags for this post\n              </p>\n              <p style=\"border-top: 1px solid #999; padding: 18px 0px;\"  [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n              <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n              <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText()\">\n                {{ showShortDesciption ? 'SHOW ALL': 'SHOW LESS' }}\n              </button>\n            </ion-col>\n          </ion-row>\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11.5\">\n              <ion-item  style=\"height: auto;\" lines=\"none\">\n                <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                  <ion-textarea\n                      (ionBlur)=\"this.searchBarBlur()\"\n                      (ionFocus)=\"this.searchBarHide()\"\n                      class=\"comment-input-mobile\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      #postComment\n                      placeholder=\"Add a Comment\"\n                      formControlName=\"comment\">\n                  </ion-textarea>\n                  <!-- Comment Post Button -->\n                  <ion-button\n                    style=\"float: right;\"\n                    *ngIf=\"postComment.value.length >= 2;\"\n                    class=\"comment-post-button\"\n                    name=\"send\"\n                    type=\"submit\">Post Comment\n                  </ion-button>\n                </form>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Post Buttons -->\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- Upvote & Downvote-->\n            <ion-col size=\"8\">\n              <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n            </ion-col>\n            <!-- Follow & Comment -->\n            <ion-col size=\"3\">\n              <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n\n      <!-- Sidebar with User Info -->\n      <ion-col push=\"0.5\" size=\"2\">\n        <ion-row class=\"user-details\" style=\"position: fixed; top: 36px;\">\n          <ion-col size=\"12\">\n            <img src=\"{{userProfilePicture}}\" style=\"border-radius: 100px; height: 55px; width: 55px;\">\n            <h6 style=\"font-size: 1.2em;\">{{userFullName}}</h6>\n            <ion-button class=\"my-post-button\"  (click)=\"myPosts(this.userEmail)\">\n              My Posts\n            </ion-button>\n            <ion-button class=\"following-button\" (click)=\"following()\">\n              Following ({{followedPostCount}})\n            </ion-button>\n            <ion-button class=\"add-button\"  (click)=\"addPost()\">\n              Add Post\n            </ion-button>\n            <ion-button style=\"--background: none; --background: none; position: relative; top: 16px;\" (click)=\"notifications()\">\n              <ion-icon style=\"font-size: 1.5em;\" src=\"../../assets/icon/notifications-icon-blue.svg\"></ion-icon>\n              <span style=\"color: #e4405f; height: 25px; width: 25px; border-radius: 100px; position: relative; font-size: 1.4em; font-weight: 600;\">{{notificationsLength}}</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n    <!-- size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"10\" pull-lg=\"2\" -->\n    <!-- Posts -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col *ngIf=\"noPosts\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"5\">\n        <p>No Posts with those #Hashtags. Please try again.</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"5\">\n    <div class=\"post\" *ngFor=\"let post of allPosts\" style=\"margin-top: 1%;\">\n      <!-- Profile Header -->\n      <ion-row class=\"ion-justify-content-center\">\n            <!-- Profile Picture -->\n            <ion-col size=\"1\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"10\">\n              <p class=\"post-name\">{{post.creatorName}}</p>\n              <p class=\"post-date\">{{post.date}}</p>\n            </ion-col>\n\n      </ion-row>\n      <!-- Post Content -->\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- (click)=\"postPage(post)\"  -->\n        <!-- 1080x1350 -->\n        <ion-col size=\"11\">\n          <p class=\"post-title\">{{post.title}}</p>\n          <div class=\"hashtags\">\n            <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n              #{{tag}}\n            </p>\n          </div>\n          <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n            No #hashtags for this post\n          </p>\n          <p [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n          <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n          <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText()\">\n            {{ showShortDesciption ? 'SHOW ALL': 'SHOW LESS' }}\n          </button>\n        </ion-col>\n      </ion-row>\n      <!-- Comment -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <ion-item  style=\"height: auto;\" lines=\"none\">\n            <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n              <ion-textarea\n                  (ionBlur)=\"this.searchBarBlur()\"\n                  class=\"comment-input-mobile\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  #postComment\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n              </ion-textarea>\n              <!-- Comment Post Button -->\n              <ion-button\n                style=\"float: right;\"\n                *ngIf=\"postComment.value.length >= 2;\"\n                class=\"comment-post-button\"\n                name=\"send\"\n                type=\"submit\">Post Comment\n              </ion-button>\n            </form>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Post Buttons -->\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- Upvote & Downvote-->\n        <ion-col size=\"8\">\n          <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n        </ion-col>\n        <!-- Follow & Comment -->\n        <ion-col size=\"3\">\n          <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n        </ion-col>\n      </ion-row>\n    </div>\n      </ion-col>\n     </ion-row>\n    <!-- Spacer -->\n    <div style=\"margin-bottom: 200px;\" ></div>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"ion-hide-lg-up\">\n  <div\n  id=\"searchbar-wrapper\">\n  <!-- (keyup)=\"addHashTag($event)\"-->\n    <ion-searchbar\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      cancelButtonText=\"\"\n      showCancelButton=\"true\"\n      placeholder=\"Search Posts by Hashtags\"\n      (ionFocus)=\"searchBarFocus()\"\n      (ionChange)=\"filter($event)\">\n      <span class=\"hash\">#</span>\n    </ion-searchbar>\n    <div id=\"search-options\">\n      <p>You can choose up to five hashtags.\n        <br>Please seperate each tag with a comma ( , ).\n        <br>Example: \"Computers, Science, Technology\"</p>\n      <div>\n        <ion-button\n        (click)=\"searchLoading()\" class=\"search-button\">\n          Search\n        </ion-button>\n        <ion-button\n        (click)=\"searchBarBlur()\" class=\"cancel-button\">\n          Cancel\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n");

/***/ }),

/***/ "XxUk":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts.page */ "FvZU");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-routing.module */ "6ViI");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/custom-component.module */ "zAgk");








// import { ReadMoreComponent } from '../../components/read-more/read-more.component';
let PostPageModule = class PostPageModule {
};
PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_6__["PostRoutingModule"],
        ],
        declarations: [
            _posts_page__WEBPACK_IMPORTED_MODULE_5__["PostsPage"]
        ]
    })
], PostPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-posts-posts-module-es2015.js.map