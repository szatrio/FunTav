const db = require('../configs/db')

module.exports = {
    getNotes: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT * FROM notes`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addNotes: (data) => {
        console.log(data)
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO notes SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editNotes: (data, id_notes) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE notes SET ? WHERE id_notes = ?', [data, id_notes], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteNotes: (id_notes) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM notes WHERE id_notes = ?', id_notes, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}