<script>
import {EditorView, basicSetup} from "codemirror"
import { html } from "@codemirror/lang-html";

export default {
	mounted() {
		let editor = new EditorView({
			extensions: [basicSetup, html()],
			parent: this.$refs.editor
		});
	}
}
</script>

<template>
	<div ref="mainEl" class="code-mirror">
		<div ref="editor"></div>
	</div>
</template>

<style scoped>
.code-mirror {
	padding: 10px;
}
</style>