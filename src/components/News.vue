<template>
  <div class="news">
    <div class="page-box page-newsbg">
      <div class="container text-center">
        <h1>企业动态</h1>
        <p>Enterprise dynamic</p>
      </div>
    </div>
    <div class="page-box page-newslist">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <a class="card" target="_blank" href="http://36kr.com/p/5044084.html">
              <img class="card-img-top" src="../assets/newlist1.png" alt="Card image cap">
              <div class="card-block">
                <a class="card-title">“找萝卜”完成2000万元A轮融资，重心由SaaS倾向数据化运作</a>
                <div class="row align-items-center">
                  <div class="col-6">
                    <p class="card-text">记者：徐宁</p>
                    <p class="card-text">2016-05-10</p>
                  </div>
                  <div class="col-6 text-right"><img src="../assets/36krlogo.png" alt=""></div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <a class="card" target="_blank" href="http://www.lieyunwang.com/archives/134073">
              <img class="card-img-top" src="../assets/newlist2.png" alt="Card image cap">
              <div class="card-block">
                <a class="card-title">找萝卜如何做“一个萝卜一个坑”招聘管理平台</a>
                <div class="row align-items-center">
                  <div class="col-6">
                    <p class="card-text">记者：小蒙</p>
                    <p class="card-text">2015-11-26</p>
                  </div>
                  <div class="col-6 text-right"><img src="../assets/lieyunlogo.png" alt=""></div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <a class="card" target="_blank" href="http://www.pingwest.com/carrot-candidate">
              <img class="card-img-top" src="../assets/newlist3.png" alt="Card image cap">
              <div class="card-block">
                <a class="card-title">创业公司如何招人与用人？我们问了问懂得如何“找萝卜”的人</a>
                <div class="row align-items-center">
                  <div class="col-6">
                    <p class="card-text">记者：冯尚钺</p>
                    <p class="card-text">2015-09-09</p>
                  </div>
                  <div class="col-6 text-right"><img src="../assets/pinwanlogo.png" alt=""></div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <a class="card" target="_blank" href="http://cn.technode.com/post/2015-08-20/saas/">
              <img class="card-img-top" src="../assets/newlist4.png" alt="Card image cap">
              <div class="card-block">
                <a class="card-title">「一问」找萝卜：怎样帮助 HR 网罗天下简历？</a>
                <div class="row align-items-center">
                  <div class="col-6">
                    <p class="card-text">记者：刘晨</p>
                    <p class="card-text">2015-08-20</p>
                  </div>
                  <div class="col-6 text-right"><img src="../assets/dongdianlogo.png" alt=""></div>
                </div>
              </div>
            </a>
          </div>
          <!--<div class="col-12 col-sm-6 col-md-4">
            <div class="card">
              <img class="card-img-top" src="../assets/newlist5.png" alt="Card image cap">
              <div class="card-block">
                <a class="card-title">找萝卜如何做“一个萝卜一个坑”招聘管理平台</a>
                <div class="row align-items-center">
                  <div class="col-6">
                    <p class="card-text">记者：小蒙</p>
                    <p class="card-text">2015-11-26</p>
                  </div>
                  <div class="col-6 text-right"></div>
                </div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import Footer from './Footer';

  export default {
    name: 'news',
    components: {
      'page-footer': Footer,
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-newsbg {
    padding: 15rem 0;
    background-image: url(../assets/newsbg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .page-newsbg h1 {
    font-size: 48px;
    font-weight: 500;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    background-image: url(../assets/newstextbg.png);
    background-repeat: no-repeat;
    background-position: center bottom;
  }
  .page-newslist {
    padding: 3rem 0;
  }
  .page-newslist .col-12 {
    padding-bottom: 30px;
  }
  .page-newslist .col-12 .card .card-title {
    display: block;
    margin-bottom: 1rem;
    color: #626262;
  }
  .page-newslist .col-12 .card .card-text {
    margin-bottom: 0.1rem;
    font-size: 14px;
    color: #626262;
  }
  .page-newslist .col-12 .card:hover {
    text-decoration: none;
  }
</style>
