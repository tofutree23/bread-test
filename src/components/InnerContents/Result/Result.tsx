import { FC, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams, useHistory } from 'react-router-dom'

import ContentsBase from '@/components/ContentsBase'

import { BREAD, RESULT_BREAD } from '@/res/contents/result'

interface ResultProps {}

const Result: FC<ResultProps> = ({ ...props }) => {
  const history = useHistory()
  const [breadName, setBreadName] = useState<string>('')

  const { bread } =
    useParams<{
      bread: string
    }>()

  useEffect(() => {
    const breadName = Object.values(BREAD).find(value => value === bread)
    if (!breadName) return history.push('/404')
    console.log(RESULT_BREAD)
    setBreadName(breadName)
  }, [bread, history])

  const classes = useStyles()

  if (!breadName) return <></>
  return (
    <ContentsBase>
      <div className={classes.resultWrapper}>RESULT {breadName}</div>
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  resultWrapper: {}
})

export default Result
