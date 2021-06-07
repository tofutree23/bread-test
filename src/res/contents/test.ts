export interface Test {
  question: string
  selection: string[]
}

export const TestContents: Test[] = [
  {
    question: '빵을 만드는 수업에 갔다. 몇 번 얼굴은 봤지만 그렇게 친하지 않다면 나는,',
    selection: ['모르는 사람들과 친해지려고 노력한다.', '아는 사람과 깊게 친해지려고 노력한다.']
  },
  {
    question: '나는 이런 말을 들으면 별로인 것 같다.',
    selection: ['너 좀 엉뚱해.', '너 좀 틀에 박힌 것 같아.']
  },
  {
    question: '더 끌리는 단어는?',
    selection: ['설득력있는 사람', '감동을 주는 사람']
  }
]
