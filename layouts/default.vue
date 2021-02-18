<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap" rel="stylesheet">
    <the-header class="header" />
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<style lang="postcss">
@font-face {
  font-family: "Untitled";
  src: local("Untitled"),
   url(~assets/fonts/untitled-sans-web-light.ttf) format("truetype");
}
@font-face {
  font-family: "Work Sans";
  src: url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap');
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
body {
  @apply bg-grey;
  color:white;
  height: 100%;
  margin: 0;
}

p {
  font-family: 'Untitled', sans-serif;
}
</style>
