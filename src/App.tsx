import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
import { DashBoard } from 'pages/dashboard'
import { Login } from './pages/Login/index'
import { Register } from './pages/Register/index'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/boards" exact component={DashBoard} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
