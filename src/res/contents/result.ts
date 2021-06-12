type BreadProps = {
  [key: string]: string
}

export const BREAD: BreadProps = {
  intj: 'scone',
  intp: 'cinnamonroll',
  entj: 'financier',
  entp: 'anbutter',
  infj: 'baguette',
  infp: 'castella',
  enfj: 'creampuff',
  enfp: 'croffle',
  istj: 'loafbread',
  isfj: 'macaron',
  estj: 'anpan',
  esfj: 'pretzel',
  istp: 'cheesecake',
  isfp: 'soboro',
  estp: 'chocolatine',
  esfp: 'cupcake'
}

type BreadDesc = {
  [key: string]: string
}

type ResultBreadProps = {
  [key: string]: BreadDesc
}

export const RESULT_BREAD: ResultBreadProps = {
  scone: {
    qoute: '천리 길도 한 걸음 부터!',
    name: '스콘',
    desc: '',
    pair: 'croffle,anbutter'
  },
  cinnamonroll: { qoute: '이건 좀 아니지 않아?', name: '시나몬 롤', desc: '', pair: 'financier,anpan' },
  financier: { qoute: '성공한 인생을 살고 싶다', name: '휘낭시에', desc: '', pair: 'cinnamonroll,castella' },
  anbutter: { qoute: '내가 옳다는 걸 증명할거야', name: '앙 버터', desc: '', pair: 'scone,baguette' },
  baguette: {
    qoute: '고즈넉한 삶이 좋아',
    name: '바게트',
    desc: '도덕적이고 고결한 존재들이에요. 그래서 자신이 어긋나는 걸 못 견뎌해요./시끄러운 곳을 병적으로 싫어해요./새로운 일, 새로운 빵 같은 건 그다지 달갑지 않아요./보통은 집에만 박혀있는 집빵인데, 아예 멀리 나가는 여행은 또 좋아하는 편이에요./이 빵은 생각이 너무 많아요. 그러다보니까 망상도 자주 해요./낯가림이 정말 심한 편이에요./눈치는 정말 빨라요./친해지고 싶은 빵이 있어도 상대방이 먼저 다가와주길 바라요./이 빵에게는 혼자만의 시간이 반드시 필요해요./친하고 마음 맞는 빵과 단 둘이 노는 걸 좋아해요. 다 같이 노는 건 지루하고 무의미한 것 같거든요./무슨 말이든 근거가 없는 걸 싫어해서 찌라시 같은 것에는 그다지 관심이 없어요. 만약 이 빵들이 찌라시에 관심이 있어보인다면, 그저 유행에 눈치빠르게 대응하는 것 뿐이에요.',
    pair: 'anbutter,croffle'
  },
  castella: { qoute: '나는 그 자체로 충분해', name: '카스텔라', desc: '', pair: 'financier,creampuff' },
  creampuff: { qoute: '사랑받고 싶어', name: '슈크림빵', desc: '', pair: 'castella,soboro' },
  croffle: { qoute: '자, 내 말을 들어봐', name: '크로플', desc: '', pair: 'scone,baguette' },
  loafbread: { qoute: '안정적인게 최고야', name: '식빵', desc: '', pair: 'cupcake,chocolatine' },
  macaron: { qoute: '사랑을 주고 싶다', name: '마카롱', desc: '', pair: 'cupcake,chocolatine' },
  anpan: { qoute: '어쨌든 내가 이기면 그만이야', name: '단팥빵', desc: '', pair: 'cinnamonroll,soboro' },
  pretzel: { qoute: '우리 다 같이 친하게 지내자', name: '프레츨', desc: '', pair: 'soboro,cheesecake' },
  cheesecake: { qoute: '내 존재 이유는 뭘까?', name: '치즈 케이크', desc: '', pair: 'pretzel,anpan' },
  soboro: { qoute: '안온한 삶을 살고 싶다', name: '소보로', desc: '', pair: 'creampuff,anpan' },
  chocolatine: { qoute: '솔직히 인생 뭐 있어?', name: '뺑 오 쇼콜라', desc: '', pair: 'loafbread,macaron' },
  cupcake: { qoute: '재미있게 살고 싶다', name: '컵케이크', desc: '', pair: 'loafbread,macaron' }
}
