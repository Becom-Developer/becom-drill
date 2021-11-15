<template>
  <div v-if="countHistory" class="my-3 py-3 text-center">
    <h3>かいとうのきろく</h3>
    <div>
      <b-btn
        v-b-toggle.collapse-1
        variant="outline-success"
        pill
        blocks
        size="lg"
        >せいせきをみる</b-btn
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p v-for="row in history" :key="row.id" class="card-text text-left">
            回答: {{ row.answerResult }}
            <span v-if="row.isCorrect">正解</span>
            <span v-else>不正解</span>
            日付: {{ row.startTime }}
          </p>
          <b-btn
            variant="outline-success"
            pill
            blocks
            size="sm"
            @click="removeAnserHistory()"
            >回答履歴を削除する</b-btn
          >
        </b-card>
      </b-collapse>
    </div>
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
