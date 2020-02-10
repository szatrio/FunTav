const model = require('../models/itineraries')
const modelCustom = require('../models/itnrsCustom')
const modelPackage = require('../models/itnrsPackage')
const helpers = require('../helpers/index')
const uuid = require('uuid/v4')

module.exports = {
    getItineraries: (_, res) => {
        model
            .getItineraries()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    getItinerariesById: (req, res) => {
        const { id_itineraries } = req.params
        model
            .getItinerariesById(id_itineraries)
            .then(response => {
                if(response[0].id_itnrs_custom){
                    modelCustom
                        .getItnrsCustomById(response[0].id_itnrs_custom)
                        .then(resCustom => {
                            res.json ({
                                status: 200,
                                msg: 'Success',
                                response,
                                resCustom: resCustom[0]
                              })
                        })
                        .catch(err =>{
                            console.log(err)
                        })
                }else if(response[0].id_itnrs_package){
                    modelPackage
                        .getItnrsPackageById(response[0].id_itnrs_package)
                        .then(resPackage => {
                            res.json ({
                                status: 200,
                                msg: 'Success',
                                response,
                                resPackage: resPackage[0]
                              })
                        })
                        .catch(err =>{
                            console.log(err)
                        })
                }else{
                    res.json ({
                        status: 200,
                        msg: 'Success',
                        response,
                      })
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    addItineraries: (req, res) => {
        const id_itineraries = uuid().split('-')[0]
        const { id_user } = req.user
        const {
            id_itnrs_custom,
            id_itnrs_package
        } = req.body
        const data = {
            id_itineraries,
            date_created: new Date(),
            id_user,
            id_itnrs_custom,
            id_itnrs_package
        }

        model.addItineraries(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editItineraries: (req, res) => {
        const { id_itineraries } = req.params
        const {
            id_user,
            id_itnrs_custom,
            id_itnrs_package
        } = req.body
        const data = {
            date_created: new Date(),
            id_user,
            id_itnrs_custom,
            id_itnrs_package
        }

        model.editItineraries(data, id_itineraries)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteItineraries: (req, res) => {
        const id_itineraries = req.params.id_itineraries

        model.deleteItineraries(id_itineraries)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}