<template>
<div style="background:hsla(0,0%,71%,.1); padding-bottom:95px;">
    <nav1 />
    <div class="follow-detail">
        <a href="/zuozheC" class="jun10">
        <div class="info">
            <a href="" class="avatar">
                <img src="../../../public/images/nav-user.jpg" alt="">
            </a>
            <!-- <a href="" class="btn btn-success follow">
                <i class="el-icon-plus"></i>
                <span>关注</span>
            </a> -->
            <i class="el-icon-arrow-right btn"></i>
            <a href="" class="title">今晚打TY</a>
            <P class="con">关注：13 <span style="margin-left:15px;">粉丝：13</span></P>
        </div>
        </a>
    </div>
    <!-- <div class="content">
        <ul class="one">
            <Icon type="md-person" class="ty"/>
            <span>我的主页</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
    </div> -->
     <div class="content">
        <a class="jun10" href="/sc">
        <ul class="one">
            <Icon type="md-bookmark" class="ty"/>
            <span>我的收藏</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
        </a>
    </div>
     <div class="content">
         <a class="jun10" href="/xihuan">
        <ul class="one">
            <Icon type="md-heart" class="ty"/>
            <span>我的喜欢</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
        </a>
    </div>
     <div class="content" style="margin-top:0; border-top:none;">
         <a class="jun10" href="/gm">
        <ul class="one">
            <Icon type="logo-yen" class="ty"/>
            <span>已购内容</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
        </a>
    </div>
     <div class="content" style="margin-top:0; border-top:none;">
         <a class="jun10" href="/qb">
        <ul class="one">
            <Icon type="ios-folder-open" class="ty"/>
            <span>我的钱包</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
        </a>
    </div>
     <div class="content" style="margin-top:0; border-top:none;">
         <a class="jun10" href="/shezhi">
        <ul class="one">
            <Icon type="md-settings" class="ty"/>
            <span>我的设置</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
        </a>
    </div>
     <div class="content">
         <a class="jun10" href="/help">
        <ul class="one">
            <Icon type="md-text" class="ty"/>
            <span>帮助与反馈</span>
            <i class="el-icon-arrow-right ty2"></i>
        </ul>
        </a>
    </div>
    

</div>
</template>


<style>
.one span{
    margin-left: 10px;
}
.one .ty2{
    float: right;
    
}
.one .ty{
    color: #ea6f5a;
    font-size: 18px;
}
.content{
    padding: 15px 16px 15px 20px;
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    font-size: 14px;
}
.follow-detail {
    padding: 25px 15px 25px;
    background-color: #FFF;
    border: 1px solid #e1e1e1;
    font-size: 16px;
    margin-top: 55px;
}
.jun10{
    color: #333;
}
.con{
    font-size: 12px;
}
.note .post .follow-detail .info {
    min-height: 47px;
}
.follow-detail .avatar {
    float: left;
    margin-right: 10px;
    width: 48px;
    height: 48px;
}
.avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.info .btn{
    float: right;
    font-size: 14px;
    padding-top: 20px;
}
.title {
    margin-right: 3px;
    font-size: 16px;
    line-height: 1.8;
    vertical-align: middle;
    color: #333;
}
</style>




<script>
import nav1 from '../../views/nav/nav'
export default {
    components:{
        nav1
    }
}
</script>




