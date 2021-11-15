<template>
  <div>
    <h3>じぶんのなまえ</h3>
    <b-alert show variant="info">{{ name || noName }}</b-alert>
    <div v-if="isNowChanging">
      <b-form-select v-model="inputName" :options="options"></b-form-select>
      <b-btn
        v-if="isOpenDrill === false"
        size="lg"
        @click="isNowChanging = false"
        >ほぞんする</b-btn
      >
    </div>
    <div v-else>
      <b-btn
        v-if="isOpenDrill === false"
        size="lg"
        @click="isNowChanging = true"
        >へんこうする</b-btn
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    isOpenDrill: {
      type: Boolean,
    },
  },
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
