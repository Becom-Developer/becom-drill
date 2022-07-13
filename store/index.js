export const state = () => ({
  name: 'とうろくされていません',
  numberQ: 10,
  record: {
    drillID: '',
    recordID: 0,
    question: '', // 問題
    answer: '', // 正解
    answerResult: '', // 回答
    isCorrect: false, // 正解 or 不正解
    startTime: '', // 問題開始時刻
    endTime: '', // 問題終了時刻
  },
  drill: {
    id: 0,
    type: '',
    startTime: '', // 問題開始時刻
    endTime: '', // 問題終了時刻
  },
  history: [],
  drillHistory: [],
})
export const getters = {
  countHistory(state) {
    return state.history.length
  },
  countDrillHistory(state) {
    return state.drillHistory.length
  },
  reportCard(state) {
    const card = []
    for (const drillRow of state.drillHistory) {
      const drill = drillRow
      const records = []
      for (const recordRow of state.history) {
        if (recordRow.drillID === drillRow.id) {
          records.unshift(recordRow)
        }
      }
      card.unshift({ drill, records })
    }
    return card
  },
  reportCardLast(state, getters) {
    const card = []
    card.push(getters.reportCard[0])
    return card
  },
}
export const mutations = {
  addState(state, params) {
    state[params.key] = params.data
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addName(state, text) {
    state.name = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addNumberQ(state, text) {
    state.numberQ = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addDrillID(state, text) {
    state.record.drillID = text
    state.drill.id = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addDrillType(state, text) {
    state.drill.type = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addDrillStartTime(state, text) {
    state.drill.startTime = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addDrillEndTime(state, text) {
    state.drill.endTime = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addRecordID(state, text) {
    state.record.recordID = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addQuestion(state, text) {
    state.record.question = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addAnswer(state, text) {
    state.record.answer = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addAnswerResult(state, text) {
    state.record.answerResult = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addIsCorrect(state, text) {
    state.record.isCorrect = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addStartTime(state, text) {
    state.record.startTime = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  addEndTime(state, text) {
    state.record.endTime = text
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  pushHistory(state, data) {
    state.history.push(data)
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  pushDrillHistory(state, data) {
    state.drillHistory.push(data)
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
  removeHistory(state) {
    state.history = []
    localStorage.setItem('becomdrill', JSON.stringify(state))
  },
}
