const local = () =>{
    const userData= {
      email: localStorage.getItem('email'),
      token: localStorage.getItem('token'),
      id_user: localStorage.getItem('id_user'),
      name: localStorage.getItem('name'),
      role: localStorage.getItem('role'),
    }
    return userData
  }

export default local