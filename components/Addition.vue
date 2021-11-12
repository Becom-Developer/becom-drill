<template>
  <b-container class="bg-light mt-3">
    <div>足し算</div>
    <div>{{ q1.left }}+{{ q1.right }}={{ q1.total }}</div>
    <b-button size="lg" @click="nextQuestion">次の問題</b-button>
    <b-alert v-if="isThink" show>{{ guidance }}</b-alert>
    <b-alert v-else show>{{ guidance }}</b-alert>
    <b-alert v-if="isSuccess" show variant="danger">{{ answer }}</b-alert>
    <b-alert v-else show variant="dark">{{ answer }}</b-alert>
    <b-row v-if="isResult">
      <b-col class="text-center"
        ><b-button size="lg">{{ input }}</b-button></b-col
      >
    </b-row>
    <b-row v-else>
      <b-col v-for="btn in answerBtn" :key="btn.id" class="text-center"
        ><b-button size="lg" @click="answerCheck(btn.total)">{{
          btn.total
        }}</b-button></b-col
      >
    </b-row>
    <div>
      <b-button size="lg" @click="deleteAnswerList()"
        >回答履歴を削除する</b-button
      >
    </div>
    <div v-if="isTimeout">
      <b-button size="lg" @click="startTime(20)">問題スタート</b-button>
    </div>
    <div v-else></div>
    <b-alert show variant="dark">{{ count }}</b-alert>
    <ul>
      <li v-for="result in storage.result" :key="result.id">
        回答: {{ result.answerResult }}
        <span v-if="result.isCorrect">正解</span>
        <span v-else>不正解</span>
        日付: {{ result.date }}
      </li>
    </ul>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      q1: { left: 0, right: 0, total: 0 },
      q2: { left: 0, right: 0, total: 0 },
      q3: { left: 0, right: 0, total: 0 },
      answerBtn: [],
      answer: '正解は?',
      guidance: '',
      correctAnswer: { left: 0, right: 0, total: 0 },
      isSuccess: false,
      isThink: true,
      isResult: false,
      input: false,
      storage: [],
      count: 0,
      isTimeout: true,
    }
  },
  mounted() {},
  methods: {
    // 問題を作成する -> createQuestion
    createQuestion() {
      const left = Math.floor(Math.random() * 11)
      const right = Math.floor(Math.random() * 11)
      const total = left + right
      return { left, right, total }
    },
    // 問題を出現させる -> showQuestion
    // 問題の答えを三択で出現させる -> selectAnser
    selectAnser() {
      this.q1 = this.createQuestion()
      this.q2 = this.createQuestion()
      this.q3 = this.createQuestion()
      this.correctAnswer = this.q1
      const list = [
        [this.q1, this.q2, this.q3],
        [this.q1, this.q3, this.q2],
        [this.q2, this.q3, this.q1],
        [this.q2, this.q1, this.q3],
        [this.q3, this.q1, this.q2],
        [this.q3, this.q2, this.q1],
      ]
      // 指定するための乱数
      const number = Math.floor(Math.random() * list.length)
      this.answerBtn = list[number]
    },
    // 問題の答え合わせをする -> checkAnser
    // 答え合わせの結果表示 -> showCheckAnser
    // 答え合わせの結果によって効果音を出す -> beepCheckAnser
    // 答え合わせの内容を記録する -> addAnserHistory
    addAnserHistory() {},
    // 回答履歴を表示 -> showAnserHistory
    // 回答結果に対しての結果発表 -> announce
    // 回答履歴を削除 -> removeAnserHistory
    // 問題を入れ替える -> nextQuestion

    deleteAnswerList() {
      localStorage.removeItem('drill')
      this.storage = []
    },
    startTime(sec) {
      let secTime = 10
      if (sec) {
        secTime = sec
      }
      this.isTimeout = false
      let count = -1
      const countUp = () => {
        count++
        this.count = count
        const timeoutID = setTimeout(countUp, 1000)
        if (count >= secTime) {
          clearTimeout(timeoutID)
          this.isTimeout = true
        }
      }
      countUp()
    },
    answerCheck(total) {
      this.input = total
      if (total === this.correctAnswer.total) {
        this.answer = '正解です'
        this.isSuccess = true
      } else {
        this.answer = '不正解です'
        this.isSuccess = false
      }
      this.isThink = false
      this.isResult = true
      this.guidance = '回答結果です'
      const date = new Date()
      let storage = JSON.parse(localStorage.getItem('drill'))
      if (storage === null) {
        storage = {}
      }
      storage.name = 'nobunaga'
      const data = {
        question: `${this.correctAnswer.left}+${this.correctAnswer.right}`,
        answer: Number(`${this.correctAnswer.total}`),
        answerResult: total,
        isCorrect: this.isSuccess,
        date: date.toLocaleString('ja'),
      }
      if (storage.result) {
        storage.result.push(data)
      } else {
        storage.result = [data]
      }
      localStorage.setItem('drill', JSON.stringify(storage))
    },
    nextQuestion() {
      // 問題の答えを三択で出現させる
      this.selectAnser()
      this.guidance = '問題を考えてみよう'
      this.isResult = false
      this.answer = '回答ボタンを押してください'
      if (localStorage.getItem('drill')) {
        this.storage = JSON.parse(localStorage.getItem('drill'))
      }
    },
  },
}
// drill: {
//   name: '',
//   result: [
//     {
//       question: '',
//       answer: '',
//       answerResult: '',
//       isCorrect: false,
//       date: ''
//     }
//   ]
// }
</script>
