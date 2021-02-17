<template>
  <component :is="tag" class="font-bold" :class="classNames">
    <slot />
  </component>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        return ['big', 'medium', 'small'].includes(val)
      }
    }
  },

  setup (props) {
    const classNames = computed(() => {
      const sizes = {
        medium: 'text-lg leading-118',
        big: 'text-xxl text-center leading-7',
        small: 'text-sm'
      }
      return sizes[props.size]
    })

    return { classNames }
  }
}
</script>
