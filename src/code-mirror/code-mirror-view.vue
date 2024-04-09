<script>
import {EditorView, basicSetup} from "codemirror"
import { html } from "@codemirror/lang-html";
import { htmlContent } from '../services/data-content';

export default {
	data: () => ({
		editor: null
	}),

	mounted() {
		this.editor = new EditorView({
			extensions: [basicSetup, html()],
			parent: this.$refs.editor,
			doc: htmlContent.join('\n')
		});
	},

	methods: {
		getValue() {
			console.log('<<<Code Mirror Value>>>');
			console.log(this.editor.state.doc.toString());
		}
	}
}
</script>

<template>
	<div ref="mainEl" class="code-mirror">
		<div ref="editor" class="editor"></div>
		<button @click="getValue()">Get Value</button>
	</div>
</template>

<style scoped>
.code-mirror {
	.editor {
		height: 300px;
	}
}
</style>