<template>
  <div>
    <b-container class="bg-light mt-3">
      <h1>じっくりドリル</h1>
      <h2>もんだいのかずをきめる</h2>
      <div>
        <p>ぜんぶで {{ numberQ }} もん</p>
        <div v-if="isAnswering === false">
          <input v-model="numberQ" type="text" class="form-control" />
          <br />
          <b-button size="lg" @click="startDrill()">ドリルスタート</b-button>
        </div>
      </div>
    </b-container>
    <b-container class="bg-light mt-3">
      <div v-if="isAnswering">
        <h2>もんだい</h2>
        <h1>
          {{ questions.q1.left }}+{{ questions.q1.right }}={{
            questions.q1.total
          }}
        </h1>
        <b-row>
          <b-col v-for="btn in answerBtnList" :key="btn.id" class="text-center"
            ><b-button size="lg" @click="checkAnser(btn.total)">{{
              btn.total
            }}</b-button></b-col
          >
        </b-row>
        <b-button size="lg" @click="stopDrill()">ドリルをやめる</b-button>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSuccess: false,
      answerBtnList: {},
      correctAnswer: { left: 0, right: 0, total: 0 },
      questions: {},
      isAnswering: false,
      numberQ: 10,
    }
  },
  mounted() {},
  methods: {
    // 答え合わせの内容を記録する -> addAnserHistory
    addAnserHistory(total) {
      const date = new Date()
      const storage = JSON.parse(localStorage.getItem('drill'))
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
    // 問題の答え合わせをする -> checkAnser
    checkAnser(total) {
      this.input = total
      if (total === this.correctAnswer.total) {
        this.isSuccess = true
      } else {
        this.isSuccess = false
      }
      // 答え合わせの内容を記録する
      this.addAnserHistory(total)
    },
    // 問題を作成する -> createQuestion
    createQuestion() {
      const left = Math.floor(Math.random() * 11)
      const right = Math.floor(Math.random() * 11)
      const total = left + right
      return { left, right, total }
    },
    // 問題の答えを三択で出現させる -> selectAnser
    selectAnser() {
      const q1 = this.createQuestion()
      const q2 = this.createQuestion()
      const q3 = this.createQuestion()
      this.questions = { q1, q2, q3 }
      this.correctAnswer = q1
      const list = [
        [q1, q2, q3],
        [q1, q3, q2],
        [q2, q3, q1],
        [q2, q1, q3],
        [q3, q1, q2],
        [q3, q2, q1],
      ]
      // 指定するための乱数
      const number = Math.floor(Math.random() * list.length)
      this.answerBtnList = list[number]
    },
    startDrill() {
      this.isAnswering = true
      this.selectAnser()
    },
    stopDrill() {
      this.isAnswering = false
    },
    createNumberQ() {},
  },
}
// 問題を解答する画面(問題数を制限) /addition/number-limit.vue
//   問題数を決める入力フォーム
//   問題スタートボタン
//     経過時間表示(スタートボタンをおしてからの時間)
//     経過時間表示(1問ごとに問題が出現してからの時間)
//     問題を表示
//     答えの三択ボタンを表示
//     回答履歴を表示

//     答えのボタンを押した時の画面
//     正解か不正解かを表示
//     経過時間を表示
//     次の問題を表示
//     回答履歴を表示

//     最後の答えのボタンを押した時の画面
//     正解か不正解かを表示
//     経過時間を表示
//     ドリルの結果発表
//     問題の解き方を選ぶ画面に戻るボタン
//     回答履歴を表示
</script>
