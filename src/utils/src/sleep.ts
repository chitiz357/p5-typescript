export function sleep(milliseconds: number): void {
	const start = new Date().getTime();
	while (new Date().getTime() < start + milliseconds)
		;
}
