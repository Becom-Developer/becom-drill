<template>
  <div>
    <b-container class="bg-light mt-3">
      <h1>たしざんドリルのじゅんび</h1>
      <my-name />
      <div>
        <NuxtLink to="/">Home page</NuxtLink>
      </div>
    </b-container>
    <b-container class="bg-light mt-3">
      <p>きろく</p>
      <div>
        <b-button size="lg" @click="removeAnserHistory()"
          >回答履歴を削除する</b-button
        >
      </div>
      <div>
        <NuxtLink to="/addition/menu">ドリルをえらぶ</NuxtLink>
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
// 最初の画面 /addition/start.vue
//   じぶんの名前を登録するフォーム
//     実行ボタン -> 登録して問題の解き方を選ぶ画面
//   すでに登録されている場合は登録されている名前を表示
//     名前を変更しますか
//       名前を登録するフォーム -> 名前を表示しておく
//         変更するボタン
//         いまのままドリルを始めるボタン
//   すでに回答履歴がある場合は履歴を表示
//     履歴を削除しますか
//       履歴を削除ボタン
//       いまのままドリルを始めるボタン
</script>
