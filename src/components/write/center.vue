<template>
  <div>
    <div class="title" @click="tianjia">
      <a class="title-new">
        <Icon type="md-add"/>新建文章
      </a>
    </div>
    <ul class="list">
      <li class="active1">
        {{fatherValue}}
        <div style="font-size:12px; position:relative; top: -25px;" v-html="Content"></div>
      </li>
      <li v-for="(item,index) in msg" :key="index">
        <div class="active" title="点击右边图标即可删除本文集">
          <Icon type="ios-settings" @click="del(index)" title="删除"/>
        </div>
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      aaaa: false,
      content: "",
      msg: [
        {
          title: "文章2"
        },
        {
          title: "文章2"
        },
        {
          title: "文章2"
        }
      ],
      sonValue: this.fatherValue
    };
  },
  props: {
    fatherValue: {
      required: true
    },
    Content: {
      required: true
    }
  },
  watch: {
    sonValue(newValue, oldvalue) {
      this.$emit("update:fatherValue", newValue);
    },
    fatherValue(newValue) {
      this.sonValue = newValue;
    }
  },
  methods: {
    del(index) {
      console.log(index);
      this.msg.splice(index, 1);
    },
    tianjia() {
      var arr = {
        title: "文章"
      };
      // console.log(++i)

      // console.log(arr)
      this.msg.push(arr);
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
  color: #333;
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
  color: #333;
}
.list li {
  width: 100%;
  padding: 0 15px;
  height: 55px;
  line-height: 45px;
  color: #333;
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
.active1 {
  position: absolute;
  left: 0px;
  background-color: rgb(190, 190, 190);
  border-left: 3px solid #ec7259;
  padding-left: 200px;
  z-index: 2000;
}
</style>
