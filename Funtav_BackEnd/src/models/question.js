const db = require('../configs/db')

const select = 'SELECT question.id_question, question.question, question.id_user, user.name AS question_by'

module.exports = {
    getQuestion: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`${select} FROM question
            LEFT JOIN user ON question.id_user = user.id_user
            `, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addQuestion: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO question SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editQuestion: (data, id_question) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE question SET ? WHERE id_question = ?', [data, id_question], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteQuestion: (id_question) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM question WHERE id_question = ?', id_question, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}