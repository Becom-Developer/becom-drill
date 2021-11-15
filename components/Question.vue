<template>
  <div class="my-3">
    <h3 class="text-center">たしざん {{ record.recordID }} 問</h3>
    <!-- ドリル開始まえ isBeforeDrill -->
    <div v-if="isBeforeDrill" class="text-center">
      <b-row>
        <b-col lg="12" class="my-2"
          ><b-btn
            block
            pill
            size="lg"
            variant="outline-danger"
            @click="startDrill"
            >スタート</b-btn
          ></b-col
        >
      </b-row>
    </div>
    <!-- 出題中 isAnswering -->
    <div v-if="isAnswering" class="text-center">
      <h1 class="text-center">{{ q1.left }}+{{ q1.right }}=□</h1>
      <p class="text-center my-3">正解をクリック</p>
      <b-row class="my-3">
        <b-col
          v-for="btn in answerBtn"
          :key="btn.id"
          class="my-2 text-center"
          col="4"
          ><b-btn
            block
            pill
            size="lg"
            variant="outline-danger"
            @click="checkAnser(btn.total)"
            >{{ btn.total }}</b-btn
          ></b-col
        >
      </b-row>
      <b-button size="lg" @click="stopDrill">とちゅうでやめる</b-button>
    </div>
    <!-- 答案後 isAfterAnswering -->
    <div v-if="isAfterAnswering" class="text-center">
      <h1 class="text-center">{{ q1.left }}+{{ q1.right }}=□</h1>
      <p class="my-3">入力したこたえ</p>
      <div v-if="isAfterDrill === false" class="my-3">
        <b-btn
          block
          pill
          size="lg"
          variant="outline-danger"
          @click="nextQuestion"
          >次の問題</b-btn
        >
      </div>
      <b-alert show variant="success">{{ input }}</b-alert>
      <b-alert v-if="isSuccess" show variant="danger">{{ answer }}</b-alert>
      <b-alert v-else show variant="dark">{{ answer }}</b-alert>
      <!-- ドリル終了後 isAfterDrill -->
      <div v-if="isAfterDrill === false">
        <b-button size="lg" @click="stopDrill">とちゅうでやめる</b-button>
      </div>
      <div v-if="isAfterDrill" class="text-center">
        ドリルがおわりました。
        <p>こんかいのせいせき</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isBeforeDrill: true,
      isAnswering: false,
      isAfterAnswering: false,
      isAfterDrill: false,
      q1: { left: 0, right: 0, total: 0 },
      q2: { left: 0, right: 0, total: 0 },
      q3: { left: 0, right: 0, total: 0 },
      answerBtn: [],
      answer: '',
      correctAnswer: { left: 0, right: 0, total: 0 },
      isSuccess: false,
      input: '',
    }
  },
  computed: {
    ...mapState(['name', 'numberQ', 'record', 'history']),
  },
  mounted() {},
  methods: {
    ...mapMutations([
      'addName',
      'addRecordID',
      'addQuestion',
      'addAnswer',
      'addAnswerResult',
      'addIsCorrect',
      'addStartTime',
      'addEndTime',
      'pushHistory',
    ]),
    // ドリルを開始 -> startDrill
    startDrill() {
      // 問題の数を初期化
      this.addRecordID(0)
      this.nextQuestion()
      this.isBeforeDrill = false // ドリル開始まえ
      this.isAnswering = true // 出題中
      this.isAfterAnswering = false // 答案後
      this.isAfterDrill = false // ドリル終了後
    },
    // ドリルをやめる -> stopDrill
    stopDrill() {
      this.isBeforeDrill = false // ドリル開始まえ
      this.isAnswering = false // 出題中
      this.isAfterAnswering = false // 答案後
      this.isAfterDrill = true // ドリル終了後
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
      this.q1 = this.createQuestion()
      this.q2 = this.createQuestion()
      this.q3 = this.createQuestion()
      // 出題される問題
      this.correctAnswer = this.q1
      // 問題の開始
      const date = new Date()
      this.addStartTime(date.toLocaleString('ja'))
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
      // ドリルの問題数が設定値にくると終了
      if (this.record.recordID >= this.numberQ) {
        this.isBeforeDrill = false // ドリル開始まえ
        this.isAnswering = false // 出題中
        this.isAfterAnswering = true // 答案後
        this.isAfterDrill = true // ドリル終了後
        // 問題の数を初期化
        this.addRecordID(0)
        return
      }
      this.isBeforeDrill = false // ドリル開始まえ
      this.isAnswering = false // 出題中
      this.isAfterAnswering = true // 答案後
      this.isAfterDrill = false // ドリル終了後
    },
    // 答え合わせの内容を記録する -> addAnserHistory
    addAnserHistory(total, name) {
      const date = new Date()
      // vuex への保存
      // 問題の解答を保存
      this.addQuestion(`${this.correctAnswer.left}+${this.correctAnswer.right}`)
      this.addAnswer(Number(`${this.correctAnswer.total}`))
      this.addAnswerResult(total)
      this.addIsCorrect(this.isSuccess)
      this.addEndTime(date.toLocaleString('ja'))
      const record = { ...this.record }
      // 解答履歴へ保存
      this.pushHistory(record)
    },
    // 問題を入れ替える -> nextQuestion
    nextQuestion() {
      // 問題の数を設定
      const count = this.record.recordID
      this.addRecordID(count + 1)
      // 問題の答えを三択で出現させる
      this.selectAnser()
      this.isBeforeDrill = false // ドリル開始まえ
      this.isAnswering = true // 出題中
      this.isAfterAnswering = false // 答案後
      this.isAfterDrill = false // ドリル終了後
    },
  },
}
</script>
