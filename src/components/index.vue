<template>
<div>
<logon v-if="show" class="bgc">
        </logon>
    <el-container>
        <el-header>Header</el-header>
        <el-main>Main
          <el-button type="primary" round @click="logon">登录显示</el-button>
          
        </el-main>
    </el-container>
</div>
</template>
<script>
import logon from './logon.vue'
    export default {
        data(){
            return {
                show:false
            }
        },
         methods:{
             logon(){
                 this.show = true
             }
         },
         components:{
             logon
         }
    }
</script>
<style scoped>
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .bgc{
    background-color: rgba(0, 0, 0, 0.8);
    width:100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 0px;
    z-index: 100;
}
</style>