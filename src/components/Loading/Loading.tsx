import { FC } from 'react'
import { createUseStyles } from 'react-jss'

import LoadingToast from '@/res/image/baking.gif'

import ContentsBase from '@/components/ContentsBase'

const Loading: FC = () => {
  const classes = useStyles()
  return (
    <ContentsBase>
      <div className={classes.root}>어울리는 빵을 굽는 중...</div>
      <img className={classes.loadingImg} src={LoadingToast} alt="loading" />
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  root: {
    marginTop: '15rem',
    fontSize: '4rem'
  },
  loadingImg: {
    width: '25rem',
    marginTop: '5rem'
  }
})

export default Loading
