<template>
  <div class="about">
    <h1>This is an about page</h1>
        <b-table hover :fields="fields" :items="data">
          <template v-slot:cell(vm_no)="data">
            <router-link :to="`/detail/${data.index}`">{{ data.value }}</router-link>
          </template>
        </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      fields: [
        'VM_No',
        'VM_Name',
        'TotalSales',
        'TotalCount'
      ]
    }
  },
  computed: {
    ...mapState([
      'data'
    ])
  }
}
</script>
