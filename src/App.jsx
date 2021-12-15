import React from 'react'
import { BrowserRouter as Router,  Switch, Route, BrowserRouter } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'
import NotFound from './components/NotFound'

function App() {
  // your code here ...
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:movie_id" component={MovieDetail}/>
        <Route path={["/not-found", "*"]} component={NotFound} />

      </Switch>
    </BrowserRouter>
  )
}

export default App
