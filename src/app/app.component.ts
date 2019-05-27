import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items = [];
  checkboxs = [
    {id: 1, label: 'メニュー', value: 'ラーメン', checked: false},
    {id: 2, label: 'メニュー', value: '麻婆豆腐', checked: false}
  ];

  event(content: string) {
    this.items.push(content);
  }

  pushLog() {
    console.log(this.checkboxs);

  }
}
