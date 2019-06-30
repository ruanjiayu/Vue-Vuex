<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState() {
      //如果有多个需要存放的模块，那么需要放置在这里，可以设置多个
      sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user))
      // sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user))
      // sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user))
    }
  }
}
</script>

