<template>
  <v-app>
    <!-- header -->
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MarkDown App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="login" v-show="!$store.state.login_user">ログイン</v-btn>
      <v-btn @click="logout" v-if="$store.state.login_user">ログアウト</v-btn>
    </v-app-bar>

    <v-content>
      <!-- ここにコンポーネントを配置する -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import firebase from 'firebase';

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({}),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
      } else {
        this.deleteLoginUser();
      }
    });
  },
  methods: {
    ...mapActions(['setLoginUser', 'login', 'logout', 'deleteLoginUser']),
  },
});
</script>
