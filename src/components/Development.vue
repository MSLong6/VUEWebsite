<template>
  <div class="development">
    <div class="page-box page-join">
      <div class="container">
        <h1 class="text-right">
          <i>/</i>JOIN US
        </h1>
      </div>
    </div>
    <div class="page-box page-jointext">
      <div class="container">
        <div class="join-box">
          <h4>行业分析师</h4>
          <div class="row">
            <div class="col-12 col-md-2">职位描述:</div>
            <div class="col-12 col-md-10">1.跟踪、分析行业热点及趋势，提供相应研究报告；<br>2.根据公司发展战略要求，协助寻找潜在标的项目，并进行相关资料收集，及项目可行性分析；<br>3.参与数据咨询团队的项目报告撰写，以及成果推广。</div>
          </div>
          <div class="row">
            <div class="col-12 col-md-2">职位要求：</div>
            <div class="col-12 col-md-10">1.熟练的英文听、说、读、写能力； <br>2.相关专业（传播学、市场营销学、经济学、统计学、心理学等）本科及以上学历； <br>3.责任心强、积极上进、热爱挑战，且具备较强的团队协作意识； <br>4.有一定的数据分析能力，能够熟练使用Office等办公软件</div>
          </div>
        </div>
        <div class="join-box">
          <h4>资深数据分析师</h4>
          <div class="row">
            <div class="col-12 col-md-2">职位描述:</div>
            <div class="col-12 col-md-10">1.跟踪、研究大数据产业热点和趋势，能够独立完成，或带领项目组成员，共同完成行业专题研究报告；<br>2.参与数据应用场景、业务模型，及运营方法论等多项工作的研究和制定；<br>3.参与目标行业细分市场研究，以及数据应用解决方案的包装和推广；<br>4.充分调动内、外部资源，努力促进团队合作，协助达成行业拓展目标。</div>
          </div>
          <div class="row">
            <div class="col-12 col-md-2">职位要求：</div>
            <div class="col-12 col-md-10">1.本科以上学历，五年以上行业咨询经验；<br>2.对大数据应用和生态，高度敏感，具备一定的数据分析能力；<br>3.高度敬业，责任心强、积极上进，具备较强的团队协作意识，以及资源协调能力； <br>4.思维敏捷、善于沟通，有较强的学习和执行能力； <br>5.有知名咨询公司从业经验者，优先考虑。 </div>
          </div>
        </div>
        <div class="join-box">
          <h4>算法工程师</h4>
          <div class="row">
            <div class="col-12 col-md-2">职位描述:</div>
            <div class="col-12 col-md-10">1.深入研究机器学习算法；<br>2.深入研究TalkingData数据和数据问题；<br>3.深入研究关键的基础数学模型。</div>
          </div>
          <div class="row">
            <div class="col-12 col-md-2">职位要求：</div>
            <div class="col-12 col-md-10">1.数学，统计学和计算机相关专业背景；<br>2.有机器学习算法研究，数学建模等方面工作或者实习经验；<br>3.具有一定开发能力，至少熟练掌握C/C++, Java/Scala, 或Python其中一门语言；<br>4.有机器学习算法和数学类相关学术论文发表者优先；<br>5.有Spark, Hadoop, MPI等大数据平台经验优先；<br>6.熟悉R, Matlab, SPSS, SAS等工具者优先。</div>
          </div>
        </div>
        <div class="join-box">
          <h4>咨询行业专家</h4>
          <div class="row">
            <div class="col-12 col-md-2">职位描述:</div>
            <div class="col-12 col-md-10">1.带领或参与团队完成数据咨询的解决方案框架，撰写方案报告，及方案的展示与汇报；<br>2.负责数据咨询知识模块的提炼；<br>3.负责数据咨询项目的售前技术支持工作（设定范围、提出解决方案、客户交流、项目投标书编写及讲标）；<br>4.跟踪和分析行业、客户市场动态数据，负责配合公司制定咨询业务市场开拓计划以及研究成果的市场推广。<br></div>
          </div>
          <div class="row">
            <div class="col-12 col-md-2">职位要求：</div>
            <div class="col-12 col-md-10">1.本科以上学历，五年以上的行业工作或行业客户咨询工作经验，对行业发展趋势、痛点和解决方案有深入了解；<br>2.对人力资源、大数据、移动互联网等领域的商业模式、技术现状和趋势有一定了解；<br>3.有较强的沟通能力，表达能力强；<br>4.有大数据或移动互联网相关工作背景优先；<br>5.能适应频繁出差，能承受较大压力。<br>6.有较强的团队合作能力和较强的跨界学习能力；</div>
          </div>
        </div>
        <div class="join-box">
          <h4><img src="../assets/joinus-email.png" class="mr-3" alt="Email-ico">请发送简历至：<a href="mailto:hr@juli-tech.com">hr@juli-tech.com</a></h4>
          <div class="row">
            <div class="col-12">邮件标题格式为：应聘 + 职位名称</div>
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
    name: 'development',
    components: {
      'page-footer': Footer,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-join {
    color: #ffffff;
    padding: 12rem 0;
    background-image: url(../assets/joinusbg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .page-join h1>i {
    color: #2571af;
    margin-right: .5rem;
  }
  .page-jointext {
    padding: 4rem 0;
  }
  .page-jointext .join-box {
    margin-bottom: 3rem;
  }
  .page-jointext .join-box>h4 {
    color: #2571af;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 1rem;
  }
  .page-jointext .join-box .row {
    margin-bottom: 1rem;
  }
  .page-jointext .join-box .row .col-12 {
    line-height: 2rem;
  }
</style>
