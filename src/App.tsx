import { Root } from '@/components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Root {...props} />} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  )
}

export default App
