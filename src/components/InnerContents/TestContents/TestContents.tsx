import { FC, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

import { TestContents as tests } from '@/res/contents/test'

import ContentsBase from '@/components/ContentsBase'

interface TestContentsProps {}

const TestContents: FC<TestContentsProps> = ({ ...props }) => {
  const [q, setQ] = useState<number>(0)
  const classes = useStyles()
  const history = useHistory()

  const handleOnSelect = (e: any) => {
    const value = e.target.value
    console.log(value)
    setQ(prev => prev + 1)
  }

  const handleMoveToResult = () => {
    history.push('/result/bread')
    return <></>
  }

  if (!tests[q]) return handleMoveToResult()
  return (
    <ContentsBase>
      <div className={classes.statusBar}>
        {/* <progress className={classes.status} max={100} value={10} /> */}
        <div className={classes.status} style={{ width: `${Math.round((q / tests.length) * 100)}%` }} />
      </div>
      {/* <div className={classes.statusBar}>STATUS BAR {}%</div> */}
      <div className={classes.testParagraphArea}>
        <p>질문 {q + 1}</p>
        <p>{tests[q].question}</p>
      </div>
      <div className={classes.buttonArea}>
        <button onClick={handleOnSelect} value={0}>
          {tests[q].selection[0]}
        </button>
        <button onClick={handleOnSelect} value={1}>
          {tests[q].selection[1]}
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
    transition: 'width 1s'
  },
  testParagraphArea: {
    width: '40rem',
    height: '22rem',
    marginTop: '8rem',
    background: '#FADFC4',
    borderRadius: '2rem',
    boxSizing: 'border-box',
    padding: '2rem',
    '&>p': {
      fontSize: '3rem',
      textAlign: 'center'
    },
    '&>p:first-child': {
      marginBottom: '3rem'
    }
  },
  buttonArea: {
    width: '100%',
    height: '13rem',
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexWrap: 'wrap',
    '&>button': {
      width: '50%',
      height: '5rem',
      background: '#A96E33',
      borderRadius: '2rem',
      fontSize: '2rem',
      color: '#fff',
      border: 0,
      '&:hover': {
        cursor: 'pointer',
        background: '#522A02'
      }
    }
  }
})

export default TestContents
