<template>
  <div id="edit-component">
    <!-- <a @click="addMarkdown(markdownText)">Submit</a> -->
    <Editor
      :markdownText="markdownText"
      :updateText="updateText"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor from '../components/Editor.vue';
import { mapActions } from 'vuex';



export default Vue.extend({
  name: 'edit',
  components: {
    Editor,
  },
  created() {
    if (!this.$route.params.markdown_id) {
      return;
    }

    const markdown = this.$store.getters.getMarkdownById(this.$route.params.markdown_id);
    if (markdown) {
      this.markdownText = markdown.markdownText;
    } else {
      this.$router.push({ name: 'index'});
    }
  },

  data: () => ({
    markdownText: '',
  }),

  methods: {

    updateText(e: {target: { value: string }}) {
      setTimeout(() => {
        this.markdownText = e.target.value;
        // 入力された文字列が更新されたタイミングでsubmitメソッドを発火したい
        this.$store.dispatch('updateMarkdown', { markdownText: this.markdownText, markdownId: this.$route.params.markdown_id });
      }, 500);
    },
    ...mapActions(['addMarkdown', 'updateMarkdown']),
  },
});
</script>
<style scoped>
div#edit-component {
  height: 100%;
}
</style>
