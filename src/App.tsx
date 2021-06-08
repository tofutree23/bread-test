import { Root, BottomBar } from '@/components'
import { createUseStyles } from 'react-jss'

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Root />
      <BottomBar />
    </div>
  )
}

const useStyles = createUseStyles({
  root: { display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }
})

export default App
