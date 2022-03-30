<template>
  <div id="app">
  <router-view></router-view>
    <mt-tabbar>
     <router-link to="/Home">
          <mt-tab-item id="外卖">
        <img src="./assets/shouye.png" alt="" class="sizi" />
        <p>首页</p>
      </mt-tab-item>
      </router-link>
    <router-link to="/Shopping">

      <mt-tab-item id="订单">
        <img src="./assets/gouwucheman.png" alt="" class="sizi" />
        <p>购物车</p>
      </mt-tab-item>
    </router-link>
      <router-link to="/Login"> 
        <mt-tab-item id="发现">
        <img src="./assets/geren.png" alt="" class="sizi" />
        <p>个人中心</p>
      </mt-tab-item></router-link>
    </mt-tabbar>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sizi {
  width: 20%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
