<script>
import * as monaco from 'monaco-editor';
import { htmlContent } from '../services/data-content';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

export default {
	mounted() {
		window.MonacoEnvironment = {
			getWorker: function (workerId, label) {
				switch (label) {
					case 'html':
						return new HtmlWorker()
					default:
						return new EditorWorker()
				}
			}
		};

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