<template>
    <div class="navbar">
        <div>
            <span class="action action-close"></span>
            <span class="action action-mini"></span>
            <span class="action action-full"></span>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.navbar {
    height: 52px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    background-color: $navbar-bg-color;
}

.action {
    display: inline-block;
    width: 12px;
    height: 12px;
    cursor: pointer;
    border-radius: 50%;
}

.action-close {
    background-color: #FF5F57;
}

.action-mini {
    margin: 0 4px;
    background-color: #FFBD2E;
}

.action-full {
    background-color: #28CA42;
}
</style>