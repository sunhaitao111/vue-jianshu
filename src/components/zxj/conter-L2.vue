<template>
  <div>
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
      <ul class="layui-tab-title">
        <li>
          <i class="layui-icon layui-icon-form"></i>关注的专题/文章/连载
        </li>
        <li class="layui-this">
          <i class="layui-icon layui-icon-dialogue"></i>喜欢的文章
        </li>
      </ul>
      <div class="layui-tab-content" style="height: 100px;">
        <div class="layui-tab-item">
          <div>
            <div id="zxj-ay">
              <a href>信仰!</a>
            </div>
            <div id="zxj-ax">
              <a href>fayetty</a>
              <a href>
                <i class="layui-icon layui-icon-star"></i>1
              </a>
              <a href>
                <i class="layui-icon layui-icon-reply-fill"></i>0
              </a>
            </div>
            <hr>
          </div>
        </div>
        <div class="layui-tab-item layui-show">
          <div id="zxj-ae">
            <a href>
              <img src="../../../public/images/zxj02.webp" alt>
            </a>
            <a href>zxj666</a>
            <span>关注了作者 · 05.29 11:09</span>
          </div>
          <div id="zxj-aj">
            <div style="margin-bottom:20px;">
              <a href>
                <img src="../../../public/images/zxj2.jpg" alt>
              </a>
              <a style="font-size:17px;line-height:30px;">四哥0819</a>
              <br>
              <span style="font-size:12px;color:#969696">写了 52988 字，被 320 人关注，获得了 359 个喜欢</span>
              <button type="button" class="layui-btn" v-if="show1" @click="show1=!show1">
              <span>
                <i class="el-icon-check"></i>已关注
              </span>
            </button>
            <button type="button" class="layui-btn1" @click="show1=!show1" v-if="!show1">
              <span>
                <i class="el-icon-plus"></i>关注
              </span>
            </button>
            
            </div>

            <hr>
            <div style="margin-top:20px;color:#969696;font-size:12px;">从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。</div>
          </div>
          <hr>
          <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
            <a href>
              <img src="../../../public/images/zxj02.webp" alt>
            </a>
            <a href>zxj666</a>
            <span>关注了作者 · 05.29 11:09</span>
          </div>
          <p style="margin-bottom:20px;">可以分享代码吗？</p>
          <div id="zxj-ah">
            <a href>zxj666</a>
            <span>来自于</span>
            <a href>thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
          </div>
          <hr>
          <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
            <a href>
              <img src="../../../public/images/zxj02.webp" alt>
            </a>
            <a href>zxj666</a>
            <span>关注了作者 · 05.29 11:09</span>
          </div>
          <p style="margin-bottom:20px;">可以分享代码吗？</p>
          <div id="zxj-ai">
            <a href>thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
            <p>
              在user.php中增加如下代码用于打开del.html编写的函数为del()；
              编写的delete()函数是用于删除指定主键值的数据记录； 注意：delete()函数中的$u...
            </p>
            <div id="zxj-ag">
              <a href>小冕</a>
              <a href>
                <i class="el-icon-view"></i>252
              </a>
              <a href>
                <i class="el-icon-chat-square"></i>2
              </a>
            </div>
          </div>
          <hr>
             <div>
            <div style="line-height:25px;">
              <el-row :gutter="20">
                <el-col :md="18" :xs="16">
                  <div class="grid-content bg-purple" style>
                    <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
                      <a href>
                        <img src="../../../public/images/zxj02.webp" alt>
                      </a>
                      <a href>zxj666</a>
                      <span>关注了作者 · 05.29 11:09</span>
                    </div>
                    <a href style="">thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
                    <p class="hidden-xs-only">在user.php中增加如下代码用于打开del.html编写的函数为del()；编写的delete()函数是用于删除指定主键值的数据记录； 注意：delete()函数中的$u...</p>
                    <div id="zxj-ag">
                      <a href>小冕</a>
                      <a href>
                        <i class="el-icon-view"></i>252
                      </a>
                      <a href>
                        <i class="el-icon-chat-square"></i>2
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col :md="6" :xs="8">
                  <div class="grid-content bg-purple-light" style="margin-top:20px;">
                    <img src="../../../public/images/zxj3.jpg" alt>
                  </div>
                </el-col>
              </el-row>
              <hr>
            </div>
          </div>
          <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
            <a href>
              <img src="../../../public/images/zxj02.webp" alt>
            </a>
            <a href>zxj666</a>
            <span>关注了作者 · 05.29 11:09</span>
          </div>
          <div id="zxj-aj">
            <div style="margin-bottom:20px;">
              <a href>
                <img src="../../../public/images/zxj2.jpg" alt>
              </a>
              <a style="font-size:17px;line-height:30px;">四哥0819</a>
              <br>
              <span style="font-size:12px;color:#969696">写了 52988 字，被 320 人关注，获得了 359 个喜欢</span>
              <button type="button" class="layui-btn1" @click="show=!show" v-if="!show">
              <span>
                <i class="el-icon-plus"></i>关注
              </span>
            </button>
            <button type="button" class="layui-btn" v-if="show" @click="show=!show">
              <span>
                <i class="el-icon-check"></i>已关注
              </span>
            </button>
            </div>

            <hr>
            <div style="margin-top:20px;color:#969696;font-size:12px;">从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。</div>
          </div>
          <hr>
                    <div>
            <div style="line-height:25px;">
              <el-row :gutter="20">
                <el-col :md="18" :xs="16">
                  <div class="grid-content bg-purple" style>
                    <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
                      <a href>
                        <img src="../../../public/images/zxj02.webp" alt>
                      </a>
                      <a href>zxj666</a>
                      <span>关注了作者 · 05.29 11:09</span>
                    </div>
                    <a href style="">thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
                    <p class="hidden-xs-only">在user.php中增加如下代码用于打开del.html编写的函数为del()；编写的delete()函数是用于删除指定主键值的数据记录； 注意：delete()函数中的$u...</p>
                    <div id="zxj-ag">
                      <a href>小冕</a>
                      <a href>
                        <i class="el-icon-view"></i>252
                      </a>
                      <a href>
                        <i class="el-icon-chat-square"></i>2
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col :md="6" :xs="8">
                  <div class="grid-content bg-purple-light" style="margin-top:20px;">
                    <img src="../../../public/images/zxj3.jpg" alt>
                  </div>
                </el-col>
              </el-row>
              <hr>
            </div>
          </div>
        </div>
        <div class="layui-tab-item">
          <div>
            <div style="line-height:25px;">
              <el-row :gutter="20">
                <el-col :md="18" :xs="16">
                  <div class="grid-content bg-purple" style>
                    <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
                      <a href>
                        <img src="../../../public/images/zxj02.webp" alt>
                      </a>
                      <a href>zxj666</a>
                      <span>关注了作者 · 05.29 11:09</span>
                    </div>
                    <a href style="">thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
                    <p class="hidden-xs-only">在user.php中增加如下代码用于打开del.html编写的函数为del()；编写的delete()函数是用于删除指定主键值的数据记录； 注意：delete()函数中的$u...</p>
                    <div id="zxj-ag">
                      <a href>小冕</a>
                      <a href>
                        <i class="el-icon-view"></i>252
                      </a>
                      <a href>
                        <i class="el-icon-chat-square"></i>2
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col :md="6" :xs="8">
                  <div class="grid-content bg-purple-light" style="margin-top:20px;">
                    <img src="../../../public/images/zxj3.jpg" alt>
                  </div>
                </el-col>
              </el-row>
              <hr>
            </div>
          </div>
        </div>
        <div class="layui-tab-item"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  color: #333;
}
#header {
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
}
#zxj-aa {
  float: left;
}
#zxj-aa img {
  width: 80px;
  height: 80px;
  margin-right: 18px;
  border-radius: 15px;
  display: block;
  border: 1px solid #d9d9d9;
}
#zxj-ab {
  margin-left: 100px;
  padding-bottom: 15px;
}
#zxj-ab a {
  font-size: 21px;
  font-weight: 700;
}
#zxj-ac {
  float: left;
  padding-left: 5px;
  padding-right: 10px;
  border-right: 1px solid #f0f0f0;
}
#zxj-ac span {
  color: #333;
  font-size: 15px;
}
#zxj-ac a {
  text-decoration: none;
  color: #969696;
  font-size: 12px;
}
#zxj-ad {
  float: left;
  padding-left: 5px;
}
#zxj-ad span {
  color: #333;
  font-size: 15px;
}
#zxj-ad a {
  text-decoration: none;
  color: #969696;
  font-size: 12px;
}
.layui-tab-brief {
  color: #969696;
}

.layui-tab-brief ul li i {
  padding-right: 10px;
}
#zxj-ae {
  margin-bottom: 10px;
}
#zxj-ae img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-right: 10px;
  border-radius: 50%;
  float: left;
}
#zxj-ae p {
  line-height: 30px;
  font-size: 13px;
  float: left;
}
#zxj-ae span {
  font-size: 13px;
  padding-left: 10px;
  line-height: 30px;
  color: #969696;
}
.bg-purple a{
  font-size:18px;
  color:#969696;
}
.bg-purple p{
  font-size:13px;
  color:#999999;
}
#zxj-aj {
  padding: 10px;
  background-color: hsla(0, 0%, 71%, 0.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 12px;
}
#zxj-aj img {
  width: 48px;
  height: 48px;
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}
#zxj-aj .layui-btn {
  width: 110px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  color: #8c8c8c;
  float: right;
  background-color: hsla(0, 0%, 71%, 0.1);
  position: relative;
  margin-top: -25px;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
  border-radius: 40px;
}
#zxj-aj .layui-btn > .el-icon-plus {
  font-size: 18px;
  color: #8c8c8c;
}
.layui-btn1 {
  width: 110px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  float: right;
  background-color: #42c02e;
  position: relative;
  margin-top: -25px;
  border: 1px solid #42c02e;
  border-radius: 40px;
  cursor: pointer;
}
.layui-btn1 > i {
  color: #fff;
}
#zxj-aj .layui-btn:hover span {
  display: none;
}
#zxj-aj .layui-btn:hover:before {
  content: "X取消关注";
}
#zxj-ah {
  padding: 10px 20px;
  border-left: 6px solid #d9d9d9;
}
#zxj-ah span {
  color: #969696;
  margin: 0 10px;
}
#zxj-ai {
  padding: 10px 20px;
  line-height: 30px;
  margin-bottom: 15px;
  border-left: 6px solid #d9d9d9;
}
#zxj-ai a {
  font-size: 15px;
  font-weight: 700;
  color: #969696;
}
#zxj-ai p {
  font-size: 13px;
  color: #999999;
}
#zxj-ag a {
  font-size: 12px;
  color: #969696;
  margin-right: 10px;
}
#zxj-az {
  margin-right: 20px;
}
#zxj-az button {
  color: #42c02e;
  margin-right: 20px;
  height: 40px;
  padding: 0 20px;
  background-color: #fff;
  border: 1px solid #42c02e;
  border-radius: 20px;
  cursor: pointer;
}
#zxj-az button:hover {
  background-color: #d9d9d9;
}

#zxj-ay {
  margin-top: 10px;
}
#zxj-ay a {
  font-size: 18px;
  color: #333;
  border: none;
}
#zxj-ax {
  margin-top: 20px;
  margin-bottom: 20px;
}
#zxj-ax a {
  margin-right: 15px;
  font-size: 10px;
}
#zxj-ax a i {
  padding-right: 3px;
  width: 5px;
  height: 5px;
}
@media screen and (max-width: 770px) {
  .bg-purple a{
    font-size: 12px;
  }
  .bg-purple-light img{
    width: 100px;
    height: 100px;
  }
  #zxj-aj img{
    width: 30px;
    height: 30px;
  }
  .layui-btn1{
    width: 80px;
    font-size: 14px;
    /* height: 30px; */
    margin-top:-50px;
  }
  #zxj-aj .layui-btn {
    width: 80px;
    font-size: 14px;
    /* height: 30px; */
    margin-top:-50px; 
  }
  #zxj-aj .layui-btn span{
    font-size: 12px;
  }
 #zxj-aj .layui-btn:hover:before {
  content: "X取消关注";
  font-size: 10px;
}

  
}
</style>


<script type="text/javascript" src="js/common/UILab/layui2.4.5/layui.js"></script>
<script>
layui.use("element", function() {
  var $ = layui.jquery;
  var element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
  element.on("tab(prev)", function(data) {});
  element.on("tab(all)", function(data) {
    if (data.index == 0) {
      console.log("内容1");
    } else if (data.index == 1) {
      console.log("内容2");
    }
  });
});
export default {
  data() {
    return {
      modal1: false,
      value4: "",
      show: true,
      show1: true
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>