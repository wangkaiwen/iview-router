<style scoped>
    .main {
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        /*text-align: center;*/
    }
    h2{
        text-align: left;
    }
</style>
<template>
    <div class="main">
        <Menu active-name="0" style="width: 180px;height: 100%;flex: none" @on-select="selectedSecond">
            <Menu-group title="备件管理">
                <Menu-item v-for="(item,index) in secondData" :name="''+index"  :key="index">
                   {{item.name}}
                </Menu-item>
            </Menu-group>
        </Menu>
        <div style="width: 100%;padding: 15px">
            <h2>{{selectedName.name}}</h2>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import util from './libs/util';
    export default {
        data () {
            return {
                secondData:[
                    {name:'备件订单',link:'/a/1/a'},
                    {name:'退货处理',link:'/b/1/a'},
                    {name:'换货处理',link:'/c/1/a'},
                    {name:'旧件返厂',link:'/d/1'},
                    {name:'出入库管理',link:'/e/1'},
                    {name:'库存管理',link:'/f/1'},
                    {name:'备件商品',link:'/g/1'},
                    {name:'备件市场',link:'/h'}],
                selectedName:{name:'备件订单',link:'/a'}
            }
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            selectedSecond:function(index){
                console.log(util)
                this.selectedName=this.secondData[index];
                this.$router.push({path:this.selectedName.link})
            }
        }
    };
</script>