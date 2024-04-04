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
			new codeInput.plugins.Indent()
		];
		//codeInputTemplate = codeInput.templates.hljs(hljs, codeInputPlugins);
		const codeInputTemplate = codeInput.templates.prism(Prism, codeInputPlugins);
		codeInput.registerTemplate("syntax-highlighted", codeInputTemplate);
	}
}
</script>

<template>
	<div ref="mainEl" class="syntax-highlighted">
		<code-input class="line-numbers" language="HTML" :value="editorValue"></code-input>
	</div>
</template>

<style scoped>
.syntax-highlighted {
	padding: 10px;
}
</style>