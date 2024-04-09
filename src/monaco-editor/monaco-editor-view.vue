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
	},

	methods: {
		getValue() {
			console.log('<<<Monaco Editor Value>>>');
			console.log(monaco.editor.getModels()[0].getValue());
		}
	}
}
</script>

<template>
	<div ref="mainEl" class="monaco-editor">
		<div class="editor" ref="editor"></div>
		<button @click="getValue()">Get Value</button>
	</div>
</template>

<style scoped>
.monaco-editor {
	.editor {
		height: 300px;
	} 
}
</style>