<template>
  <v-container text-xs-center justify-center class="index-container">
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Mackdown App</h1>
        <p>開発中</p>
      </v-flex>

      <v-flex xs12 mt-5 >
        <v-btn color='info' @click="login" v-show="!$store.state.login_user">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'index',
  methods: {
    ...mapActions(['login']),
  },
});
</script>

<style scoped>
.index-container {
  text-align: center;
}
</style>
