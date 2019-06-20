<template>
  <div class="container">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
      <a href class="avater">
        <img src="../../../public/images/nav-user.jpg" alt>
      </a>
      <FormItem prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="写下你的评论..."
        ></Input>
      </FormItem>
      <FormItem>
        <span style="float: left;margin: -1px 0 0 42px;font-size: 13px;color: #969696;">点击右侧发送发表</span>
        <Button
          type="primary"
          @click="handleSubmit('formValidate')"
          style="font-size: 16px; color: #fff; border:none; background-color: #3db922; border-radius:20px; margin-left: 8px; float:right; margin-right:10px;"
        >发送</Button>
        <Button
          @click="handleReset('formValidate')"
          style="font-size: 16px; color: #969696; border:none; float:right"
        >取消</Button>
      </FormItem>
    </Form>
    <div class="pl-list" v-for="(item,index) in msg" :key="index">
      <div class="pl-author">
        <a href class="avater">
          <img src="../../../public/images/nav-user.jpg" alt>
        </a>
        <div class="author-user">
          <a href class="author-user-title">小小木</a>
          <span class="author-user-con">{{index+1}}楼 · 2019.06.07 17:48</span>
        </div>
      </div>
      <div class="pl-comment-wrap">
        <p class="pl-comment-wrap-pl">{{item.content}}</p>
        <div class="pl-comment-wrap-group">
          <a style=" margin-right:10px" v-if="show" @click="zan(index)">
            <Icon type="md-thumbs-up"/>8人赞
          </a>
          <a style="color:#333;" v-else @click="zan1(index)">
            <Icon style="color: #f88383;" type="md-thumbs-up"/>9人赞
          </a>
          <a href>
            <Icon type="ios-chatboxes"/>回复
          </a>
          <span class="jubao">
            <span style="margin-right: 15px" @click="shanchu(index)">删除</span>举报
          </span>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
window.onload = function() {
  var text = document.getElementsByTagName("textarea")[0].style;
  text.height = "80px";
  text.minHeight = "80px";
  text.backgroundColor = "hsla(0,0%,71%,.1)";
};
export default {
  data() {
    return {
      show: true,
      msg: [
        {
          content:
            "真正存心赴死的人，不会问！而问了的人，就是有存生的愿望的，只是一时遇到了于己而言看不透或过不去的坎了……！悲哀的是太多无知的人自以为是了……！"
        },
        {
          content: "这是第二条数据"
        }
      ],
      formValidate: {
        desc: ""
      },
      ruleValidate: {
        desc: [
          {
            required: true,
            message: "请输入要评论的内容",
            trigger: "blur"
          },
          {
            type: "string",
            min: 5,
            message: "最少输入5个字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("评论发表成功!");
          var obj = {
            content: this.formValidate.desc
          };
          this.msg.push(obj);
        } else {
          this.$Message.error("回复内容不能为空!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    shanchu(index) {
      console.log(index);
      this.msg.splice(index, 1);
    },
    zan(index) {
      this.show = false;
    },
    zan1(index) {
      this.show = true;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.ivu-form-item-error-tip {
  position: absolute !important;
  left: 42px !important;
}
.avater {
  /* position: relative;
    top: -20px; */
  float: left;
  display: inline-block;
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}
.avater img {
  width: 100%;
  border-radius: 50%;
}
.ivu-input-wrapper {
  width: 94%;
}
.text1 {
  padding: 10px 15px;
  width: 100%;
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
.author-user {
  margin-left: 50px;
}
.author-user .author-user-title {
  display: block;
  color: #2f2f2f;
  font-size: 15px;
}
.author-user-con {
  font-size: 12px;
  color: #969696;
}
.pl-list {
  margin: 10px 0 25px 0;
}
.pl-comment-wrap-pl {
  font-size: 16px;
  color: #818181;
  line-height: 1.5;
  margin: 10px 0 0 0;
}
.pl-comment-wrap-group {
  margin-top: 10px;
}
.pl-comment-wrap-group a {
  color: #969696;
  font-size: 14px;
  cursor: pointer;
}
.pl-comment-wrap-group a:hover {
  color: #333;
}
.pl-comment-wrap-group a:hover i {
  color: #f88383;
}
.pl-comment-wrap-group a:nth-child(2) {
  margin-left: 10px;
}
.pl-comment-wrap-group i {
  font-size: 20px;
  position: relative;
  top: -2px;
}
.pl-comment-wrap-group .jubao {
  display: none;
  font-size: 14px;
  float: right;
}
.pl-list:hover .pl-comment-wrap-group .jubao {
  display: inline-block;
  cursor: pointer;
}
.line {
  width: 100%;
  height: 1px;
  margin: 25px 0 0;
  background: #eae9e9;
}
</style>
