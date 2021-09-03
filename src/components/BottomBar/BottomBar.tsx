import { FC } from 'react'
import { createUseStyles } from 'react-jss'
import { Adfit } from '@/components'

const BottomBar: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.bottomWrapper}>
      <Adfit />
      <p>copyright © 2021</p>
      <p>
        <a href="mailto:tofutree23@gmail.com">Luke&Daisy</a> all rights reserved.
      </p>
      <p>이 웹사이트에는 '잘풀리는 오늘' 폰트가 적용되어 있습니다.</p>
    </div>
  )
}

const useStyles = createUseStyles({
  bottomWrapper: {
    position: 'relative',
    top: '8rem',
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '5%',
    fontSize: '1rem',
    '&>p:last-child': {
      fontSize: '.8rem',
      marginTop: '1rem',
      color: '#999999'
    }
  }
})

export default BottomBar
