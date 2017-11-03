<template>
  <div class="OrderDetails">
    <div class="OrderDetails-feedbackSubmittedMessage" v-if="feedback_submitted">
      Thank you for sending us your feedbacks!
    </div>
    <div class="OrderDetails-feedbackForm" v-else>
      How do you like this order?
      <FeedbackInput v-if="!feedback_submitted"/>
    </div>

    <div class="OrderDetails-orderItems">
      Order Details
      <div class="OrderDetails-orderItem" v-for="item in order_items">
        <div class="OrderDetails-orderItemContent">
          <span class="OrderDetails-orderItemQuantity">
            {{ item.quantity }}
          </span>
          <span class="OrderDetails-orderItemName">
            {{ item.name }}
          </span>
          <FeedbackInput v-if="!feedback_submitted"/>
          <span class="OrderDetails-orderItemTotalPrice">
            {{ formatPrice(item.total_price) }}
          </span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackInput from './FeedbackInput'
import Icon from 'vue-awesome/components/Icon'
import currencyFormatter from 'currency-formatter';

export default {
  props: {
    order_id: String,
    feedback_submitted: Boolean,
    order_items: Array
  },
  name: 'OrderDetails',
  components: {
    FeedbackInput,
    Icon
  },
  methods: {
    formatPrice(price) {
      return currencyFormatter.format(price / 100.0, { code: 'SGD' });
    }
  }
}
</script>

<style scoped>
.OrderDetails {
  padding: 20px 0;
}

.OrderDetails-feedbackSubmittedMessage {
  font-weight: bold;
  margin-bottom: 10px;
}

.OrderDetails-feedbackForm {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.OrderDetails-orderItemContent {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.OrderDetails-orderItemQuantity,
.OrderDetails-orderItemName {
  margin-right: 10px;
  font-size: large;
  font-weight: 500;
}

.OrderDetails-orderItemTotalPrice {
  margin-left: auto;
  font-size: large;
}
</style>
