<template>
  <div class="note">
    <nav1></nav1>
    <div id="note-fixed-ad-container">
      <div id="fixed-ad-container">
        <div style="display: block;">
          <a id="web-note-ad-fixed" v-if="cha" @click="cha=!cha">
            <img src="../../../public/images/ty3.jpg" alt>
          </a>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="article">
        <h1 class="title">段子一则</h1>
        <!-- 作者区域 -->
        <div class="author">
          <a href class="avatar">
            <img src="../../../public/images/ty2.jpg" alt>
          </a>
          <div class="info">
            <span class="name">
              <a href>温暖的文字</a>
              <img src="../../../public/images/ty1.png" alt style="height:20px;width:20px;">
            </span>
            <a class="follow" v-if="show" @click="show=!show">
              <i class="el-icon-plus"></i>
              <span>关注</span>
            </a>
            <a
              class="follow"
              style="background:none; color:#8c8c8c;border:1px solid #8c8c8c;"
              v-if="!show"
              @click="show=!show"
            >
              <i class="el-icon-check"></i>
              <span>已关注</span>
            </a>
            <div class="meta">
              <span style="    color: #ea6f5a!important;">
                <i class="el-icon-mouse"></i> 5.4
              </span>
              <span>2019.03.03 01:19*</span>
              <span>字数 1380</span>
              <span>阅读 2257</span>
              <span>评论 17</span>
              <span>喜欢 27</span>
            </div>
          </div>
        </div>
        <!-- 文章内容 -->
        <div class="show-content">
          <!-- <p>于我来说，爱情啊，碰不得。</p> -->
          <p>1.妻子告诉老公：“你不能每天都喝酒了，咱家的经济状况不允许了。”</p>
          <p>老公：“那看看你自己的开销吧。你做一次美容就要花65元、花150元去烫头、30元修指甲、300元买衣服、50元买维生素、600元去健身，我们家该省钱的是你。”</p>
          <p>妻子：“我这样做还不是为了你。”</p>
          <p>老公：“为了我？”:哈哈你看她长的好看吧。</p>
          <p>妻子：“是啊，让你觉得我更漂亮更迷人。”:“那你想要不？”。</p>
          <p>老公：“如果是这样的话，你下次完全不必那么麻烦了，只要一瓶酒就解决问题了，每次喝醉了，我都觉得你很迷人。”</p>
        </div>
      </div>
      <div class="support-author">
        <img src="../../../public/images/dongtu.webp" alt>
        <p>小礼物走一走，来简书关注我</p>
        <!-- <div class="btn-pay">赞赏支持</div> -->
        <div class="site-demo-button" id="layerDemo" style="margin-bottom: 0;">
          <button data-method="notice" class="layui-btn zszc">赞赏支持</button>
        </div>
        <div id="zanshang">
          <div class="zs-title">
            <img src="../../../public/images/nav-user.jpg" alt>
            <h2>给作者送糖</h2>
            <i class="el-icon-sugar"></i>
          </div>
          <div class="money">
            <ul>
              <li
                v-for="(dashang,index) in zanshang"
                :key="index"
                @click="qianshu(index)"
                :class="{ active:index==isActive }"
              >
                <i class="el-icon-sugar"></i>
                <p>{{dashang.money}}</p>颗
              </li>
              <li @click="cang=!cang" v-if="!cang">自定义</li>
              <li class="active" v-if="cang" >
                <i class="el-icon-sugar" @click="cang=!cang"></i>
                <input type="text" class="zdy" v-model="value2"> 颗
              </li>
            </ul>
            <input type="text" placeholder="给ta留言...">
          </div>
          <div class="zs-money" v-if="!cang">
            ￥
            <span>{{zanshang1.money}}</span>
            <span class="zs-zf" v-if="zf">
              ，用微信支付
              <a @click="zf=!zf">更换</a>
            </span>
          </div>
          <div class="zs-money" v-if="cang">
            ￥
            <span>{{value2}}</span>
            <span class="zs-zf" v-if="zf">
              ，用微信支付
              <a @click="zf=!zf">更换</a>
            </span>
          </div>
          <div class="pay" v-if="!zf">
            <ul>
              <li class="pay-img" style="margin-left:65px;">
                <img width="112px" src="../../../public/images/wxpay.png" alt>
              </li>
              <li class="pay-img" style="padding: 13px 40px; margin: 0 55px;">
                <img width="85px" src="../../../public/images/zfbpay.png" alt>
              </li>
              <li>
                <el-tooltip placement="top">
                  <div slot="content" style="text-align:center;">
                    网站该功能暂时下线，如需使用，
                    <br>请到简书App使用
                  </div>
                  <el-button style="padding:21px 50px">简书余额</el-button>
                </el-tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="show-foot">
        <a href class="notbook">
          <i class="el-icon-s-order"></i>
          <span>日记本</span>
        </a>
        <div class="copyright">© 著作权归作者所有</div>
        <div class="modal-wrap">
          <a href>举报文章</a>
        </div>
      </div>

      <div class="follow-detail">
        <div class="info">
          <a href class="avatar">
            <img src="../../../public/images/ty2.jpg" alt>
          </a>
          <a
            class="btn btn-success follow"
            v-if="show"
            @click="show=!show"
            style="padding-top: 10px;"
          >
            <i class="el-icon-plus" style="margin-left:21px;"></i>
            <span style="margin-left:5px;">关注</span>
          </a>
          <a
            class="btn btn-success follow"
            style="background:none; color:#8c8c8c;border:1px solid #8c8c8c;padding-top: 10px;"
            v-if="!show"
            @click="show=!show"
          >
            <i class="el-icon-check" style="margin-left:21px;"></i>
            <span>已关注</span>
          </a>
          <a href class="title">大大小</a>
          <i
            class="el-icon-female"
            style="    color: #ea6f5a; font-size: 15px;vertical-align: middle;"
          ></i>
          <p style="position: absolute;left: 29.4%;">写了 152988 字，被 80 人关注，获得了 634 个喜欢</p>
        </div>
        <div class="signature">木小呦，90后老阿姨，伪文艺青年。过分明四季，写人情冷暖，看花开花落。个人公众号：木小呦（muxiaoyou0924），欢迎来坐。</div>
      </div>
      <div class="meta-bottom">
        <div class="like" v-if="xh" @click="xh=!xh">
          <div class="btn like-group">
            <div class="btn-like">
              <Icon type="md-heart-outline"/>
              <a>喜欢</a>
            </div>
            <div class="modal-wraps">
              <a class="ty">87</a>
            </div>
          </div>
        </div>
        <div class="like" v-if="!xh" @click="xh=!xh">
          <div class="btn like-group" style="background-color: #EA6F5A; ">
            <div class="btn-like" style="color:#fff;">
              <Icon type="md-heart" style="color:#fff;"/>
              <a style="color:#fff;">喜欢</a>
            </div>
            <div class="modal-wraps" style="border-left: 1px solid #fff;">
              <a class="ty" style="color:#fff;">88</a>
            </div>
          </div>
        </div>
        <div class="share-group">
          <a href class="share-circle">
            <img src="../../../public/images/weixin.png" alt class="ty-1">
            <div class="show">
              <p>分享到微信</p>
              <div class="sanjiao el-icon-caret-bottom"></div>
            </div>
          </a>

          <a href class="share-circle">
            <img src="../../../public/images/weibo.png" alt class="ty-1">
            <div class="show">
              <p>分享到微博</p>
              <div class="sanjiao el-icon-caret-bottom"></div>
            </div>
          </a>
          <a href class="share-circle">
            <i class="el-icon-picture-outline"></i>
            <div class="show-2">
              <img src="../../../public/images/ty7.png" alt>
              <p style="color:#000;">下载app下载长微博图片</p>
            </div>
          </a>
          <a href class="more-share">更多分享</a>
        </div>
      </div>
      <commentlist/>
    </div>

    <div class="note-bottom">
      <div>
        <div class="main">
          <div class="title" style="font-weight:100;">被以下专题收入，发现更多相似内容</div>
          <div class="include-collection">
            <a href class="item">
              <img src="../../../public/images/ty2.jpg" alt>
              <div class="name">大家粉红色</div>
            </a>
            <a href class="item">
              <img src="../../../public/images/ty2.jpg" alt>
              <div class="name">大家粉红色</div>
            </a>
            <a href class="item">
              <img src="../../../public/images/ty2.jpg" alt>
              <div class="name">大家粉红色</div>
            </a>
            <a href class="item hidden-xs-only">
              <img src="../../../public/images/ty2.jpg" alt>
              <div class="name">大家粉红色</div>
            </a>
            <a href class="item hidden-xs-only">
              <img src="../../../public/images/ty2.jpg" alt>
              <div class="name">大家粉红色</div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="recommend-note">
          <div class="main" id="jun77" style="margin-top:90px;">
            <div class="title" style="font-weight:100;">
              推荐
              <a href="more">
                更多精彩内容
                <i class="el-icon-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="list">
            <div class="note-2">
              <a href class="youdao-recommended-ad clearfix">
                <span class="img"></span>
                <div class="info">
                  <span class="title hidden-xs-only">从Python开始学习，构建你的神经网络</span>
                  <span class="intro">小班辅导，一站式掌握AI红利！立抢限量席位！</span>
                  <span class="ad-badge">广告</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="seo-recommended-notes">
        <div class="note have-img">
          <a href class="cover">
            <img src="../../../public/images/ty2.jpg" alt>
          </a>
          <a href class="title">妈妈，我的觉察力多少分</a>
          <p class="description">
            婆婆（质问的口气）：NED，你们吃这么早，要到哪里去呃？！
            儿子：不到哪里去啊…… 婆婆（忿忿滴）：你们不是10点才起床的嘛！今天起
            的这么早！吃的这么早！ 我感觉婆婆语调里有鄙夷的神气……还有被“时时监管
            ”的感觉。按照自己以往的脾性，自己早已经发作了：我们吃不吃，吃多早，管...
          </p>
          <a href class="author">
            <div class="avatar">
              <img src="../../../public/images/ty2.jpg" alt>
            </div>
            <span class="name">Rose_Heart</span>
          </a>
        </div>
      </div>
      <div class="seo-recommended-notes">
        <div class="note have-img">
          <a href class="cover">
            <img src="../../../public/images/ty2.jpg" alt>
          </a>
          <a href class="title">妈妈，我的觉察力多少分</a>
          <p class="description">
            婆婆（质问的口气）：NED，你们吃这么早，要到哪里去呃？！
            儿子：不到哪里去啊…… 婆婆（忿忿滴）：你们不是10点才起床的嘛！今天起
            的这么早！吃的这么早！ 我感觉婆婆语调里有鄙夷的神气……还有被“时时监管
            ”的感觉。按照自己以往的脾性，自己早已经发作了：我们吃不吃，吃多早，管...
          </p>
          <a href class="author">
            <div class="avatar">
              <img src="../../../public/images/ty2.jpg" alt>
            </div>
            <span class="name">Rose_Heart</span>
          </a>
        </div>
      </div>
      <div class="seo-recommended-notes">
        <div class="note have-img">
          <a href class="cover">
            <img src="../../../public/images/ty2.jpg" alt>
          </a>
          <a href class="title">妈妈，我的觉察力多少分</a>
          <p class="description">
            婆婆（质问的口气）：NED，你们吃这么早，要到哪里去呃？！
            儿子：不到哪里去啊…… 婆婆（忿忿滴）：你们不是10点才起床的嘛！今天起
            的这么早！吃的这么早！ 我感觉婆婆语调里有鄙夷的神气……还有被“时时监管
            ”的感觉。按照自己以往的脾性，自己早已经发作了：我们吃不吃，吃多早，管...
          </p>
          <a href class="author">
            <div class="avatar">
              <img src="../../../public/images/ty2.jpg" alt>
            </div>
            <span class="name">Rose_Heart</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src="js/common/UILab/layui2.4.5/layui.js"></script>
<script>
layui.use("layer", function() {
  //独立版的layer无需执行这一句
  var $ = layui.jquery,
    layer = layui.layer; //独立版的layer无需执行这一句

  //触发事件
  var active = {
    notice: function() {
      //示范一个公告层
      layer.open({
        type: 1,
        title: false, //不显示标题栏
        closeBtn: false,
        offset: 'auto',
        area: "50%;",
        shade: [0.7, "#fff"],
        id: "LAY_layuipro", //设定一个id，防止重复弹出
        btn: "立即支付",
        btnAlign: "c",
        moveType: 1, //拖拽模式，0或者1
        skin: "my-btn",
        shadeClose: "true",
        content: $("#zanshang"),
        success: function(layero) {
          var btn = layero.find(".layui-layer-btn");
          btn.find(".layui-layer-btn0").attr({ target: "_blank" });
        }
      });
    }
  };

  $("#layerDemo .layui-btn").on("click", function() {
    var othis = $(this),
      method = othis.data("method");
    active[method] ? active[method].call(this, othis) : "";
  });
});
import b from "../../views/nav/nav.vue";
import commentlist from "./comment-list";
import "element-ui/lib/theme-chalk/display.css";
import { constants } from "crypto";
export default {
  components: {
    nav1: b,
    commentlist
  },
  data() {
    return {
      visible: false,
      show: true,
      xh: true,
      cha: true,
      zf: true,
      cang: false,
      isActive: false,
      zanshang1: { money: "2" },
      value1: "",
      zanshang: [
        {
          money: "2"
        },
        {
          money: "5"
        },
        {
          money: "10"
        },
        {
          money: "20"
        },
        {
          money: "50"
        }
      ]
    };
  },
  methods: {
    qianshu(index) {
      this.isActive = index;
      // this.zanshang1=this.zanshang[0]
      // console.log(this.zanshang1)
      this.cang=false
      if (index === 0) {
        this.zanshang1 = this.zanshang[0];
      } else if (index === 1) {
        this.zanshang1 = this.zanshang[1];
      } else if (index === 2) {
        this.zanshang1 = this.zanshang[2];
      } else if (index === 3) {
        this.zanshang1 = this.zanshang[3];
      } else if (index === 4) {
        this.zanshang1 = this.zanshang[4];
      }
      // console.log(index)
    }
  },
  computed: {
    value2: {
      get() {
        var value = this.value1.replace(/[^\d]+/g, "");
        if (value <= 0) {
          return 0;
        } else if (value >= 10000) {
          return 10000;
        } else {
          return value;
        }
      },
      set(val) {
        this.value1 = val;
      }
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
.zdy {
  width: 100px;
  height: 95%;
  border: none;
  padding: 0 10px;
  font-size: 22px;
  color: #ea6f5a;
}
#zanshang {
  display: none;
  margin-top: 60px;
}
.zszc {
  border: none;
  width: 90px;
  border-radius: 20px;
  background: #ea6f5a;
}
.zs-title {
  width: 80%;
  margin: 15px auto;
}
.zs-title > img {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.zs-title > h2 {
  display: inline-block;
  font-weight: 800;
  color: #333;
  margin: 0 15px;
}
.zs-title > i {
  display: inline-block;
  color: #ea6f5a;
  font-size: 22px;
}
.money {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.money > ul > li {
  border: 1px solid #e6e6e6;
  color: #666666;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  /* padding: 15px 55px; */
  margin: 0 27px 17px;
  width: 168px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  float: left;
}
.money > ul > li.active {
  color: #ea6f5a !important;
  border-color: #ea6f5a;
}
.money > ul > li.active p {
  color: #ea6f5a;
}
.money > ul > li > i {
  display: inline-block;
  font-size: 18px;
}
.money > ul > li > p {
  display: inline-block;
  font-size: 22px;
  padding: 0 !important;
  margin: 0 5px;
}
.money > input {
  width: 90%;
  height: 80px;
  line-height: 0px !important;
  padding: 5px 20px 40px 20px;
  margin-left: -15px;
  margin-bottom: 0;
  font-size: 14px;
  border: 1px solid #e6e6e6;
  color: #333333;
  border-radius: 4px;
  background-color: rgba(180, 180, 180, 0.1);
}
.zs-money {
  font-size: 28px;
  font-weight: bold;
  color: #ea6f5a;
  margin: 20px 0;
}
.zs-zf {
  font-size: 14px;
  color: #333;
  font-weight: normal;
}
.pay {
  overflow: hidden;
  margin-bottom: 25px;
}
.pay > ul > li {
  float: left;
}
.pay .pay-img {
  display: inline-block;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 13px 32px;
}

.author .avatar {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 3px;
  border-radius: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
}
.author .name {
  font-size: 13px;
  color: #333;
  vertical-align: middle;
}
.have-img .avatar img {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 3px;
  border-radius: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
}
.description {
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 23px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.cover img {
  float: right;
  margin: -5px 0 0 15px;
  width: 150px;
  height: 120px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
}
@media (max-width: 768px) {
  .cover img {
    display: none;
  }
}
.seo-recommended-notes {
  margin: 0 auto 20px;
  width: 800px;
}
@media (max-width: 768px) {
  .seo-recommended-notes {
    width: auto;
  }
}
.note-bottom .seo-recommended-notes .note {
  display: block;
  margin-bottom: 25px;
  padding: 0 0 25px;
  border-bottom: 1px solid #ddd;
}
.title .more {
  float: right;
  font-size: 14px;
  color: #a0a0a0;
}
.youdao-recommended-ad .info .intro {
  display: block;
  font-size: 13px;
  color: #999;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 24px;
  max-height: 48px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  white-space: normal;
}
.youdao-recommended-ad .info .ad-badge {
  display: block;
  width: 38px;
  height: 18px;
  margin-top: 50px;
  text-align: center;
  border-radius: 2px;
  border: solid 1px #999999;
  color: #999999;
  font-size: 12px;
}

@media (max-width: 768px) {
  .info {
    width: 100%;
    margin-left: 0 !important;
  }
}
.note .title {
  display: inherit;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.youdao-recommended-ad .img {
  display: block;
  float: right;
  width: 150px;
  height: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: RGB(241, 243, 244);
  border-radius: 6px;
  margin: 0px 0 0 15px;
  background-image: url(../../../public/images/ty2.jpg);
}
@media (max-width: 768px) {
  .youdao-recommended-ad .img {
    display: none;
  }
}
.note-2 {
  display: block;
  margin-bottom: 25px;
  padding: 0 0 25px 0;
  border-bottom: 1px solid #dddddd;
}
@media (max-width: 768px) {
  .note-2 {
    padding: 10px;
  }
}
@media (max-width: 768px) {
  #jun77 {
    margin-top: 125px !important;
  }
}

.list {
  margin-top: 20px;
  width: 800px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .list {
    width: auto;
  }
}
.recommend-note .meta .title {
  padding-left: 8px;
  border-left: 3px solid #ea6f5a;
  line-height: 1;
  font-size: 15px;
}
.recommend-note {
  margin-bottom: 20px;
}
.item .name {
  display: inline-block;
  padding: 0 10px;
  font-size: 16px;
}
.item img {
  width: 40px;
  /* height: 32px; */
}
.item {
  display: inline-block;
  margin: 0 12px 12px 0;
  min-height: 32px;
  background-color: white;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  height: 42px;
}
.main .include-collection {
  width: 100%;
  padding-top: 20px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .main .include-collection {
    padding: 10px;
  }
}

.main .title {
  padding-left: 8px;
  border-left: 3px solid #ea6f5a;
  line-height: 1.2;
  font-size: 15px;
}
.main {
  position: relative;
  margin: 0 auto;
  padding: 0 0 30px 0;
  width: 800px;
}
@media (max-width: 768px) {
  .main {
    width: auto;
  }
}
.main a {
  float: right;
  font-size: 14px;
  color: #a0a0a0;
}
.note-bottom {
  min-height: 213px;
  background-color: #f5f5f5;
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (max-width: 768px) {
  .note-bottom {
    padding: 15px;
  }
}
.like-button i {
  font-size: 22px;
}
.like-button span {
  margin-left: 4px;
  font-size: 18px;
  line-height: 50px;
}
.tool-group a {
  margin-right: 10px;
  color: #969696;
  display: inline-block;
}
.comment-wrap p {
  font-size: 18px;
}
.v-tooltip-content {
  display: inline-block;
}
.author {
  margin-bottom: 15px;
}
.comment {
  padding: 20px 0 15px;
  border-bottom: 1px solid #f0f0f0;
}
.pull-right a {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #969696;
  display: inline-block;
}
.pull-right {
  float: right;
}
.author-only {
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 12px;
  color: #969696;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}
.follow-detail .btn {
  float: right;
  margin-top: 4px;
  padding: 8px 0;
  width: 100px;
  font-size: 16px;
  position: relative;
  left: 480px;
}
@media (max-width: 768px) {
  .follow-detail .btn {
    left: 0;
  }
}
.close-btn {
  margin-left: 10px;
  font-size: 12px;
  color: #969696;
  display: none;
}
.top-title {
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  border-bottom: 1px solid #f0f0f0;
}
.normal-comment-list {
  margin-top: 30px;
}
.new-comment span {
  font-size: 14px;
}
.btn-sign {
  display: inline-block;
  width: 78px;
  margin: 11px 10px 0 0;
  padding: 7px 18px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  color: #fff;
  background-color: #3194d0;
  outline: none;
}
.sign-container {
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  line-height: 1.42857;
  user-select: none;
}
.new-comment .sign-container {
  padding: 10px 15px;
  width: 94%;
  height: 80px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  resize: none;
  display: inline-block;
  vertical-align: top;
  outline-style: none;
}
.comment-list .avatar {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}
.new-comment {
  position: relative;
  margin-left: 48px;
  margin: 0 0 20px;
}
.comment-list {
  padding-top: 20px;
}
#web-note-ad-1 img {
  display: block;
  width: 100%;
}
.more-share {
  width: auto;
  padding: 4px 18px;
  font-size: 14px;
  color: #9b9b9b;
  line-height: 40px;
  border-radius: 50px;
  border: 1px solid #dcdcdc;
  display: inline-block;
}
.share-circle {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 8px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
  position: relative;
}
.share-circle:hover .show {
  display: block;
}
.show {
  display: none;
  width: 90px;
  /* height: 30px; */
  position: absolute;
  top: -45px;
  left: -25px;
  font-size: 14px;
  background: #000;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
}
.share-circle:hover .show-2 {
  display: block;
}
.show-2 {
  display: none;
  width: 200px;
  height: 220px;
  position: absolute;
  top: -235px;
  left: -75px;
  font-size: 14px;
  background: rgb(255, 255, 255);
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #ddd;
}
.show-2 img {
  width: 170px;
  height: 170px;
}
.sanjiao {
  position: absolute;
  top: 34px;
  color: #000;
  left: 40px;
}
.qrcode {
  width: 200px;
  height: 220px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  background-color: #fff;
  position: absolute;
  top: -230px;
  left: 50%;
  margin-left: -100px;
  display: none;
  border-radius: 6px;
  padding: 15px;
  border: 1px solid #ddd;
}
.share-group img {
  margin-top: 8px;
  font-size: 24px;
  line-height: 2;
  color: #00bb29;
}
.like-group:hover {
  background-color: #fffaf7;
}
.share-group i {
  font-size: 24px;
  line-height: 2;
  color: #9b9b9b;
}
.share-group {
  float: right;
  margin-top: 6px;
}
.share-group a:hover {
  background-color: rgb(238, 238, 238);
}
.modal-wraps {
  font-size: 18px;
  border-left: 1px solid rgba(236, 97, 73, 0.4);
  display: inline-block;
  margin-left: -20px;
}
.ty {
  color: #ea6f5a;
  padding: 0 20px 0 20px;
  font-size: 18px;
}
.btn-like {
  display: inline-block;
  font-size: 19px;
}
.btn-like a {
  position: relative;
  padding: 18px 30px 18px 35px;
  color: #ea6f5a;
}
.btn-like i {
  color: #ea6f5a;
  position: relative;
  left: 25px;
  font-size: 19px;
}
.like-group {
  position: relative;
  padding: 13px 0 15px 0;
  font-size: 0;
  border: 1px solid #ea6f5a;
  border-radius: 40px;
}
.like {
  display: inline-block;
}
.meta-bottom {
  margin-top: 40px;
  margin-bottom: 80px;
}
.signature {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #969696;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.follow-detail .info p {
  margin-bottom: 0;
  color: #969696;
  margin: 0 0 10px;
}
.follow-detail .info .title {
  margin-right: 3px;
  font-size: 17px;
  line-height: 1.8;
  vertical-align: middle;
  color: #333;
}
.follow-detail .btn {
  float: right;
  margin-top: 4px;
  padding: 8px 0;
  width: 100px;
  font-size: 16px;
  border-color: #42c02e;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.follow-detail .avatar {
  float: left;
  margin-right: 10px;
  width: 48px;
  height: 48px;
}
.follow-detail {
  padding: 20px;
  background-color: hsla(0, 0%, 71%, 0.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
}
.side-tool {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
}
.function-button {
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  display: block;
}
.function-button i {
  padding-top: 16px;
  font-size: 20px;
  display: block;
}
.side-tool ul li {
  border: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  background-color: #fff;
  transition: 0.1s ease-in;
}
#web-note-ad-fixed a {
  display: block;
  width: 100%;
  height: 260px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-bottom: 15px;
}
#note-fixed-ad-container {
  position: fixed;
  top: 80px;
  right: 45%;
  margin-right: -560px;
  width: 180px;
}
.copyright {
  float: right;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.7;
  color: #c8c8c8;
}
.modal-wrap {
  float: right;
  margin-top: 5px;
  margin-right: 20px;
  font-size: 12px;
  line-height: 1.7;
}
.modal-wrap a {
  color: #c8c8c8;
}
.show-foot {
  margin-bottom: 30px;
}
.notbook {
  font-size: 12px;
  color: #c8c8c8;
}
.support-author {
  min-height: 144px;
  padding: 20px 0;
  text-align: center;
  clear: both;
}
.support-author p {
  padding: 0 30px;
  margin-bottom: 20px;
  min-height: 24px;
  font-size: 17px;
  font-weight: 700;
  color: #969696;
}
.btn-pay {
  margin-bottom: 20px;
  padding: 8px 25px;
  display: inline-block;
  font-size: 16px;
  color: #fff;
  background-color: #ea6f5a;
  border-radius: 20px;
}
.name img {
  margin-right: 5px;
  border-radius: 0;
  margin-left: 5px;
  border: 0;
}
.show-content {
  color: #2f2f2f;
  font-size: 16px;

  line-height: 1.7;
}
.show-content p {
  margin: 0 0 25px;
}
.meta {
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
  margin: 0 auto;
}

.follow {
  background-color: #42c02e;
  padding: 3px 13px 3px 10px;
  font-size: 12px;
  border-radius: 40px;
  color: #fff;
}
.note {
  padding-top: 10px;
}
.post {
  margin: 0 auto;
  margin-top: 100px;
  padding-bottom: 40px;
  width: 800px;
}
@media (max-width: 768px) {
  .post {
    width: auto;
    padding: 15px;
  }
  .function-button {
    display: none;
  }
}
.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
}
.author {
  margin: 30px 0 40px;
}
.author img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.avatar {
  width: 48px;
  height: 48px;
  vertical-align: middle;
  display: inline-block;
}
.note-2 .info {
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
  /* margin-top: -50px; */
}
.info {
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
}
.name {
  margin-right: 3px;
  font-size: 16px;
  vertical-align: middle;
  font-size: 15px;
  color: #333;
}
</style>
<style>
.my-btn .layui-layer-btn .layui-layer-btn0 {
  margin-bottom: 20px;
  padding: 20px 25px;
  font-size: 16px;
  color: #fff;
  border: none;
  line-height: 0px;
  background-color: #ea6f5a;
  border-radius: 20px;
}
</style>
