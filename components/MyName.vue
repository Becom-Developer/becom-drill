<template>
  <div>
    <div v-if="isOpenDrill">
      <h3>じぶんのなまえ</h3>
      <b-alert show variant="info">{{ name || noName }}</b-alert>
    </div>
    <div v-else>
      <h3>じぶんのなまえ</h3>
      <b-row>
        <b-col cols="8" class="pr-1"
          ><b-alert show variant="info">{{ name || noName }}</b-alert></b-col
        >
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
              >名前</b-btn
            >
          </div>
        </b-col>
      </b-row>
      <b-row v-if="isNowChanging">
        <b-col cols="12" class="pb-2">
          <b-form-select v-model="inputName" :options="options"></b-form-select>
        </b-col>
      </b-row>
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
