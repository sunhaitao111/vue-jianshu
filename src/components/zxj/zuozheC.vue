<template>
<div>
    <nav1></nav1>
    <div style="width:65%;margin:0 auto;
    margin-top:60px;" class="hidden-xs-only">
        <el-row :gutter="20">
            <el-col :md="16"><div class="grid-content bg-purple">
                <ConterH></ConterH>
                <ConterL></ConterL>
                </div>
            </el-col>
            <el-col :md="8"><div class="grid-content bg-purple-light">
                <ConterR></ConterR>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="hidden-sm-and-up">
        <sjgrzy></sjgrzy>
        <div>
            <router-view/>
        </div>
    </div>
</div>
</template>
<script>
import sjgrzy from './sjgrzy'
import ConterH from './conter-H'
import ConterL from './conter-L'
import ConterR from './conter-R'
import nav1 from '../../views/nav/nav'
import 'element-ui/lib/theme-chalk/display.css';
export default {
    name:'app',
    components:{
        ConterH,
        ConterR,
        ConterL,
        nav1,
        sjgrzy
    }
    
}
</script>
<style lang="scss" scoped>


 
</style>


