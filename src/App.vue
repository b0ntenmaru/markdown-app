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
      <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute bottom color="deep-purple accent-4"
    />
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
  data: () => ({
    loading: true,
  }),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.loading = false;
      } else {
        this.deleteLoginUser();
        this.loading = false;
      }
    });
  },
  watch: {
    loading (val) {
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    },
  },
  methods: {
    ...mapActions(['setLoginUser', 'login', 'logout', 'deleteLoginUser']),
  },
});
</script>
