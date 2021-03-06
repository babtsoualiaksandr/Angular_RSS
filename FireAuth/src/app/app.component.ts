import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'FireAuth';
  constructor(translate: TranslateService) {
    translate.addLangs(['ru', 'by']);
    translate.setDefaultLang('ru');
    translate.use('by');

  }
}
