import { FC, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import KakaoLink from '@/res/image/kakaolink_btn.png'
interface ShareSNSProps {}

const ShareSNS: FC<ShareSNSProps> = ({ ...props }) => {
  const classes = useStyles()
  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY)
  }, [])

  const handleClickShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '나는 무슨 빵일까',
        description: '나와 잘 맞는 식물 친구는?',
        imageUrl: `https://what-kind-of-bread.netlify.app/static/media/main.b54281c9.png`, // 메인으로 보여질 이미지 주소
        link: {
          webUrl: '공유할 링크 주소',
          mobileWebUrl: '공유할 링크 주소'
        }
      },
      buttons: [
        {
          title: '나도 테스트 해보기', // 버튼 이름
          link: {
            webUrl: '공유할 링크 주소',
            mobileWebUrl: '공유할 링크 주소'
          }
        }
      ]
    })
  }
  return (
    <div className={classes.root}>
      <p>공유하기</p>
      <div className={classes.iconArea}>
        <img id="kakao-link-btn" src={KakaoLink} alt="kakao" onClick={handleClickShare} />
        <img id="kakao-link-btn" src={KakaoLink} alt="kakao" onClick={handleClickShare} />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    width: '20rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    marginTop: '10rem'
  },
  iconArea: {
    marginTop: '2rem',
    width: '15rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    '&>img': {
      width: '4rem'
    }
  }
})

export default ShareSNS
