import axios from 'axios'

let url = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/`

export const LoginAction = () => {
    return {
        type: "LOGIN_USER",
        payload: axios.post(url + 'login', data)
    }
}