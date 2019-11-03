<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push({name: 'index'})">
        <span >MarkDown App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        style="margin-right: 10px"
        color="primary" fab small dark
        v-if="$store.state.login_user && this.$route.name !== 'edit'"
        @click="addMarkdown"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn color="info" v-if="!$store.state.login_user" @click="login">ログイン</v-btn>
      <DropDown v-if="$store.state.login_user" />
      <v-progress-linear
        :active="$store.state.isLoading"
        :indeterminate="$store.state.isLoading"
        absolute bottom color="red accent-4"
      />
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import firebase from 'firebase';
import DropDown from '../components/DropDown.vue';

export default Vue.extend({
  name: 'TheHeader',
  components: {
    DropDown,
  },

  methods: {
    ...mapActions(['addMarkdown', 'login']),
  },
});
</script>
