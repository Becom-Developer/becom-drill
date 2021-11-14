<template>
  <div class="my-3">
    <h3 class="text-center">たしざん 問</h3>
    <h1 class="text-center">{{ q1.left }}+{{ q1.right }}=□</h1>
    <!-- 出題中 -->
    <div v-if="isAnswering">
      <p class="text-center">正解をクリック</p>
      <b-row>
        <b-col v-for="btn in answerBtn" :key="btn.id" class="text-center"
          ><b-button size="lg" @click="checkAnser(btn.total)">{{
            btn.total
          }}</b-button></b-col
        >
      </b-row>
    </div>
    <!-- 答案後 -->
    <div v-else class="text-center">
      <p class="text-center">入力したこたえ</p>
      <b-alert show variant="success">{{ input }}</b-alert>
      <b-alert v-if="isSuccess" show variant="danger">{{ answer }}</b-alert>
      <b-alert v-else show variant="dark">{{ answer }}</b-alert>
      <b-button size="lg" @click="nextQuestion">次の問題</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAnswering: false,
      q1: { left: 0, right: 0, total: 0 },
      q2: { left: 0, right: 0, total: 0 },
      q3: { left: 0, right: 0, total: 0 },
      answerBtn: [],
      answer: '正解は?',
      correctAnswer: { left: 0, right: 0, total: 0 },
      isSuccess: false,
      input: '',
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
      this.isAnswering = true
    },
    // 問題の答え合わせをする -> checkAnser
    checkAnser(total) {
      this.input = total
      if (total === this.correctAnswer.total) {
        this.answer = '正解です'
        this.isSuccess = true
      } else {
        this.answer = '不正解です'
        this.isSuccess = false
      }
      // 答え合わせの内容を記録する
      this.addAnserHistory(total)
      this.isAnswering = false
    },
    // 答え合わせの内容を記録する -> addAnserHistory
    addAnserHistory(total, name) {
      let storageName = 'nobunaga'
      if (name) {
        storageName = name
      }
      const date = new Date()
      let storage = JSON.parse(localStorage.getItem('drill'))
      if (storage === null) {
        storage = { name: storageName }
      }
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
    // 問題を入れ替える -> nextQuestion
    nextQuestion() {
      // 問題の答えを三択で出現させる
      this.selectAnser()
      this.answer = '回答ボタンを押してください'
      if (localStorage.getItem('drill')) {
        this.storage = JSON.parse(localStorage.getItem('drill'))
      }
    },
  },
}
</script>
