<template>
  <div class="content">
    <a target="_blank" :href="link">
      <a-title size="small" class="list-title pt-2 pb-2" tag="h3">
        <slot />
      </a-title>
      <br>
    </a>
    <ul>
      <li v-for="(item, index) in list" :key="index" class="list">
        <p class="inline">
          {{ item }}
        </p>
        <br>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.list-title {
    text-transform: uppercase;
    @apply bg-red;
    padding:6px 10px 6px 10px;
    display: inline-block;
}
.content {
  max-width: 68%;
}
li {
  display: inline-block;
}
li:nth-child(odd) {
    font-family: 'Work Sans';
    font-weight: bold;
    display: block;
    max-width: 230px;
}
li:nth-child(even) {
    margin-bottom: 20px;

}
li {
    margin-top:10px;
}
.command {
    font-weight: bold;
    width:240px;
}
.description {
    margin-left:30px;
}
a {
    display: inline-block;
}
</style>
