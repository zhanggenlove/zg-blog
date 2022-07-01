<template>
    <div class="bottom-bar">
        <div class="left-panel">
            <div class="git">
                <i class="gg-git-fork git-branch-icon"></i>
                <span class="git-branch-text">master*</span>
            </div>
            <div class="refresh"><i class="gg-loadbar"></i></div>
            <div class="code">
                <div class="error">
                    <i class="gg-close-o"></i>
                    <span class="num-text">0</span>
                </div>
                <div class="warn">
                    <i class="gg-info"></i>
                    <span class="num-text">0</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
@mixin flex-row {
    display: flex;
}
@mixin pointer {
    cursor: pointer;
}
.bottom-bar {
    height: 34px;
    padding: 0 16px;
    @include flex-row;
    align-items: center;
    justify-content: space-between;
    background-color: $bottombar-bg-color;
}
.left-panel {
    @include flex-row;
    align-items: center;
}
.git {
    @include flex-row;
    @include pointer;
    color: #ffffff;
}
.git-branch-icon {
    font-size: 16px;
}
.git-branch-text {
    font-size: 12px;
    margin-left: 12px;
}
.refresh {
    margin: 0 16px;
    color: #ffffff;
    transform: scale(0.8);
    @include pointer;
}
.code {
    @include flex-row;
    color: #ffffff;
}
.error,.warn {
    @include flex-row;
    align-items: center;
}
.error {
    @include pointer;
    transform: scale(0.78);
    margin-right: 2px;
}
.warn {
    @include pointer;
    transform: scale(0.8);
}
 .num-text {
    margin-left: 6px;
 }
</style>