<template>
  <div class="solution">
    <div class="page-box pagesolution-all">
      <div class="container solutionall-box">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 solution-center">
            <p>聚力科技旗下品牌</p>
            <div class="soall-box">
              <div class="row align-items-center">
                <a href="http://www.zhaoluobo.com" target="_blank" titile="找萝卜" class="col-12 col-md-4 ppa zhaoluobologo">
                </a>
                <a href="http://www.yipin360.com" target="_blank" titile="易聘360" class="col-12 col-md-4 ppa yipinlogo">
                </a>
                <a href="http://www.zhaoluobo.com" target="_blank" titile="灵动系统" class="col-12 col-md-4 ppa lingdonglogo">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box pagesolution-zlb">
      <div class="solutionbgbox"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-4 box-align-center">
            <img src="../assets/sozhaoluobologo.png" alt="找萝卜">
          </div>
          <div class="col-12 col-md-8 box-align-center">
            <h4>专注中小企业招聘管理的云平台-找萝卜 </h4>
            <p>找萝卜 是一个针对中小企业的招聘管理的云平台，集合SaaS模式以及精准匹配算法等数据化商业应用，切入中小企业高频招聘需求，可显著提升企业HR招聘效率。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box pagesolution-yp360">
      <div class="solutionbgbox"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-8 box-align-center">
            <h4>专注销售客服垂直招聘的云平台-易聘360</h4>
            <p>易聘360 是一个针对销售客服类岗位的垂直招聘云平台，集合SaaS模式以及精准匹配算法等数据化商业应用，切入企业对销售及客服类岗位的高频招聘需求，显著提升企业HR招聘效率。</p>
          </div>
          <div class="col-12 col-md-4 box-align-center text-right">
            <img src="../assets/soyipinlogo.png" alt="易聘360">
          </div>
        </div>
      </div>
    </div>
    <div class="page-box pagesolution-ld">
      <div class="solutionbgbox"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-4 box-align-center">
            <img src="../assets/solingdonglogo.png" alt="灵动系统">
          </div>
          <div class="col-12 col-md-8 box-align-center">
            <h4>专注大型企业招聘管理的云平台-灵动系统</h4>
            <p>灵动系统 是一个能满足大型企业个性化招聘需求的云化管理系统，同时依靠完备的大数据建模、精准匹配算法、数据挖掘及分析等技术与服务输出能力，覆盖企业对人力资源招聘各阶段发展的不同需求，从而有效提升企业从人力资源到人力资本的高效转化。</p>
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>
<script>
  import Footer from './Footer';

  export default {
    name: 'solution',
    components: {
      'page-footer': Footer,
    },
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .solution>.page-box {
    color: #ffffff;
  }
  .pagesolution-all {
    background-image: url(../assets/solutionbg1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .solutionall-box {
    padding: 60px 0;
  }
  .solution-center {
    padding: 15rem 30px;
  }
  .soall-box {
    background-color: #ffffff;
    border-radius: 15px;
    padding: 20px;
    opacity: 0.7;
  }
  .ppa {
    padding: 20px 0;
    height: 35px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .zhaoluobologo {
    background-image: url(../assets/zhaoluobologo.png);
  }
  .yipinlogo {
    background-image: url(../assets/yipin360logo.png);
  }
  .lingdonglogo {
    background-image: url(../assets/lingdonglogo.png);
  }
  .pagesolution-zlb, .pagesolution-yp360, .pagesolution-ld {
    padding: 100px 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
  }
  .pagesolution-zlb {
    background-image: url(../assets/solutionbg2.png);
  }
  .pagesolution-yp360 {
    background-image: url(../assets/solutionbg3.png);
  }
  .pagesolution-ld {
    background-image: url(../assets/solutionbg4.png);
  }
  .box-align-center>h4 {
    margin-bottom: 2rem;
  }
  .box-align-center>p {
    line-height: 2rem;
  }
  .solutionbgbox {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .pagesolution-zlb>.solutionbgbox, .pagesolution-ld>.solutionbgbox {
    margin-left: -250px;
    background-color: #c63922;
    opacity: .8;
  }
  .pagesolution-zlb>.solutionbgbox::before, .pagesolution-ld>.solutionbgbox::before {
    content: " ";
    width: 0;
    height: 0;
    border-bottom: 1000px solid #c63922;
    border-left: 500px solid transparent;
    position: absolute;
    left: 0;
    top: 0;
    margin-left: -500px;
  }
  .pagesolution-yp360>.solutionbgbox {
    left: auto;
    right: 50%;
    margin-right: -200px;
    background-color: #0080ba;
    opacity: .8;
  }
  .pagesolution-yp360>.solutionbgbox::after {
    content: " ";
    width: 0;
    height: 0;
    border-top: 1000px solid #0080ba;
    border-right: 500px solid transparent;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: -170px;
  }
  .pagesolution-ld>.solutionbgbox {
    background-color: #aa940a;
  }
  .pagesolution-ld>.solutionbgbox::before {
    border-bottom: 1000px solid #aa940a;
    margin-left: -500px;
  }

  @media (max-width: 767px) {
    .ppa {
      padding: 30px 0;
      height: auto;
    }
    .solutionbgbox {
      display: none;
    }
    .box-align-center {
      text-align: center!important;
    }
    .col-12.col-md-4.box-align-center {
      margin: 0 0 2rem 0;
    }
    .pagesolution-ld>.solutionbgbox {
      display: block;
      left: 0;
      margin-left: 0;
    }
  }

  @media (max-width: 575px) {
    .solution-center {
      padding: 7rem 30px;
    }
  }
</style>
