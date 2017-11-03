<template>
  <div class="Header">
    <icon class="Header-icon" name="cutlery"></icon>
    <span class="Header-title">Resto</span>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/cutlery'

export default {
  name: 'Header',
  components: {
    Icon
  }
}
</script>

<style scoped>
.Header {
  display: flex;
  align-items: center;
  padding: 10px 15vw;
  background-color: #f57347;
}

.Header-title {
  font-size: xx-large;
  font-weight: 700;
  color: white;
}

.Header-icon {
  color: white;
  width: auto;
  height: 2em;
  max-width: 100%;
  max-height: 100%;
  margin-right: 15px;
}
</style>
