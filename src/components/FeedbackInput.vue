<template>
  <div class="FeedbackInput">
    <button class="FeedbackInput-thumbButton" v-on:click="onThumbsUpClick">
      <icon v-if="rating==1" class="FeedbackInput-ratingIcon" name="thumbs-up" scale="1.5"/>
      <icon v-else class="FeedbackInput-ratingIcon" name="thumbs-o-up" scale="1.5"/>
    </button>
    <button class="FeedbackInput-thumbButton" v-on:click="onThumbsDownClick">
      <icon v-if="rating==-1" class="FeedbackInput-ratingIcon" name="thumbs-down" scale="1.5" />
      <icon v-else class="FeedbackInput-ratingIcon" name="thumbs-o-down" scale="1.5" />
    </button>
    <input v-model="comment" class="FeedbackInput-input" type="text" placeholder="Leave a comment?" v-if="rating!=0" />
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/thumbs-o-down'
import 'vue-awesome/icons/thumbs-o-up'
import 'vue-awesome/icons/thumbs-down'
import 'vue-awesome/icons/thumbs-up'

export default {
  props: {
    ratable_id: Number,
    ratable_type: String,
    onChange: Function
  },
  name: 'FeedbackInput',
  components: {
    Icon
  },
  methods: {
    onThumbsUpClick() {
      this.rating = (this.rating === 1) ? 0 : 1;
      this.onUpdate();
    },
    onThumbsDownClick() {
      this.rating = (this.rating === -1) ? 0 : -1;
      this.onUpdate();
    },
    onUpdate() {
      this.onChange(this.ratable_id, this.ratable_type, this.rating, this.comment);
    }
  },
  watch: {
    comment() {
      this.onUpdate();
    }
  },
  data() {
    return {
      rating: 0,
      comment: ''
    }
  }
}
</script>

<style scoped>
.FeedbackInput {
  display: flex;
  align-items: center;
  padding: 5px 10px;
}

.FeedbackInput-thumbButton {
  border: none;
  background: none;
  outline: none;
  padding: 0;
}

.FeedbackInput-ratingIcon {
  color: #f57347;
  margin-right: 10px;
}

.FeedbackInput-input {
  flex: 1 auto;
  font-size: large;
  align-self: stretch;
  outline: none;
  border: none;
}
</style>
