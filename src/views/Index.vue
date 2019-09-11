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
        <v-row>
          <v-col class="markdown-card-container">
            <v-card
              v-for="markdown in markdowns"
              :key="markdown.id"
              outlined
              class="markdown-card"
            >
              <v-card-text class="white--text" @click="toEditPage(markdown.id)" three-line>
                <div class="headline mb-2">{{ markdown.markdownText }}</div>
                {{ markdown.id }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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

.markdown-card-container {
  padding-right: 65px;
  padding-left: 65px;
}
</style>
