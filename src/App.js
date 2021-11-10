import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import Home from './components/Home'
import Litters from './components/Litters'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/litters'>
            <Litters />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/blog/:blogSlug'>
            <BlogPost />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
