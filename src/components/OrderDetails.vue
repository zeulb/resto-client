<template>
  <div class="OrderDetails">
    <div class="OrderDetails-feedbackForm" v-if="!feedback_submitted">
      How do you like this order?
      <FeedbackInput />
    </div>
  </div>
</template>

<script>
import FeedbackInput from './FeedbackInput'
import Icon from 'vue-awesome/components/Icon'

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
  }
}
</script>

<style scoped>
.OrderDetails {
}

.OrderDetails-feedbackForm {
  font-weight: bold;
  margin-top: 10px;
}
</style>
