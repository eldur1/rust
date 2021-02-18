<template>
  <div class="inline-block content-text relative" :class="`content-text--${theme}`">
    <a-icon class="a-icon" :name="iconName" :size="iconComputedSize" />
    <a-title tag="h2">
      <slot />
    </a-title>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    list: {
      type: String,
      default: 'empty'
    },
    iconSize: {
      type: String,
      default: 'big',
      validator (val) {
        return ['small', 'big'].includes(val)
      }
    },
    theme: {
      type: String,
      required: false,
      default: 'left',
      validator (val) {
        return ['left', 'right'].includes(val)
      }
    }
  },

  setup (props) {
    const iconComputedSize = computed(() => {
      const sizes = {
        big: '6',
        small: '2'
      }
      return sizes[props.iconSize] + 'rem'
    })

    return {
      iconComputedSize
    }
  }
}
</script>

<style lang="postcss" scoped>
.content-text {
    max-width:258px;
    line-height: 141px;
}
.a-icon {
  margin-top:40px;
}

</style>
