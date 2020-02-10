const db = require('../configs/db')

const select = `SELECT ic.id_itnrs_custom, ic.origin, ic.destination, ic.date_start, ic.date_end, ic.duration,
        ic.price, ic.date_sent, ic.date_replied,ic.id_user AS admin, ic.id_notes, n.budget, n.transportation, n.occupancy,
        n.foods, n.schedule, n.focus, n.people, n.medical_rec FROM itnrs_custom AS ic LEFT JOIN notes AS n
        ON ic.id_notes = n.id_notes`

module.exports = {
    getItnrsCustom: () => {
        return new Promise((resolve, reject) => {
            db.query(select, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },
    getItnrsCustomById: (id) => {
        return new Promise((resolve, reject) => {
            db.query(select + ` WHERE id_itnrs_custom='${id}'`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },
    addItnrsCustom: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO itnrs_custom SET ?', data, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },
    editItnrsCustom: (data, id_itnrs_custom) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE itnrs_custom SET ? WHERE id_itnrs_custom = ?', [data, id_itnrs_custom], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteItnrsCustom: (id_itnrs_custom) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM itnrs_custom WHERE id_itnrs_custom = ?', id_itnrs_custom, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}