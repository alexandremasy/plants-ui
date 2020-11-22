import { basil } from '@spices/basil'
import Month from './month'

/**
 * @class
 */
export default class Harvest{

	/**
	 * Parse the given data and returns a new Harvest
	 *
	 * @param {Object} data
	 * @returns {Sowing}
	 */
	static parse(data){
		return new Harvest({
			start: new Month(basil.get(data, 'start')),
			end: new Month(basil.get(data, 'end'))
		})
	}

	////////////////////////////////////////////////////////////////////////////////////

  /**
   *
   * @param {Object} args - The harvest information
   * @param {Month} args.start - The start of the harvest
   * @param {Month} args.end - The end of the harvest
   */
  constructor({start, end}){
    this.start = start;
    this.end = end;
  }
}
