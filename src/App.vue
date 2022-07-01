<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import BottomBar from './components/BottomBar.vue'
import PannelBar from './components/PannelBar.vue';
</script>

<template>
  <div class="main">
    <Navbar></Navbar>
    <div class="content">
      <PannelBar></PannelBar>
      <div class="router-view">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<style>
@import url('./assets/common/reset.scss');

.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex: 1;
}
.router-view {
  flex: 1;
}
</style>
