import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home/Home'
import Detail from './components/DetailItnrsPackage'

const App = () => {

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home} />
      <Route path='/package/detail/:id_itnrs_package' component={Detail} />
    </Switch>
  )

}

export default App;