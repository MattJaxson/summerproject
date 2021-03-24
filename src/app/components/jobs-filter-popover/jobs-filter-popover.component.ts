import { Component, OnInit } from '@angular/core';
import { IonRadioGroup, PopoverController } from '@ionic/angular';
import { FilterJobsService } from 'src/app/emitters/filter-jobs.service';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-jobs-filter-popover',
  templateUrl: './jobs-filter-popover.component.html',
  styleUrls: ['./jobs-filter-popover.component.scss'],
})
export class JobsFilterPopoverComponent implements OnInit {
  selection = "newest";
  
  filterFromJobsPage;
  constructor(
    private popoverController: PopoverController,
    private filterJobsService: FilterJobsService,
    public navParams : NavParams
    ) { }

  ngOnInit() {
    this.filterFromJobsPage = this.navParams.get('filter');
  }
  selectOption(e) {
    this.selection = e.detail.value;
    console.log(this.selection);
    this.filterJobsService.filterJobs(this.selection);
  }
  dismiss() {
    this.popoverController.dismiss({
      data: this.selection
    });
  }

}
