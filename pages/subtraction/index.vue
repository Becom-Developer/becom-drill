<template>
  <div class="text-center">
    <b-container class="bg-light my-3">
      <h1>ひきざん</h1>
      <h2>ドリルのじゅんび</h2>
      <p>じぶんのなまえをとうろくしてみよう!</p>
      <p>へんこうするボタンをおすとなまえがえらべるよ</p>
      <my-name />
    </b-container>
    <b-container class="bg-light mt-3">
      <anser-history />
    </b-container>
    <div>
      <NuxtLink to="/addition/time-limit">はやおしドリル</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/addition/number-limit">じっくりドリル</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/">さいしょにもどる</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
// 最初の画面 /addition/start.vue
//   じぶんの名前を登録するフォーム
//     実行ボタン
//   すでに登録されている場合は登録されている名前を表示
//     名前を変更しますか
//       名前を登録するフォーム -> 名前を表示しておく
//         変更するボタン
//   すでに回答履歴がある場合は履歴を表示
//     履歴を削除しますか
//       履歴を削除ボタン
//   きょうの日付を表示
//   問題早押し -> 問題回答の時間を制限
//   じっくり解答 -> 問題数を制限
</script>
