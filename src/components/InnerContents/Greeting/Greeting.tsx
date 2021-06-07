import { FC, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

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
      <img src={mainImage} alt="main" />
      <button className={classes.startButton} onClick={handleStart}>
        시작하기
      </button>
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  title: {
    fontSize: '4rem',
    margin: '9rem 0 4rem'
  },
  startButton: {
    width: '50%',
    height: '4rem',
    background: '#E7A05A',
    borderRadius: '28px',
    border: 0,
    fontSize: '3rem',
    marginTop: '5rem',
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

export default Greeting
