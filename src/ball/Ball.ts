export class Ball {
	point: { x: number; y: number };
	radius: number;
	time=0

	constructor(position: { x: number; y: number }, radio = 100) {
		this.point = position;
		this.radius = radio;
	}

	rotate() {
		this.point.x = Math.cos(this.time/10)*100 +500
		this.point.y = Math.sin(this.time/10)*100 +500
	}

	render() {
		this.time ++
		this.rotate();
		ellipse(this.point.x, this.point.y, this.radius);
	}
}
