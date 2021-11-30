import { Ball, RotateBall } from "./ball/Ball.js";

const ball1 = new RotateBall({ x: 400, y: 400 });

function setup() {
	console.log("typescript");
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background("gray");
	ball1.render();
}

//@ts-ignore
window.setup = setup;
//@ts-ignore
window.draw = draw;
