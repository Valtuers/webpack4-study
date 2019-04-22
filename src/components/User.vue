<template>
    <div>
        <h1>这是User组件</h1>
        <router-link to="/user/man">man</router-link>
        <router-link to="/user/woman">woman</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style lang="scss" scoped>

</style>