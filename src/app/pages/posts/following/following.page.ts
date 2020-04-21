import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';
import { format } from 'date-fns';
import { formatDistance, subDays } from 'date-fns';
import { FollowIconComponent } from '../../../components/follow-icon/follow-icon.component';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  allFollowedPosts;
  userID;

  constructor(
    private router: Router,
    public posts: PostsService,
    private profile: ProfileService,
    private toast: ToastController) { }

  ngOnInit() {
     // Get the User's Followed Posts
     this.profile.getUserDetails().subscribe(
      details => {
        this.userID = details['_id'];
        this.posts.getFollowedPost(this.userID).subscribe(
          posts => {
            this.allFollowedPosts = posts;

            for (const post of this.allFollowedPosts) {
              post.date = format( new Date(post.date), 'MMMM do, yyyy');
            }
            console.log(this.allFollowedPosts);
          }
        );
      });

     console.log('Got Followed Posts');

  }

  postPage(post) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/posts/post-page', post._id]);
  }

}
