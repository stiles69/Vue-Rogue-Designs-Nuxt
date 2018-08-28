<template>
  <v-container fluid class='RogueComponent RoguePager'>
    <v-slide-y-transition mode='out-in'>
      <v-layout column align-center>
	      <v-avatar class='hidden-sm-and-down' size='172px' >
          <img src='../assets/img/Logo-192x192.png' alt='Rogue Designs'>
        </v-avatar>
        <v-avatar class='hidden-md-and-up' size='84px' >
          <img src='../assets/img/Logo-192x192.png' alt='Rogue Designs'>
        </v-avatar>
        <p class='headline'>Rogue Designs</p>
        <p class='title'>Affordable Computer Services</p>
      </v-layout>
    </v-slide-y-transition>
    <v-layout column class='RogueLayout'>
    <v-flex xs12 sm12 md8 lg6 xl6>
      <v-card>
        <v-toolbar color='primary'>
          <v-toolbar-title class='white--text title'>Contact</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title class='RogueCardText title'>Feel free to contact me at my email address below.</v-card-title>
        <v-card-text class='RogueCardText title'><a href='mailto:admin@roguedesigns.us' class='RogueLink'>admin@roguedesigns.us</a></v-card-text>
      </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        items: [
          { headline: 'EMail', subtitle: 'admin@roguedesigns.us' }
        ]
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>

</style>
