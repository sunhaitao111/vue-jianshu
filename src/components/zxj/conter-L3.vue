<template>
  <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
    <ul class="layui-tab-title">
      <li class="layui-this">关注的专题/文集/连载 1</li>
      <li class>喜欢的文章 6</li>
    </ul>
    <div class="layui-tab-content" style="height: 100px;">
      <div class="layui-tab-item layui-show">
        <div style="height:60px;">
          <div style="float:left;margin-top:3px;margin-right:10px;">
            <img
              style="width:52px;height:52px;border-radius:5px;border:1px solid #969696;"
              src="../../../public/images/zxj5.jpg"
              alt
            >
          </div>
          <div id="zxj-ak" style="margin-top:10px;">
            <a href>@IT·互联网</a>
          </div>
          <div id="zxj-al">
            <a href>简书</a>
            <span>收录了54054篇文章，1977597人关注</span>
          </div>
        </div>
        <hr>
      </div>
      <div class="layui-tab-item">
        <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
          <a href>
            <img src="../../../public/images/zxj1.jpg" alt>
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
        <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
          <a href>
            <img src="../../../public/images/zxj1.jpg" alt>
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
            <img src="../../../public/images/zxj1.jpg" alt>
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
        <div style="line-height:25px;">
          <el-row :gutter="20">
            <el-col :span="18">
              <div class="grid-content bg-purple" style>
                <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
                  <a href>
                    <img src="../../../public/images/zxj1.jpg" alt>
                  </a>
                  <a href>zxj666</a>
                  <span>关注了作者 · 05.29 11:09</span>
                </div>
                <a href style="font-size:18px;color:#969696;">thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
                <p
                  style="font-size:13px;color:#999999;"
                >在user.php中增加如下代码用于打开del.html编写的函数为del()；编写的delete()函数是用于删除指定主键值的数据记录； 注意：delete()函数中的$u...</p>
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
            <el-col :span="6">
              <div class="grid-content bg-purple-light" style="margin-top:20px;">
                <img src="../../../public/images/zxj3.jpg" alt>
              </div>
            </el-col>
          </el-row>
          <hr>
        </div>
        <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
          <a href>
            <img src="../../../public/images/zxj1.jpg" alt>
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
            <button type="button" class="layui-btn1" @click="show1=!show1" v-if="!show1">
              <span>
                <i class="el-icon-plus"></i>关注
              </span>
            </button>
            <button type="button" class="layui-btn" v-if="show1" @click="show1=!show1">
              <span>
                <i class="el-icon-check"></i>已关注
              </span>
            </button>
          </div>

          <hr>
          <div style="margin-top:20px;color:#969696;font-size:12px;">从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。</div>
        </div>
        <hr>
        <div style="line-height:25px;">
          <el-row :gutter="20">
            <el-col :span="18">
              <div class="grid-content bg-purple" style>
                <div id="zxj-ae" style="width:100%;height:30px;margin-top:20px;">
                  <a href>
                    <img src="../../../public/images/zxj1.jpg" alt>
                  </a>
                  <a href>zxj666</a>
                  <span>关注了作者 · 05.29 11:09</span>
                </div>
                <a href style="font-size:18px;color:#969696;">thinkphp 5.0简单的删除数据表中一条数据学习笔记之六</a>
                <p
                  style="font-size:13px;color:#999999;"
                >在user.php中增加如下代码用于打开del.html编写的函数为del()；编写的delete()函数是用于删除指定主键值的数据记录； 注意：delete()函数中的$u...</p>
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
            <el-col :span="6">
              <div class="grid-content bg-purple-light" style="margin-top:20px;">
                <img src="../../../public/images/zxj3.jpg" alt>
              </div>
            </el-col>
          </el-row>
          <hr>
        </div>
      </div>
      <div class="layui-tab-item"></div>
      <div class="layui-tab-item"></div>
    </div>
  </div>
</template>
<style scoped>
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
#zxj-ak a {
  font-size: 15px;
  font-weight: 700;
  color: #333;
}
#zxj-al a {
  color: #3194d0;
  font-size: 12px;
  font-weight: 400;
}
#zxj-al span {
  margin-left: 5px;
  font-size: 12px;
}
</style>


<script>
export default {
  data() {
    return {
      activeName: "first",
      show: true,
      show1: true
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

