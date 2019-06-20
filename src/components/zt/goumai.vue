<template>
  <div id="zt">
    <nav11></nav11>
    <div class="container hidden-xs-only">
      <img class="recommend-banner" src="../../assets/z8.png" alt="Paid content">
      <li class="trigger-menu">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="first" style="height:100px; margin-top:20px;">
            <span class="span" slot="label">
              <i class="el-icon-medal"></i>文章
            </span>
            别看了！我是文章，我没出轨！
          </el-tab-pane>
          <el-tab-pane style="height:100px; margin-top:20px;">
            <span class="span" slot="label">
              <i class="el-icon-pear"></i>连载
            </span>
            你好！我是连载。。。 ┗|｀O′|┛ 嗷~~
          </el-tab-pane>
        </el-tabs>
      </li>
    </div>
    <!-- 手机端 -->
    <div class="shouji hidden-sm-and-up">
      <img class="shoujituone" src="../../assets/z1.jpg">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="文章" name="first">别看了！我是文章，我没出轨！</el-tab-pane>
        <el-tab-pane label="连载" name="second">你好！我是连载。。。 ┗|｀O′|┛ 嗷~~</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import nav11 from "../../views/nav/nav";
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    nav11
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
#zt {
  width: 100%;
  padding-top: 100px;
}
.container {
  width: 660px;
  margin: 0 auto;
}
/* 图片div样式 */
.recommend-banner {
  height: 105.6px;
}
/* 切换div样式 */
.trigger-menu {
  height: 46.8px;
  margin-top: 30px;
  font-size: 30px;
}
.el-tabs__item {
  font-weight: bold;
}
.span {
  font-weight: bold;
}
.shoujituone {
  width: 100%;
  padding: 30px 0px;
}
@media only screen and (max-width: 750px) {
  #zt {
    margin-top: -55px;
  }
  .shouji {
    width: 80%;
    margin: 0 auto;
  }
}
</style>