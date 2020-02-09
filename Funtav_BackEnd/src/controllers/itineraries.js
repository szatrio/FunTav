const model = require('../models/question')
const helpers = require('../helpers/index')
const uuid = require('uuid/v4')

module.exports = {
    getQuestion: (_, res) => {
        model
            .getQuestion()
            .then(response => {
                helpers.success(res, response)
            })
            .catch(err => {
                console.log(err);
            });
    },
    addQuestion: (req, res) => {
        const id_question = uuid().split('-')[0]
        const { id_user } = req.user
        const { question, question_order } = req.body
        const data = { id_question, question, question_order, id_user }

        model.addQuestion(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editQuestion: (req, res) => {
        const id_question = req.params.id_question
        const { id_user } = req.user
        const { question, question_order } = req.body
        const data = { question, question_order, id_user}

        model.editQuestion(data, id_question)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteQuestion: (req, res) => {
        const id_question = req.params.id_question

        model.deleteQuestion(id_question)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}