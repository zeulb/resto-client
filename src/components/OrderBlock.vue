<template>
  <div class="OrderBlock">
    <div class="OrderBlock-summary">
      <div class="OrderBlock-orderId">
        {{ order_id }}
      </div>
      <div class="OrderBlock-delivered">
        <icon class="OrderBlock-deliveredIcon" name="check"></icon>
        Delivered
      </div>
      
      <div class="OrderBlock-totalCost">
        {{ totalCost }}
      </div>
      <div class="OrderBlock-deliveryBlock">
        <div class="OrderBlock-deliveryDateTime">
          <icon class="OrderBlock-deliveryDateTimeIcon" name="calendar"></icon>
          {{ delivery_date }}
        </div>
        <div class="OrderBlock-deliveryDateTime">
          <icon class="OrderBlock-deliveryDateTimeIcon" name="clock-o"></icon>
          {{ delivery_time }}
        </div>
      </div>
      <button class="OrderBlock-iconButton" v-on:click="onChevronToggle" >
        <icon v-if="expanded" class="OrderBlock-chevronIcon" name="chevron-up" />
        <icon v-else class="OrderBlock-chevronIcon" name="chevron-down" />
      </button>
    </div>
    <OrderDetails v-if="expanded" :order_id="order_id" :ratable_id="ratable_id" :feedback_submitted="feedback_submitted" :order_items="order_items" />
  </div>
</template>

<script>
import OrderDetails from './OrderDetails'
import Icon from 'vue-awesome/components/Icon'
import currencyFormatter from 'currency-formatter';

import 'vue-awesome/icons/clock-o'
import 'vue-awesome/icons/calendar'
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/chevron-down'
import 'vue-awesome/icons/chevron-up'

export default {
  props: {
    order_id: String,
    ratable_id: Number,
    delivery_date: String,
    delivery_time: String,
    feedback_submitted: Boolean,
    order_items: Array
  },
  name: 'OrderBlock',
  components: {
    Icon,
    OrderDetails
  },
  computed: {
    totalCost: function () {
      return currencyFormatter.format(
        this.order_items.reduce((acc, item) => acc + item.total_price, 0) / 100.0,
        { code: 'SGD' }
      );
    }
  },
  methods: {
    onChevronToggle() {
      this.expanded = !this.expanded;
    }
  },
  data() {
    return {
      expanded: false
    };
  }
}
</script>

<style scoped>
.OrderBlock {
  margin: 10px;
  padding: 10px 20px;
  border: thin solid grey;
  border-radius: 5px;
}

.OrderBlock-summary {
  display: flex;
  align-items: center;
}

.OrderBlock-orderId {
  font-size: x-large;
  font-weight: bold;
}

.OrderBlock-delivered {
  display: flex;
  align-items: center;
  color: #f57347;
  font-weight: bold;
  margin-left: 20px;
}

.OrderBlock-deliveredIcon {
  margin-right: 5px;
}

.OrderBlock-deliveryBlock {
  margin-left: 20px;
}

.OrderBlock-deliveryDateTime {
  display: flex;
  align-items: center;
}

.OrderBlock-deliveryDateTimeIcon {
  margin-right: 5px;
}

.OrderBlock-totalCost {
  margin-left: auto;
  font-size: large;
  font-weight: bold;
}

.OrderBlock-iconButton {
  margin-left: 15px;
  border: none;
  background: none;
  outline: none;
  padding: 0;
}

.OrderBlock-chevronIcon {
  color: #f57347;
}
</style>
