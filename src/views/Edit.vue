<template>
  <div>
    <Editor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor from '../components/Editor.vue';


export default Vue.extend({
  name: 'edit',
  components: {
    Editor
  },
});
</script>
