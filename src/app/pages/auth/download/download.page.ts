import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  platform = {
	  isCompatible: false,
    isIDevice: false,
    isSamsung: false,
    isFireFox: false,
    isOpera: false,
    isEdge: false,
    isChromium: false,
    isInWebAppiOS: false,
    isInWebAppChrome: false,
    isMobileSafari: false,
    isStandalone: false,
    isiPad: false,
    isiPhone: false,
	  nativePrompt: "onbeforeinstallprompt" in window
	};

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkplatform();
  }
  download() {
    this.auth.downloadPrompt.prompt();
    console.log('Downloading app ...');
  }
  cancel() {
    this.router.navigateByUrl('');
    console.log('Cancelling Download');
  }
  checkplatform() {
	  // browser info and capability
	  var _ua = window.navigator.userAgent;

	  this.platform.isIDevice = /iphone|ipod|ipad/i.test(navigator.platform);
	  this.platform.isSamsung = /Samsung/i.test(_ua);
	  this.platform.isFireFox = /Firefox/i.test(_ua);
	  this.platform.isOpera = /opr/i.test(_ua);
	  this.platform.isEdge = /edg/i.test(_ua);

	  // Opera & FireFox only Trigger on Android
	  if (this.platform.isFireFox) {
		this.platform.isFireFox = /android/i.test(_ua);
	  }

	  if (this.platform.isOpera) {
		this.platform.isOpera = /android/i.test(_ua);
	  }

	  this.platform.isChromium = "onbeforeinstallprompt" in window;
	  // this.platform.isInWebAppiOS = window.navigator.standalone === true;
	  this.platform.isInWebAppChrome =
		window.matchMedia("(display-mode: fullscreen)").matches ||
		window.matchMedia("(display-mode: standalone)").matches ||
		window.matchMedia("(display-mode: minimal-ui)").matches;
	  this.platform.isMobileSafari =
		this.platform.isIDevice &&
		_ua.indexOf("Safari") > -1 &&
		_ua.indexOf("CriOS") < 0;
	  this.platform.isStandalone = this.platform.isInWebAppiOS || this.platform.isInWebAppChrome;
	  this.platform.isiPad = this.platform.isMobileSafari && _ua.indexOf("iPad") > -1;
	  this.platform.isiPhone = this.platform.isMobileSafari && _ua.indexOf("iPad") === -1;
	  this.platform.isCompatible =
		this.platform.isChromium ||
		this.platform.isMobileSafari ||
		this.platform.isSamsung ||
		this.platform.isFireFox ||
		this.platform.isOpera ||
		this.platform.isIDevice;

		console.log(this.platform)
	}

}
