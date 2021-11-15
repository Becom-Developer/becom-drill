<template>
  <div class="my-3 text-center">
    <h3>かいとうのきろく</h3>
    <div>
      <b-btn v-if="countHistory" size="lg" @click="removeAnserHistory()"
        >回答履歴を削除する</b-btn
      >
    </div>
    <ul class="text-left">
      <li v-for="row in history" :key="row.id">
        回答: {{ row.answerResult }}
        <span v-if="row.isCorrect">正解</span>
        <span v-else>不正解</span>
        日付: {{ row.startTime }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['history']),
    ...mapGetters(['countHistory']),
  },
  mounted() {},
  methods: {
    ...mapMutations(['removeHistory']),
    // 回答履歴を削除 -> removeAnserHistory
    removeAnserHistory() {
      this.removeHistory()
    },
  },
}
</script>
