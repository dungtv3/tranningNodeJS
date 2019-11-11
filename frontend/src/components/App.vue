<template>
  <div id="app">
      <header-menu></header-menu>
      <div class="container">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import HeaderMenu from './HeaderMenu'
export default {
  name: 'app',
  components: {
    HeaderMenu
  }
}
</script>
