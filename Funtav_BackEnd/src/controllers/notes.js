const model = require('../models/notes')
const helpers = require('../helpers/index')

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
        const { 
            id_notes,
            budget,
            transportation,
            occupancy,
            foods,
            schedule,
            focus,
            people,
            medical_rec
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