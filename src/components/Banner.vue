<template>
  <div class="Banner">
    <icon class="Banner-icon" name="cutlery"></icon>
    <span class="Banner-title">Resto</span>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/cutlery'

export default {
  name: 'Banner',
  components: {
    Icon
  }
}
</script>

<style scoped>
.Banner {
  display: flex;
  align-items: center;
  padding: 10px 15vw;
  background-color: #f57347;
}

.Banner-title {
  font-size: xx-large;
  font-weight: 700;
  color: white;
}

.Banner-icon {
  color: white;
  width: auto;
  height: 2em;
  max-width: 100%;
  max-height: 100%;
  margin-right: 15px;
}
</style>
