<template>
  <div>
    <b-container class="bg-light mt-3">
      <h1>ドリルをえらぶ</h1>
      <div>
        <p>じぶんのなまえ</p>
        <b-alert v-if="hasMyName" show variant="info">{{ myName }}</b-alert>
        <b-alert v-else show variant="dark">とうろくされていません</b-alert>
      </div>
      <div>
        <NuxtLink to="/addition/time-limit">はやおしドリル</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/addition/number-limit">じっくりドリル</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/">さいしょのページ</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/addition/start">たしざんドリルのじゅんび</NuxtLink>
      </div>
    </b-container>
    <b-container class="bg-light mt-3">
      <p>きろく</p>
      <div>
        <b-button size="lg" @click="removeAnserHistory()"
          >回答履歴を削除する</b-button
        >
      </div>
      <ul v-if="hasAnswerResult">
        <li v-for="result in storage.result" :key="result.id">
          回答: {{ result.answerResult }}
          <span v-if="result.isCorrect">正解</span>
          <span v-else>不正解</span>
          日付: {{ result.date }}
        </li>
      </ul>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myName: '',
      storage: {},
      hasMyName: false,
      hasAnswerResult: false,
    }
  },
  mounted() {
    const storage = JSON.parse(localStorage.getItem('drill'))
    if (storage === null) {
      this.myName = ''
      this.storage = {}
    } else {
      this.myName = storage.name
      this.storage = storage
    }
    this.hasMyName = true
    if (this.myName === '') {
      this.hasMyName = false
    }
  },
  methods: {
    // 回答履歴を削除 -> removeAnserHistory
    removeAnserHistory() {
      const storage = JSON.parse(localStorage.getItem('drill'))
      if (storage === null) {
        this.storage = {}
        this.hasMyName = false
        this.hasAnswerResult = false
        return
      }
      if (storage.result) {
        storage.result = []
      }
      this.storage = storage
      localStorage.setItem('drill', JSON.stringify(storage))
    },
    // 自分の名前を登録 -> createMyName
    createMyName() {
      let storage = JSON.parse(localStorage.getItem('drill'))
      if (storage === null) {
        storage = { name: this.myName }
      } else {
        storage.name = this.myName
      }
      this.storage = storage
      localStorage.setItem('drill', JSON.stringify(storage))
      this.hasMyName = true
      if (this.myName === '') {
        this.hasMyName = false
      }
    },
  },
}
// 問題の解き方を選ぶ画面 /addition/menu.vue
//   登録した名前を表示
//   きょうの日付を表示
//   問題早押し -> 問題回答の時間を制限
//   じっくり解答 -> 問題数を制限
//   回答履歴を表示
</script>
