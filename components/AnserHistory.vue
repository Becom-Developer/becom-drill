<template>
  <div class="my-3 text-center">
    <h3>かいとうのきろく</h3>
    <!-- <p>{{history}}</p> -->
    <div>
      <b-button size="lg" @click="removeAnserHistory()"
        >回答履歴を削除する</b-button
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
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: { ...mapState(['history']) },
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
