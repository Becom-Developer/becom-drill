<template>
  <div class="text-center">
    <b-container class="bg-light my-3">
      <h1>かけざん</h1>
      <h2>ドリルのじゅんび</h2>
      <p>じぶんのなまえをとうろくしてみよう!</p>
      <p>へんこうするボタンをおすとなまえがえらべるよ</p>
      <my-name />
    </b-container>
    <b-container class="bg-light mt-3">
      <anser-history />
    </b-container>
    <b-container class="bg-light my-3 p-3">
      <b-row>
        <b-col lg="6" class="pb-2"
          ><b-btn
            block
            pill
            size="lg"
            variant="outline-secondary"
            @click="$router.push('/multiplication/time-limit')"
            >はやおしドリル</b-btn
          ></b-col
        >
        <b-col lg="6" class="pb-2"
          ><b-btn
            block
            pill
            size="lg"
            variant="outline-secondary"
            @click="$router.push('/multiplication/number-limit')"
            >じっくりドリル</b-btn
          ></b-col
        >
      </b-row>
      <b-row>
        <b-col lg="12" class="pb-2"
          ><b-btn
            block
            pill
            size="lg"
            variant="outline-success"
            @click="$router.push('/')"
            >さいしょにもどる</b-btn
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
