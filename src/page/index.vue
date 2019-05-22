<template>
    <div @click="goto">{{index}}</div>
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

