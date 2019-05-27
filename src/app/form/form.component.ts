import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output()
  register = new EventEmitter();

  content: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.content);
    this.register.emit(this.content);
  }
}
