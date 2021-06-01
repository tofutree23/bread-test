import { Greeting, BottomBar } from '@/components'
import { createUseStyles } from 'react-jss'

function App() {
  const classes = useStyles()
  return (
    <div className={classes.appWrapper}>
      <Greeting />
      <BottomBar />
    </div>
  )
}

const useStyles = createUseStyles({
  appWrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

export default App
