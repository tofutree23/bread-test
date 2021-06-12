import { FC, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

import { ShareSNS } from '@/components'
import ContentsBase from '@/components/ContentsBase'
// res
import mainImage from '@/res/image/main.png'

interface GreetingProps {}

const Greeting: FC<GreetingProps> = ({ ...props }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleStart = useCallback(() => history.push('/test'), [history])

  return (
    <ContentsBase>
      <p className={classes.title}>나는 무슨 빵일까?</p>
      <img className={classes.img} src={mainImage} alt="main" />
      <button className={classes.startButton} onClick={handleStart}>
        시작하기
      </button>
      <ShareSNS />
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  title: {
    fontSize: '2.5rem',
    margin: '7rem 0 4rem'
  },
  img: {
    width: '25rem'
  },
  startButton: {
    width: '30rem',
    height: '4rem',
    background: '#E7A05A',
    borderRadius: '28px',
    border: 0,
    fontSize: '2rem',
    marginTop: '5rem',
    color: '#fff',
    '&:hover': {
      cursor: 'pointer',
      background: '#522A02'
    }
  }
})

export default Greeting
