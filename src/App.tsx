import { Greeting } from '@/components/Greeting'
import { createUseStyles } from 'react-jss'

function App() {
  const classes = useStyles()
  return (
    <div className={classes.appWrapper}>
      <Greeting />
    </div>
  )
}

const useStyles = createUseStyles({
  appWrapper: {
    width: '100vw',
    height: '100vh'
  }
})

export default App
