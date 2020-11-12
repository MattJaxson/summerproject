import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StudentChatService } from 'src/app/services/student-chat.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-message-student',
  templateUrl: './new-message-student.page.html',
  styleUrls: ['./new-message-student.page.scss'],
})
export class NewMessageStudentPage implements OnInit {
  requestingUserFullname;
  requestingUserEmail;
  requestingUserPhoto;
  respondingUserFullname;
  respondingUserEmail;
  respondingUserPhoto;

  users;
  loadedUsers;
  noSearchInput: boolean;
  searchTerm: any;
  searching: boolean;

  constructor(
    private modal: ModalController,
    private studentChat: StudentChatService,
    private profile: ProfileService,
    private router: Router
    ) { }

  ngOnInit() {
    this.profile.getUserDetails().subscribe( data => {
      this.requestingUserFullname = data['fullName'];
      this.requestingUserEmail = data['email'];
      this.requestingUserPhoto = data['profilePicture'];

      this.profile.getAllUsers()
        .subscribe(
          users => {

          // Make sure to remove the Client user from list of users to search through
          // There is no need to message yourself.
          const usersArray = Object.values(users);
          const index = usersArray
            .map( user => {
              return user.email;
            })
            .indexOf(this.requestingUserEmail);
          usersArray.splice(index, 1);

          this.users = usersArray;
          this.loadedUsers = usersArray;
      });
    });
  }

  search(event) {

    this.initializeItems();
    console.log(this.loadedUsers);
    let search = event.target.value;
    console.log(search);

    this.users = this.users.filter(currentUsers => {
      if (!currentUsers || !search  ) {
        console.log('No results from that search');
        this.noSearchInput = true;
      }

      if (currentUsers.name && search) {
        if (currentUsers.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          this.searchTerm = search;

          this.searching = true;
          this.noSearchInput = false;

          return true;
        }
        return false;
      }
      this.noSearchInput = true;
    });
  }


  initializeItems(): void {
    this.users = this.loadedUsers;
  }

  newChatroom(respondingUserFullName, respondingUserEmail, respondingUserPhoto) {
    this.profile.getUserDetails()
      .subscribe(
        async data => {
          // If Client user has alreadt started a conversation with a user, direct that user to their conversations chat page.
          let conversations = data['studentChat'];
          for (const convo of conversations) {
            if (convo.requestingUserEmail === respondingUserEmail || convo.respondingUserEmail === respondingUserEmail) {
              console.log('You have already started a conversation with this user');
              await this.cancel();
              // tslint:disable-next-line: max-line-length
              return await this.router.navigate(['home/posts/student-chat/chat-page', convo.chatId, this.requestingUserFullname, this.requestingUserPhoto, this.requestingUserEmail]);
            }
          }
          // tslint:disable-next-line: max-line-length
          this.studentChat.newChatroom(this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, respondingUserFullName, respondingUserEmail, respondingUserPhoto);

          this.studentChat.newChatRoom.subscribe(
            d => {
              this.studentChat.conversations$.next(Object.values(d));
            }
          );

          this.cancel();
        });

  }

  cancel() {
    this.modal.dismiss();
  }



}
