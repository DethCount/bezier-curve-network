import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { BezierCurveService } from '../bezier-curve.service'
import { LineComponent } from '../line/line.component'

import { Vector2 } from '../vector2'

@Component({
  selector: '[app-bezier-curve]',
  templateUrl: './bezier-curve.component.html',
  styleUrls: ['./bezier-curve.component.sass']
})
export class BezierCurveComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() controlPoints: Vector2[] = []
  @Input() controlLineColor: string = "blue"
  @Input() lineColor: string = "black"
  @Input() pointColor: string = "red"
  @Input() pointRadius: number = 5
  @Input() nbSegments: number = 10
  @Input() line: LineComponent
  @Output() pointchange: EventEmitter<Vector2[]> = new EventEmitter<Vector2[]>()
  
  dragging: number = undefined
  points: Vector2[] = []
  pointsLoaded: boolean = false

  constructor(private curve: BezierCurveService) {
  }

  ngOnInit(): void {
    this.updatePoints()
  }

  ngAfterContentInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  updatePoints(): void {
    this.points = this.curve.getPoints(this.controlPoints, this.nbSegments)
    if (this.points === undefined) {
      return;
    }
    console.log(this.points);
    this.pointsLoaded = true
    console.log('updated points', [...this.points]);

    setTimeout(() => {this.pointchange.emit(this.points)},0)
  }

  onDragStart(key: number, $event: MouseEvent): void {
    console.log('onDragStart', $event);
    this.dragging = key;
  }

  onDrag($event: MouseEvent): void {
    if (this.dragging === undefined) {
      return;
    }
    console.log('onDrag', $event)

    this.controlPoints[this.dragging] = new Vector2($event.offsetX, $event.offsetY);
    this.controlPoints = [...this.controlPoints];
    this.updatePoints();
  }

  onDragEnd($event: Event): void {
    console.log('onDragEnd', $event);
    this.dragging = undefined;
  }
}
