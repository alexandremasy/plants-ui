import Sowing from './sowing'
import Harvest from './harvest'

import { basil } from '@spices/basil'
/**
 * @class
 */
export default class Category{
	constructor({ children, name })	{
		this.children = children;
		this.name = name;
	}

	get harvest(){
		let start = 0, end = 0;
		this.children.forEach(c => {
			start = Math.min(start, c.harvest.end.integer);
			end = Math.max(end, c.harvest.end.integer);
		})

		return new Harvest({
			start,
			end
		})
	}

	/**
	 * The number of plants in the category
	 *
	 * @returns {Number}
	 */
	get length(){
		return this.children.length
	}

	/**
	 * The average sowing information
	 *
	 * @returns {Sowing}
	 */
	get sowing(){
		let density = null, end = 0, start = 0, x = 0, y = 0, z = 0
		this.children.forEach(c => {
			density: !basil.isNil(c.sowing.density) ? c.sowing.density : density,
			end = Math.max(end, c.sowing.end.integer);
			start = Math.min(start, c.sowing.start.integer);
			x += c.sowing.x;
			y += c.sowing.y;
			z += c.sowing.z;
		})

		return new Sowing({
			density,
			end,
			start,
			x: x / this.length,
			y: y / this.length,
			z: z / this.length
		})
	}
}
