import { Component, Input, OnInit } from '@angular/core';
import { Vector2 } from '../vector2';

@Component({
  selector: 'app-vector2-table',
  templateUrl: './vector2-table.component.html',
  styleUrls: ['./vector2-table.component.sass']
})
export class Vector2TableComponent implements OnInit {
  @Input() vectors: Vector2[] = []

  constructor() { }

  ngOnInit(): void {
  }
}
