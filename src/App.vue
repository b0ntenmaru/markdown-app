<template>
  <v-app>
    <!-- header -->
    <TheHeader />
    <v-content>
      <!-- ここにコンポーネントを配置する -->
      <!-- router-view はvue-routerに登録されていえるURLのコンポーネントを表示する -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import firebase from 'firebase';
import TheHeader from './components/TheHeader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TheHeader,
  },
  data: () => ({}),
});
</script>
