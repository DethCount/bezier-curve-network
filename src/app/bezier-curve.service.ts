import { Injectable } from '@angular/core'

import { Vector2 } from './vector2'

@Injectable({
  providedIn: 'root'
})
export class BezierCurveService {

  constructor() { }

  getPoints(controlPoints: Vector2[], nbSegments: number): Vector2[] {
    let pts: Vector2[] = []
    for (let i = 0; i <= nbSegments; i++) {
      pts.push(this.getPointAt(controlPoints, i / nbSegments))
    }

    return pts
  }

  getPointAt(controlPoints: Vector2[], u: number): Vector2 {
    let pts: Vector2[] = [];
    if (controlPoints.length <= 0) {
      return undefined;
    }
    for (let idx in controlPoints) {
        pts.push(controlPoints[idx].clone())
    }

    for (let k = 1; k <= pts.length; k++) {
      for (let i = 0; i < pts.length - k; i++) {
        pts[i].x = (1 - u) * pts[i].x + u * pts[i + 1].x;
        pts[i].y = (1 - u) * pts[i].y + u * pts[i + 1].y;
      }
    }

    return pts[0];
  }
}
