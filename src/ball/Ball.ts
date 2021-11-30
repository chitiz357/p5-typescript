export class Ball {
	point: { x: number; y: number };
	radius: number;
	time = 0;

	constructor(
		position: { x: number; y: number } = { x: 0, y: 0 },
		radio = 100
	) {
		this.point = position;
		this.radius = radio;
	}

	render() {
		this.time++;
		ellipse(this.point.x, this.point.y, this.radius);
	}
}

export class RotateBall extends Ball {
	move() {
		this.point.x = Math.cos(this.time / 10) * 100 + windowWidth / 2;
		this.point.y = Math.sin(this.time / 10) * 100 + windowHeight / 2;
	}

	render(): void {
		this.move();
		this.time++;
		ellipse(this.point.x, this.point.y, this.radius);
	}
}
