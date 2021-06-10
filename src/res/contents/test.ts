export interface Test {
  question: string
  selection: { answer: string; value: string }[]
}

export const TestContents: Test[] = [
  {
    question: '빵을 만드는 수업에 갔다. 몇 번 얼굴을 본 사람은 있지만 그렇게 친한 건 아닌데.. 어떡하지?',
    selection: [
      { answer: '새로운 사람들과 친해지려고 노력한다', value: 'e' },
      { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'i' }
    ]
  },
  {
    question: '내일 점심까지 빵을 만들어 달라는 주문을 받았다. 아직 시간은 좀 널럴하긴 한데...',
    selection: [
      { answer: '마감 시간에 딱 맞춰서 준비한다', value: 'j' },
      { answer: '미리미리 시간 있을 때 준비한다', value: 'p' }
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
    question: '내가 더 끌리는 것', // TODO: 수정
    selection: [
      { answer: '일관성 있는 생각', value: 't' },
      { answer: '조화로운 인간 관계', value: 'f' }
    ]
  },
  {
    question: '내가 빵 만들 때 더 편한 것', // TODO: 수정
    selection: [
      { answer: '논리적 판단', value: 't' },
      { answer: '가치 판단', value: 'f' }
    ]
  },
  {
    question: '재료 상인이 물건을 잘못 배달했다. 전화를 해야하는데...',
    selection: [
      { answer: '뭐라고 말할 지 적어두고 전화한다', value: 'i' },
      { answer: '그냥 곧장 전화한다', value: 'e' }
    ]
  },
  {
    question: '어떤 빵을 굽고 싶은가', // TODO: 수정
    selection: [
      { answer: '이성적인 생각이 담긴 빵', value: 't' },
      { answer: '따뜻한 마음이 담긴 빵', value: 'f' }
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
    question: '나는 어떤 걸 더 좋아할까?',
    selection: [
      { answer: '많은 친구들과 얕은 관계', value: 'e' },
      { answer: '적은 친구들과 깊은 관계', value: 'i' }
    ]
  },
  {
    question: '내가 더 끌리는 빵은?',
    selection: [
      { answer: '조금은 투박하지만 기본적인 느낌의 빵', value: 's' },
      { answer: '색색깔로 화려하게 장식된 빵', value: 'n' }
    ]
  },
  {
    question: '나는 보통',
    selection: [
      { answer: '루틴이 있는 하루가 좋아', value: 'j' },
      { answer: '놀라운 일이 매일 일어났으면 좋겠어', value: 'p' }
    ]
  }
]
