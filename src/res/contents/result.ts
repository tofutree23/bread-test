type BreadProps = {
  [key: string]: string
}

export const BREAD: BreadProps = {
  intj: 'scone',
  intp: 'cinnamon-roll',
  entj: 'financier',
  entp: 'an-butter',
  infj: 'baguette',
  infp: 'castella',
  enfj: 'creampuff',
  enfp: 'croffle',
  istj: 'loaf-bread',
  isfj: 'macaron',
  estj: 'anpan',
  esfj: 'pretzel',
  istp: 'cheesecake',
  isfp: 'soboro',
  estp: 'chocolatine',
  esfp: 'cup-cake'
}

type BreadDesc = {
  [key: string]: string
}

type ResultBreadProps = {
  [key: string]: BreadDesc
}

export const RESULT_BREAD: ResultBreadProps = {
  baguette: {
    qoute: '고즈넉한 삶이 좋아',
    name: '바게트',
    desc: '',
    good: '',
    bad: ''
  }
}
