<template>
  <div class="inline-block content-block relative max-w-md" :class="`content-block--${theme}`">
    <a-icon :name="iconName" :size="iconComputedSize" />
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
