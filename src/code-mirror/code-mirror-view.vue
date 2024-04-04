<script>
import {EditorView, basicSetup} from "codemirror"
import { html } from "@codemirror/lang-html";
import { htmlContent } from '../services/data-content';

export default {
	mounted() {
		let editor = new EditorView({
			extensions: [basicSetup, html()],
			parent: this.$refs.editor,
			doc: htmlContent.join('\n')
		});
	}
}
</script>

<template>
	<div ref="mainEl" class="code-mirror">
		<div ref="editor" class="editor"></div>
	</div>
</template>

<style scoped>
.code-mirror {
	padding: 10px;

	.editor {
		height: 300px;
	}
}
</style>