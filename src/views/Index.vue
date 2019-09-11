<template>
  <v-container text-xs-center justify-center class="index-container">
    <!-- 非ログイン時 -->
    <v-layout row wrap v-if="!$store.state.login_user">
      <v-flex xs12>
        <h1>Mackdown App</h1>
        <p>開発中</p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>

    <!-- ログイン時 -->
    <v-layout v-else>
      <v-card
        v-for="markdown in markdowns"
        :key="markdown.id"
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-list-item three-line @click="toEditPage(markdown.id)">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ markdown.markdownText }}</v-list-item-title>
            <v-list-item-subtitle>{{ markdown.id }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import firebase from 'firebase';

export default Vue.extend({
  name: 'index',
  data: () => ({
    markdowns: [],
  }),
  created() {
    this.markdowns = this.$store.state.markdowns;
  },

  methods: {
    ...mapActions(['login', 'fetchMarkdowns']),
    toEditPage(id: string) {
      this.$router.push({ name: 'edit', params: { markdown_id: id }});
    },
  },
});
</script>

<style scoped>
.index-container {
  text-align: center;
}
</style>
