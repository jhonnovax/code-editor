<script>
import * as monaco from 'monaco-editor';
import { htmlContent } from '../services/data-content';

export default {
	mounted() {
		monaco.editor.create(this.$refs.editor, {
			value: htmlContent.join('\n'),
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
	.editor {
		height: 300px;
	} 
}
</style>