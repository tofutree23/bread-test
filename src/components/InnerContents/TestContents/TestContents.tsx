import { FC, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

import { TestContents as tests } from '@/res/contents/test'

import ContentsBase from '@/components/ContentsBase'
import Loading from '@/components/Loading'

interface TestContentsProps {}

const TestContents: FC<TestContentsProps> = ({ ...props }) => {
  const [q, setQ] = useState<number>(0)
  const [userAns, setUserAns] = useState<string[]>([])
  const classes = useStyles()
  const history = useHistory()

  const handleOnSelect = (e: any) => {
    const value = e.target.value
    setUserAns(prev => [...prev, value])
    setQ(prev => prev + 1)
  }

  const handleMoveToResult = () => {
    console.log(userAns)
    setTimeout(() => {
      // 뭔가를 계산하는 것처럼 보이게 하기 위해서 일부러 넣은 timeout
      history.push('/result/bread')
    }, Math.floor(Math.random() * 1000 + 2000))
    return <Loading />
  }

  if (!tests[q]) return handleMoveToResult()
  return (
    <ContentsBase>
      <div className={classes.statusBar}>
        <div className={classes.status} style={{ width: `${Math.round((q / tests.length) * 100)}%` }} />
      </div>
      <div className={classes.testParagraphArea}>
        <p>질문 {q + 1}</p>
        <p>{tests[q].question}</p>
      </div>
      <div className={classes.buttonArea}>
        <button onClick={handleOnSelect} value={tests[q].selection[0].value}>
          {tests[q].selection[0].answer}
        </button>
        <button onClick={handleOnSelect} value={tests[q].selection[1].value}>
          {tests[q].selection[1].answer}
        </button>
      </div>
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  statusBar: {
    marginTop: '4rem',
    width: '80%',
    height: '1rem',
    background: '#fff',
    borderRadius: '2rem'
  },
  status: {
    height: '100%',
    borderRadius: '2rem',
    background: '#FFA245',
    transition: 'width .5s'
  },
  testParagraphArea: {
    width: '40rem',
    height: '22rem',
    marginTop: '4rem',
    background: '#FADFC4',
    borderRadius: '2rem',
    boxSizing: 'border-box',
    padding: '2rem',
    '&>p': {
      fontSize: '3rem',
      textAlign: 'center'
    },
    '&>p:last-child': {
      height: '16rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem',
      textAlign: 'center'
    }
  },
  buttonArea: {
    width: '100%',
    height: '12rem',
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexWrap: 'wrap',
    '&>button': {
      width: '30rem',
      height: '5rem',
      background: '#A96E33',
      borderRadius: '2rem',
      fontSize: '2rem',
      color: '#fff',
      border: 0,
      cursor: 'pointer'
    },
    '@media (hover: hover)': {
      '&>button:hover': {
        background: '#522A02'
      }
    }
  }
})

export default TestContents
