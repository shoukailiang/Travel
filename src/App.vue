<template>
  <div id="app">
    <!-- 进入页面后进行缓存，不用每次重新进去都重新请求数据了 -->
    <!-- 除了detail -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="stylus">

</style>
