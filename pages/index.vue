<template>
  <div class='index'>
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
              <v-toolbar-title class='white--text RogueToolbarTitle title'>Services</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
              <v-card-title class='title'>Technical Support</v-card-title>
              <v-card-text class='subheading RogueCardText'>Affordable Technical Support for the Newton, Iowa area.</v-card-text>
              <v-card-actions class='RogueCardActions'>
                <v-btn round dark small color='primary' @click='$router.push("/technicalsupport")'>More</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-card-title class='title'>Custom RaspberryPi Images</v-card-title>
              <v-card-text class='subheading RogueCardText'>Custom RaspberryPi images. (i.e. Plex Media Server, Open VPN, Proxy Servers.)</v-card-text>
              <v-card-actions class='RogueCardActions'>
                <v-btn round dark small color='primary' @click='$router.push("/raspberrypi")'>More</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-card-title class='title'>Website Design</v-card-title>
              <v-card-text class='RogueCardText subheading '>Affordable website design. As low as $12 a year for hosting services, with your own domain.</v-card-text>
              <v-card-actions class='RogueCardActions'>
                <v-btn round dark small class='RogueBtn' color='primary' @click='$router.push("/website")'>More</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'index.vue'
      }
    }
  }
</script>
