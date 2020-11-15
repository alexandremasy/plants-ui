import axios from 'axios'

export default class DataController{
  constructor(){
  }

  fetch(){
    return new Promise((resolve, reject) => {
      axios.get('/data/semaille.json')
        .then((response) => {
          resolve(response.data)
        })
    })
  }
}