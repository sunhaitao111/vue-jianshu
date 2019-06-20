<template>
        <div class="container index">
            <div class="row">
                <div class="col-xs-7 col-xs-offset-1 aside">
                    <div class="board">
                        <a href="">
                            <img src="../../../public/images/jshy.png" alt="">
                        </a>
                        <a href="">
                            <img src="../../../public/images/yxlz.png" alt="">
                        </a>
                        <a href="">
                            <img src="../../../public/images/jsbq.png" alt="">
                        </a>
                        <a href="">
                            <img src="../../../public/images/jsdxt.png" alt="">
                        </a>
                    </div>
                        <a class="col-xs-8 download" href="">
                            <img class="qrcode" src="../../../public/images/ewm.png" alt="">
                            <div class="info">
                                <div class="title">下载简书手机App<i class="el-icon-arrow-right"></i></div>
                                <div class="description">随时随地发现和创作内容</div>
                            </div>
                            <div class="show11">
                                <Icon type="md-arrow-dropdown" />
                                <img src="../../../public/images/ewm.png" alt="">
                            </div>
                        </a>
                        <div class="recommended-author-wrap">
                            <a class="youdao-img-ad ad-1" href="">
                                <span class="ad-badge">广告</span>
                            </a>
                            <div class="recommended-authors">
                                <div class="title">
                                    <span>推荐作者</span>
                                    <a class="page-change" @click="divrefresh1();">
                                        <i class="el-icon-refresh iconfont"></i>换一批
                                    </a>
                                </div>
                                <ul class="list" id="movie11" style="display:block;width:auto">
                                    <li>
                                        <a href="/cdgs" class="avatar">
                                            <img src="../../../public/images/cdgs.jpg" alt="">
                                        </a>
                                        <a href="/cdgs" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            茶点故事a
                                        </a>
                                        <p>写了357.9k字 · 4.4k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p2.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            北美之北a
                                        </a>
                                        <p>写了409.6k字 · 28.9k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p3.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            梅拾璎a
                                        </a>
                                        <p>写了263.7k字 · 24.7k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p4.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            遛遛心情的溜妈a
                                        </a>
                                        <p>写了652.4k字 · 28.9k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p5.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            老沈1a
                                        </a>
                                        <p>写了88.3k字 · 522喜欢</p>
                                    </li>
                                </ul>
                                <ul class="list" id="movie21" style="display:none;width:auto;">
                                    <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p1.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            穿着prada挤地铁b
                                        </a>
                                        <p>写了357.9k字 · 4.4k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p2.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            北美之北b
                                        </a>
                                        <p>写了409.6k字 · 28.9k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p3.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            梅拾璎b
                                        </a>
                                        <p>写了263.7k字 · 24.7k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p4.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            遛遛心情的溜妈b
                                        </a>
                                        <p>写了652.4k字 · 28.9k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p5.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            老沈1b
                                        </a>
                                        <p>写了88.3k字 · 522喜欢</p>
                                    </li>
                                </ul>
                                <ul class="list" id="movie31" style="display:none;width:auto;">
                                    <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p1.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            穿着prada挤地铁c
                                        </a>
                                        <p>写了357.9k字 · 4.4k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p2.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            北美之北c
                                        </a>
                                        <p>写了409.6k字 · 28.9k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p3.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            梅拾璎c
                                        </a>
                                        <p>写了263.7k字 · 24.7k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p4.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            遛遛心情的溜妈c
                                        </a>
                                        <p>写了652.4k字 · 28.9k喜欢</p>
                                    </li>
                                     <li>
                                        <a href="" class="avatar">
                                            <img src="../../../public/images/p5.webp" alt="">
                                        </a>
                                        <a href="" class="follow1">
                                            <i class="el-icon-plus"></i>关注
                                        </a>
                                        <a class="name" href="/cdgs">
                                            老沈1c
                                        </a>
                                        <p>写了88.3k字 · 522喜欢</p>
                                    </li>
                                </ul>
                                <a class="find-more" href="/user">
                                    查看全部
                                    <i class="el-icon-arrow-right"></i>
                                </a>
                                <a class="youdao-img-ad ad-2" href="">
                                    <span class="ad-badge">广告</span>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
     name:'right',
     methods:{
         divrefresh1(){
             var m1=document.getElementById('movie11');
            var m2=document.getElementById('movie21');
            var m3=document.getElementById('movie31');
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
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
div {
    display: block;
}
.container {
    width: auto;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.row {
    margin-left: -15px;
    margin-right: -15px;
}
.aside .board {
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
}
.aside .board img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
}
img{
    vertical-align: middle;
    border: 0;
}
.aside .download {
    display: flex;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
}
.aside .download .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
}
.aside .download .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
}
.download .info .title {
    font-size: 15px;
    color: #333;
}

.aside .download .info .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
}
.youdao-img-ad {
    position: relative;
    border-radius: 4px;
    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 160px;
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: RGB(241, 243, 244);
}
.youdao-img-ad.ad-1 {   
    background-image: url(../../../public/images/bj1.jpg);
}
a{
    text-decoration: none;
        color: #333;
}
.youdao-img-ad .ad-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: #000;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
}
.recommended-authors {
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
}
.recommended-authors .title {
    text-align: left;
}
.recommended-authors .title span {
    font-size: 14px;
    color: #969696;
    font-weight: normal;
}
.recommended-authors .title .page-change {
    display: block;
    float: right;
    font-size: 14px;
    color: #969696;
    font-weight: normal;
}
.recommended-authors .list {
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
}
ul {
    padding-left: 0;
}
.recommended-authors .list li {
    margin-top: 15px;
}
li {
    line-height: 20px;
}
.recommended-authors .list .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
}
.avatar {
    width: 24px;
    height: 24px;
    display: block;
    cursor: pointer;
}
.avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.recommended-authors .list .follow1{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
}
.recommended-authors .list .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
}
.recommended-authors .list p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
}
p {
    margin: 0 0 10px;
}
.recommended-authors .find-more{
    display: block;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
}
.youdao-img-ad.ad-2 {
    margin-top: 15px;
    background-image: url(../../../public/images/bj2.jpg)
}
.download:hover .show11{
    display: block;
}
.show11{
    display: none;
    position: absolute;
    top: 50px;
    width: 180px;
    height: 180px;
    border-radius: 5px;
    background: #fff;
    padding: 10px;
    z-index: 2019;
    border: 1px solid #666;
}
.show11>i{
    font-size: 50px;
    color: #f1f1f1;
    position: absolute;
    left: 35%;
    top: 89%;
}
.show11>img{
    width: 100%;
}
</style>
