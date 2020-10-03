import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vector2 } from '../vector2';

@Component({
  selector: '[app-point]',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.sass']
})
export class PointComponent implements OnInit {
  @Input() point: Vector2
  @Input() color: string = 'black'
  @Input() r: number = 2
  @Output() mousedown: EventEmitter<Event> = new EventEmitter<Event>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.point);
  }
}
