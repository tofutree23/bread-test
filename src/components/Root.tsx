import { Greeting, TestContents, Result } from '@/components'
import { createUseStyles } from 'react-jss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const Root = ({ ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.appWrapper}>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Greeting {...props} />} />
          <Route path="/test" render={props => <TestContents {...props} />} />
          <Route path="/result/:bread" render={props => <Result {...props} />} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  )
}

const useStyles = createUseStyles({
  appWrapper: {
    width: '50vw',
    height: 'auto',
    margin: '0 auto'
  }
})

export default Root
