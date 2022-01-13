<template>
  <b-container class="bg-light mt-3 text-center">
    <h1>ドリルマスター</h1>
    <p>みんなでたのしく計算ドリルをやってみよう</p>
    <h2>ドリルをえらぼう</h2>
    <!-- <p>4つのドリルがえらべるよ</p> -->
    <p>やってみたいドリルをクリック</p>
    <b-row>
      <b-col class="pb-2"
        ><b-btn
          block
          pill
          size="lg"
          variant="outline-secondary"
          @click="$router.push('/addition')"
          >たしざん</b-btn
        ></b-col
      >
      <!-- <b-col lg="3" class="pb-2" -->
        <!-- ><b-btn -->
          <!-- block -->
          <!-- pill -->
          <!-- size="lg" -->
          <!-- variant="outline-secondary" -->
          <!-- @click="$router.push('/subtraction')" -->
          <!-- >ひきざん</b-btn -->
        <!-- ></b-col -->
      <!-- > -->
      <!-- <b-col lg="3" class="pb-2" -->
        <!-- ><b-btn -->
          <!-- block -->
          <!-- pill -->
          <!-- size="lg" -->
          <!-- variant="outline-secondary" -->
          <!-- @click="$router.push('/multiplication')" -->
          <!-- >かけざん</b-btn -->
        <!-- ></b-col -->
      <!-- > -->
      <!-- <b-col lg="3" class="pb-2" -->
        <!-- ><b-btn -->
          <!-- block -->
          <!-- pill -->
          <!-- size="lg" -->
          <!-- variant="outline-secondary" -->
          <!-- @click="$router.push('/division')" -->
          <!-- >わりざん</b-btn -->
        <!-- ></b-col -->
      <!-- > -->
    </b-row>
  </b-container>
</template>
<script>
export default {
  computed: {},
  methods: {},
}
</script>
