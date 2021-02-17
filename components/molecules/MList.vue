<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index" class="li">
        <a-icon class="inline-block" :name="iconName" size="1rem" />
        <p class="inline list-p">
          {{ item }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'done'
    },
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="postcss" scoped>
.list-p {
  margin-left:8px;
}
.ul {
  display: inline-flex;
  flex-direction: column;
}
.li {
  margin-top:16px;
}
</style>
