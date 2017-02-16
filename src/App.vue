<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--Nav-->
    <nav class="navbar fixed-top">
      <div class="container navflex">
        <div class="jlogo">
          <router-link class="navbar-brand" :to="'/'">
            <img src="./assets/logo.svg" onerror="this.onerror=null;this.src='./assets/logo.png'" class="image">
          </router-link>
        </div>
        <div class="jnav">
          <ul class="navbar-nav clearfix">
            <li class="nav-item" v-bind:class="navdef==='/'?'active':''">
              <router-link class="nav-link" :to="'/'">
                首页
              </router-link>
            </li>
            <li class="nav-item" v-bind:class="navdef==='/solution'?'active':''">
              <router-link class="nav-link" :to="'/solution'">
                解决方案
              </router-link>
            </li>
            <li class="nav-item" v-bind:class="navdef==='/attitude'?'active':''">
              <router-link class="nav-link" :to="'/attitude'">
                聚力态度
              </router-link>
            </li>
            <li class="nav-item" v-bind:class="navdef==='/news'?'active':''">
              <router-link class="nav-link" :to="'/news'">
                新闻中心
              </router-link>
            </li>
            <li class="nav-item" v-bind:class="navdef==='/development'?'active':''">
              <router-link class="nav-link" :to="'/development'">
                职业发展
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="openview">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
    <!--<div class="footer">
      页脚
    </div>-->
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-left',
        navdef: this.$route.path,
      };
    },
    watch: {
      $route: 'navdefact',
    },
    methods: {
      navdefact() {
        // 设置router函数跳转
        this.navdef = this.$route.path;
        // console.log(this.$route.path);
      },
    },
  };

</script>
<style src="./assets/main.css"></style>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    width: 100%;
    top: 0;
    padding: 58px 0 0;
    height: 100%;
  }
  
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
  
  .view {
    z-index: 1;
    position: relative;
  }
  
  .navbar {
    z-index: 1;
    /*position: relative;*/
    background-color: #ffffff;
  }
  
  .fl {
    float: left;
  }
  
  .fr {
    float: right;
  }
  
  .navbar-nav {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  
  .navflex {
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
  }

  .navbar-nav>.nav-item>a {
    color: #626262;
  }
  
  .nav-item {
    margin: 0 20px;
  }

  li.nav-item.active>a {
    color: #236fad;
  }

  .jlogo .navbar-brand .image{
    width: 114px;
    height: 34px;
  }

  @media (max-width: 767px) {
    .navflex {
      flex-direction: column;
    }
    .jlogo, .jnav {
      text-align: center;
    }
    .navbar-nav {
      justify-content: center;
    }
  }
  @media (max-width: 575px) {
    .child-view {
      padding-top: 93px;
    }
    .jnav {
      margin: 0 -15px; 
    }
    .nav-item {
      margin: 0 5px;
      font-size: 14px;
    }
  }
</style>
