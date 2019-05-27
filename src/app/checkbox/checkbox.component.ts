import { Component, OnInit, Input } from '@angular/core';
import { Checkbox } from './checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input()
  checkboxs: Checkbox[];

  constructor() { }

  ngOnInit() {
  }

}
