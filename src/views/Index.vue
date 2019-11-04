<template>
  <v-container text-xs-center justify-center class="index-container">
    <!-- 非ログイン時 -->
    <v-layout row wrap v-if="!$store.state.loginUser">
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
        <v-flex xs12 mt-5>
          <v-card
            v-for="markdown in markdowns"
            :key="markdown.id"
            max-width="550"
            class="mx-auto markdown-card"
            @click="toEditPage(markdown.id)"
          >
            <v-card-title>{{ markdown.markdownText }}</v-card-title>
            <v-card-text>{{ markdown.id }}</v-card-text>
          </v-card>
      </v-flex>
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

.markdown-card {
  margin-bottom: 10px;
}

</style>
