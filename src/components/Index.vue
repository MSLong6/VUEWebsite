<template>
  <div class="index">
    <div class="page-box pageone-bg">
      <div class="container text-center">
        <h1>人 . 组织 . 数据 . 价值</h1>
        <p>People. Organization. Data. Value</p>
      </div>
    </div>
    <div class="page-box pageone-about">
      <div class="left-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-4">
            <h4>关于聚力<small class="text-muted">/About cohesion</small></h4>
            <p>聚力精彩（北京）信息技术有限公司（简称：聚力科技），成立于2014年10月，是国内领先的专注于人力资源领域的大数据技术及应用服务提供商。主要创始团队来自：百度、华为、智联招聘、赶集等一线IT&互联网公司核心成员。擅长对人力资源行业的深度洞察和用户痛点的精确把握，同时依靠完备的大数据技术与咨询服务能力，覆盖企业对人力资源各阶段发展的不同需求，从而有效提升企业从人力资源到人力资本的高效转化。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box pageone-event">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-4">
            <h4>大事件<small class="text-muted">/Big event</small></h4>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2016年10月 <i>●</i></p></div>
          <div class="col-12 col-md-8"><p>找萝卜2.0版本正式发布上线，同期企业用户数突破12000家。</p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2016年9月 <i>●</i></p></div>
          <div class="col-12 col-md-8"><p>聚力科技旗下专注销售客服垂直招聘平台--易聘360 1.0版本正式发布上线。</p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2016年5月 <i>●</i></p></div>
          <div class="col-12 col-md-8"><p>聚力科技完成2000万A轮融资，由稼沃资本及36氪联席CEO魏珂领投，春晓资本及恺富资本管理合伙人周轶洋跟投。 </p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2015年12月 <i>●</i></p></div>
          <div class="col-12 col-md-8"><p>找萝卜企业注册用户突破5000家。</p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2015年11月 <i>●</i></p></div>
          <div class="col-12 col-md-8"><p>找萝卜获得TechCrunch全球互联网创业大赛15强；</p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2015年8月 <i>●</i></p></div>
          <div class="col-12 col-md-8"><p>找萝卜获得DEMO CHINA全国互联网创业大赛企业级服务专场第6名； </p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2015年8月 <i class="listtw-line">●</i></p></div>
          <div class="col-12 col-md-8"><p>聚力科技旗下专注中小企业招聘管理平台--找萝卜1.0版本正式发布上线；</p></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4"><p>2015年5月 <i class="list-line">●</i></p></div>
          <div class="col-12 col-md-8"><p>聚力科技获得知名投资机构春晓资本千万级Pre-A轮融资；</p></div>
        </div>
      </div>
    </div>
    <div class="page-box pageone-company">
      <div class="container">
        <h4 class="text-center mb-5">合作企业<small class="text-muted">/Cooperative enterprise</small></h4>
        <div class="row">
          <div class="col-6 col-sm-4 col-md-3 pagecom-1"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-2"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-3"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-4"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-5"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-6"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-7"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-8"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-9"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-10"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-11"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-12"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-13"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-14"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-15"></div>
          <div class="col-6 col-sm-4 col-md-3 pagecom-16"></div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import Footer from './Footer';

  export default {
    name: 'index',
    components: {
      'page-footer': Footer,
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pageone-bg {
    width: 100%;
    /*min-height: 708px;
    display: flex;
    justify-content: center;
    align-items: center;*/
    padding: 22rem 0;
    background-image: url(../assets/pobg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .pageone-bg h1 {
    font-size: 48px;
    font-weight: 500;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    background-image: url(../assets/newstextbg.png);
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  .pageone-bg > .center-text {
    width: 560px;
    max-width: 100%;
    height: 116px;
    background-image: url(../assets/potext.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .pageone-about {
    /*height: 480px;*/
    background-color: #ffffff;
    padding: 60px 0;
    position: relative;
  }

  .pageone-about h4 {
    margin: 2em 0;
  }

  .pageone-about .left-bg {
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -1080px;
    width: 815px;
    height: 570px;
    background-image: url(../assets/ptbg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
  }

  .pageone-about p {
    line-height: 2.3em;
  }

  .pageone-event {
    /*height: 720px;*/
    background-image: url(../assets/pt3bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 60px 0;
    color: #ffffff;
  }

  .pageone-event .text-muted {
    color: #ffffff!important;
  }

  .pageone-event h4 {
    margin:1em 0 2em 0;
  }

  .pageone-event p {
    line-height: 2.3em;
  }

  .pageone-event .col-md-4 p {
    padding-left: 2em;
  }

  .pageone-event .col-md-4 p i {
    float: right;
    margin-right: 6em;
    position: relative;
  }

  .pageone-event .col-md-4 p i::after {
    content: " ";
    display: block;
    position: absolute;
    right: 5px;
    top: 1.2em;
    width: 1px;
    height: 6em;
    border-right: 1px solid #ffffff;
    /*opacity: 0.6;*/
  }

  .pageone-event .col-md-4 p i.list-line::after {
    height: 0;
  }

  .pageone-event .col-md-4 p i.listtw-line::after {
    height: 3em;
  }

  .pageone-company {
    padding: 60px 0;
    background-color: #ffffff;
  }

  .pageone-company .col-6 {
    height: 74px;
    margin-bottom: 3em;
    background-position: center;
    background-repeat: no-repeat;
  }

  .pageone-company .pagecom-1 {
    background-image: url(../assets/company_01.jpg);
  }

  .pageone-company div:hover.pagecom-1 {
    background-image: url(../assets/company_01_hover.jpg);
  }

  .pageone-company .pagecom-2 {
    background-image: url(../assets/company_02.jpg);
  }

  .pageone-company div:hover.pagecom-2 {
    background-image: url(../assets/company_02_hover.jpg);
  }

  .pageone-company .pagecom-3 {
    background-image: url(../assets/company_03.jpg);
  }

  .pageone-company div:hover.pagecom-3 {
    background-image: url(../assets/company_03_hover.jpg);
  }

  .pageone-company .pagecom-4 {
    background-image: url(../assets/company_04.jpg);
  }

  .pageone-company div:hover.pagecom-4 {
    background-image: url(../assets/company_04_hover.jpg);
  }

  .pageone-company .pagecom-5 {
    background-image: url(../assets/company_05.jpg);
  }

  .pageone-company div:hover.pagecom-5 {
    background-image: url(../assets/company_05_hover.jpg);
  }

  .pageone-company .pagecom-6 {
    background-image: url(../assets/company_06.jpg);
  }

  .pageone-company div:hover.pagecom-6 {
    background-image: url(../assets/company_06_hover.jpg);
  }

  .pageone-company .pagecom-7 {
    background-image: url(../assets/company_07.jpg);
  }

  .pageone-company div:hover.pagecom-7 {
    background-image: url(../assets/company_07_hover.jpg);
  }

  .pageone-company .pagecom-8 {
    background-image: url(../assets/company_08.jpg);
  }

  .pageone-company div:hover.pagecom-8 {
    background-image: url(../assets/company_08_hover.jpg);
  }

  .pageone-company .pagecom-9 {
    background-image: url(../assets/company_09.jpg);
  }

  .pageone-company div:hover.pagecom-9 {
    background-image: url(../assets/company_09_hover.jpg);
  }

  .pageone-company .pagecom-10 {
    background-image: url(../assets/company_10.jpg);
  }

  .pageone-company div:hover.pagecom-10 {
    background-image: url(../assets/company_10_hover.jpg);
  }

  .pageone-company .pagecom-11 {
    background-image: url(../assets/company_11.jpg);
  }

  .pageone-company div:hover.pagecom-11 {
    background-image: url(../assets/company_11_hover.jpg);
  }

  .pageone-company .pagecom-12 {
    background-image: url(../assets/company_12.jpg);
  }

  .pageone-company div:hover.pagecom-12 {
    background-image: url(../assets/company_12_hover.jpg);
  }

  .pageone-company .pagecom-13 {
    background-image: url(../assets/company_13.jpg);
  }

  .pageone-company div:hover.pagecom-13 {
    background-image: url(../assets/company_13_hover.jpg);
  }

  .pageone-company .pagecom-14 {
    background-image: url(../assets/company_14.jpg);
  }

  .pageone-company div:hover.pagecom-14 {
    background-image: url(../assets/company_14_hover.jpg);
  }

  .pageone-company .pagecom-15 {
    background-image: url(../assets/company_15.jpg);
  }

  .pageone-company div:hover.pagecom-15 {
    background-image: url(../assets/company_15_hover.jpg);
  }

  .pageone-company .pagecom-16 {
    background-image: url(../assets/company_16.jpg);
  }

  .pageone-company div:hover.pagecom-16 {
    background-image: url(../assets/company_16_hover.jpg);
  }

  @media (max-width: 991px) {
    .pageone-event .col-md-4 p {
      padding-left: initial;
    }

    .pageone-event .col-md-4 p i {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .pageone-event .col-md-4 p {
      margin-bottom: 0;
    }
  }

  @media (max-width: 575px) {
    .pageone-bg {
      padding: 12rem 0;
    }
    .pageone-bg h1 {
      font-size: 32px;
    }
  }
</style>
