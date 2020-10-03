import { Component, Input, OnInit, OnChanges } from '@angular/core'

import { Vector2 } from '../vector2'

import { BezierCurveService } from '../bezier-curve.service'

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.sass']
})
export class LineComponent implements OnInit, OnChanges {
  @Input() points: Vector2[] = []
  @Input() nbSegments: number = 10
  @Input() color: string = "black"

  path: string
  pathLoaded: boolean = false
  
  constructor(private curve: BezierCurveService) { 
    this.updatePath()
  }

  ngOnInit(): void {
    this.updatePath()
  }

  ngOnChanges(): void {
    console.log('line change');
    this.updatePath()
  }
  updatePath() {
    let path = '';
    if (this.points.length > 1) {
      path += 'M ' + this.points[0].x + ' ' + this.points[0].y

      for (let i = 1; i < this.points.length; i++) {
        path += ' L ' + this.points[i].x + ' ' + this.points[i].y
      }
    }

    this.path = path;
    console.log(this.path);
    this.pathLoaded = true;
  }
}
