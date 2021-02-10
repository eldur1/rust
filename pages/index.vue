<template>
  <div>
    <the-header class="header" />
    <the-hero class="hero" />
    <a-content-block theme="left" src="/img/ressources.jpg" alt="Un homme qui coupe une hache" />
    <a-content-text class="mb-40" height="6rem" width="6rem" theme="left" name="trend">
      Récolte des ressources <span class="text-red">x1.5</span> et crafts accélérés de <span class="text-red">50%</span>
    </a-content-text>

    <a-content-block theme="right" src="/img/sign.jpg" alt="Une publicité de la série Better Call Saul" />
    <a-content-text class="mb-40" height="6rem" width="6rem" theme="left" name="plugin">
      Plugins pour améliorer <span class="text-red">la qualité de jeu</span>
    </a-content-text>
    <img src="img/wipe.jpg" class="w-2/5 relative inline-block" alt="Homme courant dans la nature">
    <a-content-text theme="right" class="mb-40" name="wipe">
      Wipe toutes les <span class="text-red">semaines</span>
      <br>
      <br>
      Wipe BP toutes les <span class="text-red">deux semaines</span>
    </a-content-text>
    <div>
      <div class="rule_block ml-o">
        <a-content-text theme="left" class="mb-40" name="regles">
          Règlement du serveur :
        </a-content-text>
        <ul>
          <li v-for="(rule, index) in rules" :key="index">
            <a-icon class="inline-block" name="done" height="2rem" width="2rem" />
            <p class="inline">
              {{ rule }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <the-footer />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup () {
    const rules = ref([
      'Grief interdit (construire dans une base ennemie après accès à l’armoire)',
      'Les propos racistes, homophobes ou sexistes, qu’ils soient écrits, oraux ou peints seront punis',
      'Raids seulement autorisés entre 20h et minuit',
      'équipe de 6 maximum',
      'Aucune alliance entre équipe mais neutralité autorisée',
      'Door camping autorisé sans abus'
    ])

    return {
      rules
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

body {
  @apply bg-grey ;
  color:white;
  height: 100%;
  margin: 0;
}
.rule_block{
    @apply bg-red;
    display: inline-block;
    padding:64px;
    padding-left:25%;
    max-width: 1074px;
    left:0;
    line-height: 48px;
    padding-bottom: 15%;
}
.container {
  margin: 0;
  min-height: 100vh;
  width:100%;
  height: 100%;
  top:0px;
  left:0px;
  background-image: url('/img/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height:100vh;  /* responsive height */
  max-width: 100%;
}
.centered {
  position:absolute;
  left:50%;
  width:100%;
  text-align: center;
  transform:translate(-50%, -50%);
}
.content {
  top:40%;
}
.header {
  position: fixed;
  width:100%;
  height:52px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
