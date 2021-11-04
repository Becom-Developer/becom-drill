<template>
  <b-container class="bg-light mt-3">
    <div>足し算</div>
    <div>{{ foo }}</div>
    <div>{{ q1.left }}+{{ q1.right }}={{ q1.total }}</div>
    <b-button size="lg" @click="nextQuestion">次の問題</b-button>
    <b-alert show>{{ answer }}</b-alert>
    <b-row>
      <b-col class="text-center"
        ><b-button size="lg" @click="correct">{{ q1.total }}</b-button></b-col
      >
      <b-col class="text-center"
        ><b-button size="lg" @click="mistake">{{ q2.total }}</b-button></b-col
      >
      <b-col class="text-center"
        ><b-button size="lg" @click="mistake">{{ q3.total }}</b-button></b-col
      >
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      foo: 'bar',
      q1: { left: 0, right: 0, total: 0 },
      q2: { left: 0, right: 0, total: 0 },
      q3: { left: 0, right: 0, total: 0 },
      answer: '正解は?',
    }
  },
  mounted() {},
  methods: {
    correct() {
      this.answer = '正解です'
    },
    mistake() {
      this.answer = '不正解です'
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
            this.answer = '回答ボタンを押してください'
    },
  },
}
</script>
