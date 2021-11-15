<template>
  <b-container class="bg-light mt-3 text-center">
    <h1>ドリルマスター</h1>
    <p>みんなでたのしくグリグリ計算ドリルをやってみよう</p>
    <h2>ドリルをえらぼう</h2>
    <p>4つのドリルがえらべるよ</p>
    <p>やってみたいドリルをクリックしてみよう</p>
    <b-row>
      <b-col lg="3" class="pb-2"
        ><b-btn
          block
          pill
          size="lg"
          variant="outline-secondary"
          @click="addition('/addition/start')"
          >たしざん</b-btn
        ></b-col
      >
      <b-col lg="3" class="pb-2"
        ><b-btn block pill size="lg" variant="outline-secondary"
          >ひきざん</b-btn
        ></b-col
      >
      <b-col lg="3" class="pb-2"
        ><b-btn block pill size="lg" variant="outline-secondary"
          >かけざん</b-btn
        ></b-col
      >
      <b-col lg="3" class="pb-2"
        ><b-btn block pill size="lg" variant="outline-secondary"
          >わりざん</b-btn
        ></b-col
      >
    </b-row>
  </b-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['counter', 'name', 'record']),
  },
  methods: {
    ...mapMutations(['addName', 'addDrillID']),
    addition(path) {
      this.$router.push(path)
    },
  },
}
</script>
