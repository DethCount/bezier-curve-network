import { Vector2 } from './vector2'

export class Segment {
    p1: Vector2
    p2: Vector2

    constructor(p1: Vector2, p2: Vector2) {
        this.p1 = p1
        this.p2 = p2
    }
}
