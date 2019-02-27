<template>
  <div class="p20">
    <el-card v-demo:foo.a.b="test">
      <input type="text" v-focus style="margin-right: 20px;">
      <el-button @click="test='hello world'" v-auth>click</el-button>
    </el-card>
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
      test: 'just a test',
      content: ''
    }
  },
  mounted () {
    console.log('editor', editor)
  },
  methods: {
      editorInit: function () {
          require('brace/ext/language_tools') //language extension prerequsite...
          require('brace/mode/html')
          require('brace/mode/javascript')    //language
          require('brace/mode/less')
          require('brace/theme/chrome')
          require('brace/snippets/javascript') //snippet
      }
  },
}
</script>

<style scoped>

</style>
