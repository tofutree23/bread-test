import { FC, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

import { TestContents as tests } from '@/res/contents/test'
import { BREAD } from '@/res/contents/result'

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
    const { result } = userAns.reduce(
      (
        acc: {
          [index: string]: any
        },
        ans,
        index
      ) => {
        acc[ans] = ++acc[ans]
        if (index === userAns.length - 1) {
          // 개수 비교해서 내보내기
          if (acc.i >= acc.e) acc['result'] = acc['result'].concat('i')
          else acc['result'] = acc['result'].concat('e')

          if (acc.n >= acc.s) acc['result'] = acc['result'].concat('n')
          else acc['result'] = acc['result'].concat('s')

          if (acc.t >= acc.f) acc['result'] = acc['result'].concat('t')
          else acc['result'] = acc['result'].concat('f')

          if (acc.p >= acc.j) acc['result'] = acc['result'].concat('p')
          else acc['result'] = acc['result'].concat('j')
        }
        return acc
      },
      { i: 0, e: 0, n: 0, s: 0, t: 0, f: 0, p: 0, j: 0, result: '' }
    )
    setTimeout(() => {
      // 뭔가를 계산하는 것처럼 보이게 하기 위해서 일부러 넣은 timeout
      history.push(`/result/${BREAD[result]}`)
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
      fontSize: '2rem',
      textAlign: 'center'
    },
    '&>p:last-child': {
      height: '16rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      textAlign: 'center',
      whiteSpace: 'pre-wrap'
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
      fontSize: '1.3rem',
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
