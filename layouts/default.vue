<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top">
      <b-navbar-brand @click="$router.push('/')">ドリルマスター</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/addition')">たしざん</b-nav-item>
          <b-nav-item @click="$router.push('/subtraction')"
            >ひきざん</b-nav-item
          >
          <b-nav-item @click="$router.push('/multiplication')"
            >かけざん</b-nav-item
          >
          <b-nav-item @click="$router.push('/division')">わりざん</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>
<script>
export default {
  methods: {},
}
</script>
