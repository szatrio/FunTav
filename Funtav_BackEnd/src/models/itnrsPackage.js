const db = require('../configs/db')

module.exports = {
    getItnrsPackage: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT * FROM itnrs_package`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addItnrsPackage: (data) => {
        console.log(data)
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