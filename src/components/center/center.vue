<template>
<div id="mmm">
  <nav1></nav1>
  <div id="a">
      <div id="nav11">
          <div id="list">
          <div id="router"><router-link to="/xx"><i class="el-icon-chat-square"></i>评论</router-link> </div>
          <div id="router"><router-link to="/about"><i class="el-icon-folder"></i>简信</router-link> </div>
          <div id="router"><router-link to="/info"><i class="el-icon-download"></i>投稿请求</router-link></div>
          <div id="router"><router-link to="/xh"><i class="el-icon-star-off"></i>喜欢和赞</router-link></div>
          <div id="router"><router-link to="/Guanzhu"><i class="el-icon-user"></i>关注</router-link></div>
          <div id="router"><router-link to="/dianzan"><i class="el-icon-coin"></i>赞赏和付费</router-link></div>
          <div id="router"><router-link to="/qita"><i class="el-icon-more"></i>其它提醒</router-link></div> 
      </div> 
      <div class="col-xs-16 col-xs-offset-8 main">
          <router-view/>
      </div>
      </div>
  </div>
</div> 
</template>

<script>
import nav1 from '../../views/nav/nav'
export default {
    data(){
      return{
      };   
    },
    components:{
      nav1
    }
  
}
</script>

<style>
#mmm{
  width: 100%;
}
#a {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}

#nav11{
  padding: 30px 0;
  margin-left: -15px;
  margin-right: -15px;
}
#list{
    position: fixed;
    top: 0;
    bottom: 0;
    margin: 86px 0 0;
    padding: 0 0 30px;
    width: 280px;
    overflow: auto;
}
#router{
  line-height: 45px;
  margin: 0;
}
#router a{
    height: auto;
    padding: 10px 25px;
    line-height: 30px;
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 15px;
}
#router a:hover{
    background-color: #f0f0f0;
    border-radius: 4px;
}
#router a i{
    margin-right: 20px;
    font-size: 24px;
    color: #ea6f5a;
    vertical-align: middle;
    font-weight: bold;
}
.main {
    padding-left: 0;
    position: relative;
    top: 50px;
}
.col-xs-offset-8 {
    margin-left: 33.33333%;
}
.col-xs-16 {
    width: 66.66667%;
    float: left;
    position: relative;

}
@media (max-width: 768px){
  #a{
    width: auto;
    height: auto;
  }
  #router a i{
    margin-right: 8px;
  }
  #router a{
    padding: 20px 10px;
  }
  #list{
    width: 127px;
  }
  .menu{
    margin-left: 55px;
  }
}
</style>
