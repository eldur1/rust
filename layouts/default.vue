<template>
  <div>
    <the-header class="header" />
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap');
@font-face {
  font-family: "Untitled";
  src: local("Untitled"),
   url(~assets/fonts/untitled-sans-web-light.ttf) format("truetype");
}

html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
</style>
