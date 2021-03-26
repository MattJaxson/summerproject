import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavParams} from '@ionic/angular';
import { FilterPostsService } from 'src/app/emitters/filter-posts.service';


@Component({
  selector: 'app-posts-filter-popover',
  templateUrl: './posts-filter-popover.component.html',
  styleUrls: ['./posts-filter-popover.component.scss'],
})
export class PostsFilterPopoverComponent implements OnInit {
  // Initial Filter applied to each no page will be the newest filter.
  selection = "newest";
  filterFromPostsPage;

  constructor(
    private popoverController: PopoverController,
    private filterPostsService: FilterPostsService,
    public navParams : NavParams) { }

    ngOnInit() {
      this.filterFromPostsPage = this.navParams.get('filter');
      this.selection = this.filterFromPostsPage;
    }
    selectOption(e) {
      this.selection = e.detail.value;
      console.log(this.selection);
      this.filterPostsService.filterPosts(this.selection);
    }
    dismiss() {
      this.popoverController.dismiss({
        data: this.selection
      });
    }

}
