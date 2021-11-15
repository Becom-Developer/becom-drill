export const state = () => ({
  counter: 0,
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
    id: '',
    type: '',
    startTime: '', // 問題開始時刻
    endTime: '', // 問題終了時刻
  },
  history: [],
})
export const mutations = {
  addName(state, text) {
    state.name = text
  },
  addNumberQ(state, text) {
    state.numberQ = text
  },
  addDrillID(state, text) {
    state.record.drillID = text
  },
  addRecordID(state, text) {
    state.record.recordID = text
  },
  addQuestion(state, text) {
    state.record.question = text
  },
  addAnswer(state, text) {
    state.record.answer = text
  },
  addAnswerResult(state, text) {
    state.record.answerResult = text
  },
  addIsCorrect(state, text) {
    state.record.isCorrect = text
  },
  addStartTime(state, text) {
    state.record.startTime = text
  },
  addEndTime(state, text) {
    state.record.endTime = text
  },
  pushHistory(state, data) {
    state.history.push(data)
  },
  removeHistory(state) {
    state.history = []
  },
}
