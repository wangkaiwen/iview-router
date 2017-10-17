<template>
    <div>
        <Menu mode="horizontal" active-name="0" v-if="$route.params.first!='h'">
            <Menu-item :name="''+index" v-for="(item,index) in thirdData" :key="index">
                <router-link :to="item.links" tag="p">{{item.name}}</router-link>
            </Menu-item>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                thirdData:[
                    {name:'自营备件单',links:'/a/1/a'},
                    {name:'品牌商备件单',links:'/a/2/a'},
                    {name:'师傅补库单',links:'/a/3/a'},
                    {name:'网点补库单',links:'/a/4/a'},
                ],
            }
        },
        created(){

        },
        methods: {}
    };
</script>