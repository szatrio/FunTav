const db = require('../configs/db')

module.exports = {
    getItineraries: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT * FROM itineraries`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addItineraries: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO itineraries SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editItineraries: (data, id_itineraries) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE itineraries SET ? WHERE id_itineraries = ?', [data, id_itineraries], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteItineraries: (id_itineraries) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM itineraries WHERE id_itineraries = ?', id_itineraries, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}