<template>
    <div id="write-left">
        <div class="fanhui">
            <a href="/">回首页</a>
        </div>
       <wenjian></wenjian>
    </div>
</template>
<script>
import wenjian from './wenjian'
export default {
        data () {
            return {
                
            }
        },
        components:{
            wenjian
        }
    }
</script>
<style scoped>
    #write-left{
        position: relative;
        width: 100%;
        height: 790px;
        overflow-y: auto;
        background-color: #404040;
        color: #f2f2f2;
        z-index: 100;
    }
    .fanhui{
        padding: 30px 18px 5px;
        text-align: center;
    }
    .fanhui a{
        display: block;
        font-size: 15px;
        padding: 9px 0;
        color: #ec7259;
        border: 1px solid rgba(236,114,89,.8);
        border-radius: 20px;
        -webkit-transition: border-color .2s ease-in;
        -o-transition: border-color .2s ease-in;
        transition: border-color .2s ease-in;
    }
</style>
