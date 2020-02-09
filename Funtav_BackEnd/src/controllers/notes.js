const model = require('../models/notes')
const helpers = require('../helpers/index')
const uuid = require('uuid/v4')

module.exports = {
    getNotes: (_, res) => {
        model
            .getNotes()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    addNotes: (req, res) => {
        const id_notes = uuid().split('-')[0]
        const { 
            budget,
            transportation,
            occupancy,
            foods,
            schedule,
            focus,
            people,
            medical_rec,
            id_itnrs_custom,
            id_itnrs_package
        } = req.body
        const data = {
            id_notes,
            budget,
            transportation,
            occupancy,
            foods,
            schedule,
            focus,
            people,
            medical_rec,
            id_itnrs_custom,
            id_itnrs_package
        }

        model.addNotes(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editNotes: (req, res) => {
        const id_notes = req.params.id_notes
        const { 
            budget,
            transportation,
            occupancy,
            foods,
            schedule,
            focus,
            people,
            medical_rec,
            id_itnrs_custom,
            id_itnrs_package
        } = req.body
        const data = {
            budget,
            transportation,
            occupancy,
            foods,
            schedule,
            focus,
            people,
            medical_rec,
            id_itnrs_custom,
            id_itnrs_package
        }

        model.editNotes(data, id_notes)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteNotes: (req, res) => {
        const id_notes = req.params.id_notes

        model.deleteNotes(id_notes)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}