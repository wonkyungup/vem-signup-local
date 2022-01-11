<template>
  <v-btn
      dark
      @click="openLoginPage"
      absolute
      style="top: 50%;left: 50%;"
  >
    <span>View Login Page</span>
  </v-btn>
</template>

<script>
export default {
  name: "ContainerMain",
  methods: {
    openLoginPage() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>
