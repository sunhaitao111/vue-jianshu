<template>
    <div id="cont-csgs">
        <div id="cont-csgs-nav">
            <a class="ban">
                <div class="banquan">
                    <img src="../../../public/images/ndgs.png" alt="">
                    <a>   年度故事VIP</a>
                </div>
                <div class="banquan">
                    <img src="../../../public/images/yg.png" alt="">
                    <a>   简书员工</a>
                </div>
                <div class="line"></div>
            </a>
            <div class="jieshao">
                <a class="biaot">个人介绍</a>
                <p>简书上的好故事，我！承！包！了！<br><br></p>
                <span>本账号是帮助简书故事获得更多人喜欢的账号，如果您对简书故事曝光策略有任何好的建议，欢迎与我们简信取得联系~</span>
                <span>欢迎来勾搭茶点君<br><a style="color:#1989d1">>>https://www.jianshu.com/p/a126bd0daf47</a></span>
                <wx></wx>
                <!-- <img src="../../../public/images/cdgs-wx.png" alt=""> -->
                <div class="line"></div>
                <div class="xihuan"><i class="el-icon-menu"></i><a> 他关注的专题/文集/连载</a></div>
                <div class="xihuan"><i class="el-icon-thumb"></i><a> 他喜欢的文章</a></div>
                <div class="line"></div>
            </div>
            <div class="zhuanti">
                <a class="biaot">他创建的专题</a>
                <div class="zt">
                    <img src="../../../public/images/yd.webp" alt="">
                    <a> 茶点有毒</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/tg.webp" alt="">
                    <a>向茶点故事投稿</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/yd.webp" alt="">
                    <a>非虚构故事</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/tg.webp" alt="">
                    <a>故事VIP精选书单</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/yd.webp" alt="">
                    <a>故事VIP助力活动</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/tg.webp" alt="">
                    <a>NICE Story Hub</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/yd.webp" alt="">
                    <a>付费短篇故事</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/tg.webp" alt="">
                    <a>423故事节|￥200,000现金寻找好故事</a>
                </div>
                <div class="line"></div>
            </div>
            <div class="zhuanti">
                <a class="biaot">他管理的专题</a>
                <div class="zt">
                    <img src="../../../public/images/yd.webp" alt="">
                    <a>简书贝交易市场</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/tg.webp" alt="">
                    <a>简书投诉和建议中心</a>
                </div>
                <div class="zt">
                    <img src="../../../public/images/yd.webp" alt="">
                    <a>简书专题活动指南</a>
                </div>
                <div class="line"></div>
            </div>
            <div class="tade">
                <a class="biaot">他的文集</a>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 点评直播间</a></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 茶点周末拾海</a></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 简圈冷笑话</a></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 茶点故事 </a><button class="lz">连载</button></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 开胃毒汤 </a></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 经典重读 </a><button class="lz">连载</button></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 茶馆布告 </a><button class="lz">连载</button></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 茶点日报 </a><button class="lz">连载</button></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 奇葩夜市 </a></div>
                <div class="wenji"><i class="el-icon-tickets" ></i><a> 故事VIP精选书单 </a><button class="lz">连载</button></div>                
            </div>
        </div>
    </div>
</template>
<script>
import wx from "./wx-hover"
export default {
    components:{
        wx:wx
    }
}
</script>

<style >
    #cont-csgs-nav{
        width: 97%;
        float: right;
    }
    #cont-csgs-nav .ban{
        text-decoration: none;
    }
    .banquan{
        width: 100%;
        margin-top: 5%;
    }
    .banquan img{
    width: 20px;
    height: 20px;
    }
    .banquan a{
        font-size: 14px;
        color: #000000;
        text-decoration: none;
    }
    .line{
        margin-top: 5%;
        width: 100%;
        height: 1px;
        background-color: #e2e2e2;
    }
    .jieshao{
        width: 100%;
        margin-top: 5%;
    }
    .biaot{
        text-decoration: none;
        font-size: 14px;
        color: #868686;
    }
    .jieshao  p{
        font-size: 14px;
        color: #131313;
        margin-top: 3%;
    }
    .jieshao span{
        font-size: 14px;
        color: #131313;
    }
    .jieshao img{
        padding-top: 10px;
        width: 20px;
    }
    .line{
        margin-top: 6%;
        width: 100%;
        height: 1px;
        background-color: #e2e2e2;
    }
    .xihuan{
        margin-top: 6%;
    }
    .xihuan  a{
        text-decoration: none;
        font-size: 14px;
        color: #131313;
    }
    .zt img{
        border: 1px solid #a7a7a7;
        margin-top: 5px;
        width: 30px;
        height: 30px;
        border-radius: 10%;
        margin-top: 10px;
    }
    .zt a{
        display: block;
        margin-top: -30px;
        text-decoration: none;
        font-size: 14px;
        margin-left: 12%;
        margin-bottom: 10px;
    }
    .tade{
        margin-top: 5%;
    }
    .tade a{
        text-decoration: none;
        color: #868686;
        font-size: 14px;
    }
    .wenji{
        margin-top: 3%;
    }
    .wenji a{
        text-decoration: none;
        color: #131313;
        font-size: 14px;
    }
    .lz{
        width: 30px;
        height: 18px;
        border: 1px solid #a5a5a5;
        background-color: #ffffff;
        border-radius: 3px;
        font-size: 12px;
        color: #868686;
    }
</style>