import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NinoxService } from '../../providers/ninox-service/ninox-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  tableId: string;
  table: any;
  records: Array<any>;

  constructor(private ninox: NinoxService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.tableId = this.route.snapshot.paramMap.get('tableid');
    this.ninox.getTable(this.tableId).then((resp) => {
      this.table = resp;
      this.ninox.getTableRecords(this.tableId).then((resp) => {
        this.records = resp;
      });
    });
  }

}
