import { useState, useEffect } from 'react'
import { Root, BottomBar } from '@/components'
import { createUseStyles } from 'react-jss'

function App() {
  const classes = useStyles()

  const [inited, setInited] = useState<boolean>(false)

  useEffect(() => {
    if (!inited) {
      // @ts-ignore
      Kakao.init(process.env.REACT_APP_KAKAO_KEY)
    }
    // @ts-ignore
    setInited(Kakao.isInitialized())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!inited) return <></>
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
