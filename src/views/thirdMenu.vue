<template>
    <div>
        <Button-group style="margin:10px 0">
            <Button v-for="(item,index) in thirdData" @click="selectThird(index)">{{item}}</Button>
        </Button-group>
    </div>
</template>
<script>
    export default {
        name:'third-menu',
        data(){
            return {
            }
        },
        props:['thirdData'],
        methods:{
            selectThird(index){
                this.$emit('thirdLink',index);
                this.$router.push({path:this.$route.path,query:{id:index}});
            }
        }
    }
</script>
