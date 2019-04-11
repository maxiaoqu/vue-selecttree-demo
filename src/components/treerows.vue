<template>
    <div class="maxiaoqu-treerows">
        <h4>{{title}}</h4>
        <p>{{message}}</p>
        <div class="maxiaoqu-treerows-slot">
            <slot name="tree"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "treerows",
        props: {
            title: String,
            message: String
        }
    }
</script>

<style scoped lang="less">
    .maxiaoqu-treerows {
        width: 30%;
        height: 444px;
        overflow: hidden;
        position: relative;
        border: 1px solid deepskyblue;
        padding: 10px 5px;
        display: inline-block;
        margin-left: 1.5%;
        float: left;
        margin-bottom: 20px;
        h4{
            font-size: 15px;
            color: #ff6700;
            padding: 0;
            margin: 0;
            position: absolute;
            top: 10px;
            width: 100%;
        }
        &-slot{
            width: 100%;
            height: 100%;
            min-height: 120px;
            overflow: hidden;
            overflow-y: auto;
            background: rgba(240, 248, 255, .4);
        }
    }
</style>