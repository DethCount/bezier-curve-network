import { Component, QueryList, ViewChildren } from '@angular/core';
import { BezierCurveComponent } from './bezier-curve/bezier-curve.component';
import { Vector2 } from './vector2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  curvesControlPoints: Vector2[][] = [
    [
      new Vector2(10, 80),
      new Vector2(40, 10),
      new Vector2(65, 10),
      new Vector2(95, 80)
    ],
    [
      new Vector2(150, 150),
      new Vector2(180, 80),
      new Vector2(235, 10),
      new Vector2(265, 80)
    ]
  ]
  points: Vector2[][] = []
  pointsLoaded: boolean = false

  @ViewChildren(BezierCurveComponent) curves: QueryList<BezierCurveComponent>

  onDrag($event) {
    for (let bezierCurve of this.curves) {
      if (bezierCurve.dragging) {
        bezierCurve.onDrag($event)
        break;
      }
    }
  }

  onDragEnd($event) {
    for (let bezierCurve of this.curves) {
      if (bezierCurve.dragging) {
        bezierCurve.onDragEnd($event)
        break;
      }
    }
  }

  onPointChange(key: number, $event: Vector2[]) {
    console.log('onPointChange', key, $event);
    this.points[key] = $event
    this.pointsLoaded = true
  }
}
