import { FC } from 'react'
import { createUseStyles } from 'react-jss'

const BottomBar: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.bottomWrapper}>
      <p>copyright © 2021</p>
      <p>Luke&Daisy all rights reserved.</p>
      <p>이 웹사이트에는 'tvN 즐거운이야기'폰트가 적용되어 있습니다.</p>
    </div>
  )
}

const useStyles = createUseStyles({
  bottomWrapper: {
    position: 'absolute',
    bottom: '5rem',
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '5%',
    fontSize: '1.6rem',
    '&>p:last-child': {
      marginTop: '1rem',
      color: '#999999'
    }
  }
})

export default BottomBar
