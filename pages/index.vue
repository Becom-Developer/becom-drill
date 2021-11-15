<template>
  <b-container class="bg-light mt-3">
    <b-alert show>選択する</b-alert>
    <div>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/addition/start">足し算</NuxtLink>
    </div>
    <b-btn @click="clickTest">test</b-btn>
    <question />
    <anser-history />
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
    clickTest() {},
  },
}
</script>
