<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    {{num}}
    <router-view/>
    <el-button type="success" @click="login">登录</el-button>
    el-icon-basketball

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    num () {
      return this.$store.state.num
    }
  },
  methods: {
    login () {
      this.$message({
        message: '登录成功',
        type: 'success'
      })
    }
  }
}
</script>

<style>

</style>
