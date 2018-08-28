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
        <v-toolbar color='primary'>
          <v-toolbar-title class='white--text RogueToolbarTitle'>Technical Support</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-title class='title'>Networking</v-card-title>

              <ul class='RogueUL subheading' style='list-style-type:disc'>
                <li>Wireless</li>
                <li>LAN</li>
                <li>Virtual Private Networks</li>
                <li>Optimize Your Internet Speed</li>
                <li>Block Adult Websites From Children</li>
              </ul>

          <v-card-actions class='RogueCardActions'>
            <v-btn round dark small color='primary' @click='$router.push("/contact")'>Contact</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-title class='title'>Setups/Installations</v-card-title>

              <ul class='RogueUL subheading' style='list-style-type:disc'>
                <li>Operating Systems Windows, MacOS, Linux</li>
              </ul>

          <v-card-actions class='RogueCardActions'>
            <v-btn dark round small color='primary' @click='$router.push("/contact")'>Contact</v-btn>
          </v-card-actions>
        <v-divider></v-divider>
          <v-card-title class='title'>Backups</v-card-title>

              <ul class='RogueUL subheading' style='list-style-type:disc'>
                <li>Make sure your system is setup to automaticallty backup your files. You don't want to lose an important file because the power went out.</li>
              </ul>

          <v-card-actions class='RogueCardActions'>
            <v-btn round dark small color='primary' @click='$router.push("/contact")'>Contact</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-title class='title'>Video Editing</v-card-title>

              <ul class='RogueUL subheading' style='list-style-type:disc'>
                <li>Are you having problems getting that video you took with your phone into the right format. Custom video editing support for all systems, and multiple software.</li>
              </ul>

          <v-card-actions class='RogueCardActions'>
            <v-btn round dark small color='primary' @click='$router.push("/contact")'>Contact</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>

export default {
  name: 'technicalsupport',
  data () {
    return {
      msg: 'Technicalsupport.vue'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
