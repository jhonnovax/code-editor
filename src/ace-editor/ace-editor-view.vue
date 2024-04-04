<script>
import { htmlContent } from '../services/data-content';

export default {
	mounted() {
		var editor = ace.edit(this.$refs.editor);
		editor.setValue(htmlContent.join('\n'));
		editor.setTheme("ace/theme/monokaii");
		editor.session.setMode("ace/mode/html");
	}
}
</script>

<template>
	<div ref="mainEl" class="ace-editor">
		<div class="editor" ref="editor"></div>
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