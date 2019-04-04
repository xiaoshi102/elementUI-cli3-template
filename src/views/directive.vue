<template>
  <div class="p10">
    <editor v-model="content" @init="editorInit" lang="html" theme="chrome" width="500" height="500"></editor>
  </div>
</template>

<script>
import editor from 'vue2-ace-editor'
export default {
  components: { editor },
  name: 'directive',
  data () {
    return {

    }
  },
  methods: {
    editorInit: function () {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/html')
      require('brace/mode/javascript') // language
      require('brace/mode/less')
      require('brace/theme/chrome')
      require('brace/snippets/javascript') // snippet
    }
  }
}
</script>

<style scoped>

</style>
