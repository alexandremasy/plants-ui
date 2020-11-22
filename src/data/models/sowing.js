import { basil } from '@spices/basil'
import Month from './month'

/**
 * Sowing information
 *
 * @class
 */
export default class Sowing{

	/**
	 * Parse the given data and returns a new Sowing
	 *
	 * @param {Object} data
	 * @returns {Sowing}
	 */
	static parse(data){
    let end = basil.get(data, 'end')
    let start = basil.get(data, 'start')
		let ret = new Sowing({
			density: basil.get(data, 'density'),
			end: basil.isNil(end) ? null : Month.getFromInt(end.integer),
			start: basil.isNil(start) ? null : Month.getFromInt(start.integer),
			x: basil.get(data, 'x'),
			y: basil.get(data, 'y'),
			z: basil.get(data, 'z'),
    });

    return ret
	}

	////////////////////////////////////////////////////////////////////////////////////

  /**
   * @constructor
   * @param {Object} args - The sowing informations
   * @param {String} args.density - The density of the sowing
   * @param {Month} args.end - Ending month of the sowing
   * @param {Month} args.start - Starting month of the sowing
   * @param {Number} args.x - Distance between each plant in the same line
   * @param {Number} args.y - Distance between each line
   * @param {Number} args.z - Height of the plant
   */
  constructor({density, end, start, x, y, z}){
    this.density = density;

    this.start = start
    this.end = end;

    this.x = x;
    this.y = y;
    this.z = z;
  }
}
