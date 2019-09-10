<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push({name: 'home'})">
        <span >MarkDown App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn style="margin-right: 10px" color="primary" fab small dark :to="{ name: 'editor'}" v-if="$store.state.login_user">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn @click="login" v-show="!$store.state.login_user">ログイン</v-btn>
      <v-btn @click="logout" v-if="$store.state.login_user">ログアウト</v-btn>
      <v-progress-linear
        :active="$store.state.isloading"
        :indeterminate="$store.state.isloading"
        absolute bottom color="red accent-4"
      />
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import firebase from 'firebase';

export default Vue.extend({
  name: 'TheHeader',
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        // this.toggleLoading();
      } else {
        this.deleteLoginUser();
        // this.toggleLoading();
      }
    });
  },
  methods: {
    ...mapActions(['setLoginUser', 'login', 'logout', 'deleteLoginUser', 'toggleLoading']),
  },
});
</script>
