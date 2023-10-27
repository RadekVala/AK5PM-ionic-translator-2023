import { Component, OnInit } from '@angular/core';
import { TranslationAPIService } from '../api/translation-api.service';
import { Observable } from 'rxjs';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})
export class TranslatorPage {

  userInput: String = ''
  translationOutput$: Observable<any> = this.apiService.getTranslation("")
  historyArray: Array<string> = []

  constructor(
    private apiService: TranslationAPIService,
    private storage: HistoryServiceService
    ) {
  }

  async ionViewDidEnter () {
    const storedData = await this.storage.get('history');
    if (storedData) {
      this.historyArray = JSON.parse(storedData);
    }
  }

  translateClicked() {
    console.log(this.userInput)
    this.translationOutput$ = this.apiService.getTranslation(this.userInput)

    this.translationOutput$.subscribe(data => {
      console.log(data.responseData.translatedText)
      let historyItem = `${this.userInput} -> ${data.responseData.translatedText}`
      this.historyArray.unshift(historyItem)
      this.storage.set('history', JSON.stringify(this.historyArray))
    });

  }

}
