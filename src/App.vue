<template>
  <v-app>
    <!-- headerZ -->
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MarkDown App</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <!-- ここにコンポーネントを配置する -->
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
