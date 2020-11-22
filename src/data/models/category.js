import Sowing from './sowing'
import Harvest from './harvest'
import Month from './month'

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
			start: Month.getFromtInt(start),
			end: Month.getFromtInt(end)
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
			end = Math.max(end, basil.get(c, 'sowing.end.integer', 0));
			start = Math.min(start, basil.get(c, 'sowing.start.integer', 99));
			x += basil.get(c, 'sowing.x', 0);
			y += basil.get(c, 'sowing.y', 0);
			z += basil.get(c, 'sowing.z', 0);
		})

		return new Sowing({
			density,
			end: Month.getFromInt(end),
			start: Month.getFromInt(start),
			x: x / this.length,
			y: y / this.length,
			z: z / this.length
		})
	}
}
