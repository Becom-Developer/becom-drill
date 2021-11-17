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
          <div
            v-for="card in reportCard"
            :key="card.id"
            class="card-text text-left"
          >
            ドリルID: {{ card.drill.id }}
            <ul>
              <li
                v-for="record in card.records"
                :key="record.id"
                class="card-text text-left"
              >
                第{{ record.recordID }}問: {{ record.question }} =
                {{ record.answerResult }}
                <span v-if="record.isCorrect" class="">
                  <b-badge variant="danger">正解</b-badge>
                </span>
                <span v-else>
                  <b-badge variant="secondary">不正解</b-badge>
                </span>
              </li>
            </ul>
          </div>
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
    ...mapState(['history', 'drill']),
    ...mapGetters(['countHistory', 'reportCard']),
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
