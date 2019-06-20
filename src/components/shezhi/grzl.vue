<template>
  <div class="grzl">
    <el-row class="hidden-xs-only">
      <el-form ref="form" :model="form" label-width="140px" label-position="left" class="biaodan">
        <el-form-item label="性别" label-colro=":#979797;">
          <el-radio-group v-model="form.resource">
            <el-radio label="男" label-colro=":black;"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="保密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="个人简介" style="font-size: 15px;color: #969696;">
          <textarea name id="gerenj" rows="4" placeholder="请填写你的个人简历" v-model="form.desc"></textarea>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="个人网站" style="font-size: 15px;color: #969696;">
          <input type="text" placeholder="http://你的网站" v-model="form.name" id="wangzhan">
          <!-- <el-input v-model="form.name" placeholder="http://你的网址"></el-input> -->
          <a class="tix">填写后会在个人主页显示图标</a>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="微信二维码" style="font-size: 15px;color: #969696;">
          <button class="gengh" style="cursor: pointer;">更换图片</button>
          <a class="tix">上传后会在个人主页显示图标</a>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="社交账号" style="font-size: 15px;color: #969696;" class="sjzh">
          <p class="text">
            你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。
            <br>如果帐号被占用，你可以在
            <a>简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。
          </p>
          <ul>
            <li class="bangding">
              <img src="../../../public/images/set-weibo.png" alt>
              <a href>绑定微博 ></a>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding">
              <img src="../../../public/images/set-weixin.png" alt>
              <a href>绑定微信 ></a>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding jie">
              <img src="../../../public/images/set-qq.png" alt>
              <a href>
                <Icon type="ios-checkmark" style="font-size:25px"/>已绑定
              </a>
              <span style>解除绑定</span>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding">
              <img src="../../../public/images/set-douban.png" alt>
              <a href>绑定豆瓣 ></a>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding">
              <img src="../../../public/images/set-google.png" alt>
              <a href>绑定Google+ ></a>
            </li>
          </ul>
        </el-form-item>
        <button class="baocun" style="margin: 0 0 40px 0">保存</button>
      </el-form>
    </el-row>
    <el-row class="hidden-sm-and-up">
      <el-form ref="form" :model="form" label-width="80px" label-position="left" class="biaodan">
        <el-form-item label="性别" label-colro=":#979797;">
          <el-radio-group v-model="form.resource">
            <el-radio label="男" label-colro=":black;"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="保密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="个人简介" style="font-size: 15px;color: #969696;">
          <textarea name id="gerenj" rows="4" placeholder="请填写你的个人简历" v-model="form.desc"></textarea>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="个人网站" style="font-size: 14px;color: #969696;">
          <input type="text" placeholder="http://你的网站" v-model="form.name" id="wangzhan">
          <!-- <el-input v-model="form.name" placeholder="http://你的网址"></el-input> -->
          <a class="tix">填写后会在个人主页显示图标</a>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="微信二维码" style="font-size: 15px;color: #969696;">
          <button class="gengh" style="cursor: pointer;">更换图片</button>
          <a class="tix">上传后会在个人主页显示图标</a>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="社交账号" style="font-size: 15px;color: #969696;" class="sjzh">
          <p class="text">
            你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。
            <br>如果帐号被占用，你可以在
            <a>简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。
          </p>
          <ul>
            <li class="bangding">
              <img src="../../../public/images/set-weibo.png" alt>
              <a href>绑定微博 ></a>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding">
              <img src="../../../public/images/set-weixin.png" alt>
              <a href>绑定微信 ></a>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding jie">
              <img src="../../../public/images/set-qq.png" alt>
              <a href>
                <Icon type="ios-checkmark" style="font-size:25px"/>已绑定
              </a>
              <span style>解除绑定</span>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding">
              <img src="../../../public/images/set-douban.png" alt>
              <a href>绑定豆瓣 ></a>
            </li>
            <li>
              <div class="line"></div>
            </li>
            <li class="bangding" style="margin-left:30px">
              <img src="../../../public/images/set-google.png" alt>
              <a href>绑定Google+ ></a>
            </li>
          </ul>
        </el-form-item>
        <button class="baocun">保存</button>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
* {
  text-decoration: none;
}
.jie:hover span {
  display: inline-block;
}
.jie span {
  font-size: 12px;
  margin-left: 15px;
  display: none;
  cursor: pointer;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #e7e7e7;
  margin-top: 2%;
}
.jianju {
  margin-top: 2%;
  width: 100%;
}
.text {
  font-size: 12px;
  color: rgb(153, 153, 153);
}
.text a {
  font-size: 12px;
  color: rgb(80, 150, 255);
}
#gerenj {
  background-color: #f8f8f8;
  border-radius: 5px;
  font-size: 15px;
  width: 474px;
  height: 100px;
  color: #333333;
}
#wangzhan {
  width: 474px;
  height: 30px;
  font-size: 15px;
  color: #333333;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
}
.tix {
  font-size: 12px;
  color: rgb(153, 153, 153);
  float: right;
}
.gengh {
  border: 1px solid #00e41e;
  background-color: #fff;
  color: #00e41e;
  line-height: 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 80px;
  height: 30px;
}
.gengh:hover {
  background-color: rgb(240, 255, 239);
}
.bangding {
  margin: 15px 0;
}
.bangding img {
  width: 20px;
  height: 20px;
}
.bangding a {
  font-size: 14px;
  color: #3a3a3a;
  margin-left: 20px;
  cursor: pointer;
}
.baocun {
  border-radius: 20px;
  background-color: #00d800;
  border: none;
  width: 100px;
  height: 30px;
  color: white;
  cursor: pointer;
}
.baocun:hover {
  background-color: #02b302;
}
.sjzh {
  margin-top: -20px;
}
.sjzh ul {
  list-style: none;
  margin-left: -30px;
}
.yibangding {
  font-size: 14px;
  color: #7a7a7a;
  margin-left: 40px;
  margin-top: -45px;
}
.jiechubangding {
  display: block;
  font-size: 14px;
  color: white;
  margin-left: 120px;
  margin-top: -55px;
}
.jiechubangding:hover {
  color: #353535;
}

@media (max-width: 760px) {
  #gerenj {
    width: 140px;
    height: 50px;
  }
  .label-weight {
    width: 20px;
  }
  #wangzhan {
    width: 140px;
  }
  .baocun {
    margin-bottom: 60px;
  }
  .tix{
    margin-right: 10px;
  }
}
</style>
