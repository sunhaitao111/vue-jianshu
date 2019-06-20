<template>
    <div class="login">
        <div class="logo">
            <a href="/">
                <img width="100px" src="../../../public/images/logo.png" alt="">
            </a>
        </div>
        <div class="main">
            <h4 class="title">
                <div class="normal-title">
                    <a  href="./login">登录</a>
                    <b>·</b>
                    <a class="active" href="./logon">注册</a>
                </div>
            </h4>
            <div class="form">
                <div class="input">
                    <input placeholder="你的昵称" type="text">
                    <i class="el-icon-s-custom"></i>
                </div>
                <div class="input">
                    <input placeholder="手机号" type="text">
                    <i class="el-icon-phone"></i>
                </div>
                <div class="input">
                    <input placeholder="设置密码" type="text">
                    <i class="el-icon-lock"></i>
                </div>
                <div class="btn">
                    <el-button type="primary" round>注册</el-button>
                </div>
            </div>
            <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>
            <div class="more-sign">
                <div class="work-intro">
                    <div class="title">
                        <h2 class="title-text"><span>社交帐号直接注册</span></h2>
                    </div>
                </div>
                <ul>
                    <li>
                        <a class="weibo" id="">
                        <i class="el-icon-platform-eleme"></i>
                        </a>
                    </li>
                    <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="el-icon-user-solid"></i></a></li>
                </ul>

            <div class="weibo-geetest-captcha"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            radio: '1'
        }
  }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .login{
        height: 100%;
        min-height: 750px;
        text-align: center;
        font-size: 14px;
        background-color: #f1f1f1;
    }
    .logo{
        position: absolute;
        top: 56px;
        margin-left: 50px;
    }
    .main{
        width: 400px;
        height: 700px;
        margin: 60px auto 0;
        padding: 50px 50px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        vertical-align: middle;
        display: inline-block;
    }
    .main .title{
        margin: 0 auto 30px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
    }
    .main .title a{
        padding: 10px;
        text-decoration: none;
        font-size: 18px;
        color: #969696;
    }
    .main .title a.active{
        color: red;
        border-bottom: 3px solid red; 
    }
    .form{
        width:300px;
        text-align: center;
        margin: 0 auto;
    }
    .input input{
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        outline:none;
        /* margin-left: 15px; */
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
    }
    .input i{
        display: inline;
        position: relative;
        top: -35px;
        left: -130px;
        font-size: 18px;
        color: #969696;
    }
    .remember-btn{
        float: left;
        margin: 15px 0px;
    }
    .remember-btn span{
        margin-left: 5px;
        font-size: 15px;
        color: #969696;
        vertical-align: middle;
    }
    .forget-btn{
        float: right;
        position: relative;
        margin: 13px 0px;
        font-size: 14px;
    }
    .forget-btn a{
        text-decoration: none;
        color: #999;
    }
    .btn{
        width: 100%;
        margin-top: 35px;
    }
    .btn button{
        width: 100%;
        background: #187cb7;
        font-size: 18px;
    }
    .more-sign{
        margin-top: 50px;
    }
    .more-sign h6{
        position: relative;
        margin: 0 0 10px;
        font-size: 12px;
        color: #b5b5b5;
    }
    .more-sign ul{
        margin-bottom: 10px;
        list-style: none;
        margin: 15px 0 0 100px;
        overflow: hidden;
    }
    .more-sign li{
        float: left;
        width: 30px;
        margin-right: 30px;
        color: green;
        line-height: 25px;
    }
    .more-sign li i{
        font-size: 30px;
        color: green;
        /* margin-right: 50px; */
    }
    .title-text span {
    display: block;      /*设置为块级元素会独占一行形成上下居中的效果*/
    position: relative;  /*定位横线（当横线的父元素）*/
    color: #999;      /*居中文字的颜色*/
    text-align: center; 
    font-size: 12px;
    font-weight: normal;
    } 
    .title-text span:before, .title-text span:after { 
        content: ''; 
        position: absolute;   /*定位背景横线的位置*/
        top: 50%; 
        background: #8c8c8c;   /*背景横线颜色*/
        width: 25%;            /*单侧横线的长度*/
        height: 1px; 
    } 
    .title-text span:before { 
        left: 3%;              /*调整背景横线的左右距离*/
    } 
    .title-text span:after { 
        right: 3%; 
    }
    .sign-up-msg{
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
    }
    .sign-up-msg a{
        text-decoration: none;
    }
</style>
