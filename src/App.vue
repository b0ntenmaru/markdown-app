<template>
  <v-app>
    <!-- headerZ -->
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MarkDown App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>ログイン</v-btn>
    </v-app-bar>

    <v-content>
      <!-- ここにコンポーネントを配置する -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({}),
});
</script>
