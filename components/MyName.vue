<template>
  <div>
    <!-- じっくりドリル画面からの呼び出し -->
    <div v-if="isOpenDrill">
      <h3>なまえ</h3>
      <b-alert show variant="info">{{ name || noName }}</b-alert>
    </div>
    <!-- 通常の呼び出し -->
    <div v-else>
      <h3>なまえ</h3>
      <b-row>
        <b-col cols="12" class="px-2"
          ><b-alert show variant="info">{{ name || noName }}</b-alert></b-col
        >
      </b-row>
      <b-row>
        <b-col cols="12" class="px-2">
          <b-form-select v-model="inputName" :options="options"></b-form-select>
        </b-col>
      </b-row>
      <!-- <b-row>
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
              @click="endName"
              >ほぞん</b-btn
            >
          </div>
          <div v-else>
            <b-btn
              block
              pill
              size="lg"
              variant="outline-secondary"
              @click="startName"
              >えらぶ</b-btn
            >
          </div>
        </b-col> -->
      <!-- </b-row> -->
      <b-row v-if="isNowChanging">
        <b-col cols="12" class="pb-2">
          <b-form-input
            v-if="isInputOrigin"
            v-model="inputName"
            placeholder="なまえ"
          ></b-form-input>
          <b-form-select
            v-else
            v-model="inputName"
            :options="options"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row v-if="isNowChanging">
        <b-col cols="12" class="pb-2">
          <!-- <b-btn
            v-if="isInputOrigin"
            block
            pill
            size="lg"
            variant="outline-secondary"
            @click="startSelectName"
            >なまえをえらぶ</b-btn
          >
          <b-btn
            v-else
            block
            pill
            size="lg"
            variant="outline-secondary"
            @click="endSelectName"
            >ほかのなまえ</b-btn
          > -->
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
      isInputOrigin: false,
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
  methods: {
    ...mapMutations(['addName', 'addDrillID']),
    startName() {
      this.isNowChanging = true
    },
    endName() {
      this.isNowChanging = false
    },
    startSelectName() {
      this.isInputOrigin = false
    },
    endSelectName() {
      this.isInputOrigin = true
    },
  },
}
</script>
