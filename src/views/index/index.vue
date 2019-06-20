<template>
  <div id="vvv">
    <nav1></nav1>
    <el-row class="cont">
      <el-col :md="4" class="hidden-xs-only">
        <div class="grid-content bg-purple cont-right1"></div>
      </el-col>
      <el-col :md="10" class="hidden-xs-only">
        <div class="grid-content bg-purple-light cont-right">
          <About></About>
        </div>
      </el-col>
      <el-row class="rmzt hidden-sm-and-up">
      <el-col :xs="24">
        <div class="rmzt-title">
          <p>热门专题 <span @click="divrefresh1()"> <i class="el-icon-refresh-left"></i>换一批</span></p>
        </div>
        <ul class="rmzt-con" id="movie4" style="display:block">
          <li><a href="/cdgs">手绘</a></li>
          <li><a href="/cdgs">摄影</a></li>
          <li><a href="/cdgs">旅行·在路上</a></li>
          <li><a href="/cdgs">互联网</a></li>
          <li><a href="/cdgs">茶点故事</a></li>
          <li><a href="/cdgs">简书故事</a></li>
          <li><a href="/cdgs">电影</a></li>
        </ul>
        <ul class="rmzt-con" id="movie5" style="display:none">
          <li><a href="/cdgs">手绘1</a></li>
          <li><a href="/cdgs">摄影1</a></li>
          <li><a href="/cdgs">旅行·在路上1</a></li>
          <li><a href="/cdgs">互联网1</a></li>
          <li><a href="/cdgs">茶点故事1</a></li>
          <li><a href="/cdgs">简书故事1</a></li>
          <li><a href="/cdgs">电影1</a></li>
        </ul>
        <ul class="rmzt-con" id="movie6" style="display:none">
          <li><a href="/cdgs">手绘2</a></li>
          <li><a href="/cdgs">摄影2</a></li>
          <li><a href="/cdgs">旅行·在路上2</a></li>
          <li><a href="/cdgs">互联网2</a></li>
          <li><a href="/cdgs">茶点故事2</a></li>
          <li><a href="/cdgs">简书故事2</a></li>
          <li><a href="/cdgs">电影2</a></li>
        </ul>
      </el-col>
    </el-row>
      <el-col :xs="21" :push="1" class="hidden-sm-and-up">
        <div class="grid-content bg-purple-light cont-right">
          <About></About>
        </div>
      </el-col>
      <el-col :md="4" :offset="1" class="hidden-xs-only">
        <div class="grid-content bg-purple-light" style="margin-top:15px;">
          <right></right>
        </div>
      </el-col>
    </el-row>
    <el-row class="hidden-xs-only">
      <el-col :md="4">
        <div class="grid-content bg-purple cont-right1"></div>
      </el-col>
      <el-col :md="9">
        <div class="grid-content bg-purple-light cont-right">
          <footers></footers>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import b from "../nav/nav";
import contleft from "../../components/cont-left/About";
import contright from "../../components/cont-right/right";
import footers from "../../components/footers/footers";
import "element-ui/lib/theme-chalk/display.css";
// import user from './components/user/user'
export default {
  name: "vvv",
  data() {
    return {};
  },
  components: {
    nav1: b,
    About: contleft,
    right: contright,
    footers: footers
  },
  methods:{
    divrefresh1(){
            var m1=document.getElementById('movie4');
            var m2=document.getElementById('movie5');
            var m3=document.getElementById('movie6');
            if(m1.style.display=='block'){
                m1.style.display='none';
                m2.style.display='block';
            }else if(m2.style.display=='block'){
                m2.style.display='none';
                m3.style.display='block';
            }else{
                m3.style.display='none';
                m1.style.display='block';
            }
        }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cont {
  margin-top: 80px;
}
@media (max-width: 750px) {
  .cont {
    margin-top: 0px;
  }
  .rmzt{
    width: 100%;
    background: #fff;
    border-top: 5px solid #eeeeee;
    border-bottom: 10px solid #eeeeee;
    margin:55px 0 0 0;
    padding:15px;
  }
  .rmzt-title{
    font-size: 14px;
    font-weight: 700;
    color: #545454;
    overflow: hidden;
  }
  .rmzt-title>p>span{
    float:right;
    color: #888;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
  }
  .rmzt-con{
    width: 100%;
    margin-top: 20px;
  }
  .rmzt-con li{
    float: left;
    margin: 0 10px 10px 0;
  }
  .rmzt-con li>a{
    display: inline-block;
    /* width:48px; */
    padding: 0 10px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color: #ea6f5a;
    border: 1px solid #ea6f5a;
    border-radius: 4px;
  }
  .yin{
    width: 100%;height: 5px;
    background: #eeeeee;
  }
}
</style>
