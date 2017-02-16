<template>
  <div class="attitude">
    <div class="page-box pageattitude">
      <div class="container text-center">
        <h1>聚力，即最大程度发挥集体价值</h1>
        <p>尊重个体差异，积极调动才智优势；同时重视组织效益，集思广益，内部人才价值服务天下人才。<br>聚力科技坚信数据推动进程。致力于人才大数据的聚合整理，为人力资源领域提供大数据分析的智能工具，<br>及高效、智能、易用的服务。</p>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import Footer from './Footer';

  export default {
    name: 'attitude',
    components: {
      'page-footer': Footer,
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pageattitude {
    color: #ffffff;
    padding: 20rem 0;
    background-image: url(../assets/attituebg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .pageattitude h1 {
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 2rem;
  }
  .pageattitude p {
    line-height: 2rem;
  }
  @media (max-width: 575px) {
    .pageattitude {
      padding: 8rem 0;
    }
    .pageattitude h1 {
      font-size: 32px;
    }
  }
</style>
