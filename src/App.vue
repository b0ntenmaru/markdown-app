<template>
  <v-app>
    <!-- header -->
    <TheHeader />
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

import TheHeader from './components/TheHeader.vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'App',
  components: {
    TheHeader,
  },

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

  data: () => ({
    ...mapActions(['setLoginUser', 'deleteLoginUser', 'toggleLoading']),
  }),
});
</script>
