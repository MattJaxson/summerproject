import { Component, OnInit, AfterContentChecked, OnDestroy} from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, AfterContentChecked, OnDestroy {
  userEmail;
  allNotifications;
  initSub: Subscription;
  notificationsSub: Subscription;

  constructor(
    private notifications: NotificationsService,
    private profile: ProfileService
  ) { }

  ngAfterContentChecked() {
    console.log('Notification Added on backend');
  }

  ngOnDestroy() {
    this.notificationsSub.unsubscribe();
  }

  ngOnInit() {
    this.initSub = this.profile.getUserDetails()
      .subscribe(
        userDetails => {
          this.userEmail = userDetails['email'];
          console.log(this.userEmail);

          this.notificationsSub = this.notifications.getNotifications(this.userEmail)
            .subscribe(
              notifications => {
                  console.log(notifications);
                  this.notifications.notifications$.next(Object.values(notifications));
                  this.notifications.notifications$.subscribe( data => {
                    this.allNotifications = Object.values(data);
                    for (let n of this.allNotifications) {
                    n.date = formatDistanceToNow( new Date(n.date), {
                      includeSeconds: true,
                      addSuffix: false
                    });

                  }
                });

                  // TODO: replaces 'minutes' with M
                  // let minutes = ;
                }
            );
        }
      );
  }

  clear() {
    this.notifications.clearNotifications(this.userEmail)
    .subscribe(
      data => {

        this.notificationsSub = this.notifications.getNotifications(this.userEmail)
          .subscribe(
            notifications => {
                console.log(notifications);
                this.notifications.notifications$.next(Object.values(notifications));
                this.notifications.notifications$.subscribe( data => {
                  this.allNotifications = Object.values(data);
                  for (let n of this.allNotifications) {
                  n.date = formatDistanceToNow( new Date(n.date), {
                    includeSeconds: true,
                    addSuffix: false
                  });

                }
              });

                // TODO: replaces 'minutes' with M
                // let minutes = ;
              }
          );
      }
    );
  }

  goTo() {
    console.log('Going to page from notification');
  }

  delete(notification) {
    console.log('Deleting notification');
  }


}
