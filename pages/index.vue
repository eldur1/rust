<template>
  <div>
    <the-hero class="hero" />
    <div class="flow">
      <div class="block block-1">
        <m-content-block theme="left" :src="require('@/assets/img/ressources.jpg')" alt="Un homme qui coupe une hache" />
        <m-content-text
          class="lg:special-1 m-auto"
          theme="right"
          icon-name="trend"
        >
          Récolte des ressources <em>x1.5</em> et crafts accélérés de <em>50%</em>
        </m-content-text>
      </div>
      <div class="block block-2 mt-52">
        <div class="m-auto">
          <m-content-text class="m-auto lg:min-w-2 mb-2" theme="left" icon-name="plugin">
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
      <div class="block block-3 mt-24 lg:mt-44">
        <img :src="require('@/assets/img/wipe.jpg')" class="relative inline-block " alt="Homme courant dans la nature">
        <m-content-text class="block m-auto lg:mt-12" icon-name="wipe">
          Wipe toutes les <em>semaines</em>
          <br>
          Wipe BP toutes les <em>deux semaines</em>
        </m-content-text>
      </div>
      <div class="block block-4 lg:-mt-4">
        <div class="rule_block lg:min-w-2 w-full ">
          <m-content-text class="m-auto ml-0 mt-40" icon-name="rules">
            Règlement du serveur :
          </m-content-text>
          <m-list class="min-w-1 mt-2" :list="rules" icon-name="done" />
        </div>
      </div>
      <div class="m-auto flex justify-center items-center">
        <div class="inline-flex flex-col">
          <m-content-text class="m-0 pb-1 min-w-1" theme="left" icon-name="command">
            Commandes du serveur
          </m-content-text>
          <div class="inline-flex flex-col">
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

em {
  @apply text-red;
  font-style: normal;
}
</style>
