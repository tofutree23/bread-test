import { FC } from 'react'
import { createUseStyles } from 'react-jss'

interface BottomBarProps {}

const BottomBar: FC<BottomBarProps> = () => {
  const classes = useStyles()
  return <div className={classes.bottomWrapper}>BOTTOM</div>
}

const useStyles = createUseStyles({
  bottomWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
    backgroundColor: 'rgba(14,14,14,0.7)'
  }
})

export default BottomBar
