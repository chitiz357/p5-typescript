import { Ball } from "./ball/Ball.js";

const ball1 = new Ball({ x: 400, y: 400 });
const ball2 = new Ball({ x: 400, y: 400 });
const ball3 = new Ball({ x: 400, y: 400 });

function setup() {
	console.log("typescript");
	createCanvas(windowWidth, windowHeight);
}
function draw() {
	// console.log("run");
	background("#000");
	ball1.render();
	ball2.render();
	ball3.render();
}
//@ts-ignore
window.setup = setup;
//@ts-ignore
window.draw = draw;
