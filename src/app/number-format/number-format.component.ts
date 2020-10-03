import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-format',
  templateUrl: './number-format.component.html',
  styleUrls: ['./number-format.component.sass']
})
export class NumberFormatComponent implements OnInit {
  @Input() value: number
  @Input() decimals: number
  @Input() weight: number = 1
  @Input() bias: number = 0

  valueAsText: string = ''

  constructor() { }

  ngOnInit(): void {
    if (this.value === undefined) {
      this.valueAsText = '-'
      return
    }

    if (isNaN(this.value)) {
      this.valueAsText = 'ERR'
      return
    }

    let val = this.value * this.weight + this.bias;
    if (this.decimals === undefined) {
      this.valueAsText = '' + val;
      return;
    }

    this.valueAsText = ('' + Math.round(val * Math.pow(10, 1*this.decimals))
      * Math.pow(10, -1 * this.decimals)
    )
      .replace(new RegExp('\\.\\d*([09]{'+(1*this.decimals+1)+'}\\d*$)'), '');
  }
}
