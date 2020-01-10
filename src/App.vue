<template>
  <div id="app">
    <div id="nav">
      <b-nav tabs>
        <b-nav-item>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to ="/vending">Vending</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  mounted: function () {
    var getUrl = 'https://hcasxqplv7.execute-api.ap-northeast-2.amazonaws.com/dev/api/admin_app/Request_VM_INFO?VM_No=abc001'

    fetch(getUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token 2c0dda3505a9198d9bf2f1eb26d55c29e7bc5a5c'
      }
    })
      .then(response => response.json())
      .then(data => { this.update(data.result) })
  },
  methods: {
    ...mapActions([
      'update'
    ])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
