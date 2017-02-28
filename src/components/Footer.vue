<template>
  <div class="footer">
    <div class="footer-contact">
      <div class="container">
        <div class="text-center mb-5"><i class="h4">CONTACT US</i></div>
        <div class="row">
          <div class="col-12 col-md-4 text-center">
            <p><img src="../assets/ico-email.png" alt=""></p>
            <p>媒体 <a href="mailto:pr@juli-tech.com">pr@juli-tech.com</a></p>
            <p>客服 <a href="mailto:cs@juli-tech.com">cs@juli-tech.com</a></p>
          </div>
          <div class="col-12 col-md-4 text-center">
            <p><img src="../assets/ico-phone.png" alt=""></p>
            <p>400-6646-618</p>
            <p>（ 9:00 - 18:00）</p>
          </div>
          <div class="col-12 col-md-4 text-center">
            <p><img src="../assets/ico-adr.png" alt=""></p>
            <p>北京市朝阳区酒仙桥路14号</p>
            <p>兆维工业园区A2栋1单元4层</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-icp">
      <div class="container">{{icptext}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      icptext: '© 2017 京ICP备15040914号-3',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-contact {
    background-color: #313131;
    padding: 60px 0;
  }

  .footer-contact .h4 {
    color: #ffffff;
    font-style: initial;
    border-bottom: 1px solid #7b7b7b;
    padding-bottom: 10px;
  }

  .footer-contact p {
    margin-bottom: .6rem;
  }

  .footer-contact p a {
    color: #626262;
  }

  .footer-contact p img {
    margin-bottom: .5rem;
  }

  .footer-icp {
    background-color: #292929;
    padding: 10px 0;
  }
</style>
