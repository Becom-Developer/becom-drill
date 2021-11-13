<template>
  <div class="my-3">
    <h3>もんだいのかずをきめる</h3>
    <b-alert show variant="info"
      >ぜんぶで {{ numberQ || noNumberQ }} もん</b-alert
    >
    <div v-if="isNowChanging">
      <b-form-select v-model="inputValue" :options="options"></b-form-select>
      <b-button size="lg" @click="isNowChanging = false">ほぞんする</b-button>
    </div>
    <b-button v-else size="lg" @click="isNowChanging = true"
      >へんこうする</b-button
    >
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isNowChanging: false,
      noNumberQ: '10',
      options: [
        { value: 1, text: '1' },
        { value: 5, text: '5' },
        { value: 10, text: '10' },
        { value: 15, text: '15' },
        { value: 20, text: '20' },
      ],
    }
  },
  computed: {
    ...mapState(['numberQ']),
    inputValue: {
      get() {
        return this.numberQ
      },
      set(value) {
        this.addNumberQ(value)
      },
    },
  },
  mounted() {},
  methods: { ...mapMutations(['addNumberQ']) },
}
</script>
