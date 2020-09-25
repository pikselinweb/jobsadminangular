import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/modules/core/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public navigationService: NavigationService) {}

  ngOnInit(): void {}
}
