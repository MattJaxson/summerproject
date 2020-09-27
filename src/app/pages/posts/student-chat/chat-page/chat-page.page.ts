import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ReportConvoPage } from 'src/app/modals/report-convo/report-convo.page';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { formatDistanceToNow } from 'date-fns';
import { IonInput } from '@ionic/angular';



@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit, OnDestroy {


  @ViewChild('message', {static: false}) input: IonInput;

  // Bottom Drawer Settings
  shouldBounce = true;
  dockedHeight = 400;
  distanceTop = 56;
  drawerState = DrawerState.Bottom;
  states = DrawerState;
  minimumHeight = 0;

  _chatroomSub: Subscription;
  chatroom;
  chatId: string;

  // Requesting User
  requestingUserFullname: string;
  requestingUserEmail: string;
  requestingUserPhoto: string;

  // Responding User
  respondingUserFullname: string;
  respondingUserEmail: string;
  respondingUserPhoto: string;

  // Client Users's info for chat messages
  fullName: string;
  email: string;
  profilePicture: string;

  // Message Input Element Reference
  message: HTMLInputElement;

  constructor(
    private alert: AlertController,
    private modal: ModalController,
    private studentChatService: StudentChatService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastController
  ) { }

   ngOnInit() {

    const chatId  =  this.activatedRoute.snapshot.paramMap.get('chatId');
    this.chatId = chatId;
    const email  =  this.activatedRoute.snapshot.paramMap.get('email');
    this.email = email;
    const fullName  =  this.activatedRoute.snapshot.paramMap.get('fullName');
    this.fullName = fullName;
    const profilePicture  =  this.activatedRoute.snapshot.paramMap.get('profilePicture');
    this.profilePicture = profilePicture;

    const messageList = document.getElementById('message-list');


    this.studentChatService.getChat(this.chatId, this.email);

    this._chatroomSub = this.studentChatService.currentChatRoom
    .subscribe(
      data => {
        // console.log(data);
        this.chatroom = data['messages'];
        this.requestingUserFullname = data['requestingUserFullname'];
        this.requestingUserEmail = data['requestingUserEmail'];
        this.requestingUserPhoto = data['requestingUserPhoto'];
        this.respondingUserFullname = data['respondingUserFullname'];
        this.respondingUserEmail = data['respondingUserEmail'];
        this.respondingUserPhoto = data['respondingUserPhoto'];

        // if (this.chatroom.length >= 5) {
        //   console.log('more than 3 messages sent');
        //   this.studentChatService.deleteMessages(this.chatId, this.fullName , this.email);
        // }

        for (let message of this.chatroom) {
          message.date = formatDistanceToNow(new Date(message.date));
        }
        // console.log(this.chatroom);
      });
  }

  ngOnDestroy(): void {
    this._chatroomSub.unsubscribe();
    // leave room
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
       this.input.getInputElement()
        .then( input => {
          this.message = input;
        });
  }, 400);
}

  async sendMessage() {
    // if user tries to send a message with no text
    if (this.message.value === '') {
      console.log('This message has no text');
      const toast = await this.toast.create({
        message: 'This message has no text.',
        cssClass: 'danger-toast',
        duration: 2000
      });
      toast.present();
      return false;
    }

    // tslint:disable-next-line: max-line-length
    await this.studentChatService.sendMessage(this.chatId, this.message.value, this.fullName, this.profilePicture, this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, this.respondingUserFullname, this.respondingUserEmail, this.respondingUserPhoto);

    // this.studentChatService.conversations$.next(this.chatroom);

    // When user submits message, clear the input value
    this.message.value = '';
    this.message.focus();


    this.studentChatService.getChat(this.chatId, this.email);
    // this.message = '';
  }

  menu() {
    if (this.drawerState === DrawerState.Bottom) {
      this.drawerState = DrawerState.Docked;
    } else {
        this.drawerState = DrawerState.Bottom;
    }
  }

  async delertAlert() {
    const alert = await this.alert.create({
      cssClass: '',
      header: 'Are you sure you want to delete this conversation?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
           console.log('Deleting');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async reportAlert() {
    const alert = await this.alert.create({
      cssClass: '',
      header: 'Are you sure you want to report this conversation?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
           console.log('Reporting');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async reportConvo() {

    const reportModalConfig = await this.modal.create({
      component: ReportConvoPage,
      componentProps: {

      }
    });
    this.drawerState = DrawerState.Bottom;
    await reportModalConfig.present();

  }

}
