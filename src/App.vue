<template>
  <v-app>
    <!-- header -->
    <Header :isLoading="$store.state.isLoading" :loginUser="$store.state.loginUser" />
    <v-content>
      <!-- ここにコンポーネントを配置される -->
      <!-- router-view はvue-routerに登録されていえるURLのコンポーネントを表示する -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

import Header from './components/Header.vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchMarkdowns();
        this.toggleLoading();
      } else {
        this.deleteLoginUser();
        this.toggleLoading();
      }
    });
  },

  data: () => ({
    ...mapActions(['setLoginUser', 'deleteLoginUser', 'toggleLoading', 'fetchMarkdowns']),
  }),
});
</script>
