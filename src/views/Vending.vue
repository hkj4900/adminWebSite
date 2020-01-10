<template>
    <div class="vending">
        <h1>자판기 리스트</h1>
        <b-table hover :fields="fields" :items="vendings">
          <template v-slot:cell(id)="data">
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
        'id',
        'nickname',
        {
          key: 'sales',
          label: 'Total Sales',
          formatter: value => {
            var sum = 0
            for (var i = 0; i < value.length; i++) {
              sum += value[i].value
            }
            return sum
          }
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'vendings'
    ])
  }
}
</script>
