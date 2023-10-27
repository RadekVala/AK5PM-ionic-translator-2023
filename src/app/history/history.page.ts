import { Component, OnInit } from '@angular/core';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {

  storedData: Array<any> = []

  constructor(private storage: HistoryServiceService ) { }

  async ionViewWillEnter() {
    const storedData = await this.storage.get('history');
    if (storedData) {
      this.storedData = JSON.parse(storedData);
      console.log(this.storedData)
    }
  }

}
