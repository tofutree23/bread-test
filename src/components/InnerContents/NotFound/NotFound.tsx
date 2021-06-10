import { FC } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

import ContentsBase from '@/components/ContentsBase'

import BurntBread from '@/res/image/404.png'

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  const history = useHistory()
  const classes = useStyles()

  const handleClickRedirect = () => history.push('/')

  return (
    <ContentsBase>
      <div className={classes.root}>
        <p>이런 빵은 없어요...</p>
        <p>어디서 구운 거죠..?</p>
        <img className={classes.errorImg} src={BurntBread} alt="404" />
      </div>
      <button className={classes.button} onClick={handleClickRedirect}>
        홈으로 가기
      </button>
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  root: {
    marginTop: '15rem',
    fontSize: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorImg: {
    width: '25rem'
  },
  button: {
    width: '30rem',
    height: '4rem',
    background: '#E7A05A',
    borderRadius: '28px',
    border: 0,
    fontSize: '3rem',
    marginTop: '5rem',
    color: '#fff',
    '&:hover': {
      cursor: 'pointer',
      background: '#522A02'
    }
  }
})

export default NotFound
