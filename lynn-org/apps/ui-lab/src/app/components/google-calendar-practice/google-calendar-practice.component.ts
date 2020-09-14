import { Component, OnInit } from '@angular/core';
import { GovOpenApiService } from '../../services/gov-open-api.service';

@Component({
  selector: 'lynn-org-google-calendar-practice',
  templateUrl: './google-calendar-practice.component.html',
  styleUrls: ['./google-calendar-practice.component.scss'],
})
export class GoogleCalendarPracticeComponent implements OnInit {
  data$ = this.govService.trafficNews$;

  constructor(private govService: GovOpenApiService) {}

  ngOnInit() {}
}
