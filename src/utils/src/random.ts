/**
 *
 * @param {number} max maximum possible number
 * @param {number|undefined} min minimum possible number
 * @returns {number}
 */
export default function random(max: number, min: number = 1): number {
	const res = Math.floor(Math.random() * (max - min) + min);
	return res;
}
