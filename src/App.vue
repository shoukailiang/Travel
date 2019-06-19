<template>
  <div id="app">
    <!-- 进入页面后进行缓存，不用每次重新进去都重新请求数据了 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
