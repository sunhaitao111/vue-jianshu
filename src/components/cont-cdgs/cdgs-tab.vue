<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top: 25px;width: 95%;">
    <el-tab-pane name="first">
      <span slot="label" style="  color: #969696;font-size: 16px;font-weight: 700;" ><i class="el-icon-tickets" ></i>文章</span>
     <wz></wz>
  </el-tab-pane>
    <el-tab-pane>
      <span slot="label"  style="  color: #969696;font-size: 16px;font-weight: 700;"><i class="el-icon-message-solid"></i>动态</span>
      <wz1></wz1>
  </el-tab-pane>
    <el-tab-pane>
      <span slot="label"  style="  color: #969696;font-size: 16px;font-weight: 700;"><i class="el-icon-chat-dot-round"></i>最新评论</span>
      <wz></wz>
  </el-tab-pane>
    <el-tab-pane>
      <span slot="label"  style="  color: #969696;font-size: 16px;font-weight: 700;"><i class="el-icon-s-opportunity"></i>热门</span>
     <wz></wz>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import wz from './wenzhang'
import wz1 from './wenzhang1'
 export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    components:{
      wz,
      wz1
    }
  }
</script>
<style scoped>
.span{
  width: 95%;
  margin-top: 20px;
}
</style>