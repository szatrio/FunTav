const model = require('../models/itnrsPackage')
const helpers = require('../helpers/index')

const getDateEnd = (date, duration) => {
    let dateEnd = date.split("-").slice(1).reverse().join("-") + "-" + (parseInt(date.split("-")[0]) + parseInt(duration))
    return dateEnd
}

const getDiscount = (normal_price, discount) => {
    let price = normal_price - (normal_price * discount / 100)
    return price
}

module.exports = {
    getItnrsPackage: (_, res) => {
        model
            .getItnrsPackage()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    addItnrsPackage: (req, res) => {
        let {
            id_itnrs_package,
            origin,
            destination,
            date_start,
            duration,
            normal_price,
            discount,
            id_itineraries
        } = req.body

        let date_end = getDateEnd(date_start, duration)
        date_start = date_start.split("-").reverse().join("-")
        let price = getDiscount(normal_price, discount)

        const data = {
            id_itnrs_package,
            origin,
            destination,
            date_start,
            date_end,
            duration,
            normal_price,
            discount,
            price,
            id_itineraries
        }

        model.addItnrsPackage(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editItnrsPackage: (req, res) => {
        const { id_itnrs_package } = req.params
        let {
            origin,
            destination,
            date_start,
            duration,
            normal_price,
            discount,
            id_itineraries
        } = req.body

        let date_end = getDateEnd(date_start, duration)
        date_start = date_start.split("-").reverse().join("-")
        let price = getDiscount(normal_price, discount)

        const data = {
            origin,
            destination,
            date_start,
            date_end,
            duration,
            normal_price,
            discount,
            price,
            id_itineraries
        }
        model.editItnrsPackage(data, id_itnrs_package)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteItnrsPackage: (req, res) => {
        const id_itnrs_package = req.params.id_itnrs_package

        model.deleteItnrsPackage(id_itnrs_package)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}