<template>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span >MarkDown App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        style="margin-right: 10px"
        color="primary" fab small dark
        v-if="loginUser && this.$route.name !== 'edit'"
        @click="addMarkdown"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn
        style="margin-right: 10px"
        color="primary" fab small dark
        v-if="loginUser && this.$route.name !== 'index'"
        @click="$router.push({name: 'index'})"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-btn color="info" v-if="!loginUser" @click="login">ログイン</v-btn>
      <DropDown v-if="loginUser" />
      <v-progress-linear
        :active="isLoading"
        :indeterminate="isLoading"
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
  name: 'Header',
  props: {
    isLoading: {
      type: Boolean || null,
      default: null,
    },
    loginUser: {
      type: Object || null,
      default: null,
    },
  },
  components: {
    DropDown,
  },

  methods: {
    ...mapActions(['addMarkdown', 'login']),
  },
});
</script>
