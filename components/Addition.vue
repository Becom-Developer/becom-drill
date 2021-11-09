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
    }
  },
  mounted() {},
  methods: {
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
    question() {
      const left = Math.floor(Math.random() * 11)
      const right = Math.floor(Math.random() * 11)
      const total = left + right
      return { left, right, total }
    },
    nextQuestion() {
      this.q1 = this.question()
      this.q2 = this.question()
      this.q3 = this.question()
      this.correctAnswer = this.q1
      this.guidance = '問題を考えてみよう'
      this.isResult = false
      this.answer = '回答ボタンを押してください'
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
