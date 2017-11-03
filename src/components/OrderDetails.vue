<template>
  <div class="OrderDetails">
    <div class="OrderDetails-feedbackSubmittedMessage" v-if="submitted">
      Thank you for sending us your feedbacks!
    </div>
    <div class="OrderDetails-feedbackForm" v-else>
      How do you like this order?
      <FeedbackInput v-if="!submitted" :ratable_id="ratable_id" ratable_type="DeliveryOrder" :onChange="onFeedbackChange" />
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
          <FeedbackInput v-if="!submitted" :ratable_id="item.ratable_id" ratable_type="OrderItem" :onChange="onFeedbackChange" />
          <span class="OrderDetails-orderItemTotalPrice">
            {{ formatPrice(item.total_price) }}
          </span>
        </div>
      </div>
      <button v-if="!submitted" class="OrderDetails-submitFeedbackButton" :disabled="!complete" v-on:click="onSubmitFeedback">
        Send Feedbacks
      </button>
    </div>
  </div>
</template>

<script>
import FeedbackInput from './FeedbackInput'
import Icon from 'vue-awesome/components/Icon'
import config from '../config'
import currencyFormatter from 'currency-formatter';

export default {
  props: {
    order_id: String,
    ratable_id: Number,
    feedback_submitted: Boolean,
    order_items: Array
  },
  name: 'OrderDetails',
  components: {
    FeedbackInput,
    Icon
  },
  computed: {
    complete() {
      return this.feedbacks.every(feedback => feedback.rating !== 0);
    }
  },
  methods: {
    formatPrice(price) {
      return currencyFormatter.format(price / 100.0, { code: 'SGD' });
    },
    onSubmitFeedback() {
      if (this.complete) {
        fetch(`${config.api.url}/orders/${this.order_id}/feedbacks`, {
          method: 'post',
          body: JSON.stringify({
            feedbacks: this.feedbacks
          }),
          headers: {
            'Authorization': `Bearer ${config.api.token}`,
            'Content-Type': 'application/json'
          },
        })
          .then(r => r.json())
          .then(data => {
            if (data.status === 'OK') {
              this.submitted = true;
            }
          });
      }
    },
    onFeedbackChange(ratable_id, ratable_type, rating, comment) {
      const feedback = this.feedbacks.find(
        f => f.ratable_id === ratable_id && f.ratable_type === ratable_type)
      feedback.rating = rating
      feedback.comment = comment
    }
  },
  data() {
    return {
      submitted: this.feedback_submitted,
      feedbacks: [
        {
          ratable_id: this.ratable_id,
          ratable_type: "DeliveryOrder",
          rating: 0,
          comment: ""
        },
        ...this.order_items.map(item => {
          return {
            ratable_id: item.ratable_id,
            ratable_type: "OrderItem",
            rating: 0,
            comment: ""
          }
        })
      ]
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

.OrderDetails-submitFeedbackButton {
  border: none;
  color: white;
  background-color: #f57347;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: large;
  width: 100%;
  padding: 10px;
}

.OrderDetails-submitFeedbackButton:disabled {
  opacity: 0.5;
}
</style>
