<template>
  <div id="edit-component">
    <Editor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor from '../components/Editor.vue';


export default Vue.extend({
  name: 'edit',
  components: {
    Editor,
  },
});
</script>
<style scoped>
div#edit-component {
  height: 100%;
}
</style>
