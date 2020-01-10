<!--
<template>
  <div class="detail">
    <h2>Nickname: {{ machine.nickname }}</h2>
    <p>위치: {{ machine.location }}</p>
    <p v-for = "(sale, index) in machine.sales" :key = "index"> {{ sale.name }}: {{ sale.value }} 개</p>
  </div>
</template>
-->

<template>
  <div class="detail">
    <h2>Nickname: {{ machine.VM_Name }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      machine: {}
    }
  },
  computed: {
    ...mapState([
      'vendings',
      'data'
    ])
  },
  mounted () {
    // const machine = this['vendings'][this.$route.params.id]
    const machine = this['data'][this.$route.params.id]
    this.machine = machine
  }
}
</script>
