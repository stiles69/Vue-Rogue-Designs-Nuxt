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
          <p class='title RogueParagraph'>Don't pay outrageous prices much for a website!  You can get a domain name for around $12 to $50 a year. If you host your site on Google Cloud Platform, you only pay for what you use and save money.</p>          
      </v-layout>
    </v-slide-y-transition>
    <v-layout column class='RogueLayout'>
      <v-flex xs12 sm12 md8 lg6 xl6>
        <v-toolbar color='primary'>
          <v-toolbar-title class='white--text RogueToolbarTitle title'>Website Design</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-title class='title'>Muliple Frontends/Backends</v-card-title>

              <ul class='RogueUL subheading' style='list-style-type:disc'>
                <li>NodeJS</li>
                <li>Vue</li>
                <li>GOLang</li>
                <li>PHP</li>
                <li>JSP</li>
                <li>Database Integrations</li>
                <li>Custom Components</li>
              </ul>

          <v-card-actions class='RogueCardActions'>
            <v-btn round dark small color='primary' @click='$router.push("/contact")'>Contact</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-title class='title'>Examples of Work</v-card-title>

            <ul class='RogueUL subheading' style='list-style-type:disc'>
              <li><a class='RogueLink' href='https://www.hometown.cab'>Hometown Cab</a></li>
            </ul>

          <v-card-actions class='RogueCardActions'>
            <v-btn dark round small color='primary' @click='$router.push("/contact")'>Contact</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'website',
  data () {
    return {
      msg: 'Website.vue'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
