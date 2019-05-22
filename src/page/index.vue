<template>
    <div @click="goto" class="sss">{{index}}</div>
</template>
<script>
export default {
    data(){
        return {
            index:'test'
        }
    },
    methods:{
        goto(){
            this.$router.push('/form')
        }
    }
}
</script>
<style lang="less">
.sss{
    color: #000;
}
</style>

