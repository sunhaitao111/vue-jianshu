<template>
    <el-popover
    trigger="hover">
    <img class="img" src="../../../public/images/cdgs-wm.png"  alt="">
    <el-button slot="reference" id="xx"><img src="../../../public/images/cdgs-wx.png"  alt=""></el-button>
  </el-popover>
</template>
<script>
export default {
    data() {
      return {
        visible: false
            };
        }
    }
</script>
<style>
.img{
width:150px;
}
#xx{
    width: 20px;
    height: 20px;
    border: none;
    padding: 0;
    margin-top: 10px;;
 }
 #xx img{
     margin-top: -20px;
 }

</style>