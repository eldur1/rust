<template>
  <div>
    <the-hero class="hero" />
    <div class="flow">
      <div class="block block-1">
        <m-content-block theme="left" :src="require('@/assets/img/ressources.jpg')" alt="Un homme qui coupe une hache" />
        <m-content-text
          class="special-1"
          theme="right"
          icon-name="trend"
        >
          Récolte des ressources <em>x1.5</em> et crafts accélérés de <em>50%</em>
        </m-content-text>
      </div>
      <div class="block block-2">
        <div class="m-auto">
          <m-content-text class="lg:min-w-2 mb-2 ml-16" theme="left" icon-name="plugin">
            Plugins pour améliorer la <em>qualité de jeu</em>
          </m-content-text>
          <m-list class="m-auto lg:m-0 whitespace-nowrap max-w-xs" :list="plugins" />
        </div>

        <m-content-block
          theme="right"
          :src="require('~/assets/img/sign.jpg')"
          alt="Une publicité de la série Better Call Saul"
        />
      </div>
      <div class="block block-3">
        <img :src="require('@/assets/img/wipe.jpg')" class="relative inline-block" alt="Homme courant dans la nature">
        <m-content-text class="mb-20 block ml-40 mt-40" icon-name="wipe">
          Wipe toutes les <em>semaines</em>
          <br>
          Wipe BP toutes les <em>deux semaines</em>
        </m-content-text>
      </div>
      <div class="block block-4">
        <div class="rule_block lg:min-w-2 w-full ">
          <m-content-text class="ml-0 mt-40" icon-name="rules">
            Règlement du serveur :
          </m-content-text>
          <m-list class="min-w-1 mt-2" :list="rules" icon-name="done" />
        </div>
      </div>
      <div class="ml-16">
        <m-content-text class="pb-1 min-w-1 max-w-4/5" theme="left" icon-name="command">
          Commandes du serveur
        </m-content-text>
        <div>
          <m-commands link="https://umod.org/plugins/sign-artist" :list="cmdSign">
            Sign
          </m-commands>
          <m-commands link="https://umod.org/plugins/rustio-clans" :list="cmdClans">
            Clans
          </m-commands>
          <m-commands link="https://umod.org/plugins/player-report" :list="cmdReportPlayer">
            ReportPlayer
          </m-commands>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plugins from '@/assets/json/plugins.json'
import rules from '@/assets/json/rules.json'
import cmdSign from '@/assets/json/cmd_sign.json'
import cmdClans from '@/assets/json/cmd_clans.json'
import cmdReportPlayer from '@/assets/json/cmd_report_player.json'

export default {
  setup () {
    return {
      plugins,
      rules,
      cmdSign,
      cmdClans,
      cmdReportPlayer
    }
  }

}
</script>

<style>
.block-1, .block-2, .block-3 {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap:0px;
  grid-gap: 0px;
}

@media screen and (min-width: 500px) {
.block {
  gap:30px;
  grid-gap: 30px;
}
}

/*
Après 1120px
*/
.block-2, .block-3  {
  margin-top: 50px;
}
.block-3 {
  margin-top:200px;
}
@media screen and (min-width: 1120px) {
.block-1, .block-3 {
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  gap:70px;
  grid-gap: 70px;
}
.block-2{
  grid-template-columns:0.8fr 1.2fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  gap:70px;
  grid-gap: 70px;
}
.block:nth-child(n+2)  {
  margin-top: 200px;
}
}
body {
  @apply bg-grey ;
  color:white;
  height: 100%;
  margin: 0;
  font-family: 'Work Sans', sans-serif;
}
p {
  font-family: 'Untitled';
}
.special-1 {
  margin-left: calc(16% + 68px);
}
.rule_block{
    @apply bg-red;
    display: inline-block;
    padding:64px;
    padding-left:16%;
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
  background-image: url('~assets/img/background.jpg');
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
  top:45%;
}
em {
  @apply text-red;
  font-style: normal;
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
