const db = require('../configs/db')

const select = `SELECT ip.id_itnrs_package, ip.origin, ip.destination, ip.date_start, ip.date_end, ip.duration,
                ip.normal_price, ip.discount, ip.price, ip.id_notes, n.budget, n.transportation, n.occupancy,
                n.foods, n.schedule, n.focus, n.people, n.medical_rec FROM itnrs_package AS ip LEFT JOIN notes AS n
                ON ip.id_notes = n.id_notes`

module.exports = {
    getItnrsPackage: () => {
        return new Promise ((resolve, reject) =>{
            db.query(select, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getItnrsPackageById: (id) => {
      return new Promise ((resolve, reject) =>{
          db.query(select+ ` WHERE id_itnrs_package='${id}'`, (err, response) =>{
              if (!err) {
                  resolve (response)
              }else{
                  reject (err)
              }
          })
      })
    },
    addItnrsPackage: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO itnrs_package SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editItnrsPackage: (data, id_itnrs_package) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE itnrs_package SET ? WHERE id_itnrs_package = ?', [data, id_itnrs_package], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteItnrsPackage: (id_itnrs_package) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM itnrs_package WHERE id_itnrs_package = ?', id_itnrs_package, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}