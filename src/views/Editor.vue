<template>
    <div id="markdown-editor">
      <textarea class="editor"  :value="markdownText" @input="update"></textarea>
      <div class="white preview" v-html="compiledMarkdown"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import marked from 'marked';

export default Vue.extend({
  name: 'MarkdownEditor',
  data: () => ({
    markdownText: '# hello',
  }),
  computed: {
    compiledMarkdown(): string {
      return marked(this.markdownText, { sanitize: true });
    },
  },
  methods: {
    ...mapActions(['addMarkdown']),
    update(e: {target: { value: string }}) {
      setTimeout(() => {
        this.markdownText = e.target.value;
      }, 300);
    },
  },
});
</script>

<style>
html, body, #markdown-editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #markdown-editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}


pre {
  padding: 16px;
}

pre, code {
  background: #f7f7f7;
  color: black;
  box-shadow: none;
}

textarea.editor {
  color: #ccc;
}
/* vuetifyのスタイルが `````` の時のスタイルを邪魔していた */
.v-application code {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
</style>
