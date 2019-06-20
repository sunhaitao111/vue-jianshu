<template>
  <div>
    <nav11/>
    <div class="container faqs layui-fluid">
      <div class="layui-row">
        <div class="col-xs-16 main">
          <div class="category-title">热门问题</div>
          <div class="questions">
            <a href class="question-title">2019.5.12 关于发布文章后内容消失的问题的公告</a>
            <a href class="question-title">为什么文章会被锁定？</a>
            <a href class="question-title">如果你被封号了？</a>
            <a href class="question-title">如何更换绑定的手机号，原有手机号不用了怎么办？</a>
            <a href class="question-title">简书钻「减少」了怎么办？</a>
            <a href class="question-title">简书钻和简书贝的常见问题</a>
            <a href class="question-title">如何注销简书账号</a>
            <a href class="question-title">简书账号绑定解绑相关问题汇总</a>
            <a href class="question-title">iOS充值问题（余额、使用、异常问题）</a>
            <a href class="question-title">简书收入结算与提现常见问题</a>
            <a href class="question-title">我该如何发表一篇付费文章？</a>
            <a href class="question-title">文章列表处的缩略图不显示怎么办？</a>
            <a href class="question-title">关于文章投稿次数的有关说明</a>
            <a href class="question-title">简书官方专题投稿指南大全</a>
            <a href class="question-title">公告：简书关注和涨粉的一些说明</a>
            <a href class="question-title">关于举报“抄袭类文章”的说明</a>
            <a href class="question-title">文章字数统计有问题怎么办</a>
            <a href class="question-title">如何在简书进行创作</a>
            <a href class="question-title">删除的文章如何找回，有回收站吗？</a>
          </div>
          <div class="category-title">如何玩转简书</div>
          <div class="questions">
            <a href class="question-title">怎么关闭评论</a>
            <a href class="question-title">如何在简书进行创作</a>
            <a href class="question-title">发现页热门文章使用指南</a>
            <span>
              <a v-loading="loading" v-if="cust" @click="showCont" class="question-title more">
                展开全部
                <i class="el-icon-arrow-down"></i>
              </a>
            </span>

            <div v-if="show">
              <a href class="question-title">如何让更多的人看到自己的文章</a>
              <a href class="question-title">公告：关于首页投稿专题密集投稿相关问题</a>
              <a href class="question-title">如何创建并玩转属于你自己的专题</a>
              <a href class="question-title">公告：简书关注和涨粉的一些说明</a>
              <a href class="question-title">简书诚邀您开通付费权限</a>
              <a href class="question-title">参与“分享有奖计划”，赏金拿到手软！</a>
              <a href class="question-title">招募 | 宝玉社群运营培训生</a>
              <a href class="question-title">终于等到你，还好我没放弃</a>
            </div>
          </div>

          <div class="category-title">简书帐号问题</div>
          <div class="questions">
            <a href class="question-title">为什么文章会被锁定？</a>
            <a href class="question-title">如果你被封号了？</a>
            <a href class="question-title">简书账号绑定解绑相关问题汇总</a>
            <span>
              <a v-loading="loading" v-if="cust2" @click="showCont2" class="question-title more">
                展开全部
                <i class="el-icon-arrow-down"></i>
              </a>
            </span>

            <div v-if="show2">
              <a href class="question-title">我记得简书的昵称，忘记了登录方式怎么办</a>
              <a href class="question-title">如何注销简书账号</a>
              <a href class="question-title">如何绑定和解绑手机号/邮箱</a>
              <a href class="question-title">如果你发现自己帐号里的文章/钱包金额都没了</a>
              <a href class="question-title">无法接收短信验证码</a>
              <a href class="question-title">多个账号支持合并吗？</a>
              <a href class="question-title">绑定账号的时候提示被占用怎么办？</a>
              <a href class="question-title">如何更换绑定的手机号，原有手机号不用了怎么办？</a>
            </div>
          </div>

          <div class="category-title">身份认证</div>
          <div class="questions">
            <a href class="question-title">简书新浪微博联合认证说明</a>
          </div>

          <div class="category-title">简书帮助中心</div>
          <div class="questions">
            <a href class="question-title">验证码控件异常问题的错误提示详情</a>
            <a href class="question-title">历史版本</a>
            <a href class="question-title">上传图片的私密性说明</a>
            <span>
              <a v-loading="loading" v-if="cust3" @click="showCont3" class="question-title more">
                展开全部
                <i class="el-icon-arrow-down"></i>
              </a>
            </span>

            <div v-if="show3">
              <a href class="question-title">我记得简书的昵称，忘记了登录方式怎么办</a>
              <a href class="question-title">如何注销简书账号</a>
              <a href class="question-title">如何绑定和解绑手机号/邮箱</a>
              <a href class="question-title">如果你发现自己帐号里的文章/钱包金额都没了</a>
              <a href class="question-title">无法接收短信验证码</a>
              <a href class="question-title">多个账号支持合并吗？</a>
              <a href class="question-title">绑定账号的时候提示被占用怎么办？</a>
              <a href class="question-title">如何更换绑定的手机号，原有手机号不用了怎么办？</a>
            </div>
          </div>

          <div class="category-title">有关简书文章的一切</div>
          <div class="questions">
            <a href class="question-title">添加写文章快捷方式到桌面</a>
            <a href class="question-title">文章喜欢数变动说明</a>
            <a href class="question-title">如何写一个整洁好看的标题</a>
            <span>
              <a v-loading="loading" v-if="cust4" @click="showCont4" class="question-title more">
                展开全部
                <i class="el-icon-arrow-down"></i>
              </a>
            </span>

            <div v-if="show4">
              <a href class="question-title">文章字数统计有问题怎么办</a>
              <a href class="question-title">简书文章代码高亮指南</a>
              <a href class="question-title">App 生成图片分享时文章内图片无法显示/邮箱</a>
              <a href class="question-title">iOS 版本无法赞赏问题</a>
              <a href class="question-title">删除的文章如何找回，有回收站吗？</a>
              <a href class="question-title">文章发布后，遇到乱码怎么办？</a>
              <a href class="question-title">文章阅读量不高？来投稿简书官方专题吧！</a>
              <a href class="question-title">文章列表处的缩略图不显示怎么办？</a>
              <a href class="question-title">不想分享小程序怎么办？</a>
            </div>
          </div>
        </div>

        <div class="col-xs-7 col-xs-offset-1 aside" style="margin-top:60px;">
          <div class="go-to-feedback">
            <img src="../../../public/images/jun2.png" alt>
            <div class="text">
              没解决你的疑问？
              <a href>
                去反馈
                <i class="el-icon-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="hint-text">帐户冻结、文章锁定问题，请邮件联系 help@jianshu.com</div>
          <div
            class="hint-text"
          >程序/功能问题、bug 反馈，可添加“简书专题社群委员会委员长”微信号：Jianshu_dama，备注“Web公测”，加群第一时间获得帮助。</div>
          <div class="hint-text">
            也可以
            <a href="/contact">
              联系我们
              <i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav11 from "../../views/nav/nav";
export default {
  data() {
    return {
      activeNames: ["1"],
      show: false,
      show2: false,
      cust: true,
      cust2: true,
      show3: false,
      cust3: true,
      show4: false,
      cust4: true,
      loading: false
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    showCont: function() {
      this.show = !this.show;
      this.cust = !this.cust;
    },
    showCont2: function() {
      this.show2 = !this.show2;
      this.cust2 = !this.cust2;
    },
    showCont3: function() {
      this.show3 = !this.show3;
      this.cust3 = !this.cust3;
    },
    showCont4: function() {
      this.show4 = !this.show4;
      this.cust4 = !this.cust4;
    }
  },
  components: {
    nav11
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.faqs {
  padding: 30px 0;
}
.container {
  width: 960px;
  margin: 0 auto;
  display: flex;
}
.col-xs-16 {
  width: 66.66667%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}

.main .category-title {
  margin-bottom: 15px;
  padding-left: 10px;
  font-size: 20px;
  line-height: 1;
  color: #333;
  border-left: 4px solid #ea6f5a;
}
.questions {
  margin-bottom: 30px;
  padding: 10px 28px;
  border-radius: 6px;
  border: 1px solid #d5d5d5;
}
.question-title {
  display: block;
  padding: 12px 0;
  font-size: 15px;
  color: #3194d0;
  border-bottom: 1px solid #d5d5d5;
}
a {
  text-decoration: none;
}
.questions a:hover {
  text-decoration: underline;
}
.questions .question-title.more {
  text-align: center;
  color: #999;
}
.questions .question-title:last-child {
  border-bottom: none;
}
.main .questions .question-title {
  display: block;
  padding: 12px 0;
  font-size: 15px;
  border-bottom: 1px solid #d5d5d5;
}
a {
  cursor: pointer;
}
.faqs .main .questions .question-title:last-child {
  border-bottom: none;
}
.question-title:hover {
  text-decoration: none;
}
.questions span a:hover {
  text-decoration: none;
}
.col-xs-offset-1 {
  margin-left: 4.16667%;
}
.col-xs-7 {
  float: left;
  width: 29.16667%;
}
.go-to-feedback img {
  width: 60px;
}
.aside .go-to-feedback .text {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  font-size: 14px;
  color: #333;
}
img {
  vertical-align: middle;
}
.aside .go-to-feedback .text a {
  display: block;
}
.faqs .aside a {
  margin-top: 3px;
  color: #3194d0;
}
i {
  font-size: inherit;
  font-style: normal;
  font-weight: 600 !important;
}
.aside .hint-text {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
}
@media (max-width: 768px) {
  .col-xs-16 {
    width: 100%;
    color: black;
    height: auto;
  }
  .col-xs-7 {
    width: 100% !important;
    padding-right: 32px;
  }
  .layui-fluid {
    width: 100%;
  }
  .col-xs-offset-1 {
    margin-left: 0;
    padding-left: 25px;
  }
}
</style>
