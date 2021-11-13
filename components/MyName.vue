<template>
  <div>
    <h3>じぶんのなまえ</h3>
    <b-alert show variant="info">{{ name || noName }}</b-alert>
    <div v-if="isNowChanging">
      <!-- <input v-model="inputName" type="text" class="form-control" /> -->
      <b-form-select v-model="inputName" :options="options"></b-form-select>
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
      noName: 'とうろくされていません',
      options: [
        { value: '', text: 'とうろくしない' },
        { value: 'どらえもん', text: 'どらえもん' },
        { value: 'のびた', text: 'のびた' },
        { value: 'しずか', text: 'しずか' },
        { value: 'スネオ', text: 'スネオ' },
        { value: 'ジャイアン', text: 'ジャイアン' },
      ],
    }
  },
  computed: {
    ...mapState(['name']),
    inputName: {
      get() {
        return this.name
      },
      set(value) {
        this.addName(value)
      },
    },
  },
  mounted() {},
  methods: { ...mapMutations(['addName', 'addDrillID']) },
}
</script>
