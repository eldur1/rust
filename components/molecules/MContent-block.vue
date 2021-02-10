<template>
  <div class="inline-block content-block relative " :class="`content-block--${theme} content-block--${type}`">
    <img :src="src" :alt="alt" class="relative shadow-2xl" :class="`img-block--${theme}`">
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'left',
      validator (val) {
        return ['left', 'right'].includes(val)
      }
    },
    type: {
      type: String,
      default: 'short',
      validator (val) {
        return ['short', 'long'].includes(val)
      }
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.content-block {
    width:40%;
}
.content-block::before {
  left:0;
  @apply bg-red;

}
.content-block::before {
  @apply bg-red p-1 ;
  position:absolute;
  content: '';
  top:0px;
  left:0px;
  bottom:0px;
  width:150%;
}
.content-block--right::before {
  right: 0;
  width:100%;
}
.content-block--right {
  float:right;
  right:0px;
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
