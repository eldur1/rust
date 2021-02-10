<template>
  <i class="a-icon">
    <svg-icon :name="name" :height="size" :width="size" />
  </i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: '1em'
    }
  }
}
</script>

<style lang="postcss" scoped>
.a-icon svg {
  display: inline-block;
}
</style>
