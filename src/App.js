import React from 'react'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'
import Word from './components/Word';
import WordColor from './components/WordColor';

function App() {

  const Home = (props) =>{
    return(
      <h1>Welcome</h1>
    )
  }

  return (
    <BrowserRouter>
    <Switch>
      <Route path = "/home">
        <Home />
      </Route>
      <Route path = "/:words/:textcolor/:bgcolor">
        <WordColor />
      </Route>
      <Route path = "/:word">
        <Word />
      </Route>
    </Switch>
    </BrowserRouter>

  );
}

export default App;
