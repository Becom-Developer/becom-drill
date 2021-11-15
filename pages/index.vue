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
          @click="nextPage('/addition')"
          >たしざん</b-btn
        ></b-col
      >
      <b-col lg="3" class="pb-2"
        ><b-btn
          block
          pill
          size="lg"
          variant="outline-secondary"
          @click="nextPage('/subtraction')"
          >ひきざん</b-btn
        ></b-col
      >
      <b-col lg="3" class="pb-2"
        ><b-btn
          block
          pill
          size="lg"
          variant="outline-secondary"
          @click="nextPage('/multiplication')"
          >かけざん</b-btn
        ></b-col
      >
      <b-col lg="3" class="pb-2"
        ><b-btn
          block
          pill
          size="lg"
          variant="outline-secondary"
          @click="nextPage('/division')"
          >わりざん</b-btn
        ></b-col
      >
    </b-row>
  </b-container>
</template>
<script>
export default {
  computed: {},
  methods: {
    nextPage(path) {
      this.$router.push(path)
    },
  },
}
</script>
