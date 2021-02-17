<template>
  <div class="inline-block content-block relative" :class="`content-block--${theme} content-block--${type}`">
    <img :src="src" :alt="alt" class="relative" :class="`img-block--${theme}`">
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

.content-block::before {
  left:0;
  @apply bg-red;

}
.content-block::before {
  @apply bg-red p-1 ;
  position:absolute;
  content: '';
  top:20px;
  bottom:0px;
  height:40%;
  margin-top:1rem;
  margin-left:0;
  left:0;
  width:100%;
}
@media screen and (min-width: 300px) {
  .content-block::before {
  height: 66%;
  }
}
@media screen and (min-width: 500px) {
  .content-block::before {
  height: 90%;
  }
}
@media screen and (min-width: 700px) {
  .content-block::before {
  height: 115%;
  }
}

@media screen and (min-width: 1120px) {
  .content-block--right::before {
  width: 100%;
  margin-left:0%;
}
  .img-block--right {
  top:-32px;
  left:-42px;
  }
.content-block::before {
  @apply bg-red p-1 ;
  left:-2rem;
  bottom:0px;
  width:calc(100% + 2rem);
  height:100%;
  margin-left:2rem;
  margin-top:1rem;
}
.img-block--left {
  display: inline-block;
  width:70%;
  float: right;
  height: auto;
  filter: drop-shadow(2px 4px 6px black);
}
}
.img-block--left {
  display: inline-block;
  width:70%;
  margin-left:15%;
  height: auto;
  filter: drop-shadow(2px 4px 6px black);
}
.content-block--right::before {
  right: 0;
  width:136%;
  margin-left:-18%;
}
.content-block--right {
  float:right;
  right:0px;
  width:70%;
  margin-left:15%;

}
.content-block--long::before {
  width:150%;

}

.img-block--right {
  margin: 0 auto;
}

</style>
