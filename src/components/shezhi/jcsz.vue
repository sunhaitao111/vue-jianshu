<template>
  <div class="jcsz">
    <div class="hidden-xs-only">
      <el-form ref="form" :model="form" label-width="140px" label-position="left" class="biaodan">
        <el-from-item>
          <img class="tx" src="../../../public/images/set-tx.jpg" alt>
          <button class="toux" style="cursor: pointer;">更改头像</button>
        </el-from-item>
        <div class="line"></div>
        <el-form-item>
          <div class="jianju"></div>
        </el-form-item>
        <el-form-item label="昵称">
          <input type="text" v-model="form.name" id="nicheng" placeholder="懵大叔">
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="电子邮件">
          <button class="bangd" style="cursor: pointer;">点击绑定</button>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="手机">
          <button class="bangd" style="cursor: pointer;">绑定手机</button>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="常用编辑器" style="color:#a7a7a7;">
          <el-radio-group v-model="form.resource">
            <el-radio class="nrong" :label="1">富文本</el-radio>
            <el-radio :label="2">Markdown</el-radio>
            <a href="./zhinan.html">
              <div class="zhuyi">
                <a>?</a>
              </div>
            </a>
            <br>
            <a class="qiehuan">切换后对新建文章生效</a>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="语言设置">
          <el-radio-group v-model="form.resource">
            <el-radio label="3">中文简体</el-radio>
            <el-radio label="4">中文繁体</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="接收谁的简信">
          <el-radio-group v-model="form.resource">
            <el-radio label="5">所有人</el-radio>
            <el-radio label="6">我关注的人、我发过简信的人</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="提醒邮件通知">
          <el-radio-group v-model="form.resource">
            <el-radio label="7">所有动态</el-radio>
            <el-radio label="8">每天未读汇总</el-radio>
            <el-radio label="9">不接收</el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <button class="baocun" style="margin: 0 0 40px 0; cursor: pointer;">保存</button>
      </el-form>
    </div>

    <div class="hidden-sm-and-up">
      <el-form ref="form" :model="form" label-width="70px" label-position="left" class="biaodan">
        <el-from-item>
          <img class="tx" src="../../../public/images/set-tx.jpg" alt>
          <button class="toux" style="cursor: pointer;">更改头像</button>
        </el-from-item>
        <div class="line"></div>
        <el-form-item>
          <div class="jianju"></div>
        </el-form-item>
        <el-form-item label="昵称">
          <input type="text" v-model="form.name" id="nicheng" placeholder="懵大叔">
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="电子邮件">
          <button class="bangd" style="cursor: pointer;">点击绑定</button>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="手机">
          <button class="bangd" style="cursor: pointer;">绑定手机</button>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="常用编辑器" style="color:#a7a7a7;">
          <el-radio-group v-model="form.resource">
            <el-radio class="nrong" label="富文本"></el-radio>
            <el-radio label="Markdown"></el-radio>
            <!-- <a href="./zhinan.html"><div class="zhuyi"><a>?</a></div></a><br>   -->
            <a class="qiehuan">切换后对新建文章生效</a>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="语言设置">
          <el-radio-group v-model="form.resource">
            <el-radio label="中文简体"></el-radio>
            <el-radio label="中文繁体"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="接收谁的简信">
          <el-radio-group v-model="form.resource">
            <el-radio label="所有人"></el-radio>
            <el-radio label="我关注的人、我发过简信的人" class="hidden-xs-only"></el-radio>
            <el-radio label="我关注的人"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item label="提醒邮件通知">
          <el-radio-group v-model="form.resource">
            <el-radio label="所有动态"></el-radio>
            <el-radio label="每天未读汇总"></el-radio>
            <el-radio label="不接收"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="line"></div>
        <div class="jianju"></div>
        <el-form-item>
          <button class="baocun">保存</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        resource: "",
        radio: 3
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
<style scoped>
.tx {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 1px solid #cfcfcf;
}
.toux {
  margin-left: 30px;
  border: 1px solid #00e41e;
  background-color: #fff;
  color: #00e41e;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 80px;
  height: 30px;
}
.toux:hover {
  background-color: rgb(240, 255, 239);
}
.bangd {
  border: 1px solid #00e41e;
  background-color: #fff;
  color: #00e41e;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  line-height: 25px;
  width: 80px;
  height: 30px;
}
.bangd:hover {
  background-color: rgb(240, 255, 239);
}
.biaoti el-from-item label {
  font-size: 14px;
  color: #b6b6b6;
}
.nrong label {
  font-size: 14px;
  color: black;
}
#nicheng {
  width: 50%;
  height: 30px;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #e7e7e7;
  margin-top: 2%;
}
.jianju {
  height: 25px;
  width: 100%;
}
.zhuyi {
  float: right;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: rgb(116, 116, 116);
}
.zhuyi a {
  display: block;
  text-align: center;
  color: white;
  font-size: 18px;
}
.qiehuan {
  font-size: 12px;
  color: rgb(112, 112, 112);
  display: block;
  margin-top: 20px;
}
.baocun {
  border-radius: 20px;
  background-color: #42c02e;
  border: none;
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: white;
  cursor: pointer;
}
.baocun:hover {
  background-color: #02b302;
}
@media (max-width: 760px) {
  .biaodan {
    font-size: 12px;
  }
  .tx {
    width: 70px;
    height: 70px;
  }
  .toux {
    width: 70px;
    height: 30px;
    font-size: 12px;
  }
  .el-form-item__label {
    font-size: 12px;
  }
  .baocun {
    margin-bottom: 50px;
  }
}
</style>
