<template class="text-center">
  <div>
    <div class="root bg-backgroundHero h-screen bg-cover max-w-full text-center flex content-center align ">
      <div ref="first" class="section section-1 m-auto">
        <p class="font-sans text-center text-red uppercase font-bold text-sm">
          Serveur Rust
        </p>
        <a-title tag="h1" size="big">
          Sea of Rust
        </a-title>
        <button type="button" class="bg-red mt-12 font-bold inline-block pt-1 pb-1 pr-2 pl-2 align-middle" @click="doCopy">
          92.118.16.132:28025
          <a-icon name="paste" />
        </button>
        <p class="text-light-grey text-xs leading-3">
          Copier-coller ceci dans la console (F1)
        </p>
      </div>
    </div>
    <div ref="second" class="section section-2 bottom-3 absolute left-1/2 transform -translate-x-1/2 text-center">
      <p class="font-bold font-sans">
        En savoir plus
      </p>
      <a-icon name="arrow-down" size="2rem" />
    </div>
  </div>
</template>

<script>
import { copyText } from 'vue3-clipboard'

export default {
  setup () {
    const doCopy = () => {
      copyText('client connect 92.118.16.132:28025', undefined, (error, event) => {
        if (error) {
          console.log(error)
        } else {
          console.log(event)
        }
      })
    }

    return { doCopy }
  }
}
</script>
<style lang="postcss" scoped>

</style>
