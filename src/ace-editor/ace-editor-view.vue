<script>
import { htmlContent } from '../services/data-content';

export default {
	data: () => ({
		editor: null
	}),

	mounted() {
		this.editor = ace.edit(this.$refs.editor);
		this.editor.setValue(htmlContent.join('\n'));
		this.editor.setTheme("ace/theme/monokaii");
		this.editor.session.setMode("ace/mode/html");
	},

	methods: {
		getValue() {
			console.log('<<<Ace Editor Value>>>');
			console.log(this.editor.getValue());
		}
	}
}
</script>

<template>
	<div ref="mainEl" class="ace-editor">
		<div class="editor" ref="editor"></div>
		<button @click="getValue()">Get Value</button>
	</div>
</template>

<style scoped>
.ace-editor {
	padding: 10px;

	.editor {
		height: 300px;
	}
}
</style>