import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
