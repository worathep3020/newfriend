<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <payment msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import payment from '@/components/payment.vue'

export default {
  name: 'Home',
  components: {
    payment
  }
}
</script>
