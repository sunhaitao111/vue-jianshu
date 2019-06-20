<template>
  <div class="zssz">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="赞赏功能">
        <el-radio-group v-model="form.resource">
          <el-radio label="开启"></el-radio>
          <el-radio label="关闭"></el-radio>
          <a class="zstx">开启后赞赏按钮将出现在你的文章底部</a>
        </el-radio-group>
      </el-form-item>
      <div class="line"></div>
      <div class="jianju"></div>
      <el-form-item label="赞赏描述">
        <textarea id="zan" rows="4"></textarea>
        <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
      </el-form-item>
      <el-form-item>
        <button class="baocun">保存</button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
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
.zstx {
  font-size: 12px;
  color: rgb(112, 112, 112);
  display: block;
  margin-top: 20px;
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
#zan {
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 100%;
}
.baocun {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #00d800;
  line-height: 25px;
  border: none;
  width: 100px;
  height: 30px;
  color: white;
}
.baocun:hover {
  background-color: #02b302;
}
</style>
