import { Sketch } from "./lib/sketch"

type Point = [x: number, y: number]


new class extends Sketch {

  points: Point[] = []

  m: number = 1
  b: number = 0
  
  learningRate = this.createSlider(0, 1, 0.1, 0.01)

  setup(){
    this.createCanvas(400, 400)
    console.log('setup')
  }

  pointToCanvas([x, y]: Point): Point {
    return [
      this.map(x, 0, 1, 0, this.width), 
      this.map(y, 0, 1, this.height, 0)
    ]
  }

  canvasToPoint([x, y]: Point): Point {
    return [
      this.map(x, 0, this.width, 0, 1),
      this.map(y, 0, this.height, 1, 0)
    ]
  }

  draw(){
    this.background(0)
    this.stroke(255)
    this.strokeWeight(8)

    for(const point of this.points){
      this.point(...this.pointToCanvas(point))
    }

    this.strokeWeight(1)

    // draw line
    const x1 = 0;
    const x2 = 1

    const y1 = this.m * 0 + this.b
    const y2 = this.m * 1 + this.b

    const p1 = this.pointToCanvas([x1, y1])
    const p2 = this.pointToCanvas([x2, y2])
    this.line(...p1, ...p2)


    // adjust
    const learningRate = this.learningRate.value() as unknown as number
    for(const [x, y] of this.points){     
      const guess = this.m * x + this.b;
      const error = y - guess;
      this.m = this.m + error * x * learningRate;
      this.b = this.b + error * learningRate;
    }

  }

  mouseClicked(){
    this.points.push(this.canvasToPoint([this.mouseX, this.mouseY]))
    console.log(this.points)
  }
}
