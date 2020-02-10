const model = require('../models/itnrsCustom')
const helpers = require('../helpers/index')
const moment = require('moment');

const getDuration = (start, end) => {
    let dateStart = moment(start.split("-")),
        dateEnd = moment(end.split("-")),
        duration = dateEnd.diff(dateStart, 'days')
    return duration
}

module.exports = {
    getItnrsCustom: (_, res) => {
        model
            .getItnrsCustom()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    getItnrsCustomById: (req, res) => {
        const {id_itnrs_custom} = req.params
        model
            .getItnrsCustomById(id_itnrs_custom)
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    addItnrsCustom: (req, res) => {
        let {
            id_itnrs_custom,
            origin,
            destination,
            date_start,
            date_end,
            id_notes
        } = req.body

        date_start = date_start.split("-").reverse().join("-")
        date_end = date_end.split("-").reverse().join("-")
        let duration = getDuration(date_start, date_end)

        
        const data = {
            id_itnrs_custom,
            origin,
            destination,
            date_start,
            date_end,
            duration,
            date_sent: new Date(),
            id_notes
        }

        model.addItnrsCustom(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editItnrsCustom: (req, res) => {
        const { id_itnrs_custom } = req.params
        const { id_user } = req.user
        let {
            origin,
            destination,
            date_start,
            date_end,
            price,
            id_notes
        } = req.body

        date_start = date_start.split("-").reverse().join("-")
        date_end = date_end.split("-").reverse().join("-")
        let duration = getDuration(date_start, date_end)

        const data = {
            origin,
            destination,
            date_start,
            date_end,
            duration,
            price,
            id_user,
            id_notes
        }
        model.editItnrsCustom(data, id_itnrs_custom)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteItnrsCustom: (req, res) => {
        const id_itnrs_custom = req.params.id_itnrs_custom

        model.deleteItnrsCustom(id_itnrs_custom)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}