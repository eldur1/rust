<template>
  <div class="inline-block content-block relative max-w-md" :class="`content-block--${theme}`">
    <a-icon :name="name" height="6rem" width="6rem" />
    <a-h2>
      <slot />
    </a-h2>
  </div>
</template>

<script>
import AIcon from './AIcon.vue'
import AH2 from './AH2.vue'
export default {
  components: {
    AIcon,
    AH2
  },
  props: {
    name: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'left',
      validator (val) {
        return ['left', 'right'].includes(val)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.content-block {
    width:254px;
    margin-left:25%;
}

.content-block--right {
}
.content-block--long::before {
  width:150%;

}
.img-block--left {
  top: -40px;
  left: 42%;
}
.img-block--right {
  top:-16px;
  left:-16px;
}

</style>
