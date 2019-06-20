<template>
<div>
    <nav1></nav1>
    <div style="width:95%;margin:0 auto;
    margin-top:60px;" class="hidden-sm-and-up">
        <el-row :gutter="20">
            <el-col :md="16" :xs="24"><div class="grid-content bg-purple">
                <ConterH></ConterH>
                <ConterL2></ConterL2>
                </div>
            </el-col>
            <el-col :md="8" :xs="0"><div class="grid-content bg-purple-light hidden-xs-only">
                <ConterR></ConterR>
                </div>
            </el-col>
        </el-row>
    </div>

    <div style="width:70%;margin:0 auto;
    margin-top:60px;" class="hidden-xs-only">
        <el-row :gutter="20">
            <el-col :md="16" :xs="24"><div class="grid-content bg-purple">
                <ConterH></ConterH>
                <ConterL2></ConterL2>
                </div>
            </el-col>
            <el-col :md="8" :xs="0"><div class="grid-content bg-purple-light hidden-xs-only">
                <ConterR></ConterR>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
import ConterH from './conter-H'
import ConterL2 from './conter-L2'
import ConterR from './conter-R'
import nav1 from '../../views/nav/nav'
export default {
    name:'app',
    components:{
        ConterH,
        ConterR,
        ConterL2,
        nav1
    }
    
}
</script>
<style lang="scss" scoped>


 
</style>


