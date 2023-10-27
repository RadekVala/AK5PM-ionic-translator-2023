import { Component, OnInit } from '@angular/core';
import { TranslationAPIService } from '../api/translation-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})
export class TranslatorPage implements OnInit {

  userInput: String = ''
  translationOutput$: Observable<any> = this.apiService.getTranslation("")

  constructor(private apiService: TranslationAPIService) {
  }

  ngOnInit() {

  }

  translateClicked() {
    console.log(this.userInput)
    this.translationOutput$ = this.apiService.getTranslation(this.userInput)
  }

}
