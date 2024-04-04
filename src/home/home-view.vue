<template>
	<div ref="mainEl" class="home-view">
		<div class="editor-box">
			<h1>Ace Editor</h1>
			<ace-editor></ace-editor>
		</div>
		<div class="editor-box">
			<h1>Code Mirror</h1>
			<code-mirror-editor></code-mirror-editor>
		</div>
		<div class="editor-box">
			<h1>Monaco Editor</h1>
			<monaco-editor></monaco-editor>
		</div>
		<div class="editor-box">
			<h1>Syntax Highlighted</h1>
			<syntax-highlighted></syntax-highlighted>
		</div>
	</div>
</template>

<script>
import AceEditor from '../ace-editor/ace-editor-view.vue';
import CodeMirrorEditor from '../ace-editor/ace-editor-view.vue';
import MonacoEditor from '../monaco-editor/monaco-editor-view.vue';
import SyntaxHighlighted from '../syntax-highlighted/syntax-highlighted-view.vue';

export default {
	components: {
		AceEditor,
		CodeMirrorEditor,
		MonacoEditor,
		SyntaxHighlighted
	}
}
</script>

<style scoped>
.home-view {
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 10px;

	.editor-box {
		padding: 10px;

		h1 {
			font-size: 22px;
			margin: 0;
			margin-bottom: 10px;
			color: purple;
		}
	}
}
</style>