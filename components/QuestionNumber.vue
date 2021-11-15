<template>
  <div class="my-3">
    <h3>もんだいのかずをきめる</h3>
    <b-row>
      <b-col cols="8" class="pr-1">
        <b-alert show variant="info"
          >ぜんぶで {{ numberQ || noNumberQ }} もん</b-alert
        >
      </b-col>
      <b-col cols="4" class="pl-1">
        <div v-if="isNowChanging">
          <b-btn
            block
            pill
            size="lg"
            variant="outline-success"
            @click="isNowChanging = false"
            >ほぞん</b-btn
          >
        </div>
        <div v-else>
          <b-btn
            block
            pill
            size="lg"
            variant="outline-secondary"
            @click="isNowChanging = true"
            >かず</b-btn
          >
        </div>
      </b-col>
    </b-row>
    <b-row v-if="isNowChanging">
      <b-col cols="12" class="pb-2">
        <b-form-select v-model="inputValue" :options="options"></b-form-select>
      </b-col>
    </b-row>
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
