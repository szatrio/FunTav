require('dotenv').config()

const model = require('../models/user');
const form = require('../helpers/index');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uuid = require('uuid/v4')
const { validateEmail, validatePassword } = require('../helpers/validate')

const saltRounds = 10


module.exports = {
  getUser: (req, res) => {
    model
      .getUser()
      .then(response => {
        //resolve
        form.success(res, response);
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  },
  getProfile: (req, res) => {
    let id_user = req.user.id_user
    model
      .getProfile(id_user)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addUser: (req, res) => {
    let id_user = uuid().split('-')[0]
    let { email, password, role, name } = req.body
    model.emailCheck(email)
      .then(resultQuery => {
        if (resultQuery.length === 0) {
          if (validateEmail(email) == true) {
            if (validatePassword(password) == true) {
              bcryptjs.genSalt(saltRounds, (err, salt) => {
                bcryptjs.hash(password, salt, (err, hash) => {
                  const data = { id_user, email, password: hash, role, name }

                  model.addUser(data)
                    .then(resultQuery => {
                      res.json({
                        status: 200,
                        message: 'Success registering new user',
                        data
                      })
                    })
                    .catch(err => {
                      console.log(err)
                      res.status(400).json({
                        status: 400,
                        message: 'Register was failed'
                      })
                    })
                })
              })
            } else {
              res.json({
                message: 'Password not valid, lowercase and number are required',
              })
            }
          } else {
            res.json({
              message: 'Email not valid',
            })
          }
        } else {
          res.status(400).json({
            status: 400,
            message: 'Email already exist'
          })
        }
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          message: 'Error get Email from Database'
        })
      })
  },
  editUser: (req, res) => {
    const id_user = req.params.id_user
    const { email, password, role, name } = req.body

    if (validateEmail(email) == true) {
      if (validatePassword(password) == true) {
        bcryptjs.genSalt(saltRounds, (err, salt) => {
          bcryptjs.hash(password, salt, (err, hash) => {
            const data = { email, name, password: hash, role }

            model.editUser(data, id_user)
              .then(resultQuery => {
                res.json({
                  status: 200,
                  message: 'Success registering new user',
                  data
                })
              })
              .catch(err => {
                console.log(err)
                res.status(400).json({
                  status: 400,
                  message: 'Register was failed'
                })
              })
          })
        })
      } else {
        res.json({
          message: 'Password not valid, lowercase and number are required',
        })
      }
    } else {
      res.json({
        message: 'Email not valid',
      })
    }
  },

  deleteUser: (req, res) => {
    const id_user = req.params.id_user

    model.deleteUser(id_user)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  loginUser: (req, res) => {
    const email = req.body.email

    model.loginUser(email)
      .then(resultQuery => {
        const id_user = resultQuery[0].id_user
        const name = resultQuery[0].name
        const role = resultQuery[0].role
        const passwordHash = resultQuery[0].password
        const password = req.body.password

        if (bcryptjs.compareSync(password, passwordHash)) {
          const token = jwt.sign({ id_user: id_user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100d' })
          res.json({
            status: 200,
            message: 'Login Success',
            data: {
              email,
              token,
              id_user,
              name,
              role
            }
          })
        } else {
          res.json({
            status: 400,
            message: 'Password is incorrect'
          })
        }
      })

      .catch(err => {
        console.log(err)
        res.status(400).json({
          status: 400,
          message: 'Email or Password is incorrect!'
        })
      })
  }
};