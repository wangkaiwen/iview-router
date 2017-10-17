<style scoped>
    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }
    .slide-enter, .slide-leave-to /* .slide-leave-active in below version 2.1.8 */ {
        opacity: 0;
        height: 0;
    }
</style>
<template>
    <div>
        <Form>
            <Row :gutter="8">
                <Col span="6">
                <Form-item>
                    <Input v-model="currentVal">
                    <Button slot="append" @click="search">订单搜索</Button>
                    </Input>
                </Form-item>
                </Col>

                <Col span="6">
                <Form-item>
                    <Button type="text" @click="showExact = !showExact">精确搜索条件
                <Icon type="chevron-down"></Icon>
                    </Button>
                </Form-item>
                </Col>
            </Row>
        </Form>
        
        <transition name="slide">
            <Form :label-width="70" style="overflow:hidden" v-show="showExact">
                <Row>
                    <!-- 文本输入框 -->
                    <Col span="5">
                    <Form-item label="师傅名称">
                        <Input></Input>
                    </Form-item>
                    </Col>
                    <!-- 单选框 -->
                    <Col span="5">
                    <Form-item label="备件类型">
                        <Select placeholder="请选择">
                            <Option value="baonei">保内</Option>
                            <Option value="baowai">保外</Option>
                        </Select>
                    </Form-item>
                    </Col>

                    <!-- 日期控件 -->
                    <Col span="5">
                    <Form-item label="提交时间">
                        <Row>
                            <Col>
                            <Date-picker type="date" placeholder="选择日期"></Date-picker>
                            </Col>
                        </Row>
                    </Form-item>
                    </Col>

                    <Col span="5">
                    <Form-item label="至" :label-width="40">
                        <Row>
                            <Col>
                            <Date-picker type="date" placeholder="选择日期"></Date-picker>
                            </Col>
                        </Row>
                    </Form-item>
                    </Col>

                    <Col>
                        <Button type="primary">
                            查询
                        </Button>
                    </Col>

                </Row>
            </Form>
        </transition>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                currentVal: '',
                showExact: true
            }
        },
        methods: {
            search () {
                console.log(this.currentVal);
            }
        }


    }


</script>