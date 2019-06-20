<template>
  <div id="ty1">
    <div class="butt">
      <router-link class="couter" to="/" :class="this.$route.path === '/' ?  'active' : ''">
        <!-- Home -->
        <!-- <img src="./assets/首页.svg" alt=""> -->
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
      <router-link class="couter" to="/gzz" :class="this.$route.path === '/gzz' ?  'active' : ''">
        <i class="el-icon-s-claim"></i>
        <span>关注</span>
      </router-link>
      <!-- <router-link class="couter" to="/about" :class="this.$route.path === '/about' ?  'active' : ''">
        <i class="el-icon-s-check"></i>
        <span>简书钻</span>
      </router-link> -->
      <router-link class="couter" to="/xx" :class="this.$route.path === '/xx' ?  'active' : ''">
        <i class="el-icon-s-comment"></i>
        <span>消息</span>
      </router-link>
      <router-link class="couter" to="/geren" :class="this.$route.path === '/geren' ?  'active' : (this.$route.path === '/shezhi') ? 'active' : (this.$route.path === '/grzl') ? 'active' : (this.$route.path === '/hmd') ? 'active' : (this.$route.path === '/zssz') ? 'active' : (this.$route.path === '/zhsz') ? 'active' : ''">
        <i class="el-icon-user-solid"></i>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      // isshow: false,
      // value1: false,
      // value2: false,
      // yejian: false
    };
  },
  methods: {
    // Search_con() {
    //   this.isshow = !this.isshow;
    // },
    // yejian1() {
    //   this.yejian = !this.yejian;
    // },
    // divrefresh() {
    //   var m1 = document.getElementById("movie1");
    //   var m2 = document.getElementById("movie2");
    //   var m3 = document.getElementById("movie3");
    //   if (m1.style.display == "block") {
    //     m1.style.display = "none";
    //     m2.style.display = "block";
    //   } else if (m2.style.display == "block") {
    //     m2.style.display = "none";
    //     m3.style.display = "block";
    //   } else {
    //     m3.style.display = "none";
    //     m1.style.display = "block";
    //   }
    // },
    // focu($event) {
    //   if ($event == true) {
    //     var div = document.createElement("cover");
    //     div.id = "cover";
    //     div.setAttribute(
    //       "style",
    //       "position:fixed;top:0;left:0;outline:5000px solid rgba(0,0,0,0.5);z-index:99999;"
    //     );
    //     document.body.appendChild(div);
    //   } else if ($event == false) {
    //     var div = document.getElementById("cover");
    //     div.parentNode.removeChild(div);
    //   }
    // },
    // font($event) {
    //   if ($event == true) {
    //     document.getElementsByTagName("body")[0].className = "song";
    //   } else if ($event == false) {
    //     document.getElementsByTagName("body")[0].className = "hei";
    //   }
    // }
  },
  components: {}
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
#ty1{
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  background-color: #f8f8f8;
}
.butt {
  width: 90%;
  height: 50px;
  margin-top: 10px;
    margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.couter {
  display: flex;
  text-align: center;
  color: #919191;
  margin-top: 5px;
  line-height: 25px;
  flex-direction: column;
}
.couter.active{
  color: #ea6f5a;
}
.couter i {
  font-size: 20px;
}
.couter span {
  font-size: 12px;
}

</style>
