<template>
    <div id="banana">
       <nav1></nav1>
      <el-row class="hidden-xs-only" style="margin-top:60px;">
        <el-col :span="3"><div class="grid-content bg-purple cdgs_1"><div style="width:1px;height:1px;"></div></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light cdgs_2">
          <cdgsindex></cdgsindex>
           <el-row>
             <tab></tab>
           </el-row>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light cdgs_3">
          <cdgs></cdgs>
        </div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple cdgs_1"></div></el-col>
      </el-row>

      <!-- 手机端 -->
      <div class="move">
      <el-row class="hidden-sm-and-up">
        <div class="cdgs-bj"></div>
        <!-- <img src="../../public/images/cdgs-yd1.jpg" alt=""> -->
        <el-col :span="6" :offset="1">
          <div class="grid-content bg-purplen yd-1">
            <img src="../../../public/images/cdgs.jpg" alt>
          </div>
        </el-col>
        <el-col :span="16" :offset="1">
          <div class="grid-content bg-purple-light yd-2">
            <h3>茶点故事</h3>
            <el-row class="move-yd">
              <el-col :span="6">
                <div class="grid-content bg-purple yd1">
                  <p>
                    <span>66</span> 关注 简书钻
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple yd2">
                  <p>
                    <span>4.8万</span> 粉丝
                  </p>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="grid-content bg-purple yd3">
                  <p>
                    <span>216527.469</span>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-row class="move-yd1">
          <el-col :span="7" :offset="1">
            <div class="grid-content bg-purple yd4"></div>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple yd4-1">
                  <img src="../../../public/images/ndgs.png" alt>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content bg-purple yd4-2">年度故事VIP</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="7" :offset="1">
            <div class="grid-content bg-purple yd5"></div>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple yd4-1">
                  <img src="../../../public/images/yg.png" alt>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content bg-purple yd4-2">简书员工</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple yd6"></div>
          </el-col>
        </el-row>
        <div class="move-yd2" v-if="!show">
          <p>
            简书上的好故事，我！承！包！了！本账号是帮助简书故事获得更多人喜欢的账号，如果您对简书故事曝光策略有
            <i
              class="el-icon-arrow-down"
              @click="show=!show"
            ></i>
          </p>
        </div>
        <div v-if="show">
          <div class="intro">
            简书上的好故事，我！承！包！了！
            <br>
            <br>本账号是帮助简书故事获得更多人喜欢的账号，如果您对简书故事曝光策略有任何好的建议，欢迎与我们简信取得联系~
            <br>
            <br>欢迎来勾搭茶点君>>
            <a href="https://www.jianshu.com/p/a126bd0daf47">https://www.jianshu.com/p/a126bd0daf47</a>欢迎来勾搭茶点君>>
            <div class="move-sq">
              收起
              <i class="el-icon-arrow-up" @click="show=!show"></i>
            </div>
          </div>
        </div>
        <div class="move-yd3">
          <p>写了40.1万字，获得了1.1万个喜欢</p>
        </div>
        <div class="move-button">
          <el-button type="success" style="background:#42c02e" @click="showal=!showal" v-if="!showal">+关注</el-button>
          <el-button v-if="showal" @click="showal=!showal">√ 已关注</el-button>
          <el-button style="margin-left:16px;">赞赏作者</el-button>
        </div>
        <hr>
        <xstab></xstab>
      </el-row>
    </div>
    </div>
</template>

<script>
import cdgsindex from './cdgs-index'
import tab from './cdgs-tab'
import cdgs from './cdgs-right'
import xstab from "./cdgs-xs-tab";
import b from '../../views/nav/nav';
import "element-ui/lib/theme-chalk/display.css";
export default {
  data () {
    return {
      msg: '我是香蕉',
      show: false,
      showal:""
    }
  },
  components: {
    cdgsindex:cdgsindex,
    tab: tab,
    cdgs: cdgs,
    nav1:b,
    xstab: xstab
  }
}
</script>
<style >
*{
   margin: 0;
   padding: 0;
}
#banana{
  margin: 0 auto 0;
}
.move {
  width: 100%;
}
.cdgs-bj {
  width: 100%;
  height: 150px;
  margin-top: 60px;
  background: url(../../../public/images/cdgs-yd1.jpg) no-repeat;
}

.yd-1 {
  width: 86px;
  height: 86px;
  margin-top: -20px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #ffffff;
}
.yd-1 img {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 1px solid #dddddd;
}
.yd-2 h3 {
  color: #484848;
  margin-top: 10px;
  line-height: 1.3;
}
.yd1 p {
  width: 100%;
  font-size: 14px;
  color: #969696;
}
.yd1 span {
  color: #333333;
  font-size: 16px;
}
.yd1 p {
  width: 100%;
  font-size: 14px;
  color: #969696;
}
.yd1 span {
  color: #333333;
  font-size: 16px;
}
.yd2 p {
  width: 100%;
  font-size: 14px;
  color: #969696;
}
.yd2 span {
  color: #333333;
  font-size: 16px;
}
.yd3 p {
  width: 100%;
  font-size: 14px;
  color: #969696;
}
.yd3 span {
  color: #333333;
  font-size: 16px;
}
.move-yd {
  margin-top: 10px;
}
.yd4 {
  margin-top: 18px;
}
.yd4-1 img {
  width: 75%;
}
.yd4-2 {
  font-size: 14px;
}
.yd5 {
  margin-top: 18px;
  margin-left: 20px;
}
.move-yd2 {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #484848;
}
.move-yd3 {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
}
.move-button {
  width: 90%;
  margin: 0 auto;
}
.move-button .el-button {
  width: 47%;
  margin-bottom: 20px;
}
hr {
  width: 100%;
  border-width: 0;
  height: 10px;
  background-color: #f5f5f5;
}
.intro {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #484848;
}
.intro a {
  text-decoration: none;
  color: #3194d0;
}

</style>
