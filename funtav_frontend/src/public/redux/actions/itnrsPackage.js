import axios from 'axios'
import local from '../../../helpers/local'

let url = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/itnrs_package`

export const ItnrsPackageAction = () => dispatch => {
    axios.get(url, { headers: { Authorization: `Bearer ${local().token}`}})
    .then(res =>{
        dispatch({
          type: "FETCH_ITNRS_PACKAGE",
          payload : res.data.data
        })
      })
    .catch(err =>{
        console.log(err)
      })
}