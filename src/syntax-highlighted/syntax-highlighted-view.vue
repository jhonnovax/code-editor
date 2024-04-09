<script>
import { htmlContent } from '../services/data-content';

export default {

	data() {
		return {
			editorValue: htmlContent.join('\n')
		}
	},
	mounted() {
		const codeInputPlugins = [
			new codeInput.plugins.Indent(false, 2),
		];
		const codeInputTemplate = codeInput.templates.prism(Prism, codeInputPlugins);
		codeInput.registerTemplate("demo", codeInputTemplate);
	},

	methods: {
		getValue() {
			console.log('<<<Syntax Highlighted Value>>>');
			console.log(this.$refs.codeInputEl.value);
		}
	}
}
</script>

<template>
	<div ref="mainEl" class="syntax-highlighted">
		<code-input ref="codeInputEl" class="editor line-numbers" language="HTML">
			{{ editorValue }}
		</code-input>
		<button @click="getValue()">Get Value</button>
	</div>
</template>

<style scoped>
.syntax-highlighted {
	.editor {
		height: 300px;
	}
}
</style>