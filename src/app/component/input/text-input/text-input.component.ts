import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import debounce from 'lodash-es/debounce';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  @Output() value = new EventEmitter<string>();

  text: string;

  public onInput = debounce((text: string) => {
    this.value.emit(text);
  }, 500);

  ngOnInit() {
  }

}
