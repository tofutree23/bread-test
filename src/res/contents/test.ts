export interface Test {
  question: string
  selection: { answer: string; value: string }[]
}

export const TestContents: Test[] = [
  {
    question: '빵을 만드는 수업에 갔다.\n몇 번 얼굴을 본 사람은 있지만\n그렇게 친한 건 아닌데.. 어떡하지?',
    selection: [
      { answer: '새로운 사람들과 친해지려고 노력한다', value: 'e' },
      { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'i' }
    ]
  },
  {
    question: '내일 점심까지\n빵을 만들어 달라는 주문을 받았다.\n아직 시간은 좀 여유있긴 한데...',
    selection: [
      { answer: '마감 시간에 맞춰서 준비한다', value: 'j' },
      { answer: '아무 때나 하면 어때', value: 'p' }
    ]
  },
  {
    question: '빵집에 왔다. 어떤 빵을 먹어볼까?',
    selection: [
      { answer: '누구나 좋아할 만한 무난한 빵', value: 's' },
      { answer: '새로 나온 신상을 먼저 먹어보자', value: 'n' }
    ]
  },
  {
    question: '나는 최고의 제빵사! 어떤 빵을 구워볼까?',
    selection: [
      { answer: '스테디셀러가 최고지! 기존의 레시피대로 굽는다', value: 's' },
      { answer: '나만의 시그니처를 만들겠어! 새로운 방식으로 굽는다', value: 'n' }
    ]
  },
  {
    question: '알바생을 모집하는 중이다.\n둘 중에 어떤 사람을 고르지?',
    selection: [
      { answer: '냉정하고 칼 같은 성격의 알바생', value: 't' },
      { answer: '사근사근하고 푸근한 느낌의 알바생', value: 'f' }
    ]
  },
  {
    question: '빵집을 어느 지역에 내는 게 좋을까?',
    selection: [
      { answer: '장사가 잘 되는 번화가', value: 't' },
      { answer: '감성돋는 골목길', value: 'f' }
    ]
  },
  {
    question: '재료 상인이 물건을 잘못 배달했다.\n전화를 해야겠는데...',
    selection: [
      { answer: '뭐라고 말할 지 적어두고 전화한다', value: 'i' },
      { answer: '그냥 곧장 전화한다', value: 'e' }
    ]
  },
  {
    question: '내 빵을 먹은 사람들이 조금 더...',
    selection: [
      { answer: '똑똑한 사람이 됐으면 좋겠어', value: 't' },
      { answer: '마음이 따뜻해졌으면 좋겠어', value: 'f' }
    ]
  },
  {
    question: '빵 반죽을 시작합시다!',
    selection: [
      { answer: '레시피대로 재료를 넣는다', value: 'j' },
      { answer: '눈에 보이는 대로 일단 넣고 본다', value: 'p' }
    ]
  },
  {
    question: '나는 어떤 매장에서 일하는 걸 더 좋아할까?',
    selection: [
      { answer: '직원들이 많은 프랜차이즈 빵집', value: 'e' },
      { answer: '직원들이 적은 동네 빵집', value: 'i' }
    ]
  },
  {
    question: '나는 이런 빵이 마음에 들어',
    selection: [
      { answer: '조금은 투박하지만 기본적인 느낌의 빵', value: 's' },
      { answer: '색색깔로 화려하게 장식된 빵', value: 'n' }
    ]
  },
  {
    question: '나의 하루는...',
    selection: [
      { answer: '고즈넉하고 평화로운 나날이 좋아', value: 'j' },
      { answer: '놀라운 일이 매일 일어났으면 좋겠어', value: 'p' }
    ]
  }
]
