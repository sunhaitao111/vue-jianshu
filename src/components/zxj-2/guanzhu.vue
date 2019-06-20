<template>
<div>
    <nav11 />
    <div id="zxj-ba" class="hidden-xs-only">
        <el-row>
            <el-col :md="6" :xs="5"><div class="grid-content bg-purple">
                <guanzhu1/>
            </div></el-col>
            <el-col :md="18" :xs="19"><div class="grid-content bg-purple-light">
                <router-view />
            </div></el-col>
        </el-row>
    </div>
    <div class="hidden-sm-and-up" style="width:95%;margin:0 auto;">
        <guanzhu1/>
    </div>
    <div class="hidden-sm-and-up" style="width:95%;margin:0 auto;">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import guanzhu1 from './guanzhu1'
import nav11 from '../../views/nav/nav'
import 'element-ui/lib/theme-chalk/display.css';
export default {
    components:{
        guanzhu1,
        nav11
    }
}
</script>

<style scoped>
#zxj-ba{
    width: 65%;
    margin: 60px auto 0;
}
.bg-purple{
    margin-top: 40px;
    padding-right: 5px;
    border-right:1px solid #d9d9d9;
}
.bg-purple-light{
    padding-left: 20px;
    margin-top: 40px;
}
@media screen and (max-width:770px) {
    #zxj-ba{
        width: 100%;
    }
    
}
</style>


