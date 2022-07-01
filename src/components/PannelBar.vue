<template>
    <div class="pannel-bar">
        <div class="header-bar">
            <template  v-for="(item,index) in bars" :key="index">
                <i :class="[item.icon, item.class || '','bar-menu']"></i>
            </template>
        </div>
        <div class="tree"></div>
    </div>
</template>

<script setup lang='ts'>
const bars = [{ name: '目录', icon: 'gg-folder',class: 'active' }, { name: 'git', icon: 'gg-git-fork' },{name: '搜索', icon: 'gg-search'}, { name: '插件', icon: 'gg-edit-unmask' }, { name: '主题', icon: 'gg-moon' }]
</script>

<style lang='scss' scoped>
.pannel-bar {
    height: 100%;
    width: 200px;
    background-color: $pannelbar-bg-color;
}
.header-bar {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: $pannelbar-bg-color;
    color: grey;
}
.bar-menu {
    cursor: pointer;
    transform: scale(0.84);
}
.active {
    color: #fff;
}
</style>