import { FC, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams, useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { useSnackbar } from 'notistack'

import ContentsBase from '@/components/ContentsBase'

import { BREAD, RESULT_BREAD } from '@/res/contents/result'

interface ResultProps {}

const Result: FC<ResultProps> = ({ ...props }) => {
  const history = useHistory()
  const [breadName, setBreadName] = useState<string>('')

  const { enqueueSnackbar } = useSnackbar()

  const { bread } = useParams<{
    bread: string
  }>()

  useEffect(() => {
    const breadName = Object.values(BREAD).find(value => value === bread)
    if (!breadName) return history.push('/404')
    setBreadName(breadName)
  }, [bread, history])

  useEffect(() => {
    if (breadName) {
      const imageUrl = 'https://what-kind-of-bread.netlify.app' + require(`@/res/image/bread/${breadName}.png`).default
      // @ts-ignore
      Kakao.Link.createDefaultButton({
        container: '#kakao-link',
        objectType: 'feed',
        content: {
          title: RESULT_BREAD[breadName].name,
          description: RESULT_BREAD[breadName].qoute,
          imageUrl,
          link: {
            mobileWebUrl: `https://what-kind-of-bread.netlify.app/result/${breadName}`
          }
        }
      })
    }
  }, [breadName])

  const classes = useStyles()

  const handleClickRetry = () => history.push('/')

  const handleClickCopy = () => {
    enqueueSnackbar('주소가 카피되었어요', {
      preventDuplicate: true,
      autoHideDuration: 2000,
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    })
    navigator.clipboard.writeText(window.location.href)
  }

  if (!breadName) return <></>
  return (
    <ContentsBase>
      <div className={classes.resultWrapper}>
        <div className={classes.titleWrapper}>
          <p>"{RESULT_BREAD[breadName].qoute}"</p>
          <p>{RESULT_BREAD[breadName].name}</p>
        </div>
        <img
          className={classes.resultImg}
          src={require(`@/res/image/bread/${breadName}.png`).default}
          alt={breadName}
        />
        <div className={classes.resultDesc}>
          <ul>
            {RESULT_BREAD[breadName].desc
              .split('/')
              .filter(item => item !== '/')
              .map((item, idx) => (
                <li key={item + idx}>{item}</li>
              ))}
          </ul>
        </div>
        <div className={classes.pairingWrapper}>
          <p>잘 맞는 빵</p>
          <div>
            {RESULT_BREAD[breadName].pair.split(',').map((item, idx) => (
              <div key={`pair-${idx}`}>
                <img key={item} alt={item} src={require(`@/res/image/bread/${item}.png`).default} />
                <p>{RESULT_BREAD[item].name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button id="kakao-link" className={classnames(classes.button, classes.shareKakao)}>
        카카오로 결과 공유하기
      </button>
      <button className={classes.button} onClick={handleClickRetry}>
        테스트 다시 하기
      </button>
      <button className={classnames(classes.button, classes.secondBtn)} onClick={handleClickCopy}>
        결과 링크 복사
      </button>
    </ContentsBase>
  )
}

const useStyles = createUseStyles({
  resultWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleWrapper: {
    margin: '7rem 0 4rem',
    fontSize: '3rem',
    '&>p': {
      textAlign: 'center'
    },
    '&>p:first-child': {
      fontSize: '1.8rem',
      marginBottom: '2rem'
    }
  },
  resultImg: {
    width: '25rem',
    marginBottom: '2rem'
  },
  resultDesc: {
    width: '38rem',
    height: 'fit-content',
    marginTop: '4rem',
    background: '#FADFC4',
    borderRadius: '2rem',
    boxSizing: 'border-box',
    padding: '3rem 2rem',
    '&>ul': {
      padding: 'inherit',
      paddingTop: 0,
      paddingBottom: 0
    },
    '&>ul>li': {
      marginTop: '2rem',
      listStyleType: 'initial',
      fontSize: '1.5rem',
      lineHeight: 1.6,
      '&:first-child': {
        marginTop: 'initial'
      }
    }
  },
  pairingWrapper: {
    marginTop: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '28rem',
    '&>p': {
      fontSize: '2rem'
    },
    '&>div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '4rem',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem'
      },
      '&>div>img': {
        width: '15rem'
      }
    }
  },
  button: {
    width: '30rem',
    height: '5rem',
    background: '#E7A05A',
    borderRadius: '2rem',
    fontSize: '1.3rem',
    color: '#fff',
    border: 0,
    cursor: 'pointer',
    '&:hover': {
      cursor: 'pointer',
      background: '#522A02'
    }
  },
  secondBtn: {
    background: '#A96E33',
    marginTop: '4rem'
  },
  shareKakao: {
    background: '#FEE500',
    color: '#000000',
    marginBottom: '4rem',
    '&:hover': {
      background: 'rgba(254, 229, 0, 0.4)'
    }
  }
})

export default Result
