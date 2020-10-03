export class Vector2 {
    x: number
    y: number
    
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    clone() {
        return new Vector2(this.x, this.y)
    }
}
