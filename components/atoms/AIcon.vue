<template>
  <i class="a-icon">
    <svg-icon :name="name" :height="height" :width="width" />
  </i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: false,
      default: '2rem'
    },
    width: {
      type: String,
      required: false,
      default: '2rem'
    }
  }
}
</script>

<style lang="postcss" scoped>
.a-icon svg {
  display: inline-block;
}
</style>
