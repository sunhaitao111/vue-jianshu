<template>
  <div id="mysetting">
    <!-- <p>{{sets_con}}</p> -->
    <div id="zxj-ba" style="padding-bottom:30px;">
      <el-select v-model="value" style="width:100px;">
        <el-option v-for="(item,index) in options" :key="index" :value="item.value">
          <ul>
            <li @click="shaixuan(index)" style="line-height:35px;">{{item.value}}</li>
          </ul>
        </el-option>
      </el-select>
      <div id="zxj-bc" style="float:right">
        <a style="color:#333;position:relative;top:5px;">
          <i class="layui-icon layui-icon-friends"></i> 添加关注
        </a>
      </div>
    </div>

    <el-row class="hidden-xs-only">
      <el-col :span="24" id="setingTitle">
        <ul>
          <li
            v-for="(set,index) in sets_con"
            :key="index"
            :class="{'actives' :index === isActives}"
            @click="changeTabs(index)"
          >
            <router-link :to="{path:set.path}">
              <img :src="set.Src" alt>
              {{set.title}}
            </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>


    <el-row class="hidden-sm-and-up">
      <el-col :span="24" id="setingTitle">
        <ul>
          <li
            v-for="(set,index) in sets_con"
            :key="index"
            :class="{'actives' :index === isActives}"
            @click="changeTabs(index)"
          >
            <router-link :to="{path:set.path}">
              <img :src="set.Src" alt>
              <!-- {{set.title}} -->
            </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: "mysetting",
  data() {
    return {
      isActives: 0,
      ishow: true,
      options: [
        {
          value: "全部关注"
        },
        {
          value: "只看作者"
        },
        {
          value: "只看专题"
        },
        {
          value: "只看文集"
        },
        {
          value: "只看推送"
        }
      ],
      value: "全部关注",
      sets: [
        {
          path: "gzz",
          Src: require("../../../public/images/zxj01.png"),
          title: "朋友圈"
        },
        {
          path: "guanzhu3",
          Src: require("../../../public/images/zxj02.webp"),
          title: "摄影"
        },
        {
          path: "guanzhu4",
          Src: require("../../../public/images/zxj03.webp"),
          title: "旅行·在路上"
        },
        {
          path: "guanzhu5",
          Src: require("../../../public/images/zxj04.webp"),
          title: "读书"
        },
        {
          path: "guanzhu6",
          Src: require("../../../public/images/zxj05.webp"),
          title: "今晚打老虎"
        }
      ],
      sets_zuozhe: [
        {
          path: "gzz",
          Src: require("../../../public/images/zxj01.png"),
          title: "朋友圈"
        },
        {
          path: "guanzhu6",
          Src: require("../../../public/images/zxj05.webp"),
          title: "今晚打老虎"
        }
      ],
      sets_zhuanti: [
        {
          path: "gzz",
          Src: require("../../../public/images/zxj01.png"),
          title: "朋友圈"
        },
        {
          path: "guanzhu3",
          Src: require("../../../public/images/zxj02.webp"),
          title: "摄影"
        },
        {
          path: "guanzhu4",
          Src: require("../../../public/images/zxj03.webp"),
          title: "旅行·在路上"
        },
        {
          path: "guanzhu5",
          Src: require("../../../public/images/zxj04.webp"),
          title: "读书"
        }
      ],
      sets_tuisong: [
        {
          path: "gzz",
          Src: require("../../../public/images/zxj01.png"),
          title: "朋友圈"
        }
      ],
      sets_con: [
        {
          path: "gzz",
          Src: require("../../../public/images/zxj01.png"),
          title: "朋友圈"
        },
        {
          path: "guanzhu3",
          Src: require("../../../public/images/zxj02.webp"),
          title: "摄影"
        },
        {
          path: "guanzhu4",
          Src: require("../../../public/images/zxj03.webp"),
          title: "旅行·在路上"
        },
        {
          path: "guanzhu5",
          Src: require("../../../public/images/zxj04.webp"),
          title: "读书"
        },
        {
          path: "guanzhu6",
          Src: require("../../../public/images/zxj05.webp"),
          title: "今晚打老虎"
        }
      ]
    };
  },
  methods: {
    changeTabs(index) {
      this.isActives = index;
      // console.log(index)
    },
    shaixuan(index) {
      if (index === 0) {
        this.sets_con = this.sets;
      } else if (index === 1) {
        this.sets_con = this.sets_zuozhe;
      } else if (index === 2) {
        this.sets_con = this.sets_zhuanti;
      } else if (index === 3) {
        this.sets_con = this.sets_tuisong;
      } else if (index === 4) {
        this.sets_con = this.sets_tuisong;
      }
    }
  },
  components: {}
};
</script>

<style>
.el-select .el-input__inner {
  border: none !important;
}
#zxj-ba a i {
  padding: 0 10px;
  color: #a0a0a0;
}
#mysetting {
  width: 100%;
  margin: 0 auto;
}
#setingTitle li > a {
  display: block;
  font-size: 13px;
  color: #333333;
  padding: 12px 0 12px 15px;
  border-radius: 5px;
}
#setingTitle li > a:hover {
  background-color: #f0f0f0;
}
#setingTitle a > p {
  text-align: center;
  float: left;
  position: relative;
  margin-right: 15px;
  transform: translateY(-10%);
  width: 28px;
  height: 28px;
  border-radius: 5px;
  background-color: #a0a0a0;
}
#setingTitle i {
  line-height: 28px;
  font-size: 16px;
  color: #fff;
}
#setingTitle img {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 5px;
}
.actives {
  background-color: #f0f0f0;
  color: #ff4f4c;
}
@media screen and (max-width:770px) {
  #setingTitle li{
    padding-right: 16px;
  }
  #setingTitle li > a{
    display: block;
    font-size: 13px;
    color: #333333;
    padding: 12px 0px 16px 15px;
    margin-right: 10px;
    border-radius: 5px;
    width: 14%;
    float: left;
    text-align: center;
  }
  #setingTitle li > a:hover {
    background-color: #ffffff;
  }
  #setingTitle li >a>p{
    /* display: none */
  }
  #setingTitle li a img:hover{
    box-shadow:3px 3px 3px #a0a0a0
  }
  
  #setingTitle li:nth-of-type(1) a>img:hover{
    border-radius: 50%
  } 

  
}
</style>
