<template>
  <div id='default'>
    <v-app>
      <v-navigation-drawer app temporary v-model='drawer'>
        <v-list>
          <v-list-tile value='true' v-for='(item, i) in items' :key='i' >
              <v-list-tile-action>
                <router-link class='RogueLink' :to='item.target'><v-icon v-html='item.icon'></v-icon></router-link>
              </v-list-tile-action>
            <router-link class='RogueLink' :to='item.target'><v-list-tile-title v-text='item.title' class='title'></v-list-tile-title></router-link>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app color='primary'>
        <v-toolbar-side-icon @click.stop='drawer = !drawer' class='black--text'></v-toolbar-side-icon>
        <v-toolbar-title v-text='title' class='black--text title'></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <nuxt />
      </v-container>
      <v-footer dark color='primary' class='black--text--text' height='130' aria-label='Footer'>
        <v-layout column>
          <div class='RogueFooter'>Rogue Designs</div>
          <div class='RogueFooter'>Email <a href='mailto://admin@roguedesigns.us' class='black--text'>admin@roguedesigns.us</a></div>
          <div class='RogueFooter'>&copy; Copyright 2017 Rogue Designs</div>
          <div class='RogueFooter'>Version {{ version }}</div>            
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Versioner from '../components/versioner.js'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Rogue Designs',
      version: Versioner.version,
      items: [
        { icon: 'home', title: 'Home', target: '/' },
        { icon: 'phone', title: 'Contact', target: '/contact' },
        { icon: 'access_time', title: 'Technical Support', target: '/technicalsupport' },
        { icon: 'attach_money', title: 'Website Design', target: '/website' },
        { icon: 'money_off', title: 'RaspberryPi Images', target: '/raspberrypi' }
      ]
    }
  }
}
</script>

<style lang='stylus'>
@import '../assets/stylus/main.styl'
</style>