<template>
  <div class="Home">
    <div class="Home-title">
      <h1>Your Orders</h1>
      <icon class="Home-spinner" v-if="isLoading" name="spinner" scale="2" spin></icon>
    </div>
    <div v-for="order in orders">
      {{ order.order_id }}
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import config from '../config'

import 'vue-awesome/icons/spinner'

export default {
  name: 'Home',
  data() {
    return {
      orders: [],
      isLoading: true
    }
  },
  created() {
    fetch(`${config.api.url}/orders`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${config.api.token}`
      },
    })
      .then(r => r.json())
      .then(data => {
        this.orders = data;
        this.isLoading = false;
      })
  },
  components: {
    Icon
  }
}
</script>

<style scoped>
.Home {
  margin: 0 20vw;
}

.Home-title {
  display: flex;
  align-items: center;
}

.Home-spinner {
  margin-left: 20px;
}
</style>
