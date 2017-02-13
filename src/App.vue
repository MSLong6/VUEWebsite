<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--Nav-->
    <nav class="navbar">
      <div class="container clearfix">
        <div class="jlogo fl">
          <router-link class="navbar-brand" :to="'/'">
            <img src="./assets/logo.png" class="image">
          </router-link>
        </div>
        <div class="jnav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
              <router-link class="nav-link" :to="'/'">
                首页
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdown02">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
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
  // import Nav from './components/Nav';
  export default {
    name: 'app',
    // components: {
    //   'nav': Nav,
    // },
    data() {
      return {
        transitionName: 'slide-left',
      };
    },
    // watch: {
    //   '$route'(to, from) {
    //     const toDepth = to.path.split('/').length;
    //     const fromDepth = from.path.split('/').length;
    //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    //   },
    // },
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
    padding: 60px 0 0;
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
</style>
