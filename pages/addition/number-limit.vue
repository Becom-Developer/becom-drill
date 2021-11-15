<template>
  <div class="text-center">
    <b-container class="bg-light my-3">
      <h1>じっくりドリル</h1>
      <div v-if="isDrill">
        <question />
        <b-button size="lg" @click="closeDrill()">ドリル設定にもどる</b-button>
      </div>
      <div v-else>
        <p>もんだいのかずをきめて、さいごまでじっくりかんがえよう</p>
        <my-name is-open-drill />
        <question-number />
        <b-button size="lg" @click="openDrill()">ドリルひょうじ</b-button>
      </div>
    </b-container>
    <div>
      <NuxtLink to="/">さいしょにもどる</NuxtLink>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isDrill: false,
    }
  },
  computed: {
    ...mapState(['name']),
  },
  mounted() {},
  methods: {
    openDrill() {
      this.isDrill = true
    },
    closeDrill() {
      this.isDrill = false
    },
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
