import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
import { Login } from './pages/Login/index'
import { Register } from './pages/Register/index'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
