import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FilterJobsService } from 'src/app/emitters/filter-jobs.service';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-posts-filter-popover',
  templateUrl: './posts-filter-popover.component.html',
  styleUrls: ['./posts-filter-popover.component.scss'],
})
export class PostsFilterPopoverComponent implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private filterJobsService: FilterJobsService,
    public navParams : NavParams) { }

  ngOnInit() {}

}
