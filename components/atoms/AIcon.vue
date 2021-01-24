<template>
  <i class="a-icon">
    <svg-icon :name="name" height="1em" width="1em" />
  </i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.a-icon svg {
  display: inline-block;
}
</style>
