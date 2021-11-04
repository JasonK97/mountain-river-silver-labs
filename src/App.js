import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import Home from './components/Home'
import Litters from './components/Litters'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='content'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/litters'>
              <Litters />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
