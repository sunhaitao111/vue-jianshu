<template>
    <div id="zxj-za">
        <div id="zxj-zb">
            <img src="../../../public/images/zxj06.jpg" alt="">
        </div>
        <div id="zxj-zc">
            <img src="../../../public/images/zxj1.jpg" alt="">
            <div id="zxj-zd">
                zxj666
            </div>
            <div id="zxj-ze">
                <p><span>12</span>关注<span>&nbsp;&nbsp;&nbsp;&nbsp;100000</span>粉丝</p>
            </div>
            <div id="zxj-zj">
                写了0个字，获得了10000个人喜欢。
            </div>
        </div>
        <hr style=" height:10px;color:#f5f5f5;">
        <div style="margin-bottom:10px; border-bottom:1px solid #eeeeee;">
          <div id="tabao" >
                <ul>
                    <li class="layui-col-xs4">
                        <router-link to="/zuozheC" >
                            最新发布</router-link>
                    </li> 
                    <li class="layui-col-xs4">
                        <router-link to="/sjgrzy03" >
                            最新评论</router-link>
                    </li>
                    <li class="layui-col-xs4">
                        <router-link to="/sjgrzy04" >
                            热门</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>  
        <hr>
    </div>
</template>
<style scoped>
a{
    color: #999999;
}
#zxj-za{

}
#zxj-zb img{
    width: 100%;
    height: 150px;
    margin-top: 57px;
}

#zxj-zc img{
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin: -38px 0 0 20px;
}
#zxj-zd{
    margin-left: 32%;
    margin-top:-50px; 
    color: #484848;
    font-size:19px;
    font-weight: 700;
}
#zxj-ze{
    margin-left: 32%;
    margin-top:0px;
}
#zxj-ze p{
    color: #969696;
    font-size: 14px;
}
#zxj-ze p span{
    color: #333;
    font-size: 16px;
    margin-right: 5px;
    font-weight: 500;
}
#zxj-zj{
    margin-top: 15px;
    margin-left: 7%;
    color: #969696;
    font-size: 14px;
    margin-bottom: 10px;
}
#taobao{
   padding-top: 10px;
}
.layui-col-xs4{
    text-align: center;
    font-size: 16px;
    color: #999999;
    margin-top: 10px;
}

</style>