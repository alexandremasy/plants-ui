import { basil } from '@spices/basil'

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
		return new Sowing({
			density: basil.get(data, 'density'),
			end: basil.get(data, 'end'),
			start: basil.get(data, 'start'),
			x: basil.get(data, 'x'),
			y: basil.get(data, 'y'),
			z: basil.get(data, 'z'),
		})
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
