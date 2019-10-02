import { Component } from '@angular/core';

import { NinoxService } from '../../providers/ninox-service/ninox-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ninox: NinoxService) {}

}
