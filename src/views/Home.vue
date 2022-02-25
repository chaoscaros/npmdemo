<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-row>
      <el-button type="primary">111</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {HelloWorld} from "testzcx01"
// import HelloWorld from "@/components/HelloWorld/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
