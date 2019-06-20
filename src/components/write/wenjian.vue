<template>
  <div>
    <div class="title">
      <a class="title-new" @click="chu()">
        <Icon type="md-add"/>新建文集
      </a>
    </div>
    <Form
      ref="formInline"
      :model="formInline"
      :rules="ruleInline"
      inline
      id="form"
      style="display:none"
    >
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="请输入文集名..."></Input>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit('formInline')" class="btn">提交</Button>
        <Button @click="shou()" class="btn1">取消</Button>
      </FormItem>
    </Form>
    <ul class="list">
      <li v-for="(item,index) in msg" :key="index">
        <div class="active" title="点击右边图标即可删除本文集">
          <Icon type="ios-settings" @click="del(index)" title="删除"/>
        </div>
        {{item.title}}
      </li>
    </ul>
    <div class="footer">
      <span>
        <Icon type="md-menu"/>设置
      </span>
      <span>
        遇到问题
        <Icon type="ios-help-circle-outline"/>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      aaaa: false,
      msg: [
        {
          title: "日记本",
          index: 1
        },
        {
          title: "随笔"
        }
      ],
      formInline: {
        user: ""
      },
      ruleInline: {
        user: [{ required: true, message: "文集名不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      console.log();
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
      // console.log(this.formInline.user)
      var obj = {
        title: this.formInline.user
      };
      this.msg.push(obj);
    },
    chu() {
      var form = document.getElementById("form");
      form.style.display = "block";
    },
    shou() {
      var form = document.getElementById("form");
      form.style.display = "none";
    },
    del(index) {
      console.log(index);
      this.msg.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.a {
  display: block;
}
.title {
  padding: 0 15px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.display {
  display: block;
}
.title-new {
  color: #f2f2f2;
  font-size: 14px;
}
#form {
  padding: 0 15px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.btn {
  color: #42c02e;
  border-color: #42c02e;
  background: none;
  border-radius: 16px;
  font-size: 14px;
}
.btn:hover {
  color: #42c02e;
  border-color: #42c02e;
  background: none;
  border-radius: 15px;
  font-size: 14px;
}
.btn1 {
  color: #999;
  border: none;
  background: none;
  font-size: 14px;
}
.btn1:hover {
  color: #999;
  border: none;
  background: none;
  font-size: 14px;
}
.list {
  /* padding: 0 15px; */
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #f2f2f2;
}
.list li {
  width: 100%;
  padding: 0 15px;
  height: 45px;
  line-height: 45px;
  color: #f2f2f2;
  margin-bottom: 0px;
}
.list li:hover .active {
  display: block;
}
.footer {
  position: fixed;
  bottom: -20px;
  overflow: hidden;
  width: 250px;
  height: 50px;
  padding: 0 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #999;
}
.footer span:nth-child(1) {
  display: inline-block;
  float: left;
}
.footer span:nth-child(2) {
  display: inline-block;
  float: right;
}
.active {
  display: none;
  position: absolute;
  left: 0px;
  /* background-color: #666; */
  border-left: 3px solid #ec7259;
  padding-left: 200px;
  z-index: 2000;
}
</style>

