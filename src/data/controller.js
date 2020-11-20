import axios from 'axios'
import Plant from './models/plant'
import Category from './models/category'

export default class DataController{
  constructor(store){
		this._store = store;

		this._categories = [];
		this._plants = [];
  }

  fetch(){
    return new Promise((resolve, reject) => {
      axios.get('/data/semaille.json')
        .then((response) => {
					this._plants = response.data.map( p => Plant.parse(p) )

					let c = []
					this._plants.forEach(e => {
						if (!c.includes(e.category)) {
							c.push(e.category)
						}
					});

					this._categories = c.map(e => {
						return new Category({
							name: e,
							children: this._plants.filter(p => p.category === e)
						})
					})

          resolve({})
        })
    })
	}
}
