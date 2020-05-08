import { Component, Input } from '@angular/core';

@Component({
  selector: 'report-modal-page',
  templateUrl: './report-modal.html',
  styleUrls: ['./report-modal.scss']
})
export class ReportModalPage {

  @Input() reportedName: string;
  @Input() reportedComment: string;
  @Input() commentDate: string;

  constructor() {}

}