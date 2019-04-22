<template>
    <div>
        <router-link to="/goods">goods</router-link>
        <router-link to="/user">user</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss" scoped>

</style>