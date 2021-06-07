import { FC } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams } from 'react-router-dom'

import ContentsBase from '@/components/ContentsBase'

interface ResultProps {}

const Result: FC<ResultProps> = ({ ...props }) => {
  const { bread } =
    useParams<{
      bread: string
    }>()

  const classes = useStyles()
  return (
    <ContentsBase>
      <div className={classes.resultWrapper}>RESULT {bread}</div>
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  resultWrapper: {}
})

export default Result
