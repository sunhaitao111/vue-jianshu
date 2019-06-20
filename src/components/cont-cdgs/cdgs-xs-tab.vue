<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="xs-tab">
    <el-tab-pane></el-tab-pane>
    <el-tab-pane label="最新发布" name="first"><xswz></xswz></el-tab-pane>
    <el-tab-pane label="最新评论" name="second">最新评论</el-tab-pane>
    <el-tab-pane label="热门" name="third">热门</el-tab-pane>
  </el-tabs>
</template>

<script>
import xswz from './cdgs-xs-wz'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
       xswz:xswz
    }
  };
</script>

<style>
.xs-tab{
    width:100%;
}
.el-tab-pane{
  width:100%;
  margin: 0 auto;
}

</style>
