<script>
import * as monaco from 'monaco-editor';

export default {
	mounted() {
		monaco.editor.create(this.$refs.editor, {
			value: ['<h1>Welcome</h1>', '<p>Hello World</p>'].join('\n'),
			language: 'html'
		});
	}
}
</script>

<template>
	<div ref="mainEl" class="monaco-editor">
		<div class="editor" ref="editor"></div>
	</div>
</template>

<style scoped>
.monaco-editor {
	padding: 10px;

	.editor {
		height: 400px;
	} 
}
</style>