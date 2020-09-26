import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/modules/core/services';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  constructor(public navigation: NavigationService) {}

  ngOnInit(): void {}
}
