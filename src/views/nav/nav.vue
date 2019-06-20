<template>
<div>
    <nav2 class="hidden-sm-and-up"/>
<div id="nav" >
    <!-- 移动端导航条 -->
    <el-row class="hidden-sm-and-up">
        <el-col :xs="23" :push="1" style="line-height:56px">
            <el-row style="margin-top:0px;">
                <el-col :xs="5"><a href="/"><img width="56" src="../../../public/images/logo.png" alt=""></a></el-col>
                <el-col :xs="11" style="font-size: 16px;color: #333;">创作你的创作</el-col>
                <el-col :xs="8" style="font-size: 16px;color: #ea6f5a;">免费下载 <i class="el-icon-arrow-right"></i></el-col>
            </el-row>
        </el-col>
    </el-row>
    <!-- pc端导航条 -->
    <el-row :gutter="20" style="width:100%" class="hidden-xs-only">
        <el-col :span="4"><div class="logo">
            <a href="/"><img width="100" src="../../../public/images/logo.png" alt=""></a>
        </div></el-col>
        <el-col :span="13"><div class="list">
            <ul>
                <!-- <li><a href="/" class="active">
                    <i class="el-icon-discover"></i>
                    <span>首页</span>
                </a></li>
                <li class="app"><a href="">
                    <i class="el-icon-mobile-phone"></i>
                    <span>下载App</span>
                </a></li> -->
                <li class="app"><a href="/" :class="this.$route.path === '/' ?  'active' : ''">
                    <Icon type="md-compass" style="margin-top:-8px;" />
                    <span>发现</span>
                </a></li>
                <li class="app"><a href="/gzz" :class="this.$route.path === '/gzz' ?  'active' : ''">
                    <i class="el-icon-edit-outline"></i>
                    <span>关注</span>
                </a></li>
                <li class="app item"><a href="/xx" :class="this.$route.path === '/xx' ?  'active' : ''">
                    <i class="el-icon-bell"></i>
                    <span>消息</span>
                </a>
                    <ul class="item-list">
                        <li><a href="">
                            <Icon type="md-text" />
                            评论
                        </a></li>
                        <li><a href="">
                            <i class="el-icon-message"></i>
                            简信
                        </a></li>
                        <li><a href="">
                            <i class="el-icon-upload"></i>
                            投稿请求
                        </a></li>
                        <li><a href="">
                            <Icon type="md-heart-outline" />
                            喜欢和赞
                        </a></li>
                        <li><a href="">
                            <Icon type="md-person-add" />
                            关注
                        </a></li>
                        <li><a href="">
                            <Icon type="logo-bitcoin" />
                            赞赏和付费
                        </a></li>
                        <li><a href="">
                            <Icon type="ios-more" />
                            其他提醒
                        </a></li>
                    </ul>
                </li>
                <li>
                    <input type="text" placeholder="搜索" @click="Search_con()">
                    <i class="el-icon-search a"></i>
                    <div v-show="isshow" class="nav-list">
                        <div class="nav-list-title">
                            <div class="sanjiao"></div>
                            <span>热门搜索</span>
                            <a class="nav-list-title-a" @click="divrefresh();">
                                <i class="el-icon-refresh iconfont"></i>换一批
                            </a>
                        </div>
                        <ul id="movie1" style="display:block;">
                            <li><a href="" class="nav-list-a">php</a></li>
                            <li><a href="" class="nav-list-a">c语言</a></li>
                            <li><a href="" class="nav-list-a">vue</a></li>
                            <li><a href="" class="nav-list-a">layui</a></li>
                            <li><a href="" class="nav-list-a">Angular</a></li>
                            <li><a href="" class="nav-list-a">React</a></li>
                            <li><a href="" class="nav-list-a">Bootstrap</a></li>
                            <li><a href="" class="nav-list-a">Ajax</a></li>
                            <li><a href="" class="nav-list-a">gulp</a></li>
                        </ul>
                        <ul id="movie2" style="display:none;">
                            <li><a href="" class="nav-list-a">php1</a></li>
                            <li><a href="" class="nav-list-a">c语言1</a></li>
                            <li><a href="" class="nav-list-a">vue1</a></li>
                            <li><a href="" class="nav-list-a">layui1</a></li>
                            <li><a href="" class="nav-list-a">Angular1</a></li>
                            <li><a href="" class="nav-list-a">React1</a></li>
                            <li><a href="" class="nav-list-a">Bootstrap1</a></li>
                            <li><a href="" class="nav-list-a">Ajax1</a></li>
                            <li><a href="" class="nav-list-a">gulp1</a></li>
                        </ul>
                        <ul id="movie3" style="display:none;">
                            <li><a href="" class="nav-list-a">php2</a></li>
                            <li><a href="" class="nav-list-a">c语言2</a></li>
                            <li><a href="" class="nav-list-a">vue2</a></li>
                            <li><a href="" class="nav-list-a">layui2</a></li>
                            <li><a href="" class="nav-list-a">Angular2</a></li>
                            <li><a href="" class="nav-list-a">React2</a></li>
                            <li><a href="" class="nav-list-a">Bootstrap2</a></li>
                            <li><a href="" class="nav-list-a">Ajax2</a></li>
                            <li><a href="" class="nav-list-a">gulp2</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div></el-col>
        <el-col :span="7"><div class="grid-content bg-purple">
            <div class="style-mode">
                <Dropdown trigger="click" style="margin-left: 0px">
        <a href="javascript:void(0)">
            Aa
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>
                <el-switch
                    @change="focu($event)"
                    v-model="value1"
                    active-text="夜间模式"
                    inactive-text="白天模式">
                    </el-switch>
            </DropdownItem>
            <DropdownItem>
                <el-switch
                    @change="font($event)"
                    v-model="value2"
                    active-text="宋体"
                    inactive-text="黑体">
                    </el-switch>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
                <!-- <a @click="yejian1">Aa</a>
                <div class="Night-pattern" v-show="yejian"> -->
                    <!-- <a @click="yejian">yejian</a>
                    <a @click="quxiao">quxiao</a> -->
                    <!-- <el-switch
                    @change="focu($event)"
                    v-model="value1"
                    active-text="夜间模式"
                    inactive-text="白天模式">
                    </el-switch><br>
                    <el-switch
                    @change="font($event)"
                    v-model="value2"
                    active-text="宋体"
                    inactive-text="黑体">
                    </el-switch>
                </div> -->
            </div>
            <div class="zuanshi">
                <a href=""><img width="57px" src="../../../public/images/zuanshi.png" alt=""></a>
            </div>
                <!-- <a href="/login" class="login">登录</a>
                <a href="/logon" class="logon">注册</a> -->
                
                <div class="user">
                    <a class="user-a">
                        <img width="40px" src="../../../public/images/nav-user.jpg" alt="">
                        <Icon type="md-arrow-dropdown" />
                    </a>
                    <ul class="user-list">
                        <li><a href="/zuozheC">
                            <Icon type="md-person" />
                            我的主页
                        </a></li>
                        <li><a href="/sc">
                            <Icon type="md-bookmark" />
                            收藏文章
                        </a></li>
                        <li><a href="/xihuan">
                            <Icon type="md-heart" />
                            喜欢的文章
                        </a></li>
                        <li><a href="/gm">
                            <Icon type="logo-yen" />
                            已购内容
                        </a></li>
                        <li><a href="/qb">
                            <Icon type="ios-folder-open" />
                            我的钱包
                        </a></li>
                        <li><a href="/shezhi">
                            <Icon type="md-settings" />
                            设置
                        </a></li>
                        <li><a href="/help">
                            <Icon type="md-text" />
                            帮助与反馈
                        </a></li>
                        <li><a href="">
                            <Icon type="md-exit" />
                            退出
                        </a></li>
                    </ul>
                </div>
                <a href="/write" class="write"><i class="el-icon-sugar"></i>写文章</a>
        </div></el-col>
    </el-row>
</div>
</div>
</template>
<script>
import nav2 from './nav2'
import 'element-ui/lib/theme-chalk/display.css'
export default {
    data(){
        return{
            isshow:false,
            value1: false,
            value2:false,
            yejian:false
        }
    },
    methods:{
        Search_con(){
            this.isshow = !this.isshow
        },
        yejian1(){
            this.yejian = !this.yejian
        },
        divrefresh(){
            var m1=document.getElementById('movie1');
            var m2=document.getElementById('movie2');
            var m3=document.getElementById('movie3');
            if(m1.style.display=='block'){
                m1.style.display='none';
                m2.style.display='block';
            }else if(m2.style.display=='block'){
                m2.style.display='none';
                m3.style.display='block';
            }else{
                m3.style.display='none';
                m1.style.display='block';
            }
        },
        focu($event){
            if($event==true){
                var div = document.createElement('cover');
                div.id="cover"
                div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid rgba(0,0,0,0.5);z-index:99999;');
                document.body.appendChild(div);
            }else if($event==false){
                var div = document.getElementById('cover');
                div.parentNode.removeChild(div);
            }
        },
        font($event){
            if($event==true){
                document.getElementsByTagName("body")[0].className="song";
            }else if($event==false){
                document.getElementsByTagName("body")[0].className="hei";
            }
        },
    },
    components:{
        nav2
    }
}
</script>

<style>
    *{
  padding: 0;
  margin: 0 ;
  text-decoration: none;
  list-style: none;
}
.el-switch__label *{
    width: 100px;
    text-align: center;
}
.hei{
    font-family:  Microsoft YaHei;
}
.song{
    font-family: FangSong;
}
#nav{
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 56px;
    line-height: 56px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
}
.logo{
    height: 56px;
    line-height: 56px;
    padding-top: 15px;
    box-sizing: border-box;
}
.logo img{
    display: block;
    width: 25%;
    margin:0 auto 0;
}
.list{
    width: 100%;
}
.list ul{
    float: left;
}
.list ul .app a:hover{
    background: rgb(233, 232, 232);
    /* height: 56px; */
}
.list>ul>li{
    float: left;
    margin-right: 10px;
    padding-top: 15px;
    border: none;
}
.list ul li input{
    outline: none;
    padding: 0 40px 0 20px;
    width: 180px;
    height: 36px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    transition: all 1s linear;
    background: #eee;
}
.list ul li input:hover{
    width: 240px;
    transition: all 1s linear;
}
.list ul li .a{
    font-size: 25px;
    position: relative;
    top: 5px;
    left: -35px;
    color: #9b9999;
}
.list ul a{
    height: 56px;
    line-height: 26px;
    padding: 15px;
    color: #333;
}
.list ul a.active{
    color: red;
}
.list ul a i{
    position: relative;
    top: 3px;
    font-size: 20px;
    margin-right: 10px;
}
.list ul a span{
    font-size: 16px;
}
.style-mode{
    display: inline-block;
}
.style-mode a{
    font-size: 20px;
    color: #969696;
}
.zuanshi{
    display: inline-block;
    width: 20%;
}
.zuanshi img{
    position: relative;
    top: -5px;
    left: 20px;
}
.login{
    display: inline-block;
    font-size: 16px;
    color: #969696;
    margin-left: 35px;
}
.logon{
    display: inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin: 0 30px;
    font-weight: 500;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
}
.logon:hover{
    background: #fdefec;
}
.write{
    position: relative;
    top: -7px;
    display: inline-block;
    width: 100px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    margin: 0;
    margin-left: 20px;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
}
.item{
    height: 55px;
}
.item:hover .item-list{
    display: block;
}
.item-list{
    display: none;
    position: fixed;
    top: 55px;
    left: 30%;
    z-index: 2005;
    width: 200px;
    overflow: hidden;
    border-radius: 0 0 4px 4px;
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    background-color: rgb(255, 255, 255);
    -webkit-filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
}
.item-list li{
    width: 100%;
    margin-top: 0;
    padding: 0;
}
.item-list li a{
    height: auto;
    display: inline-block;
    width: 100%;
    font-size: 16px;
}
.item-list li a i{
    font-size: 22px;
    margin-right: 20px;
    color:#ea6f5a
}
.nav-list{
    position: fixed;
    top: 10%;
    width: 250px;
    padding: 10px;
    background: #fff;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.nav-list .sanjiao{
    position: absolute;
    left: 5%;
    width: 15px;
    height: 15px;
    background: rgb(255, 255, 255);
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -8px;
    z-index: -1;
}
.nav-list .nav-list-a{
    height: auto;
    padding: 0 5px;
    margin: 0;
    border-radius: 5px;
    display: inline-block;
    border: 1px solid #cccccc;
}
.nav-list .nav-list-a:hover{
    border: 1px solid #333;
}
.nav-list-title{
    overflow: hidden;
    line-height: 26px;
}
.nav-list-title span{
    float: left;
    font-size: 14px;
    color: #969696;
}
.nav-list-title .nav-list-title-a{
    float: right;
    font-size: 13px;
    height: auto;
    color: #969696;
    padding: 0;
    background-color: transparent;
    border-width: 0;
}
.nav-list-title .nav-list-title-a i{
    font-size: 16px;
}
.nav-list>ul>li{
    float: left;
    margin: 10px 10px 0 0;
}
.user{
    display: inline-block;
    width: 80px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
}
.user:hover .user-list{
    display: block;
}
.user .user-a{
    position: relative;
    top: 9px;
    display: inherit;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}
.user .user-a i{
    position: fixed;
    top: 20px;
    font-size: 20px;
    color: #999;
}
.user-list{
    display: none;
    position: fixed;
    top: 55px;
    left: 75%;
    z-index: 2005;
    width: 160px;
    overflow: hidden;
    border-radius: 0 0 4px 4px;
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    background-color: rgb(255, 255, 255);
    -webkit-filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
}
.user-list>li{
    line-height: 20px;
}
.user-list>li:hover{
    background: rgb(233, 232, 232);
}
.user-list>li>a{
    display: block;
    padding: 11px 20px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    line-height: 1.42857;
    color: #333;
    white-space: nowrap;
}
.user-list>li>a i{
    margin-right: 15px;
    font-size: 22px;
    color: #ea6f5a;
    float: left;
}
.Night-pattern{
    position: absolute;
    top: 56px;
    z-index: 1;
    padding: 20px 20px 20px 24px;
    margin-left: -80px;
    min-width: 235px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
    -webkit-filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
}
</style>
