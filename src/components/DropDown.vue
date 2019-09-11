<template>
  <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark v-on="on" class="icon-btn">
            {{ userName }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="drop-down-btn" @click="logout">
              ログアウト
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'DropDown',
  computed: {
    ...mapGetters(['photoURL', 'userName']),
  },

  methods: {
    ...mapActions(['login', 'logout']),
  },
});

</script>
<style scoped>
.drop-down-btn {
  text-align: center;
}
.v-list {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
