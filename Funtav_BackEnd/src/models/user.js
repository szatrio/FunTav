const db = require ('../configs/db');

module.exports = {
  getUser: () => {
    return new Promise ((resolve, reject) => {
      db.query (`SELECT * from user`, (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  getProfile: (id_user) => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * from user WHERE id_user= ?', [id_user], (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  addUser: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editUser: (data, id_user) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE user SET ? WHERE id_user = ?', [data, id_user], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM user WHERE id_user = ?', id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  emailCheck: (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT email FROM user WHERE email = ? ', email, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
  },
  loginUser: (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user WHERE email = ? ', email, (err, result) => {
            if (!err) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
  },
};