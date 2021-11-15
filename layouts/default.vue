<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top">
      <b-navbar-brand to="/">ドリルマスター</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/addition">たしざん</b-nav-item>
          <b-nav-item to="/subtraction">ひきざん</b-nav-item>
          <b-nav-item to="/multiplication">かけざん</b-nav-item>
          <b-nav-item to="/division">わりざん</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>
